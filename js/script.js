'use strict';

const popupContainer = document.querySelector('.popup-container');
const box = document.querySelectorAll('.box');
const previewBox = document.querySelectorAll('.preview');
const close = document.querySelectorAll('.fa-times');

box.forEach((item) => {
	item.addEventListener('click', () => {
		popupContainer.style.display = 'flex';

		const product = item.getAttribute('data-name');

		previewBox.forEach((preview) => {
			if (preview.getAttribute('data-target') === product) {
				preview.classList.add('active');
			}
		});
	});
});

close.forEach((item) => {
	item.addEventListener('click', () => {
		popupContainer.style.display = 'none';
		
		previewBox.forEach((preview) => {
			preview.classList.remove('active');
		});
	});
});
