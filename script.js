window.onload = function () {
  const scrollBtn = document.querySelector(".scroll-btn");
  scrollBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
};

// Pop UP Foto
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.querySelector(".modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = item.querySelector("img").src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Tombol Button
const galleryButton = document.querySelector(".gallery-button");

galleryButton.addEventListener("click", () => {
  galleryButton.classList.add("clicked");
  setTimeout(() => {
    galleryButton.classList.remove("clicked");
    // Ganti URL ini sesuai dengan URL halaman Gallery
    window.location.href = "#gallery";
  }, 600); // Sesuaikan durasi animasi (ms) di sini
});


// Pemutaran lagu Java Script
const audio = document.getElementById("myAudio");
const audioButton = document.querySelector(".audio-button");

audioButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioButton.textContent = "Pause";
  } else {
    audio.pause();
    audioButton.textContent = "Play";
  }

  audioButton.classList.add("clicked");
  setTimeout(() => {
    audioButton.classList.remove("clicked");
  }, 1000); // Sesuaikan durasi animasi (ms) di sini
});

// Animasi saat tombol di click
