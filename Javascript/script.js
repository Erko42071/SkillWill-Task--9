const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalContainer = document.getElementById("modal-container");

// Add event listeners to the buttons
openModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
modalContainer.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  });