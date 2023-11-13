const btns = document.querySelectorAll('li');
const box = document.querySelector('.box');

// 이벤트문 + 활성화함수 + 박스색상 변경함수로 분리해서 구현

// 활성화 함수
function activation(btns, idx) {
	btns.forEach((btn) => btn.classList.remove('on'));
	btns[idx].classList.add('on');
}
// 박스색상 변경함수
function boxColor(btns, idx) {
	box.style.backgroundColor = btns[idx].innerText;
}
// 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(btns, idx);
		boxColor(btns, idx);
	});
});
