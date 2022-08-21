const hamburguer = document.querySelector(".hamburguer");
const linksmobile = document.querySelector(".links-rapidos-mobile");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    linksmobile.classList.toggle("active");
})