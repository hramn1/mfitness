(function (){
  const btnOpenMenu = document.querySelector(`.bottom-head__catalog-menu`);
  const btnOpenTopMenu = document.querySelector(`.top-links-mobile__link`);
  const btnMainMenuOpen = document.querySelector(`.mobile-open-menu-btn`);
  const catalogBtn = document.querySelectorAll('.catalog-main-page__title');
  const catalogList = document.querySelectorAll('.catalog-main-page__list');
  const dropDownCatalog = document.querySelectorAll('.dropdown-menu__content');
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
  const openedCatalog = (evt) => {
   evt.target.nextElementSibling.classList.toggle('catalog-main-page__list--show');
  }
  const openedDropCatalog = (evt) =>{
    evt.target.children[1].classList.toggle('dropdown-menu__list--show');
  }
  btnOpenTopMenu.addEventListener(`click`, openedTopMenu);
  btnOpenMenu.addEventListener('click', openedMenu);
  btnMainMenuOpen.addEventListener('click', openedMainMenu);
  for(let i = 0; i < catalogBtn.length; i++){
    catalogBtn[i].addEventListener('click', openedCatalog);
  }
  for(let i = 0; i < dropDownCatalog.length; i++){
    dropDownCatalog[i].addEventListener('click', openedDropCatalog);
  }
})();
