const checkbox = document.querySelector('.toggle');
const priceMonth = document.querySelectorAll('.price-month');
const priceYear = document.querySelectorAll('.price-year');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
      priceYear.forEach(price => price.classList.add('hidden'));
      priceMonth.forEach(price => price.classList.remove('hidden'));
  } else {
      priceYear.forEach(price => price.classList.remove('hidden'));
      priceMonth.forEach(price => price.classList.add('hidden'));
  }
});
