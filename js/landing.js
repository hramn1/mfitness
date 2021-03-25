(function () {
	const openedTabs = (evt)=>{
		if(evt.target.classList.contains('landing-tabs__btn--close')){
			let originalHeight = evt.target.parentNode.scrollHeight;
			let offsetHeight = evt.target.parentNode.offsetHeight;
			evt.target.classList.remove('landing-tabs__btn--close');
			evt.target.classList.add('landing-tabs__btn--open');
			const step = () => {
				if(offsetHeight < originalHeight){
					offsetHeight += 5;
					evt.target.parentNode.style.height = offsetHeight + "px";
					window.requestAnimationFrame(step);
				}
			}
				window.requestAnimationFrame(step);
		}
		else if(evt.target.classList.contains('landing-tabs__btn--open')){
			if(evt.target.classList.contains('landing-tabs__btn--open')){
				let originalHeight = evt.target.parentNode.scrollHeight;
				let offsetHeight = 50;
				evt.target.classList.add('landing-tabs__btn--close');
				evt.target.classList.remove('landing-tabs__btn--open');
				const step = () => {
					if(offsetHeight < originalHeight){
						originalHeight -= 5;
						evt.target.parentNode.style.height = originalHeight + "px";
						window.requestAnimationFrame(step);
					}
				}
					window.requestAnimationFrame(step);
		}
	}
}

	let btnOpened = document.querySelectorAll('.landing-tabs__btn')
	for(let item of btnOpened){
		item.addEventListener('click', openedTabs)
	}

	let btnLogin = document.querySelector('.landing-user__login');
	const popupLogin = document.querySelector('.popup--login');
	const modalOver = document.querySelector('.modal-overlay');
	const closePopupBtn = document.querySelectorAll('.popup-close');
	const btnReg = document.querySelector('.landing-user__reg');
	const popupReg = document.querySelector('.popup--reg');
	const bannerReg = document.querySelector('.landing-advantages-banner__reg');
	const loginReg = document.querySelector('.popup__link-reg');
	btnLogin.onclick = (evt) =>{
		evt.preventDefault();
		popupLogin.classList.add('popup--show');
		modalOver.classList.add('modal-overlay--show');
	}
	for(let item of closePopupBtn){
		item.onclick = (evt) => {
			evt.target.parentElement.classList.remove("popup--show");
			modalOver.classList.remove('modal-overlay--show');
		}
	}
	bannerReg.onclick = (evt) => {
		evt.preventDefault();
		console.log(evt);
		popupReg.classList.add('popup--show');
		modalOver.classList.add('modal-overlay--show');
		popupReg.style.top = evt.layerY - 400 + "px";
	}
	btnReg.onclick = (evt) =>{
		evt.preventDefault();
		popupReg.classList.add('popup--show');
			popupReg.style.top = evt.layerY  + "px";
		modalOver.classList.add('modal-overlay--show');
	}
	loginReg.onclick = (evt) => {
		evt.preventDefault();
		popupReg.classList.add('popup--show');
		popupLogin.classList.remove('popup--show');
		popupReg.style.top = evt.layerY  + "px";
	}
	const scrollMenu = (evt) => {
		evt.preventDefault()
		let el = evt.target.hash;
		document.querySelector(el).scrollIntoView({
			 behavior: "smooth"
		})
	}
	const menuBtn = document.querySelectorAll('.js-land-menu')
	for(let it of menuBtn){
		it.addEventListener('click', scrollMenu)
	}
})()
