const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav');
menuBtn.addEventListener("click", () => {
   menuBtn.classList.toggle('open');
   navMenu.classList.toggle('open');
});