export default function toggleMenu() {
  const menu = document.querySelector('.header-cta');
  const toggleButton = document.getElementById('menu-toggle');
  menu.classList.toggle('active');
  toggleButton.classList.toggle('active');
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
document.addEventListener('click', (event) => {
  const menu = document.querySelector('.header-cta');
  const toggleButton = document.getElementById('menu-toggle');
  if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
    menu.classList.remove('active');
    toggleButton.classList.remove('active');
  }
});
