// ================================
// NEORATECH SCRIPT.JS
// ================================

// ======= INIT AOS (Scroll Animation) =======
AOS.init({
  duration: 1000,
  once: true,
});

// ======= NAVBAR SCROLL BEHAVIOR =======
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ======= RESPONSIVE NAVBAR TOGGLE =======
const navMenu = document.querySelector("nav ul");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active"); // Bisa animasi toggle
});

// Tutup menu saat klik link (mobile)
document.querySelectorAll("nav ul li a").forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  })
);

// ======= HERO SECTION - TYPED TEXT =======
const typed = new Typed("#typed", {
  strings: [
    "Building the Future.",
    "Empowering Intelligence.",
    "Beyond Innovation.",
  ],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

// ======= HERO GLOW PARALLAX EFFECT =======
const glow = document.querySelector(".background-glow");
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  glow.style.transform = `translate(-50%, -50%) rotateX(${y}deg) rotateY(${x}deg)`;
});

// ======= CLICK ANIMATION (Ripple) =======
document.querySelectorAll(".btn-primary, .project-card, .service-card, .member").forEach(el => {
  el.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    el.appendChild(ripple);

    const rect = el.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    setTimeout(() => ripple.remove(), 600);
  });
});

// Ripple CSS (injected dynamically)
const rippleStyle = document.createElement("style");
rippleStyle.innerHTML = `
.ripple {
  position: absolute;
  background: rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  transform: scale(0);
  animation: ripple-effect 0.6s linear;
  pointer-events: none;
  width: 100px;
  height: 100px;
}
@keyframes ripple-effect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`;
document.head.appendChild(rippleStyle);

// ======= TESTIMONIAL AUTO SLIDER =======
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === index) t.classList.add("active");
  });
}

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 5000); // setiap 5 detik ganti testimoni

// ======= SMOOTH SCROLL =======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ======= SCROLL TO TOP BUTTON =======
const scrollBtn = document.createElement("button");
scrollBtn.classList.add("scroll-top");
scrollBtn.innerHTML = "↑";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if(window.scrollY > 400){
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

// ======= FORM VALIDATION =======
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Message sent successfully! We'll get back to you soon.");
  form.reset();
});

// ======= GSAP SCROLL ANIMATIONS =======
if (typeof gsap !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Animate sections
  document.querySelectorAll("section").forEach((sec) => {
    gsap.from(sec, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sec,
        start: "top 80%",
      },
    });
  });

  // Animate cards
  gsap.utils.toArray(".service-card, .project-card, .member").forEach((card) => {
    gsap.from(card, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });
  });

  // Timeline animation roadmap
  gsap.utils.toArray(".milestone").forEach((ms) => {
    gsap.from(ms, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ms,
        start: "top 90%",
      },
    });
  });
  }
