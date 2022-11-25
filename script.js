////////////////////////////// - Change lang
document.querySelectorAll(".change-lang").forEach((changeLang) => {
  const changeLangBtn = changeLang.querySelector(".change-lang-btn");
  const changeLangList = changeLang.querySelector(".change-lang-list");
  const changeLangItem = changeLang.querySelectorAll(".change-lang-item");
  const changeLangInput = changeLang.querySelector(".change-lang-input");

  changeLangBtn.addEventListener("click", () => {
    changeLangBtn.classList.toggle("active");
    changeLangList.classList.toggle("active");
  });

  changeLangItem.forEach((item) => {
    console.log(item);
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      let swapText = changeLangBtn.innerText;
      changeLangBtn.innerText = item.innerText;
      item.innerText = swapText;
      changeLangInput.value = item.dataset.value;
      item.dataset.value = swapText;
      changeLangBtn.classList.remove("active");
      changeLangList.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target !== changeLangBtn) {
      changeLangBtn.classList.remove("active");
      changeLangList.classList.remove("active");
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
