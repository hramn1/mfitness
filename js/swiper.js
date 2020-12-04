// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import '/../../node_modules/swiper/swiper-bundle.css';
//
// const swiper = new Swiper();
const body = document.querySelector('body')
function printDom(node, prefix){
  console.log(prefix + node.nodeName);
  for(let i = 0; i < node.childNodes.length; i++){
    printDom(node.childNodes[i], prefix + '\t');
  }
}
printDom(body, '');
