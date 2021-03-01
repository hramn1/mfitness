(function (){
  const btnOpenMenu = document.querySelector(`.bottom-head__catalog-menu`);
  const btnOpenTopMenu = document.querySelector(`.top-links-mobile__link`);
  const btnMainMenuOpen = document.querySelector(`.mobile-open-menu-btn`);
  const catalogBtn = document.querySelectorAll('.catalog-main-page__title');
  const catalogList = document.querySelectorAll('.catalog-main-page__list');



  if(document.querySelector('.catalog-menu__title')){
    const btnCatalogMenu = document.querySelector('.catalog-menu__title');
    const openedCatalogMenu = function (evt) {
      const catalogMenuList = document.querySelector('.catalog-menu__list');
      catalogMenuList.classList.toggle('catalog-menu__list--show')
    }
    btnCatalogMenu.addEventListener('click', openedCatalogMenu);
  }
    if(document.querySelectorAll('.dropdown-menu__content')){
    const dropDownCatalog = document.querySelectorAll('.dropdown-menu__content');
    const openedDropCatalog = function (evt) {
      evt.currentTarget.children[1].classList.toggle('dropdown-menu__list--show');
    }
    for(let i = 0; i < dropDownCatalog.length; i++){
      dropDownCatalog[i].addEventListener('click', openedDropCatalog, true);
    }
  }
  const openedMenu = function(evt) {
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

  if(document.querySelectorAll('.product-tabs__tab')){
    const productTab = document.querySelectorAll('.product-tabs__tab');
    const tabDivs = document.querySelectorAll('.product-tabs>div');

    const openedTabs = (evt) => {
      for(let i = 0; i < productTab.length; i++){
        productTab[i].classList.remove('product-tabs__tab--active');
        tabDivs[i].classList.remove('show-tab');
      }
      evt.currentTarget.classList.add('product-tabs__tab--active');
      if(evt.currentTarget.id === "#tab-about"){
        document.querySelector('.js-about').classList.add('show-tab')
      } else if (evt.currentTarget.id === "#tab-charac") {
        document.querySelector('.js-charac').classList.add('show-tab')
      } else if (evt.currentTarget.id === "#tab-brend") {
        document.querySelector('.js-brend').classList.add('show-tab')
      }
    }

    for(let i = 0; i < productTab.length; i++){
      productTab[i].addEventListener('click', openedTabs)
    }
  }


  btnOpenTopMenu.addEventListener(`click`, openedTopMenu);
  btnOpenMenu.addEventListener('click', openedMenu);
  btnMainMenuOpen.addEventListener('click', openedMainMenu);
  for(let i = 0; i < catalogBtn.length; i++){
    catalogBtn[i].addEventListener('click', openedCatalog);
  }
  if(document.querySelector('.sales-goods')){
    let btnShowMoreSale = document.querySelector('.sales-goods__moreBtn');
    let salesItem = document.querySelectorAll('.sales-catalog__item');
    for(let i = 12; i < salesItem.length; i++){
      salesItem[i].style.display = "none";
    }
    btnShowMoreSale.addEventListener('click', function (evt) {
      for(let i = 12; i < salesItem.length; i++){
        salesItem[i].style.display = "block";
      }
      btnShowMoreSale.style.display = "none";
    })
  }
})();
