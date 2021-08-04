const d = document;
const $bras = d.querySelector(".bras"),
  $subMenu = d.querySelector(".sub-menu"),
  $contSubMenu = d.querySelector(".cont-sub-menu");

addEventListener("mouseover", (e) => {
  if (e.target === $bras) {
    $contSubMenu.style.display = "block";
    $contSubMenu.style.animation = "slideInDown";
    $contSubMenu.style.animationDuration = "2s"; 
  }
});

addEventListener("click", (e) => {
  if (e.target !== $contSubMenu && e.target !== $subMenu) {
    $contSubMenu.style.display = "none";
  }
});


