// Modal
const showBookmarkModal = (e) => {
    var groupModal = new bootstrap.Modal(
        document.getElementById("newModal"),
        {}
    );
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
    var el = document.querySelectorAll(".grid > .grid-item > p > i");
    el.forEach((el) => {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(e.target);
            e.target.parentElement.style.fontWeight = "bold";
            showBookmarkModal();
        });
    });
};
