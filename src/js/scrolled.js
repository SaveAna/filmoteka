import { refs } from './refs';
window.addEventListener('scroll', onScroll);
function onScroll() {
  const toTop = document.querySelector('.back-to-top');
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    toTop.classList.add('visible');
  }
  if (scrolled < coords) {
    toTop.classList.remove('visible');
  }
}
function onToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function renderBtn() {
  const markup = `
<svg viewBox="0 0 32 36"  height="50" width="50" class="back-to-top" id ="back">
  <path fill="#f00" d="M1423.038 159.901c-16.716-62.938-65.961-112.505-128.503-129.327-113.336-30.572-567.835-30.572-567.835-30.572s-454.493 0-567.835 30.572c-62.542 16.822-111.799 66.389-128.503 129.327-30.366 114.079-30.366 352.102-30.366 352.102s0 238.011 30.366 352.102c16.704 62.945 65.961 112.499 128.497 129.339 113.342 30.558 567.835 30.558 567.835 30.558s454.499 0 567.835-30.558c62.542-16.834 111.787-66.395 128.503-129.333 30.373-114.091 30.373-352.102 30.373-352.102s0-238.023-30.373-352.102z"></path>
  <path fill="#fff" d="M578.054 728.107l379.868-216.093-379.868-216.117z"></path>
</svg>
`;
  document.querySelector('body').insertAdjacentHTML('beforeend', markup);
}

renderBtn();
document.querySelector('.back-to-top').addEventListener('click', onToTop);
onScroll();

export { onToTop };
