const WHITE_KEYS = [ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ];
const BLACK_KEYS = [ 's', 'd', 'g', 'h', 'j' ];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach((key) => {
	key.addEventListener('click', () => playNote(key));
});
