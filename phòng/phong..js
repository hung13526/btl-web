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

      // Slider (prev/next + auto)
      (function () {
        const slides = document.querySelector(".slides");
        const imgs = document.querySelectorAll(".slides img");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");
        const counter = document.getElementById("counter");
        let index = 0;
        const total = imgs.length;

        function update() {
          slides.style.transform = `translateX(-${index * 100}%)`;
          if (counter) counter.textContent = `${index + 1}/${total}`;
        }

        // prev/next (if buttons exist)
        if (prev && next) {
          prev.addEventListener("click", () => {
            index = (index - 1 + total) % total;
            update();
          });
          next.addEventListener("click", () => {
            index = (index + 1) % total;
            update();
          });
        }

        // autoplay
        setInterval(() => {
          index = (index + 1) % total;
          update();
        }, 5000);

        update();
      })();

      // Accordion
      // Accordion
document.querySelectorAll(".accordion-header").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("open");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
    }
  });
});

