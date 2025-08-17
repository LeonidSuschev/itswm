import "https://unpkg.com/sweet-scroll/sweet-scroll.min.js";

// console.log(window.navigator.userLanguage || window.navigator.languages);

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".home-page") === null) return;

  let img1 = document.querySelector(
    ".slide-people .swiper-slide__img-container img"
  );
  let img2 = document.querySelector(
    ".slide-result .swiper-slide__img-container img"
  );
  let el1rect, el2rect, el1x, el1y, el2x, el2y;

  // set line width in main swiper
  setLineWidthBetweenSlideImages();
  // what we do section - arrow behavior on link hover
  // hoverEffectArrow();

  window.addEventListener("resize", function() {
    console.log("fdfd");
    setLineWidthBetweenSlideImages();
  });

  function getDistanceBetweenSlideImages(el1, el2) {
    el1rect = el1.getBoundingClientRect();
    el2rect = el2.getBoundingClientRect();
    el1x = el1rect.left + el1rect.width / 2;
    el1y = el1rect.top + el1rect.height / 2;
    el2x = el2rect.left + el2rect.width / 4;
    el2y = el2rect.top + el2rect.height / 2;

    // calculate the distance using the Pythagorean Theorem (a^2 + b^2 = c^2)
    let distanceSquared = Math.pow(el1x - el2x, 2) + Math.pow(el1y - el2y, 2);
    return Math.sqrt(distanceSquared);
  }

  function setLineWidthBetweenSlideImages() {
    document.documentElement.style.setProperty(
      "--line-distance",
      getDistanceBetweenSlideImages(img1, img2) + "px"
    );
  }
});
