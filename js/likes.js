let heart = document.querySelector('.heart');
let heartView = document.querySelector('.heart i.fa-heart');
let likesNumber = document.querySelector('.likes__number');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  heart.classList.toggle('added');
  heartView.classList.toggle('fa-solid');
};
