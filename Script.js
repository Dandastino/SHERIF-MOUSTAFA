document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('#menu a');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
  
        if (targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          targetElement.scrollIntoView({
            behavior: 'smooth', 
            block: 'center',
          });
        } else {
          window.location.href = targetId;
        }
      });
    });
});

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('Message').value;

    if (name && surname && email && subject && message) {
        document.getElementById('successModal').style.display = 'flex';

        document.getElementById('contactForm').reset();
    }
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide when reaching the end
    showSlide(currentSlide);
}

// Initialize the first slide to show
showSlide(currentSlide);

// Change slides every 3 seconds
setInterval(nextSlide, 3000);
