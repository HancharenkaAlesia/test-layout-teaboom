const productData = {
  100: {
    article: '01306',
    price: '326,40 ₽',
    oldPrice: '349,20 ₽',
  },
  500: {
    article: '01307',
    price: '1 432 ₽',
    oldPrice: '1 646 ₽',
  },
  1000: {
    article: '01308',
    price: '2 064 ₽',
    oldPrice: '2 592 ₽',
  },
  5000: {
    article: '01309',
    price: '6 320 ₽',
    oldPrice: '8 710 ₽',
  },
};

const options = document.querySelectorAll('.product__option');
const article = document.querySelector('#product-article');
const price = document.querySelector('#product-price');
const oldPrice = document.querySelector('#product-old-price');

options.forEach((option) => {
  option.addEventListener('click', () => {
    const weight = option.dataset.weight;
    const product = productData[weight];

    options.forEach((item) => {
      item.classList.remove('is-active');
    });

    option.classList.add('is-active');

    article.textContent = product.article;
    price.textContent = product.price;
    oldPrice.textContent = product.oldPrice;
  });
});