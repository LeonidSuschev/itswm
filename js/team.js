window.addEventListener("load", function() {
  if (document.querySelector(".team-page") === null) return;

  const team = document.querySelector(".js-team");
  const arrow = team.querySelector(".arrow");

  const checkSizes = () => {
    if (document.body.clientWidth > 699) {
      desktopTeamViewer();
    } else {
      mobileTeamViewer();
    }
  };

  function desktopTeamViewer() {
    team.addEventListener("mouseover", e => {
      if (!e.target.closest(".team__member")) {
        return;
      }

      let el = e.target.closest(".team__member");
      let elId = el.getAttribute("id");
      let targetText = team.querySelector(`[aria-labelledby=${el.id}]`);

      [...team.querySelectorAll(`[aria-labelledby]`)].map(el => {
        el.classList.remove("visible");
      });

      targetText.classList.add("visible");

      let topPosition =
        el.offsetTop +
        el.querySelector(".team__member-name").offsetHeight / 2 +
        "px";

      arrow.setAttribute("style", `top: ${topPosition}`);
    });
  }

  function mobileTeamViewer() {
    let teamAcc = document.getElementsByClassName("team__member");

    for (let i = 0; i < teamAcc.length; i++) {
      teamAcc[i].addEventListener("click", function() {
        this.classList.toggle("is-active");
        let panel = this.querySelector(
          `[aria-labelledby=${this.getAttribute("id")}]`
        );
        panel.classList.toggle("visible");
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  checkSizes();
  window.addEventListener("resize", () => {
    checkSizes();
  });
});
