var log = function(str){
	document.write(str + ' ');
};
var типаж = 'хипстер';
var твой_возраст = 22;
var пол = 'м';
var средний_возраст_друзей_парней = 23;
var средний_возраст_друзей_девушек = 12;


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
		log('при этом средний возраст парней - 13 лет. Любишь мальчиков постарше?');
	}
	else if ( твой_средний_возраст - средний_возраст_друзей_парней <= -7 ) {
		log('при этом средний возраст парней - 13 лет. Любишь мальчиков помладше?');
	}
}

