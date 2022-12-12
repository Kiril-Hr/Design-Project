// slider - 1
if (document.querySelector(".slider-1")) {
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");

  if (window.innerWidth > 1350) {
    new Swiper(".slider-1", {
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      slidesPerView: 2,
      slidesPerGroup: 1,
      autoplay: {
        delay: 8000,
        stopOnLastSlide: false,
      },
    });
  }

  if (window.innerWidth <= 1350 && window.innerWidth > 730) {
    new Swiper(".slider-1", {
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: {
        delay: 8000,
        stopOnLastSlide: false,
      },
    });
  }

  if (window.innerWidth <= 730) {
    new Swiper(".slider-1", {
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
      },
    });
  }

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
}

// slider train
if (document.querySelector(".slider-train")) {
  if (window.innerWidth <= 500) {
    new Swiper(".slider-train", {
      pagination: {
        el: ".slider-switchers",
      },
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
}

// slider - 2
if (document.querySelector(".slider-2")) {
  if (window.innerWidth >= 1700) {
    new Swiper(".slider-2", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 8000,
        stopOnLastSlide: false,
      },
    });
  }
  if (window.innerWidth <= 1699 && window.innerWidth >= 1200) {
    new Swiper(".slider-2 ", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
      },
    });
  }
  if (window.innerWidth <= 1199 && window.innerWidth > 400) {
    new Swiper(".slider-2 ", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
      },
    });
  }
  if (window.innerWidth <= 400) {
    new Swiper(".slider-2 ", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 55000,
        stopOnLastSlide: false,
      },
    });
  }
}

// slider projects
if (document.querySelector(".slider-projects")) {
  new Swiper(".slider-projects", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 300,
    simulateTouch: false,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
}
