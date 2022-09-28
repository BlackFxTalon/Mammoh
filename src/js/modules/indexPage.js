// indexPage scripts

// increaseIndexBg2OpacityOnScroll function
function increaseIndexBgOpacityOnScroll() {
  let indexBg2 = document.querySelector('#index-bg-2');

	window.addEventListener('scroll',()=>{
    indexBg2.style.opacity = window.pageYOffset / indexBg2.clientHeight;
  })
}

increaseIndexBgOpacityOnScroll();
