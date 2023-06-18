const productContainer = [...document.querySelectorAll('.product_container')];
const nextBtn = [...document.querySelectorAll('.next_btn')];
const prevBtn = [...document.querySelectorAll('.prev_btn')];

productContainer.forEach((item, i) => {
  //PEGA A LARGURA TOTAL DO CONTAINER PARA P SCROLL
  let containerDimenstions = item.getBoundingClientRect().width;

  nextBtn[i].addEventListener('click', () => {
    console.log(i);
    item.scrollLeft += containerDimenstions;
  });

  prevBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerDimenstions;
  });
});
