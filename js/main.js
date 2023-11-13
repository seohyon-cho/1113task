const btns = document.querySelectorAll('li');
const box = document.querySelector('.box');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		// 버튼 활성화 처리
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');
		// 박스 색상
		box.style.backgroundColor = e.currentTarget.innerText;
	});
});
