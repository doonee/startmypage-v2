// Masonry
var elem = document.querySelector(".grid");
var msnry = new Masonry(elem, {
  //options
  //columnWidth: 10,
  //   columnWidth: 50,
  gutter: 10,
  itemSelector: ".grid-item",
  fitWidth: true, //중앙정렬!!
  horizontalOrder: true, //순서지킴
  //transitionDuration: "0.2s",
});

// Modal
const showBookmarkModal = () => {
  var groupModal = new bootstrap.Modal(document.getElementById("newModal"), {});
  document
    .getElementById("newModal")
    .classList.add("animate__animated", "animate__pulse");
  groupModal.show();
};
//showBookmarkModal();
