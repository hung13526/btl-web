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
