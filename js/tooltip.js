let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close__button');
let tooltipButtons = document.querySelectorAll('.tooltip__button');
let tooltipText = document.querySelector('.tooltip__text');


closeButton.onclick = function () {
  tooltip.classList.remove('opened');
};

for (let tooltipButton of tooltipButtons) {
  tooltipButton.onclick = function () {
    tooltipText.textContent = tooltipButton.dataset.tooltipText;
    tooltip.classList.add('opened');
  };
}