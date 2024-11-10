import { data } from "./data.js";
import { toggleTheme, loadTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  loadTheme(); // Cargar el tema guardado
  loadFigureDetails();
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);

  const modal = document.getElementById("image-modal");
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});

function loadFigureDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const figure = data[id];

  if (figure) {
    document.getElementById("figure-title").textContent = figure.title;

    const detailsGallery = document.getElementById("details-gallery");
    figure.images.forEach((imageUrl) => {
      const imageCard = document.createElement("div");
      imageCard.className = "image-card";
      imageCard.innerHTML = `<img src="${imageUrl}" alt="${figure.title}">`;

      imageCard.querySelector("img").addEventListener("click", () => {
        openModal(imageUrl);
      });

      detailsGallery.appendChild(imageCard);
    });
  } else {
    document.getElementById("details-gallery").innerHTML =
      "<p>Figure not found.</p>";
  }
}

function openModal(imageUrl) {
  const modal = document.getElementById("image-modal");
  const modalImage = modal.querySelector("img");
  modalImage.src = imageUrl;
  modal.style.display = "flex"; // Mostrar el modal
}

function closeModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none"; // Ocultar el modal
}
