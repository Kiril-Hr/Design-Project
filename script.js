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
const activeHeaderContactsElement = document.querySelectorAll(
  ".element-header-text"
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

/////////////////////////// - slider
let position = 0;
const NumberOfSlideScrolls = 2;
const numbSlides = 6;
const slidesToScroll = 1;
const slider = document.querySelector(".slider-1");
const line = document.querySelector(".slider-line");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const items = document.querySelectorAll(".slide");
const itemsCount = items.length;
const itemWidth = slider.clientWidth / numbSlides;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () => {
  const itemsLeft =
    itemsCount -
    (Math.abs(position) + NumberOfSlideScrolls * itemWidth) / itemWidth;
  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});
btnPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  line.style.transform = `translate(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled =
    position <= -(itemsCount - NumberOfSlideScrolls) * itemWidth;
};

checkBtns();
btnNext.addEventListener("click", () => {
  btnNext.classList.add("activeBtnNext");
  if (btnPrev.classList.contains("activeBtnPrev")) {
    btnPrev.classList.remove("activeBtnPrev");
  }
});

btnPrev.addEventListener("click", () => {
  btnPrev.classList.add("activeBtnPrev");
  if (btnNext.classList.contains("activeBtnNext")) {
    btnNext.classList.remove("activeBtnNext");
  }
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
const informMenu = document.querySelector(".inform");
const containerLogMenu = document.querySelector(".container-logo-menu");
const submenu = document.querySelectorAll(".submenu");
// const containerScrollMobileMenu = document.querySelector(
//   ".container-scroll-mobile-menu"
// );

hbMenu.addEventListener("click", () => {
  menu.classList.toggle("activeMenu");
  hbMenu.classList.toggle("activeMenu");
  // containerScrollMobileMenu.classList.toggle("activeMenu");
  if (window.innerWidth < 768) {
    informMenu.classList.toggle("activeMenu");
    containerLogMenu.classList.toggle("activeMenu");
    document.body.classList.toggle("lock");
  }
});
submenu.forEach((item) => {
  if (window.innerWidth < 500) {
    item.classList.remove("hoverMenu");
    item.addEventListener("click", () => {
      item.classList.toggle("activeMenuItem");
    });
  }
});
document.addEventListener("click", (e) => {
  if (e.target !== menu && e.target !== hbMenu && window.innerWidth > 767) {
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
