const btns = document.querySelectorAll('li');
const box = document.querySelector('.box');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');
	});
});
