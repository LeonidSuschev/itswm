const changeElementsTheme = (selector => {
  let observerArray = [];
  return {
    init: function() {
      Array.from(
        document.querySelectorAll("[data-theme-observer-margin]")
      ).forEach(item => {
        const ioObject = (function(i, observerMargin) {
          return new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                const { target, isIntersecting } = entry;
                isIntersecting &&
                  (target.dataset.theme === "dark"
                    ? i.classList.add("dark-theme")
                    : i.classList.remove("dark-theme"));
              });
            },
            {
              rootMargin: observerMargin
            }
          );
        })(item, item.dataset.themeObserverMargin);
        observerArray.push(ioObject);
      }),
        Array.from(document.querySelectorAll(selector)).forEach(item => {
          observerArray.forEach(t => {
            t.observe(item);
          });
        });
    },
    destroy: function() {
      observerArray.forEach(i => i.disconnect()),
        (t = []),
        Array.from(
          document.querySelectorAll("[data-theme-observer-margin]")
        ).forEach(i => {
          i.classList.remove("dark-theme");
        });
    }
  };
})("[data-section]");

window.addEventListener("load", () => {
  const body = document.body;
  const scrollContainer = document.querySelector(".ss-content");
  const scrollBar = document.querySelector(".ss-scroll");
  const sectionsArray = [...document.querySelectorAll("[data-section]")];
  let scrollBarThumbBg = document.createElement("span");
  let scrollBarThumb = scrollBar.cloneNode(true);

  scrollBarThumbBg.classList.add("scroll-bar-background");
  scrollBarThumb.classList.add("scrollbar-thumb", "dark-theme");
  scrollBarThumb.dataset.themeObserverMargin = "-55% 0% -45% 0%";

  sectionsArray.map((item, i) => {
    item.appendChild(scrollBarThumbBg.cloneNode(true));
  });

  scrollContainer.appendChild(scrollBarThumb);

  changeElementsTheme.init();

  const scrollEvent = () => {
    scrollBarThumb.style.top = getComputedStyle(scrollBar).top;
    scrollBarThumb.style.height = getComputedStyle(scrollBar).height;
  };

  scrollContainer.addEventListener("scroll", scrollEvent);
  window.addEventListener("resize", scrollEvent);
  window.addEventListener("mouseenter", scrollEvent);
});
