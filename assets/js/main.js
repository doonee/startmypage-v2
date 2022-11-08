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
