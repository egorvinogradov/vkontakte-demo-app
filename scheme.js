var log = function(str){
	document.write(str + ' ');
};
var типаж = 'гопник';
var твой_возраст = 22;
var пол = 'м';
var средний_возраст_друзей_парней = 23;
var средний_возраст_друзей_девушек = 12;
var количество_языков = 7;
var процент_друзей_в_фб = 1;
var знаком_с = 'Дуров';
var процент_одноклассников = 0.01;
var процент_одногруппников = 0.7;
var процент_коллег = 0.7;
var процент_людей_с_образованием = 0.1;


if ( типаж == 'гопник' ) {
	log('Ты, бля, не поверишь');
}
else {
	log('А ты знаешь, что');
}

log('у тебя 120 друзей');

if ( пол == 'м' ) {
	log('из них 40% - девушки');
}
else {
	log('из них 58% - парни');
}

if ( пол == 'м' ) {
	if ( твой_возраст - средний_возраст_друзей_девушек >= 7 ) {
		log('при этом средний возраст девушек - 13 лет. Ты что, педобир?');
	}
	else if ( твой_средний_возраст - средний_возраст_друзей_девушек <= -7 ) {
		log('при этом средний возраст девушек - 30 лет. Любишь опытных?');
	}
}
else {
	if ( твой_возраст - средний_возраст_друзей_парней >= 7 ) {
		log('при этом средний возраст парней - 13 лет. Любишь мальчиков помладше?');
	}
	else if ( твой_средний_возраст - средний_возраст_друзей_парней <= -7 ) {
		log('при этом средний возраст парней - 13 лет. Любишь мальчиков постарше?');
	}
}

if ( количество_языков >= 5 ) {
	log('Всего твои друзья говорят на 10 языках. Самый популярный - английский.');
}

if ( процент_друзей_в_фб >= .07 ) {
	log('Помимо ВК 20% твоих друзей сидят в facebook и 10% в twitter.');
}

if ( знаком_с.toLowerCase() == 'дуров' ) {
	log('Ты знаком с Дуровым через 3-х друзей Ивана Петрова.');
}

if ( процент_одноклассников >= 0.6 || процент_одногруппников >= 0.6 || процент_коллег >= 0.6 ) {
	log('Среди твоих друзей');
	if ( процент_коллег >= 0.6 ) {
		log('60% коллег. Ты живешь одной работой.');
	}
	else if ( процент_одногруппников >= 0.6 ) {
		log('60% одногруппников. Универ - твоя стихия.');
	}
	else if ( процент_одноклассников >= 0.6 ) {
		log('60% одноклассников. Школа - твоя стихия.')
	}
}

if ( процент_людей_с_образованием > 0.6 ) {
	log('Среди твоих друзей 60% процентов людей с высшим образованием. У тебя правильный круг общения.');
}
else if ( процент_людей_с_образованием < 0.2 ) {
	log('Среди твоих друзей 20% процентов людей с высшим образованием. Пора менять круг общения.');
}

