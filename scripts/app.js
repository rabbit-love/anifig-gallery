import { data } from "./data.js";
import { toggleTheme, loadTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  loadTheme(); // Cargar el tema guardado
  renderGallery();
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);
});

function renderGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  for (const id in data) {
    const figure = data[id];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${figure.presentation}" alt="${figure.title}">
            <div class="card-title">${figure.title}</div>
            <div class="card-date">${figure.date}</div>
        `;
    card.addEventListener("click", () => {
      window.location.href = `details.html?id=${id}`;
    });
    gallery.appendChild(card);
  }
}
