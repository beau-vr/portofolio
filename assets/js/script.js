const gra = (min, max) => {
    return Math.random() * (max - min) + min;
}
const init = () => {
	let items = document.querySelectorAll('section');
	for (let i = 0; i < items.length; i++){
		items[i].style.background = randomColor({luminosity: 'light'});
	}
	cssScrollSnapPolyfill()
}
init();