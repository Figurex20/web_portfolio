import { canvas } from './src/canvas.js';

!(function () {
	canvas();
})();

const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#turcazo');

$form.addEventListener('submit', (e) => {
	e.preventDefault();
	const form = new FormData($form);
	$buttonMailto.setAttribute(
		'href',
		`mailto:kenhamax20@gmail.com?
		subject=${form.get('name')}${form.get('topic')}
		&body=${form.get('message')}`
	);
	$buttonMailto.click();
});
