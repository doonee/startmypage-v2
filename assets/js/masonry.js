window.onload = function () {
  // Masonry
  if (Masonry !== null) {
    var elem = document.querySelector(".grid");
    var msnry = new Masonry(elem, {
      gutter: 10, // margin right 여백, margin-bottom:10 이랑 같이 사용해야 이쁨.
      itemSelector: ".grid-item",
      fitWidth: true, //중앙정렬!!
      horizontalOrder: true, //순서지킴
      // percentPosition: true, // 사용하면 브레이크 포인트에서 깨지는 현상.
    });

    // grab the element
    var el = document.querySelectorAll(".grid > .grid-item > p > i");
    el.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(e.target);
        e.target.parentElement.style.fontWeight = "bold";
        showBookmarkModal();
      });
    });
  }
};
