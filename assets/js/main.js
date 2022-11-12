// Modal
const showBookmarkModal = (e) => {
  var groupModal = new bootstrap.Modal(document.getElementById("newModal"), {});
  document
    .getElementById("newModal")
    .classList.add("animate__animated", "animate__pulse");
  groupModal.show();
};
//showBookmarkModal();

window.onload = function () {};
