(function (){
  const btnOpenMenu = document.querySelector(`.bottom-head__catalog-menu`);
  const openedMenu = (evt)=>{
    const dropDownMenu = document.querySelector(`.bottom-head__dropdown-menu`);
    if(dropDownMenu.classList.contains('bottom-head__dropdown-menu--show')){
      dropDownMenu.classList.remove('bottom-head__dropdown-menu--show');
    } else {
      dropDownMenu.classList.add('bottom-head__dropdown-menu--show');
    }
  }
  btnOpenMenu.addEventListener('click', openedMenu)
})();
