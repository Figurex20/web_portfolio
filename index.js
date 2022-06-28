import { canvas } from './src/canvas.js';

!(function () {
	canvas();
})();

const $form = document.querySelector('#form');

$form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const regexEmail =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
	if (regexEmail.test($form.email.value)) {
		const form = new FormData($form);
		const response = await fetch($form.action, {
			method: $form.method,
			body: form,
			headers: { Accept: 'application/json' },
		});
		if (response.ok) {
			$form.reset();
			swal.fire({
				icon: 'success',
				title: 'success',
				text: 'you email was successfully sent',
				footer:
					'<span style="color:red">I will contact you as soon as possible</span>',
				allowOutsideClick: true,
				allowEscapeKey: true,
				allowEnterKey: true,
				stopKeydownPropagation: false,
			});
		}
	} else {
		swal.fire({
			icon: 'error',
			title: 'email is not valid',
		});
	}
});

const $laboral = document.querySelector('#laboral');
const urlsCode = [
	'https://github.com/Figurex20/Maquetacion-Resposive',
	'https://github.com/Figurex20/animations',
	'https://github.com/Figurex20/Responsive-Design-with-SASS',
	'https://github.com/Figurex20/less',
	'https://github.com/Figurex20/DoomBasic',
	'https://github.com/Figurex20/eventos_agregar_img',
	'https://github.com/Figurex20/challenge_Oracle-1',
	'https://github.com/Figurex20/Responsive-Design-',
	'https://github.com/Figurex20/hook-platzi',
	'https://github.com/Figurex20/vanilla',
	'https://github.com/Figurex20/challengeonejuegoahorcado',
	'https://github.com/Figurex20/CURSO-INTRO-REACT',
	'https://github.com/Figurex20/challenge_Oracle-1_react',
];

const urlsPages = [
	'https://figurex20.github.io/Maquetacion-Resposive/',
	'https://figurex20.github.io/animations/',
	'https://figurex20.github.io/Responsive-Design-with-SASS/',
	'https://figurex20.github.io/less/',
	'https://figurex20.github.io/DoomBasic/',
	'https://figurex20.github.io/eventos_agregar_img/',
	'https://figurex20.github.io/challenge_Oracle-1/',
	'https://figurex20.github.io/Responsive-Design-/',
	'https://figurex20.github.io/hook-platzi/',
	'https://figurex20.github.io/vanilla/',
	'https://figurex20.github.io/challengeonejuegoahorcado/',
	'https://figurex20.github.io/CURSO-INTRO-REACT/',
	'https://figurex20.github.io/challenge_Oracle-1_react/',
];

const title = [
	'Responsive Layout',
	'animations',
	'Responsive Design with SASS',
	'Responsive Design with LESS',
	'DoomBasic',
	'Add img',
	'challenge Oracle 1',
	'Responsive Design',
	'hook platzi',
	'vanilla',
	'challenge game hangman',
	'INTRO REACT',
	'challenge Oracle-1 react',
];

const laboral = (tec) => {
	urlsPages.forEach((url, index) => {
		const sections = document.createElement('section');

		const divSection = document.createElement('div');
		divSection.classList.add('laboral-img');

		const img = document.createElement('img');
		img.src = `./utils/img${index}.png`;
		img.alt = `${urlsCode[index]}`;
		img.classList.add('laboral-imgimg');
		divSection.appendChild(img);
		sections.appendChild(divSection);

		const divContent = document.createElement('div');
		divContent.classList.add('laboral-content');

		const h1 = document.createElement('h1');
		h1.innerHTML = `${title[index]}`;
		const h2 = document.createElement('h2');
		h2.innerHTML = `${tec}`;

		const aDemo = document.createElement('a');
		const aRepository = document.createElement('a');
		aDemo.href = `${url}`;
		aDemo.innerHTML = 'see demo';
		aRepository.href = `${urlsCode[index]}`;
		aRepository.innerHTML = 'see repository';

		divContent.appendChild(h1);
		divContent.appendChild(h2);
		divContent.appendChild(aDemo);
		divContent.appendChild(aRepository);
		sections.appendChild(divContent);
		$laboral.appendChild(sections);
	});
};

laboral('HTML, CSS, JS');

// *form with validation */
// const $form = document.querySelector('#form');
// const $buttonMailto = document.querySelector('#turcazo');

// $form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	const form = new FormData($form);
// 	$buttonMailto.setAttribute(
// 		'href',
// 		`mailto:kenhamax20@gmail.com?
// 		subject=${form.get('name')}${form.get('topic')}
// 		&body=${form.get('message')}`
// 	);
// 	$buttonMailto.click();
// });
