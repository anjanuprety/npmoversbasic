document.addEventListener("DOMContentLoaded", function () {
    // Navbar behavior on scroll
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('#menu-btn');
    const navbarLinks = document.querySelector('.navbar .nav-links');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            navbar.style.top = "-100px"; // Hide navbar when scrolling down
        } else {
            navbar.style.top = "0"; // Show navbar when at the top
        }

        if (window.scrollY > 60) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    });

    // Mobile menu toggle
    menu.addEventListener('click', function () {
        menu.classList.toggle('fa-times');
        navbarLinks.classList.toggle('active');
    });

    // Close mobile menu when scrolling
    window.addEventListener('scroll', function () {
        menu.classList.remove('fa-times');
        navbarLinks.classList.remove('active');
    });

    // Read More / Read Less toggle for "Why Us" section
    const whyList = document.getElementById("why-list");
    const extraItems = document.querySelectorAll(".extra");
    const readMoreBtn = document.querySelector(".read-more");

    if (readMoreBtn) {
        readMoreBtn.addEventListener("click", function () {
            if (whyList.classList.contains("expanded")) {
                whyList.classList.remove("expanded");
                extraItems.forEach(item => item.style.display = "none");
                readMoreBtn.textContent = "Read More";
            } else {
                whyList.classList.add("expanded");
                extraItems.forEach(item => item.style.display = "block");
                readMoreBtn.textContent = "Read Less";
            }
        });
    }

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        counter.innerText = '0';
        
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200; // Adjust speed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target; // Ensure exact target value
            }
        };

        updateCounter();
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Collect form data
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let subject = document.getElementById("subject").value;
            let message = document.getElementById("message").value;

            // Simulate form submission
            // alert(`Thank you, ${name}! Your message has been sent.`);

            // Clear form fields
            contactForm.reset();
        });
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_7qcgmog', 'template_o0xb7fe', this)
    .then(() => {
      // alert('Message sent successfully!');
      this.reset(); // clear form
    }, (error) => {
      alert('Failed to send message. Error: ' + JSON.stringify(error));
    });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Example: Simulate sending (replace with actual sending logic)
    setTimeout(() => {
        showFormMessage("Your message has been sent successfully. We'll get back to you soon!", "success");
        document.getElementById("contactForm").reset();
    }, 500);
});

function showFormMessage(message, type) {
    const msgDiv = document.getElementById("formMessage");
    msgDiv.textContent = message;
    msgDiv.className = `form-message ${type}`;
    msgDiv.style.display = "block";

    // Optional: Auto-hide after 5 seconds
    setTimeout(() => {
        msgDiv.style.display = "none";
    }, 15000);
}
