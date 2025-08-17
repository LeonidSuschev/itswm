const HOVER_CLASS = "is-hovered";
const MENU_SHOW_CLASS = "menu__secondary-list--show";
const LINK_ACTIVE_CLASS = "link__arrow--active";
const LINK_CURRENT_CLASS = "is-current";

const resetActiveStyles = () => {
  const activeBlock = document.querySelector(`.${MENU_SHOW_CLASS}`);
  const activeLink = document.querySelector(`.${LINK_ACTIVE_CLASS}`);
  const currentLink = document.querySelector(`.${LINK_CURRENT_CLASS}`);

  activeBlock && activeBlock.classList.remove(MENU_SHOW_CLASS);
  activeLink && activeLink.classList.remove(LINK_ACTIVE_CLASS);
  currentLink && currentLink.classList.remove(LINK_CURRENT_CLASS);
};

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body;
  const button = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");
  const logoHeader = document.querySelector(".header .header__link");

  const checkSizes = () => {
    if (document.body.clientWidth > 699) {
      desktopMenuOpener();
    } else {
      mobileMenuOpener();
    }
  };

  const toggleMenu = () => {
    button.classList.toggle("burger-menu--active");
    menu.classList.toggle("menu--active");
    if (menu.classList.contains("menu--active")) {
      document.documentElement.classList.add("is-menu-opened");
    } else {
      document.documentElement.classList.remove("is-menu-opened");
    }
    if (!menu.classList.contains("menu--active")) {
      resetActiveStyles();
      handleCurrentPage();
    }
  };

  const keydownHandler = e => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      toggleMenu();
    }
  };

  const primaryLinks = [...document.querySelectorAll(".js-menu-primary-link")];
  const linksListArray = [
    ...document.querySelectorAll(".secondary-list__item")
  ];

  const linkHandler = link => {
    const activeLink = document.querySelector(".link__arrow--active");
    const activeBlock = document.querySelector(`.${MENU_SHOW_CLASS}`);
    const parentList = link.parentNode;

    activeLink && activeLink.classList.remove(LINK_ACTIVE_CLASS);
    link.querySelector(".link__arrow").classList.add(LINK_ACTIVE_CLASS);

    activeBlock && activeBlock.classList.remove(MENU_SHOW_CLASS);

    linksListArray.map(item => {
      item.classList.remove(HOVER_CLASS);
    });

    parentList.querySelector(".menu__secondary-list") &&
      parentList
        .querySelector(".menu__secondary-list")
        .classList.add(MENU_SHOW_CLASS);

    [...parentList.querySelectorAll(".secondary-list__item")][0].classList.add(
      "is-hovered"
    );
  };

  const setVisibleMenuByPrimaryBlock = selector => {
    let primaryBlock = document.querySelector(selector);
    primaryBlock
      .querySelector(".secondary-list")
      .classList.add(MENU_SHOW_CLASS);
    primaryBlock
      .querySelector(".secondary-list__item")
      .classList.add(HOVER_CLASS);
    primaryBlock.querySelector(".link__arrow").classList.add(LINK_ACTIVE_CLASS);
  };

  const checkPrimaryLink = (checkLink, selector) => {
    let pageLink = window.location.href;

    if (!pageLink.includes(checkLink)) return;

    setVisibleMenuByPrimaryBlock(selector);
    return;
  };

  const moveArrow = (targetEl, arrow, leftOffset = 0) => {
    if (targetEl == undefined) {
      return;
    }
    let topPosition = targetEl.offsetTop + targetEl.offsetHeight / 2 + "px";
    arrow.setAttribute("style", `top: ${topPosition}; left: ${leftOffset}`);
  };

  const linksListHandler = e => {
    linksListArray.map(item => {
      item.classList.remove(HOVER_CLASS);
    });
    e.target.classList.add(HOVER_CLASS);
    e.target.addEventListener("mouseover", event => {
      let el = event.target;
      let link, offset;
      if (el.closest(".menu__tertiary-link")) {
        link = el.closest(".menu__tertiary-link");
        offset = 0;
      }
      if (el.closest(".menu__quaternary-link")) {
        link = el.closest(".menu__quaternary-link");
        offset = "6%";
      }
      moveArrow(link, e.target.querySelector(".menu__arrow"), offset);
    });
  };

  const handleCurrentPage = () => {
    let pageLink = window.location.href;
    let currentPageLink;

    if (pageLink.includes("insights")) {
      return;
    }

    if (!pageLink.includes("pages/")) {
      if (document.body.classList.contains("home-page")) {
        setVisibleMenuByPrimaryBlock(".js-home-page-link");
      }
      checkPrimaryLink("contacts.html", ".js-contacts-link");
      return;
    }

    if (!pageLink.includes("ru/")) {
      // get 4th string - it's current html page on EN site
      currentPageLink = pageLink.split("/")[4];
    } else {
      currentPageLink = pageLink.split("/")[5];
    }
    if (currentPageLink && currentPageLink.includes("#")) {
      currentPageLink = currentPageLink.split("#")[0];
    }

    if (menu.querySelectorAll(`[href*='${currentPageLink}']`) === null) return;

    let currentLink = [
      ...menu.querySelectorAll(
        `.menu__tertiary-link[href*='${currentPageLink}']`
      )
    ][0];
    let linkContainer = currentLink.closest(".secondary-list__item");

    currentLink.classList.add("is-current");
    currentLink.closest(".secondary-list").classList.add(MENU_SHOW_CLASS);

    currentLink
      .closest(".primary-list__item")
      .querySelector(".menu__primary-link .link__arrow")
      .classList.add(LINK_ACTIVE_CLASS);

    linkContainer.classList.add(HOVER_CLASS);

    moveArrow(currentLink, linkContainer.querySelector(".menu__arrow"));
  };

  function desktopMenuOpener() {
    handleCurrentPage();

    primaryLinks.forEach(link =>
      link.addEventListener("mouseover", () => linkHandler(link))
    );
    linksListArray.forEach(linksList => {
      linksList.addEventListener("mouseenter", linksListHandler);
    });
  }

  function mobileMenuOpener() {
    let menuAcc = document.getElementsByClassName("js-menu-primary-link");

    for (let i = 0; i < menuAcc.length; i++) {
      menuAcc[i].addEventListener("click", function(e) {
        this.classList.toggle("is-active");
        let panel = this.nextElementSibling;

        panel.classList.toggle("is-visible");
        if (panel.style.height) {
          panel.style.height = null;
        } else {
          panel.style.height = panel.scrollHeight + "px";
        }

        let menuAcc2 = panel.getElementsByClassName("secondary-list__item");
        for (let i = 0; i < menuAcc2.length; i++) {
          menuAcc2[i].addEventListener("click", function(e) {
            if (this.querySelector(".menu__secondary-link") == null) return;

            this.classList.toggle("is-active");
            let panel2 = this.querySelector(".menu__tertiary-list");

            panel2.classList.toggle("is-visible");
            if (panel2.style.height) {
              panel.style.height =
                panel.scrollHeight - panel2.scrollHeight + "px";
              panel2.style.height = null;
            } else {
              panel.style.height =
                panel.scrollHeight + panel2.scrollHeight + "px";
              panel2.style.height = panel2.scrollHeight + "px";
            }
          });
        }
      });
    }
  }

  checkSizes();

  button.addEventListener("click", toggleMenu);
  button.addEventListener("keydown", keydownHandler);

  menu.addEventListener("click", e => {
    if (!e.target.href) return;
    if (
      !window.location.href.split("#")[0].includes(e.target.href.split("#")[0])
    ) {
      return;
    }
    button.classList.remove("burger-menu--active");
    menu.classList.remove("menu--active");
    resetActiveStyles();
    handleCurrentPage();
  });

  window.addEventListener("resize", () => {
    resetActiveStyles();
    handleCurrentPage();
    checkSizes();
  });
});
