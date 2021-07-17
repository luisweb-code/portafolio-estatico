const d = document;

export function mostrarSubMenu() {
  const $menu = d.querySelector(".menu-categories"),
    $bras = d.querySelector(".bras"),
    $subMenu = d.querySelector(".subMenu");

  console.log($menu, $subMenu, $bras);

  $bras.onmouseover = (e) => {
    if (e.target === $bras) {
      $subMenu.classList.add("subMenuSee");
      $subMenu.classList.remove("subMenu");
    }
  };

  $subMenu.onmouseout = (e) => {
    if (e.target === $subMenu) {
      $subMenu.classList.add("subMenu");
      $subMenu.classList.remove("subMenuSee");
    }
  };
}
