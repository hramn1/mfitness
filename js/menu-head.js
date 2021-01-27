(function (){
  const btnOpenMenu = document.querySelector(`.bottom-head__catalog-menu`);
  const btnOpenTopMenu = document.querySelector(`.top-links-mobile__link`);
  const btnMainMenuOpen = document.querySelector(`.mobile-open-menu-btn`);
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
  const openedTopMenu = (evt) =>{
    const dropDownTopMenu = document.querySelector(`.top-links-mobile-dropdown`);
    dropDownTopMenu.classList.toggle('top-links-mobile-dropdown--show')
  }
  const openedMainMenu = (evt) =>{
    const mainMenuMobile = document.querySelector(`.bottom-head__menu`);
    mainMenuMobile.classList.toggle('bottom-head__menu--show')
  }
  btnOpenTopMenu.addEventListener(`click`, openedTopMenu);
  btnOpenMenu.addEventListener('click', openedMenu);
  btnMainMenuOpen.addEventListener('click', openedMainMenu);
})();
