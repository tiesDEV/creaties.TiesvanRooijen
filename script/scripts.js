var hamburgerKnop = document.querySelector("li.hamburgerknop");

var hamburgerMenu = document.querySelector("ul.hamburgermenu");

hamburgerKnop.addEventListener("click", openHamburger);

function openHamburger() {
  hamburgerMenu.classList.toggle("openHamburger");
  console.log("Hello world!");

}
