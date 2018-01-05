var filnavne = ["https://www.w3schools.com/w3images/workbench.jpg", "https://www.w3schools.com/w3images/coffee.jpg", "https://www.w3schools.com/w3images/sound.jpg"];
var index = 0;

document.addEventListener('DOMContentLoaded', () => { // content loaded
	opdater_billede();
	document.querySelector('#nextImg').addEventListener('click', () => {
		naeste_billede();
	});
	document.querySelector('#prevImg').addEventListener('click', () => {
		forrige_billede();
	});
}, false);

opdater_billede = () => {
	document.getElementById("slideImg").src=filnavne[index];
};

naeste_billede = () => {
	let maxArrayLen = filnavne.length - 1;
	index ++;
	if(index > maxArrayLen) {
		index = 0;
	}
	opdater_billede();
};

forrige_billede = () => {
	let maxArrayLen = filnavne.length - 1;
	index --;
	if(index < 0) {
		index = maxArrayLen;
	}
	opdater_billede();
};