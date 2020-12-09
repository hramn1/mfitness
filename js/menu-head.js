(function (){
  const btnOpenMenu = document.querySelector(`.bottom-head__catalog-menu`);
  const openedMenu = (evt)=>{
    const dropDownMenu = document.querySelector(`.bottom-head__dropdown-menu`);
    const iconMenu = document.querySelector(`.bottom-head__menu-btn`);
    if(dropDownMenu.classList.contains('bottom-head__dropdown-menu--show')){
      dropDownMenu.classList.remove('bottom-head__dropdown-menu--show');
      iconMenu.classList.remove(`bottom-head__menu-btn--closed`)
    } else {
      dropDownMenu.classList.add('bottom-head__dropdown-menu--show');
      iconMenu.classList.add(`bottom-head__menu-btn--closed`)
    }
  }
  btnOpenMenu.addEventListener('click', openedMenu)
})();
