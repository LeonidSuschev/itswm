window.addEventListener("load", function() {
  if (document.body.clientWidth > 699) return;
  document.querySelectorAll(".wwd-slide").forEach(slide => {
    const container = slide.querySelector(".wwd-slide__img-container");
    if (!container) return;
    const line = slide.querySelector(".wwd-slide__list-line");
    const arrow = slide.querySelector(".wwd-slide__list-arrow");
    if (line) line.style.display = "none";
    if (arrow) arrow.style.display = "none";
    slide.querySelectorAll(".wwd-slide__list-item").forEach(item => {
      const panel = container.querySelector(
        `.wwd-slide__text[aria-labelledby=${item.id}]`
      );
      if (!panel) return;
      panel.classList.remove("visible");
      panel.style.maxHeight = null;
      item.after(panel);
      item.addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toggle("is-active");
        panel.classList.toggle("visible");
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  });
});
