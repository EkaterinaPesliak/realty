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

