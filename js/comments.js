let commentForm = document.querySelector('.comment__form');
let commentList = document.querySelector('.comments__list');
let commentField = document.querySelector('.comment__field');
let charCounter = document.querySelector('.char__counter');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user__comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
};

commentField.oninput = function () {
  charCounter.textContent = commentField.value.length;

  if (commentField.value.length > 150) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
  }
};

