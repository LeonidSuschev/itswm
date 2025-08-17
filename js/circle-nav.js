document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector(".js-nav-circle") === null) return;

  const HOVER_CLASS = "is-hovered";
  const navCircleItems = document.querySelector(".js-nav-circle");

  navCircleItems.addEventListener("mouseover", addHoverStateFromCircleNav);
  navCircleItems.addEventListener("mouseout", removeHoverStateFromCircleNav);

  function addHoverStateFromCircleNav(e) {
    if (!e.target.closest(".js-circle-text")) return;
    e.target
      .closest(".js-circle-text")
      .previousElementSibling.classList.add(HOVER_CLASS);
  }

  function removeHoverStateFromCircleNav(e) {
    if (!e.target.closest(".js-circle-text")) return;
    e.target
      .closest(".js-circle-text")
      .previousElementSibling.classList.remove(HOVER_CLASS);
  }
});
