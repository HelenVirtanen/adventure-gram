let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme__button');
themeButton.onclick = function () {
  page.classList.toggle('light__theme');
  page.classList.toggle('dark__theme');
};
