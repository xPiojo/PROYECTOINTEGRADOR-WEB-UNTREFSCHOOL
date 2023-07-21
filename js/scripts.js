let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav--links");
let links = document.querySelectorAll(".nav--link");
const headerHeight = document.querySelector("header").offsetHeight;

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

// Agregar el evento de clic a cada enlace
links.forEach(link => {
  link.onclick = (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      const targetPosition = target.getBoundingClientRect().top;
      const offsetPosition = targetPosition - headerHeight;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Cerrar el menú al hacer clic en el enlace
      menu.classList.remove("bx-x");
      navlist.classList.remove("open");
    }
  };
});
