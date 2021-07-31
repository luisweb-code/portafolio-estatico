const d = document;

export function mostrarSubMenu(bras, sfMega, sfMegaRow, sfMegaSection) {
  const $bras = d.querySelector(bras),
    $sfMega = d.querySelector(sfMega),
    $sfMegaRow = d.querySelector(sfMegaRow),
    $sfMegaSection = d.querySelector(sfMegaSection);

  //console.log($bras, $sfMega, $sfMegaRow);

  $bras.addEventListener("mouseover", (e) => {
    $sfMega.style.display = "block";
    $sfMegaRow.style.opacity = "1";
  });

  $sfMegaSection.addEventListener("mouseover", (e) => {
    $sfMega.style.display = "block";
    $sfMegaRow.style.opacity = "1";
  });

  /* $sfMegaRow.addEventListener("mouseout", (e) => {
    $sfMega.style.display = "none";
    $sfMegaRow.style.opacity = "0";
  }); */

  //ononmouseover , onmouseout
}
