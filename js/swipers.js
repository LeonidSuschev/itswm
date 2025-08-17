import Swiper from "https://unpkg.com/swiper@9.4.1/swiper-bundle.esm.browser.min.js";

window.addEventListener("load", () => {
  if (document.querySelector(".home-page") !== null) {
    let mainSwiper = new Swiper(".main-swiper__container", {
      direction: "horizontal",
      loop: true,
      speed: 600,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      navigation: {
        nextEl: ".swiper-button-next"
      }
    });

    let timelineSwiper = new Swiper(".timeline__swiper", {
      direction: "horizontal",
      centeredSlides: true,
      centeredSlidesBounds: true,
      speed: 600,
      slidesPerView: 1.65,
      spaceBetween: window.innerWidth * 0.171875,
      grabCursor: true,
      navigation: {
        prevEl: ".timeline__button-prev",
        nextEl: ".timeline__button-next"
      },
      scrollbar: {
        el: ".timeline__scrollbar",
        hide: false,
        dragSize: 20,
        dragClass: "timeline__scrollbar-drag"
      },
      breakpoints: {
        700: {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false
        },
        1190: {
          slidesPerView: 3,
          spaceBetween: 50,
          centeredSlides: false
        }
      }
    });
  }

  if (document.querySelector(".alt-invest-page") !== null) {
    const altInvestSwiper = new Swiper(
      ".alt-invest-page .swiper-container:not(.full-height)",
      {
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        autoHeight: true,
        pagination: {
          el: ".text-swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".text-swiper-button-next",
          prevEl: ".text-swiper-button-prev"
        },
        breakpoints: {
          700: {
            fadeEffect: {
              crossFade: false
            },
            autoHeight: false
          }
        }
      }
    );
    const altInvestSwiper2 = new Swiper(
      ".alt-invest-page .swiper-container.full-height",
      {
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".full-height .text-swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".full-height .text-swiper-button-next",
          prevEl: ".full-height .text-swiper-button-prev"
        },
        breakpoints: {
          700: {
            fadeEffect: {
              crossFade: false
            }
          }
        }
      }
    );
  }

  if (document.querySelector(".maintenance-page") !== null) {
    const maintenanceTextTaxesSwiper = new Swiper("#taxes .text-swiper", {
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: "#taxes .text-swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: "#taxes .text-swiper-button-next",
        prevEl: "#taxes .text-swiper-button-prev"
      }
    });

    const maintenanceTextLegalSupportSwiper = new Swiper(
      "#legal-support .text-swiper",
      {
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: "#legal-support .text-swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: "#legal-support .text-swiper-button-next",
          prevEl: "#legal-support .text-swiper-button-prev"
        }
      }
    );
  }

  if (document.querySelector(".succession-page") !== null) {
    const successionSwiper = new Swiper(
      ".succession-page .swiper-container:not(.full-height)",
      {
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        autoHeight: true,
        pagination: {
          el: ".text-swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".text-swiper-button-next",
          prevEl: ".text-swiper-button-prev"
        },
        breakpoints: {
          700: {
            fadeEffect: {
              crossFade: false
            },
            autoHeight: false
          }
        }
      }
    );
    const successionSwiper2 = new Swiper(
      ".succession-page .swiper-container.full-height",
      {
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".full-height .text-swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".full-height .text-swiper-button-next",
          prevEl: ".full-height .text-swiper-button-prev"
        },
        breakpoints: {
          700: {
            fadeEffect: {
              crossFade: false
            }
          }
        }
      }
    );
  }

  if (document.querySelector(".team-page") !== null) {
    let partnersSwiper = new Swiper("#partners .swiper-container", {
      direction: "horizontal",
      pagination: {
        el: ".text-swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".text-swiper-button-next",
        prevEl: ".text-swiper-button-prev"
      }
    });
  }
});
