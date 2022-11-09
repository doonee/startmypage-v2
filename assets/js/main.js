// Modal
const showBookmarkModal = (e) => {
  var groupModal = new bootstrap.Modal(document.getElementById("newModal"), {});
  document
    .getElementById("newModal")
    .classList.add("animate__animated", "animate__pulse");
  groupModal.show();
};
//showBookmarkModal();

window.onload = function () {
  // Masonry
  var elem = document.querySelector(".grid");
  var msnry = new Masonry(elem, {
    gutter: 10,
    itemSelector: ".grid-item",
    fitWidth: true, //중앙정렬!!
    horizontalOrder: true, //순서지킴
  });

  // grab the element
  var el = document.querySelectorAll(".grid > .grid-item > p");
  el.forEach((el) => {
    el.addEventListener("long-press", function (e) {
      // stop the event from bubbling up
      // 마우스 오른쪽 메뉴 막을려면 body에 oncontextmenu="return false" 추가 필요!
      e.preventDefault();
      console.log(e.target);
      showBookmarkModal();
    });
  });

  // 마우스 드래그, 우클릭 금지
  // body 에도 추가 해줘야 함.
  document.oncontextmenu = function () {
    return false;
  };
};
