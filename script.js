import { articles, articlesRelated } from "./modules/moduleArticles.mjs";
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
const informMenu = document.querySelector(".inform");
const containerLogMenu = document.querySelector(".container-logo-menu");
const submenu = document.querySelectorAll(".submenu");
const logo = document.querySelector(".logo");
const containerScrollMobileMenu = document.querySelector(
  ".container-scroll-mobile-menu"
);

hbMenu.addEventListener("click", () => {
  menu.classList.toggle("activeMenu");
  hbMenu.classList.toggle("activeMenu");
  containerScrollMobileMenu.classList.toggle("activeMenu");
  if (window.innerWidth < 768 && window.innerWidth > 660) {
    informMenu.classList.toggle("activeMenu");
    containerLogMenu.classList.toggle("activeMenu");
  } else if (window.innerWidth <= 660 && window.innerWidth > 500) {
    logo.classList.toggle("deactivate-logo");
  } else if (window.innerWidth <= 500) {
    document.body.classList.toggle("lock");
  }
});
submenu.forEach((item) => {
  if (window.innerWidth <= 500) {
    item.classList.remove("hoverMenu");
    item.addEventListener("click", (e) => {
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

// project slider

const wrapperOfPagesForArticles = document.querySelector(
  ".slider-wrapper-projects"
);

if (wrapperOfPagesForArticles) {
  const addArticles = (arr) => {
    if (window.innerWidth > 1500) {
      let countPages = Math.ceil(arr.length / 8);
      let arrCountForOddQtyOfArticles = arr.map((el) => 1);
      const arrForPages = [];
      const arrForRowInPage = [];
      let arrForTraversingArticles = JSON.parse(JSON.stringify(arr));
      let count = -1;
      for (let i = 0; i < countPages; i++) {
        count += 1;
        let page = document.createElement("div");
        page.setAttribute("class", "swiper-slide");
        page.id = `swiper-slide${i}`;
        arrForPages[i] = page.id;
        wrapperOfPagesForArticles.append(page);
        for (let j = 0; j < 2; j++) {
          let row = document.createElement("div");
          row.setAttribute("class", "row");
          row.id = `row${j + i + count}`;
          arrForRowInPage[j + i + count] = row.id;
          document.getElementById(arrForPages[i]).append(row);
          for (let k = 0; k < 4; k++) {
            if (arrCountForOddQtyOfArticles.length === 0) {
              break;
            }
            document.getElementById(
              arrForRowInPage[j + i + count]
            ).innerHTML += `
            <div class="container-shadow">
              <div class="slide-project">
                <div class="img">
                    <img src=${arrForTraversingArticles[k].img} alt="project">
                </div>
                <div class="inner-block">
                    <h3>${arrForTraversingArticles[k].chapter}</h3>
                    <p>${arrForTraversingArticles[k].description}</p>
                    <div><a href=${arrForTraversingArticles[k].link} class="btn-read"></a></div>
                </div>
              </div>
            </div>
            `;
            if (k === 3) {
              arrForTraversingArticles.shift();
              arrForTraversingArticles.shift();
              arrForTraversingArticles.shift();
              arrForTraversingArticles.shift();
            }
            arrCountForOddQtyOfArticles.pop();
          }
        }
      }
    }
  };
  addArticles(articles);
}

const slideProject = document.querySelectorAll(".container-shadow");
const innerBlockP = document.querySelectorAll(".inner-block p");

const CutBlock = () => {
  const descrOfProj = [];
  const descrOfProjCut = [];

  innerBlockP.forEach((item) => {
    let innerText = item.outerText;
    if (innerText.length > 65) {
      let innerCutText = innerText.slice(0, 65).concat(" ...");
      item.textContent = innerCutText;
      descrOfProjCut.push(innerCutText);
    } else {
      descrOfProjCut.push(innerText);
    }
    descrOfProj.push(innerText);
  });

  slideProject.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      item.children[0].lastElementChild.children[1].textContent =
        descrOfProj[i];
    });
    item.addEventListener("mouseout", () => {
      item.children[0].lastElementChild.children[1].textContent =
        descrOfProjCut[i];
    });
  });
};
CutBlock();

// sort buttons in project slider
