// SLIDER
const productImages = document.querySelectorAll('.slider_images img');

const productImagesSlider = document.querySelector('.image_slider');

let activeImageSlide = 0;

productImages.forEach((img, i) => {
  img.addEventListener('click', () => {
    productImages[activeImageSlide].classList.remove('active');
    img.classList.add('active');
    activeImageSlide = i;
    productImagesSlider.style.backgroundImage = `url('${img.src}')`;
  });
});

// SELECT SIZE
const sizeBtns = document.querySelectorAll('.size_radio_button');
let activeBtn = 0;
sizeBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    sizeBtns[activeBtn].classList.remove('checked');
    activeBtn = i;
    btn.classList.add('checked');
  });
});
