import { articles, articlesRelated } from "../modules/moduleArticles.mjs";

if (document.querySelector(".sort-projects")) {
    if (window.innerWidth <= 500) {
      new Swiper(".sort-projects", {
        centeredSlides: false,
        slidesPerGroup: 1,
        spaceBetween: 15,
        simulateTouch: true,
        freeMode: true,
        slidesPerView: "auto",
      });
    }
}

// project slider

const showArticles = () => {
    if (document.querySelector(".slider-projects")) {
        if (window.innerWidth > 750) {
          new Swiper(".slider-projects", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 300,
            simulateTouch: false,
            hashNavigation: {
              watchState: true,
            },
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
        if (window.innerWidth <= 750 && window.innerWidth > 500) {
          new Swiper(".slider-projects", {
            slidesPerView: 1,
            slidesOffsetAfter: 0,
            slidesPerGroup: 1,
            spaceBetween: 300,
            simulateTouch: true,
            loopFillGroupWithBlank: true,
            hashNavigation: {
              watchState: true,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1,
            },
          });
        }
        if (window.innerWidth <= 500) {
          new Swiper(".slider-projects", {
            centeredSlides: false,
            slidesPerGroup: 1,
            spaceBetween: 20,
            simulateTouch: true,
            freeMode: true,
            slidesPerView: "auto",
            hashNavigation: {
              watchState: true,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1,
            },
          });
        }
    }
}

showArticles()

const wrapperOfPagesForArticles = document.querySelector(
    ".slider-wrapper-projects"
);
const wrapperOfPagesForArticlesRelated = document.querySelector('.slider-wrapper-related-projects');
const prevBtnUnderSliderProjects = document.querySelector(".prev");
const nextBtnUnderSliderProjects = document.querySelector(".next");
  
const addArticlesProjectPage = (
    arr,
    qtyArticlesInPage,
    qtyRows,
    qtyArticlesInRow,
    numberToScaleBtnsNextPrev,
    sliderContainer,
  ) => {
    let countPages = Math.ceil(arr.length / qtyArticlesInPage);
    if (prevBtnUnderSliderProjects && nextBtnUnderSliderProjects) {
      prevBtnUnderSliderProjects.style.left = `${
        45 - countPages * numberToScaleBtnsNextPrev
      }%`;
      nextBtnUnderSliderProjects.style.right = `${
        45 - countPages * numberToScaleBtnsNextPrev
      }%`;
    }
    let countForOddQtyOfArticles = arr.length;
    const arrForPages = [];
    const arrForRowInPage = [];
    let arrForTraversingArticles = JSON.parse(JSON.stringify(arr)).reverse();
    let count = -1;
    for (let i = 0; i < countPages; i++) {
      count += 1;
      let page = document.createElement("div");
      page.setAttribute("class", "swiper-slide project-item");
      page.setAttribute("data-hash", `slide${i+1}`);
      page.id = `swiper-slide${i}`;
      arrForPages[i] = page.id;
      sliderContainer.append(page);
      for (let j = 0; j < qtyRows; j++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        row.id = `row${j + i + count}`;
        arrForRowInPage[j + i + count] = row.id;
        document.getElementById(arrForPages[i]).append(row);
        for (let k = 0; k < qtyArticlesInRow; k++) {
          if (countForOddQtyOfArticles === 0) {
            break;
          }
          document.getElementById(arrForRowInPage[j + i + count]).innerHTML += `
          <div class="container-shadow">
            <div class="slide-project">
              <div class="img">
                  <img src=${
                    arrForTraversingArticles[
                      arrForTraversingArticles.length - 1 - k
                    ].img
                  } alt="project">
              </div>
              <div class="inner-block">
                  <h3 class="titleOfArticle">${
                    arrForTraversingArticles[
                      arrForTraversingArticles.length - 1 - k
                    ].chapter
                  }</h3>
                  <p>${
                    arrForTraversingArticles[
                      arrForTraversingArticles.length - 1 - k
                    ].description
                  }</p>
                  <div><a href=${
                    arrForTraversingArticles[
                      arrForTraversingArticles.length - 1 - k
                    ].link
                  } class="btn-read"></a></div>
              </div>
            </div>
          </div>
          `;
          if (k === qtyArticlesInRow - 1) {
            for (let d = 0; d < qtyArticlesInRow; d++) {
              arrForTraversingArticles.pop();
            }
          }
          countForOddQtyOfArticles -= 1;
        }
      }
    }
};

const windowAdaptiveArticles = (array) => {
    if (wrapperOfPagesForArticles) {
        if (window.innerWidth > 1500) {
            addArticlesProjectPage(array, 8, 2, 4, 3, wrapperOfPagesForArticles);
        }
        if (window.innerWidth < 1500 && window.innerWidth > 1050) {
            addArticlesProjectPage(array, 6, 2, 3, 4, wrapperOfPagesForArticles);
        }
        if (window.innerWidth <= 1050 && window.innerWidth > 750) {
            addArticlesProjectPage(array, 4, 2, 2, 5, wrapperOfPagesForArticles);
        }
        if (window.innerWidth <= 750 && window.innerWidth > 500) {
            addArticlesProjectPage(array, 2, 2, 1, null, wrapperOfPagesForArticles);
        }
        if (window.innerWidth <= 500) {
            addArticlesProjectPage(array, 1, 1, 1, null, wrapperOfPagesForArticles);
            const slide = document.querySelectorAll(".project-item");
            slide.forEach((el) => {
            el.setAttribute("style", "width: 202px;");
            });
        }
    }
}
  
windowAdaptiveArticles(articles)

  const CutBlock = () => {
    const slideProject = document.querySelectorAll(".container-shadow");
    const innerBlockP = document.querySelectorAll(".inner-block p");
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
  
const btnSort = document.querySelectorAll(".btn-sort");
const sliderProjects = document.querySelector('.slider-projects');

let styleWidthConst = {}; 

const minWidthContainerStart = () => {
  let widthInnerContainer = Math.ceil(wrapperOfPagesForArticles.offsetWidth / 0.93);
  let maxW = `max-width: ${widthInnerContainer + 5}px`
  let minW = `min-width: ${widthInnerContainer - 5}px`
  sliderProjects.setAttribute('style',`${maxW}; ${minW}`)
  styleWidthConst.maxW = maxW
  styleWidthConst.minW = minW
}

if (wrapperOfPagesForArticles) {
  minWidthContainerStart();
}

btnSort.forEach((btn) => {
    btn.addEventListener('click', () => {

      btnSort.forEach(b => {
        if (b.classList.contains('deactivateBtn')) {
          b.classList.remove('deactivateBtn');
          btn.classList.add('deactivateBtn')
        } else {
          btn.classList.add('deactivateBtn')
        }
      })
        
        wrapperOfPagesForArticles.innerHTML = ''

        if (btn.id === 'viewall') {
          windowAdaptiveArticles(articles)
          CutBlock();
          showArticles()
          let widthInnerContainer = Math.ceil(wrapperOfPagesForArticles.offsetWidth / 0.93);
          sliderProjects.setAttribute('style', `width: ${widthInnerContainer}px; ${styleWidthConst.maxW}; ${styleWidthConst.minW}`)
          return
        }

        let filteredArticles = [] 

        for (let item of articles) {
          if (item.chapter.split(' ').join('').toLowerCase() === btn.id) filteredArticles.push(item)
        }

        windowAdaptiveArticles(filteredArticles)
        CutBlock();
        showArticles()
        let widthInnerContainer = wrapperOfPagesForArticles.offsetWidth / 0.92;
        sliderProjects.setAttribute('style',`width: ${widthInnerContainer}px; ${styleWidthConst.maxW}; ${styleWidthConst.minW}`)
    })
})

// slider projects related


const showArticlesRelated = () => {
  if (document.querySelector(".slider-related-projects")) {
    if (window.innerWidth > 500) {
      new Swiper(".slider-related-projects", {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        centeredSlides: false,
        spaceBetween: 30,
        freeMode: true,
        autoplay: {
          delay: 8000,
          stopOnLastSlide: false,
        },
        breakpoints: {
          501: {
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1,
            },
          },
          1061: {
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          }
        }
      });
    }
    if (window.innerWidth <=500) {
      new Swiper(".slider-related-projects", {
        centeredSlides: false,
        slidesPerGroup: 1,
        spaceBetween: 20,
        simulateTouch: true,
        freeMode: true,
        slidesPerView: "auto",
        hashNavigation: {
          watchState: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 1,
        },
      })
    }
  }
}

if (wrapperOfPagesForArticlesRelated) {
  addArticlesProjectPage(articlesRelated, 1, 1, 1, null, wrapperOfPagesForArticlesRelated);
  const slide = document.querySelectorAll(".project-item");
  if (window.innerWidth > 500) {
    slide.forEach((el) => {
      el.setAttribute("style", "width: 330px;");
    })
  } else {
    slide.forEach((el) => {
      el.setAttribute("style", "width: 202px;");
    })
  }
  
}

showArticlesRelated()

CutBlock();