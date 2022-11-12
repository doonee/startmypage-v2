var el = document.querySelectorAll(
  "body > section > div > div.col-12.col-lg-6.mt-4.mt-lg-0 > ul > li > i"
);
el.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);
    e.target.parentElement.style.fontWeight = "bold";
    showBookmarkModal();
  });
});
