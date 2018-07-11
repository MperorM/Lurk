var replyButtons = document.getElementsByClassName('reply-button login-required');
var commentField = document.getElementsByClassName('usertext cloneable warn-on-unload');

for (var i = 0; i < replyButtons.length; i++) {
  replyButtons[i].style.display = "none";
}

for (var i = 0; i < commentField.length; i++) {
    commentField[i].style.display = "none";
}
