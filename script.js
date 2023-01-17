/////////////////////////////// - header contacts
const activeTextEmailHeader = document.querySelector(
  ".img-header-contacts-email"
);
const activeTextNumberHeader = document.querySelector(
  ".img-header-contacts-number"
);
const activeTextLocationHeader = document.querySelector(
  ".img-header-contacts-location"
);
const activeEmail = document.querySelector("#header-contacts-1");
const activeNumber = document.querySelector("#header-contacts-2");
const activeLocation = document.querySelector("#header-contacts-3");

activeTextEmailHeader.addEventListener("click", () => {
  activeEmail.classList.toggle("activeBlock");
});
activeTextNumberHeader.addEventListener("click", () => {
  activeNumber.classList.toggle("activeBlock");
});
activeTextLocationHeader.addEventListener("click", () => {
  activeLocation.classList.toggle("activeBlock");
});
document.addEventListener("click", (e) => {
  if (e.target !== activeTextEmailHeader) {
    activeEmail.classList.remove("activeBlock");
  }
});
document.addEventListener("click", (e) => {
  if (e.target !== activeTextLocationHeader) {
    activeLocation.classList.remove("activeBlock");
  }
});
document.addEventListener("click", (e) => {
  if (e.target !== activeTextNumberHeader) {
    activeNumber.classList.remove("activeBlock");
  }
});
////////////////////////////// - Change lang
document.querySelectorAll(".change-lang").forEach((changeLang) => {
  const changeLangBtn = changeLang.querySelector(".change-lang-btn");
  const changeLangList = changeLang.querySelector(".change-lang-list");
  const changeLangItem = changeLang.querySelectorAll(".change-lang-item");
  const changeLangInput = changeLang.querySelector(".change-lang-input");

  const activeBtnLang = () => {
    changeLangBtn.classList.toggle("active");
    changeLangList.classList.toggle("active");
  };
  const hideBtnLang = () => {
    changeLangBtn.classList.remove("active");
    changeLangList.classList.remove("active");
  };

  changeLangBtn.addEventListener("click", () => {
    activeBtnLang();
  });

  changeLangItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      let swapText = changeLangBtn.innerText;
      changeLangBtn.innerText = item.innerText;
      item.innerText = swapText;
      changeLangInput.value = item.dataset.value;
      item.dataset.value = swapText;
      hideBtnLang();
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target !== changeLangBtn) {
      hideBtnLang();
    }
  });
});

///////////////////////////////// - Faq
const triggerAccordion = document.querySelectorAll(".accordion-trigger");
triggerAccordion.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("quest-answ--active");
  });
});
////////////////////////////////// - hb-menu
const hbMenu = document.querySelector(".hb-menu");
const menu = document.querySelector(".menu");
const submenu = document.querySelectorAll(".submenu");
const submenuA = document.querySelectorAll(".submenu a");
const containerScrollMobileMenu = document.querySelector(
  ".container-scroll-mobile-menu"
);

if (window.innerWidth <= 1280) {
  submenuA.forEach((child) => {
    child.addEventListener("click", () => {
      const parent = child.parentNode;
      if (parent.classList.contains("activeMenuItem")) {
        parent.classList.remove("activeMenuItem");
      } else {
        submenu.forEach((parent) => {
          parent.classList.remove("activeMenuItem");
        });
        parent.classList.add("activeMenuItem");
      }
    });
  });
}

hbMenu.addEventListener("click", (el) => {
  menu.classList.toggle("activeMenu");
  hbMenu.classList.toggle("activeMenu");
  containerScrollMobileMenu.classList.toggle("activeMenu");
  if (window.innerWidth <= 1280) {
    document.body.classList.toggle("lock");
  }
});
submenu.forEach((item) => {
  if (window.innerWidth <= 1280) {
    item.classList.remove("hoverMenu");
  }
});
document.addEventListener("click", (e) => {
  if (e.target !== menu && e.target !== hbMenu && window.innerWidth > 1280) {
    menu.classList.remove("activeMenu");
    hbMenu.classList.remove("activeMenu");
  }
});
// articles and insights
const noHoverArcIns = document.querySelectorAll(".container-for-shadow");

noHoverArcIns.forEach((item) => {
  if (window.innerWidth < 500) {
    item.classList.remove("hover");
  }
});

