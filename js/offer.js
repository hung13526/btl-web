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
closeBtn.addEventListener("click", () => (modal.style.display = "none"));
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

links.forEach((link) => {
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
// Carousel chuyển ảnh
/* === Carousel center mode === */
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const indicator = document.querySelector(".indicator");

let slideWidth = 0;
let gap = 0;
let isAnimating = false;

// Duplicate track 3 lần để infinite thật sự
const trackOriginal = slides.map((slide) => slide.cloneNode(true));
trackOriginal.forEach((slide) => track.appendChild(slide.cloneNode(true)));
trackOriginal.forEach((slide) => track.appendChild(slide.cloneNode(true)));

const allSlides = Array.from(track.children);
let currentIndex = slides.length; // bắt đầu từ track gốc ở giữa

/** Tính kích thước slide */
function calcDimensions() {
  const style = getComputedStyle(allSlides[0]);
  gap = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  slideWidth = allSlides[0].offsetWidth;
  updateCarousel(false);
}

/** Cập nhật chỉ báo */
function updateIndicator() {
  const realIndex =
    ((currentIndex % slides.length) + slides.length) % slides.length;
  indicator.textContent = `${realIndex + 1}/${slides.length}`;
}

/** Cập nhật vị trí carousel */
function updateCarousel(animate = true) {
  const containerWidth = track.parentElement.clientWidth;
  const offset =
    (containerWidth - slideWidth) / 2 - currentIndex * (slideWidth + gap);
  track.style.transition = animate ? "transform 0.45s ease" : "none";
  track.style.transform = `translateX(${offset}px)`;
  updateIndicator();
}

/** Chuyển slide next */
function moveNext() {
  if (isAnimating) return;
  isAnimating = true;
  currentIndex++;
  updateCarousel();

  setTimeout(() => {
    // Khi đi quá nửa track duplicate, reset về track gốc
    if (currentIndex >= slides.length * 2) {
      currentIndex -= slides.length;
      updateCarousel(false);
    }
    isAnimating = false;
  }, 450);
}

/** Chuyển slide prev */
function movePrev() {
  if (isAnimating) return;
  isAnimating = true;
  currentIndex--;
  updateCarousel();

  setTimeout(() => {
    // Khi đi quá nửa track duplicate, reset về track gốc
    if (currentIndex < slides.length) {
      currentIndex += slides.length;
      updateCarousel(false);
    }
    isAnimating = false;
  }, 450);
}

// Gán sự kiện nút
nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);

// Responsive
window.addEventListener("resize", () => {
  calcDimensions();
});

// Init
window.addEventListener("load", () => {
  calcDimensions();
  updateCarousel(false);
});

// ======== Chuyển ảnh và nội dung khi nhấn nút bên trái ========

// Mảng dữ liệu ảnh + nội dung
const eventData = [
  {
    img: "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-7097218259-2x1",
    title: "HỌP MẶT VÌ ĐIỀU TỐT ĐẸP",
    text: `Lên kế hoạch cho một trải nghiệm hội họp bền <br>
           vững hơn tại InterContinental Hanoi Westlake`,
  },
  {
    img: "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-7097218268-2x1",
    title: "HỘI HỌP & SỰ KIỆN",
    text: `Các sự kiện độc đáo xứng đáng có những địa điểm độc đáo. 
           Các không gian chức năng đa năng của chúng tôi luôn sẵn sàng 
           đáp ứng nhu cầu của bạn, từ các cuộc họp kinh doanh trang trọng 
           đến lễ kỷ niệm. Nhân viên lập kế hoạch và phục vụ ăn uống ở bên cạnh 
           bạn sẽ chăm chút từng chi tiết, đảm bảo những trải nghiệm trân quý 
           và đáng nhớ cho bạn và khách hoặc đồng nghiệp của bạn.`,
  },
  {
    img: "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-4105979358-2x1",
    title: "ĐÁM CƯỚI",
    text: `Kỷ niệm ngày đặc biệt của bạn thật phong cách và sang trọng 
           với Khu nghỉ dưỡng Lãng mạn nhất Việt Nam - InterContinental Hanoi Westlake, 
           theo bình chọn của World Travel Awards. 
           Bạn có nhiều lựa chọn để lựa chọn, bao gồm Phòng tiệc sang trọng 
           của chúng tôi và Quán bar Sunset ngoài trời mang đậm hơi thở.`,
  },
];

// Gọi các phần tử cần thao tác
const eventBtns = document.querySelectorAll(".event-btn");
const eventImg = document.querySelector(".info-img img");
const infoTitle = document.querySelector(".info-text h3");
const infoText = document.querySelector(".info-text p");

// Gắn sự kiện cho từng nút
eventBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Xóa trạng thái active cũ
    eventBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Cập nhật ảnh và nội dung
    eventImg.src = eventData[index].img;
    infoTitle.textContent = eventData[index].title;
    infoText.innerHTML = eventData[index].text;
  });
});
