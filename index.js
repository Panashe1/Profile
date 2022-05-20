// Card Animations

const hamburger = document.querySelector('.hamburger');

console.log(hamburger);

hamburger.addEventListener("click", function(event){
  this.classList.toggle("is-active");
});
