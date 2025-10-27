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


let index = 0;
    const slides = document.querySelectorAll('.carousel img');
    const counter = document.getElementById('counter');

    function showSlide(i) {
      slides.forEach((img, idx) => {
        img.classList.toggle('active', idx === i);
      });
      counter.textContent = (i+1) + '/' + slides.length;
    }

    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    }

    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    // 
    const contents = [
      {
        title: "Phòng chờ Club InterContinental",
        text: "Club InterContinental là thiên đường nghỉ dưỡng độc quyền, mang đến sự thoải mái tuyệt vời nhất trong không gian sang trọng với dịch vụ cá nhân hóa và tiện nghi tuyệt hảo. Đội ngũ chuyên nghiệp của chúng tôi luôn sẵn sàng hỗ trợ để đảm bảo kỳ nghỉ của bạn vượt xa mong đợi.",
        img: "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-2531830432-2x1"
      },
      {
        title: "Quán bar hoàng hôn",
        text: "Sunset Bar là điểm đến lý tưởng cho những ly cocktail, mang đến trải nghiệm độc đáo không nơi nào sánh bằng tại Hà Nội. Nằm giữa ba gian nhà sàn trong khung cảnh ven hồ tuyệt đẹp, du khách chỉ cần tản bộ qua cây cầu được thắp sáng bởi những ngọn đuốc. Khám phá bí mật được giữ kín nhất của thành phố, đội ngũ nhân viên trứ danh của chúng tôi sẽ mang đến cho bạn ly cocktail hoàn hảo cho mọi dịp.",
        img: "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-8359432536-2x1"
      },
      {
        title: "Trưởng phòng lễ tân",
        text: "Đội ngũ Concierge của chúng tôi sẽ đáp ứng mọi mong đợi của bạn khi bạn liên hệ với InterContinental Hanoi Westlake. Đội ngũ Concierge của chúng tôi được trang bị đầy đủ để hỗ trợ bạn mọi thứ bạn cần, bao gồm: các điểm tham quan trong thành phố, chỉ đường, dịch vụ chuyển phát nhanh, dịch vụ trông trẻ, dịch vụ xe limousine, sạc điện thoại, dịch vụ visa, và nhiều hơn nữa.",
        img: "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-4560622597-2x1"
      },
      {
        title: "Hồ bơi ngoài trời",
        text: "Dịch vụ hồ bơi chuyên nghiệp, được cá nhân hóa và phục vụ đồ uống giải khát cùng các món ăn ngon.",
        img: "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-4068424105-2x1"
      },
      {
        title: "Câu lạc bộ sức khỏe",
        text: "Nghỉ dưỡng mà không dành chút thời gian riêng tư thì còn gì bằng? Tại InterContinental Hanoi Westlake, bạn có thể dành trọn một ngày cho sức khỏe thể chất. Dành hàng giờ trong phòng tập thể dục hiện đại hoặc tham gia lớp thể dục, chúng tôi sẽ đồng hành cùng bạn trên hành trình hạnh phúc.",
        img: "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-7783230711-2x1"
      }
    ];

    function showTab(index) {
      // đổi trạng thái nút
      document.querySelectorAll(".tab").forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
      });
      // đổi nội dung
      const c = contents[index];
      document.getElementById("content").style.backgroundImage = `url(${c.img})`;
      document.getElementById("content").innerHTML = `
        <div class="content-box">
          <h2>${c.title}</h2>
          <p>${c.text}</p>
          <a href="#">Learn more →</a>
        </div>
      `;
    }

    // Hiển thị tab đầu tiên
    window.addEventListener("DOMContentLoaded", () => {
  showTab(0);
});

//
const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        header.classList.toggle("active");

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
