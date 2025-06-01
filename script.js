const images = document.querySelectorAll('.gallery-thumbnail-img');
const imageModalElement = document.getElementById('imageModal');
const imageModal = new bootstrap.Modal(imageModalElement);
const modalImage = document.getElementById('modalImage');

images.forEach(img => {
	img.addEventListener('click', () => {
		modalImage.src = img.src;
		modalImage.alt = img.alt;
		imageModal.show();
	});
});

modalImage.addEventListener('click', () => {
	imageModal.hide();
});

imageModalElement.addEventListener('show.bs.modal', () => {
	modalImage.classList.add('animated-zoomIn-effect');
});

imageModalElement.addEventListener('hidden.bs.modal', () => {
	modalImage.classList.remove('animated-zoomIn-effect');
});