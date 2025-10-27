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
function changeContent(type, event) {
  event.preventDefault(); // Ngăn load lại trang
  const mainImage = document.getElementById("mainImage");

  let newSrc = "";
  switch (type) {
    case "weddings":
      newSrc = "/img/Trang-chu/ah1.avif"; // đúng tên file bạn có
      break;
    case "meetings":
      newSrc = "/img/trang-chu/ah2.avif";
      break;
    case "penfolds":
      newSrc = "/img/Trang-chu/ah3.avif";
      break;
    case "dining":
      newSrc = "/img/Trang-chu/ah4.avif";
      break;
  }

  console.log("Ảnh mới:", newSrc); // test xem đường dẫn đúng chưa

  // Đổi ảnh kèm hiệu ứng mờ
  mainImage.classList.remove("active");
  setTimeout(() => {
    mainImage.src = newSrc;
    mainImage.classList.add("active");
  }, 300);
}
const menuLinks = document.querySelectorAll("nav a");




