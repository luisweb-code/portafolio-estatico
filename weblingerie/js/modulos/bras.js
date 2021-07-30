const d = document;

export function mostrarSubMenu(bras, subMenu) {
  const $bras = d.querySelector(bras),
    $subMenu = d.querySelector(subMenu);

 $bras.addEventListener("mouseover", (e) => {
    $subMenu.classList.remove("hide");
  }); 

  $bras.addEventListener("mouseout", (e) => {
    $subMenu.classList.add("hide");
  }); 

  //ononmouseover , onmouseout
}
