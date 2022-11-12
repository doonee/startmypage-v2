// Modal
const showBookmarkModal = (e) => {
  var groupModal = new bootstrap.Modal(document.getElementById("newModal"), {});
  document
    .getElementById("newModal")
    .classList.add("animate__animated", "animate__pulse");
  groupModal.show();
};

// private policy
const showPrivatePolicy = () => {
  document.querySelector("#btn-msg").innerText =
    "StartMypage 앱은 어떠한 개인정보도 수집하지 않습니다.";
};
window.onload = function () {};
