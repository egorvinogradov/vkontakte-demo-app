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
var процент_друзей_разделяющих_интерес = 0.4;
var твои_жизненные_взгляды = 'свобода и честность';
var жизненные_взгляды_большинства = 'деньги';
var твои_политические_взгляды = 'либертрианство';
var политические_взгляды_большинства = 'консерватизм';
var процент_друзей_которым_нравится_тот_же_фильм = 0.2;
var твой_город = 'Москва';
var город_большинства = 'Москва';
var рассстояние_до_самого_удаленного_друга = 3000;
var количество_удаленных_друзей = 1;
var количество_друзей_с_высокой_совместимостью_на_ластфм = 3;
var трек_размещенный_друзьями_недавно = 'Psy - Gangnam style';
var количество_стран_где_ты_был_с_друзьями = 23;
var посты = new Array(140);
var посты_друзей = new Array(43);

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
	log('Среди твоих друзей меньше 20% процентов людей с высшим образованием. Пора менять круг общения.');
}

if ( процент_друзей_разделяющих_интерес >= 0.1 ) {
	log('20% процентов друзей разделяют твой интерес к фотографии, 15% - к сноуборду.');
}

if ( твои_жизненные_взгляды == жизненные_взгляды_большинства ) {
	log('Большиство твоих друзей как и ты выбирают деньги.');
}
else {
	log('Большиство твоих друзей выбирают деньги, но при этом 20% друзей поддерживают твой интерес к семье.');
}

if ( твои_политические_взгляды == политические_взгляды_большинства ) {
	log('Большиство твоих друзей как и ты выбирают либертрианство.');
}
else {
	log('Большиство твоих друзей выбирают консерватизм, но при этом 20% друзей поддерживают твой интерес к либертрианству.');
}

if ( процент_друзей_которым_нравится_тот_же_фильм >= 0.05 ) {
	log('15 друзьям, как и тебе, нравится фильм "Аватар".');
}

if ( твой_город == город_большинства ) {
	log('Большиство твоих друзей, как и ты, живет в Москве при этом 20% твоих друзей живет в Санкт-Петербурге');
}
else {
	log('Большиство твоих друзей живет в Санкт-Петербурге');	
}

if ( рассстояние_до_самого_удаленного_друга >= 2000 ) {
	if ( количество_удаленных_друзей > 1 ) {
		log('а 3 трое твоих друзей вообще из Новосибирска.');	
	}
	else {
		log('а один чувак вообще из Новосибирска.');	
	}
}

if ( количество_друзей_с_высокой_совместимостью_на_ластфм ) {
	log('У тебя ' + количество_друзей_с_высокой_совместимостью_на_ластфм + ' друзей с совместивмостью на last.fm более 90%.');
	log('Из них у Ивана Петрова, Васи Иванова и Пети Сидорова наиболее близкие с тобой музыкальные вкусы.');
}

if ( трек_размещенный_друзьями_недавно ) {
	log('Среди твоих друзей последнюю неделю популярна песня ' + трек_размещенный_друзьями_недавно + '.' );
}

if ( количество_стран_где_ты_был_с_друзьями >= 10 ) {
	log('Вместе с друзьями ты был в ' + количество_стран_где_ты_был_с_друзьями + ' странах мира.');
}

if ( посты.length ) {
	log('На твоей стене ' + посты.length + ' постов.');
	if ( посты_друзей.length ) {
		log('Из них друзья оставили ' + посты_друзей.length + '.');
		log('При этом ты перепостил 16 постов друзей и 30 постов из групп.');
	}
	log('Больше всего лайков и комментариев ты оставил на стене Маши Ивановой.');
	log('Твой самый популярный пост (http://vk.cc/346t4rvr) собрал 100 лайков, 50 перепостов и 30 комментариев.');
	log('На твоей стене 20% постов - это текст, 40% - фотографии, 20% - музыка и 20% - видео.');
	log('Самое популярное слово на твоей стене - "бля" (встретилось 65 раз).');
	log('У тебя на стене поставили 1200 лайков, сделали 500 перепостов и написали 1000 комментариев.');
	log('Твой рейтинг - 1250. Ты находишься на 105 месте среди всех пользователей приложения. Чтобы подняться на 50 мест, тебе нужно набрать 36 репостов, или 52 комментария, или 73 упоминания, или 93 лайка.');
	log('Больше всего тебя лайкают, репостят и коментируют Иван Петров, Вася Иванов и Петя Сидоров.');
}

log('Твоя самая популярная фотография (http://vk.cc/3g567v) набрала 93 лайка и 24 комментария.');
log('Больше всего у тебя фотографий с Иваном Сидоровым.');
log('Мы посчитали, что у тебя 25 фотографий, где ты отмечен и присутствуешь.');

log('Самая популярная шруппа среди тебя и твоих друзей - MDK (http://vk.cc/wefv6h).');
log('Больше всего новой музыки ты для себя открыл в группе E:\\music, например, Korn, Slipknot и SOAD.');




