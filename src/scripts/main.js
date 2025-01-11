const burguer = document.getElementById("burguer");
const closeMenu = document.getElementById("close-menu");
const mobileNav = document.querySelector("#mobile-nav");
const itemsContainer = document.querySelector("#items-container");

burguer.addEventListener("click", () => {
  mobileNav.classList.toggle("display-nav");
  setTimeout(() => {
    itemsContainer.classList.toggle("display-nav-items");
  }, 500)
})

closeMenu.addEventListener("click", () => {
  itemsContainer.classList.toggle("display-nav-items");
  setTimeout(() => {
    mobileNav.classList.toggle("display-nav");
  }, 200)
})

window.addEventListener("resize", () => {
  if (window.screen.width > 1024) {
    mobileNav.classList.remove("display-nav");
  }
})