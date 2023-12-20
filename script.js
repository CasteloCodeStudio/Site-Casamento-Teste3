const notice = document.querySelector(".notice");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  notice.classList.add("close");
});

const menuIcon = document.querySelector('.menu-icon');
const presentes = document.querySelector('.presentes');

menuIcon.addEventListener("click", (e) => {
  // Abre o menu.
  presentes.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  // Se o elemento clicado não for o menu, feche-o.
  if (e.target !== presentes) {
    // Obtém o retângulo delimitador do elemento clicado.
    const rect = e.target.getBoundingClientRect();

    // Se o retângulo delimitador estiver fora da tela, feche o menu.
    if (rect.top < 0 || rect.left < 0 || rect.bottom > window.innerHeight || rect.right > window.innerWidth) {
      presentes.classList.remove("open");
    }
  }
});