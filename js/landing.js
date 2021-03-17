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
})()
