const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper__btn-next',
    prevEl: '.swiper__btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});

ymaps.ready(init);
function init() {
const mapElem = document.querySelector('#map');
const myMap = new ymaps.Map(
  "map",
  {
    center: [55.755034, 37.626726],
    zoom: 18,
    controls: []
  },
  {
    suppressMapOpenBlock: true,
  }
);

const myPlacemark = new ymaps.Placemark(
  [55.755034, 37.626726],
  {},
  {
    iconLayout: "default#image",
    iconImageHref: '../img/pin.svg',
    iconImageSize: [240, 240],
    iconImageOffset: [-20, -40],
  }
);

myMap.geoObjects.add(myPlacemark);
myMap.container.fitToViewport();
}

const btnCard = document.querySelector('#btn-card')
btnCard.addEventListener('click', function() {
  swiper.slideTo(1)
})