var utils = {
	getEl: function(selector){
		var els;
		try {
			els = document.querySelectorAll(selector);
		}
		catch (e) {}
		if ( els.length && els.length === 1 ) {
			els = els[0];
		}
		return els;
	},
	proxy: function(func, context){
		return function(){
			func && func.apply(context || this, arguments);
		}
	},
	each: function(collection, func, context){
		return Array.prototype.forEach.call(collection, func, context);
	}
};


var App = function(){
	/** @constructor */
};

App.prototype = {
	settings: {
		friendFields: [
			'uid',
			'first_name',
			'last_name',
			'nickname',
			'sex',
			'bdate',
			'city',
			'country',
			'timezone',
			'education'
			// 'photo',
			// 'photo_medium',
			// 'photo_big',
			// 'domain',
			// 'has_mobile',
			// 'rate',
			// 'contacts'
		],
		friendFieldsTramsfomer: {
			uid: {
				name: 'ID пользователя'
			},
			first_name: {
				name: 'Имя'
			},
			last_name: {
				name: 'Фамилия'
			},
			bdate: {
				name: 'Дата рождения'
			},
			sex: {
				name: 'Пол',
				getValue: function(raw){
					return raw === 1
						? 'женский'
						: raw === 2
							? 'мужской'
							: 'не указано';
				}
			},
			city: {
				name: 'Город',
				getValue: function(raw){
					return raw;
				}
			},
			country: {
				name: 'Страна',
				getValue: function(raw){
					return raw;
				}
			},
			online: {
				name: 'Онлайн',
				getValue: function(raw){
					return raw ? 'да' : 'нет';
				}
			},
			lists: {
				name: 'Списки друзей'
			},
			screen_name: {
				name: 'Короткое имя'
			},
		}
	},
	initialize: function(){
		this.initializeConsole('#console_textarea');
		VK.init(utils.proxy(this.initializeApp, this));
	},
	initializeApp: function(){
		VK.api('getUserSettings', utils.proxy(function(data){
			this.outputData(data);
			if ( data.response ) {
				if ( !( data.response & 2 ) ) {
					VK.callMethod('showSettingsBox', 2);
				}
				this.initializeInput();
				this.initializeAllFriendsButton();
			}
			else {
				console.log('Can\'t get user settings', data);
			}
		}, this));
	},
	initializeInput: function(){
		utils.getEl('#user_button').onclick = utils.proxy(function(event){
			var userId = utils.getEl('#user_id').value;
			if ( userId ) {
				this.callApi({
					method: 'friends.get',
					data: {
						uid: userId,
						fields: this.settings.friendFields
					},
					success: utils.proxy(function(data){
						this.outputData(data);
						this.renderFriendList(
							this.humanizeFriendList(data),
							utils.getEl('.all-friends')
						);
					}, this),
					error: utils.proxy(function(e){
						console.error('Can\'t get user info by uid', e);
					}, this)
				});
			}
		}, this)
	},
	initializeAllFriendsButton: function(){
		utils.getEl('#get_all_friends').onclick = utils.proxy(function(event){
			this.getAllFriends(utils.proxy(function(friends){
				this.friends = friends;
				this.renderFriendList(
					this.humanizeFriendList(friends),
					utils.getEl('.all-friends')
				);
				this.outputData('Friends', friends);
			}, this));
		}, this);
	},
	callApi: function(params){
		if ( params.method ) {
			return VK.api(params.method, params.data, function(data){
				if ( data.error ) {
					params.error && params.error(data);
				}
				else {
					params.success && params.success(data.response);
				}
			});
		}
	},
	getAllFriends: function(callback){
		this.callApi({
			method: 'friends.get',
			data: {
				fields: this.settings.friendFields
			},
			success: callback,
			error: utils.proxy(function(e){
				console.error('Can\'t get all friends', e);
			}, this)
		});
	},
	initializeConsole: function(selector){
		if ( selector ) {
			var el = utils.getEl(selector);
		}
		if ( el ) {
			el.onkeypress = function(event){
				if ( event.keyCode === 13 && !event.shiftKey && el.value ) {
					eval(el.value);
					return false;
				}
			};
		}
	},
	humanizeFriendList: function(friends){
		var config = this.settings.friendFieldsTramsfomer;
		return friends.slice().map(function(friend){
			var humanized = {};
			for ( var prop in friend ) {
				var name = prop;
				var value = friend[prop];
				if ( config[prop] ) {
					var name = config[prop].name;
					var value = config[prop].getValue
						? config[prop].getValue(friend[prop])
						: friend[prop];
				}
				humanized[name] = value;
			}
			return humanized;
		}, this);
	},
	renderFriendList: function(friends, container){
		var html = friends.map(function(friend){
			var friendTableHtml = [];
			for ( var prop in friend ) {
				friendTableHtml.push(
					'<tr>' +
					'<td>' + prop + '</td>' +
					'<td>' + friend[prop] + '</td>' +
					'</tr>'
				);
			}
			friendTableHtml.unshift('<div class="friend-table-label">Friend:</div><table class="friend">');
			friendTableHtml.push('</table>');
			return friendTableHtml.join('\n');
		}, this).join('\n');
		container.innerHTML = html;
	},
	outputData: function(){
		var args = Array.prototype.slice.call(arguments);
		Array.prototype.unshift.call(args, '[' + new Date() + '] VK DEMO APP:');
		console.log.apply(console, args);
		utils.getEl('#out_textarea').value = JSON.stringify(arguments);
	}
};

var vkDemo = new App();
vkDemo.initialize();




var table = Array.prototype.map.call(
	document.querySelectorAll('.wk_sub_header'),
	function(el){
		var html =
			'<tr>' +
			'<td>' + el.innerHTML + '</td>' +
			'<td>' + el.nextSibling.nodeValue + '</td>' +
			'</tr>';
		return html;
	}
);

table.unshift('<table>');
table.push('</table>');
table.join('\n');

