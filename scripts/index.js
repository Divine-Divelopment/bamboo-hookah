var swiper = new Swiper(".big-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next-slide",
    prevEl: ".prev-slide",
  },
}); 

const products = () => {
var productSliders = document.querySelectorAll('.products-slider');
  productSliders.forEach( function(slider, index) {
    let sliderLength = slider.children[0].children.length;
    let result = (sliderLength > 4) ? true : false;
    let prevArrow = document.querySelectorAll('.product-prev');
    let nextArrow = document.querySelectorAll('.product-next');
    let paginationBLock = document.querySelectorAll('.product-pagination');

    function checkArrow() {
      var swiperPrev = prevArrow[index];
      var swiperNext = nextArrow[index];
      let pagination = paginationBLock[index];
      if ( window.innerWidth > 1169 ) {
        swiperPrev.style.display = 'flex';
        swiperNext.style.display = 'flex';
        pagination.style.display = 'none';
      } else {
        swiperPrev.style.display = 'none';
        swiperNext.style.display = 'none';
        pagination.style.display = 'flex';
      }
    }

    var swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 11,
      direction: 'horizontal',
      loop: result,
      observer: true,
      pagination: {
        el: paginationBLock[index],
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: nextArrow[index],
        prevEl: prevArrow[index],
      },
      on: {
        init: function() {
          checkArrow();
        },
        resize: function () {
          checkArrow();
        }
      },  
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1169: {
          slidesPerView: 5,
        }
      }
    });
  });
};

var SwiperBig = new Swiper(".big-article", {
  slidesPerView: 1,
  spaceBetween: 0,
  direction: 'horizontal',
  loop: true,
  observer: true,
  effect: "fade",
  fade: { crossFade: false },
  speed: 300,
});

var SwiperSmall = new Swiper(".small-article", {
  slidesPerView: 3,
  spaceBetween: 19,
  direction: 'horizontal',
  loop: true,
  observer: true, 
  navigation: {
    nextEl: '.article-next',
    prevEl: '.article-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 4,
    },
  }
});

const changeCount = () => {
  var count = 1;
  var countEl = document.getElementById("count");
  const minus = document.querySelector('.minus-cart')
  const plus = document.querySelector('.plus-cart')
  minus.addEventListener('click', function() {
    if (count > 1) {
      count--;
      countEl.value = count;
    }  
  })
  plus.addEventListener('click', function() {
    count++;
    countEl.value = count;
  })
}

window.addEventListener('load', function () {
  const selects = document.querySelectorAll('.lang');
  selects.forEach(function(elem) {
    const select2 = new TsSelect2(
      elem,
      {
        width: `57px`,
        minimumResultsForSearch: -1,
      }
    );
  });

  document.getElementById('menu').addEventListener('click', function () {
    const menu = document.querySelector('.header-menu');
    menu.classList.add('open');
    document.body.classList.add('no-scroll')
  })

  document.getElementById('close-menu').addEventListener('click', function () {
    const menu = document.querySelector('.header-menu');
    menu.classList.remove('open');
    document.body.classList.remove('no-scroll')
  })

  document.getElementById('catalog').addEventListener('click', function () {
    const menu = document.querySelector('.submenu');
    menu.classList.toggle('open');
    document.body.classList.toggle('no-scroll')
  })

  document.getElementById('close-catalog').addEventListener('click', function () {
    const menu = document.querySelector('.submenu');
    menu.classList.remove('open');
    document.body.classList.remove('no-scroll')
  })
  products();
  changeCount();
  SwiperSmall.controller.control = SwiperBig;
  SwiperBig.controller.control = SwiperSmall;
})