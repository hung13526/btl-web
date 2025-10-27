document.querySelectorAll(".carousel-container").forEach((container) => {
  const carousel = container.querySelector(".carousel");
  const slides = container.querySelectorAll(".carousel-slide");
  const prevBtn = container.querySelector(".carousel-prev");
  const nextBtn = container.querySelector(".carousel-next");

  let index = 0;

  function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;

    carousel.style.transform = `translateX(${-index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
  });

  // Khởi tạo
  showSlide(index);
});

const openLogin = document.getElementById("openLogin");
const openRegister = document.getElementById("openRegister");
const modal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeModal");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const switchToRegister = document.getElementById("switchToRegister");
const switchToLogin = document.getElementById("switchToLogin");

// Mở modal với form đăng nhập
openLogin.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

// Mở modal với form đăng ký
openRegister.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// Đóng modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Chuyển form
switchToRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});
const links = document.querySelectorAll(".tieude a");
const mainImage = document.getElementById("mainImage");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const newSrc = this.getAttribute("data-img");

    // fade out
    mainImage.classList.remove("active");

    setTimeout(() => {
      mainImage.src = newSrc;
      mainImage.classList.add("active");
    }, 400); // khớp với transition CSS
  });
});
