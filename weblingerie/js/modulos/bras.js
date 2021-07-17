const d = document;

export function mostrarSubMenu(bras, subMenu) {
  const $bras = d.querySelector(bras),
    $subMenu = d.querySelector(subMenu);

  addEventListener("click", (e) => {
    if (e.target === $bras) {
      $subMenu.classList.add("subMenuSee");
      $subMenu.classList.remove("subMenu");
    } else {
      $subMenu.classList.remove("subMenuSee");
      $subMenu.classList.add("subMenu");
    }
  });

  /* addEventListener("") */

  //onmouseover , onmouseout
}
