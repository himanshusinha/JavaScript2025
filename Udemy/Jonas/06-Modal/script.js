"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden"); //  show modal
  overlay.classList.remove("hidden"); //  show overlay
};

const closeModal = function () {
  modal.classList.add("hidden"); // hide modal
  overlay.classList.add("hidden"); // hide overlay
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal); // openModal->button ke click per trigger hoga agar openModal()->use karte to wo phle he call ho jata

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
