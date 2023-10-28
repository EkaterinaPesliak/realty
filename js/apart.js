const valueRange = document.querySelector('#valueRange')
      valueInput = document.querySelector('#valueInput')
      durationRange = document.querySelector('#durationRange')
      durationInput = document.querySelector('#durationInput')
      firstRange = document.querySelector('#firstRange')
      firstInput = document.querySelector('#firstInput')
      allInputs = document.querySelectorAll('.inputClass')
      totalSpan = document.querySelector('#totalSpan')
      formatter = new Intl.NumberFormat('ru')


valueRange.addEventListener('input', function() {
  valueInput.value = valueRange.value
})
valueInput.addEventListener('input', function() {
  valueRange.value = valueInput.value
})
durationRange.addEventListener('input', function() {
  durationInput.value = durationRange.value
})
durationInput.addEventListener('input', function() {
  durationRange.value = durationInput.value
})

firstRange.addEventListener('input', function() {
  firstInput.value = firstRange.value
})

firstInput.addEventListener('input', function() {
  firstRange.value = firstInput.value
})

function calc() {
  let totalAmount = valueInput.value - firstInput.value
  totalSpan.innerText = formatter.format(totalAmount)
}

calc()

for (const input of allInputs) {
  input.addEventListener('input', function() {
    calc()
  })
}

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

const btnCard = document.querySelector('#btn-card')
btnCard.addEventListener('click', function() {
  swiper.slideTo(1)
})

const btnLayout = document.querySelector('#btn-layout')
btnLayout.addEventListener('click', function() {
  swiper.slideTo(2)
})


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

document.getElementById("modal-btn").addEventListener('click', function() {
  document.getElementById("modalFirst").classList.add("open")
})

document.getElementById("modal-close").addEventListener('click', function() {
  document.getElementById("modalFirst").classList.remove("open")
})

document.getElementById("modal-close2").addEventListener('click', function() {
  document.getElementById("modalSecond").classList.remove("open")
})

document.getElementById("modal-btn-thanks").addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById("modalFirst").classList.remove("open"),
  document.getElementById("modalSecond").classList.add("open")
})

document.getElementById("btn-call").addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById("modalSecond").classList.add("open")
})

document.getElementById("btn-slider-call").addEventListener('click', function() {
  document.getElementById("modalFirst").classList.add("open")
})