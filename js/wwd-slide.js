window.addEventListener("load", function() {
  if (document.querySelector(".wwd-slide") === null) return;
  if (window.matchMedia("(max-width: 699px)").matches) return;

  let lines = [],
    arrows = [];
  let slideListArray = [
    ...document.querySelectorAll(".wwd-slide .wwd-slide__list")
  ];

  const setLineArrowPosition = (elem, i) => {
    let tabTextElement = document.querySelector(`[aria-labelledby=${elem.id}]`);
    let tabTextsArray = [
      ...elem.closest(".wwd-slide").querySelectorAll(".wwd-slide__text")
    ];

    for (let k = 0; k < tabTextsArray.length; k++) {
      tabTextsArray[k].classList.remove("visible");
    }

    if (!elem.ariaSelected) {
      document.querySelectorAll(".wwd-slide__list-item").forEach((item, i) => {
        item.setAttribute("aria-selected", "false");
      });

      elem.setAttribute("aria-selected", "true");
    }

    tabTextElement.classList.add("visible");
    let paddingLink = getComputedStyle(elem).paddingTop.slice(0, -2);
    let topPosition =
      elem.offsetTop +
      paddingLink * 1 +
      (elem.offsetHeight - paddingLink * 2) / 2 +
      "px";

    lines[`line-${i}`].setAttribute("style", `opacity: 1; top: ${topPosition}`);
    arrows[`arrow-${i}`].setAttribute(
      "style",
      `opacity: 1; top: ${topPosition}`
    );
  };

  const tabMouseOverBehavior = (e, i) => {
    if (!e.target.classList.contains("wwd-slide__list-item")) return;

    let elem = e.target;
    setLineArrowPosition(elem, i);
  };

  slideListArray.map((slideList, i) => {
    lines.push(`line-${i}`);
    arrows.push(`arrow-${i}`);
    lines[`line-${i}`] = slideList.parentElement.querySelector(
      ".wwd-slide__list-line"
    );
    arrows[`arrow-${i}`] = slideList.parentElement.querySelector(
      ".wwd-slide__list-arrow"
    );

    setLineArrowPosition(
      [...slideList.querySelectorAll(".wwd-slide__list-item")][0],
      i
    );

    slideList.addEventListener("mouseover", e => tabMouseOverBehavior(e, i));
  });
});
