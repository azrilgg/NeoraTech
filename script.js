document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close mobile menu when link clicked
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.innerHTML = '☰';
            document.body.style.overflow = 'auto';
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
            const icon = header.querySelector('span');
            icon.innerText = item.classList.contains('active') ? '−' : '+';
        });
    });

    // Typed.js Implementation
    new Typed('#typed', {
        strings: [
            'Pioneering AI Solutions',
            'Next-Gen Web Experiences',
            'Advanced Cybersecurity',
            'Cloud Infrastructure Excellence'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // GSAP Hero Animations
    gsap.from('.hero-content h1', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.2
    });

    gsap.from('.hero-content p', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.8
    });

    gsap.from('.hero-btns', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 1.2
    });

    // Mouse Parallax for Cards and Steps
    const cards = document.querySelectorAll('.service-card, .voice-card, .nt-workflow-step, .milestone-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(card, {
                rotateY: x * 20,
                rotateX: -y * 20,
                translateZ: 50,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateY: 0,
                rotateX: 0,
                translateZ: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });

    // Mouse Parallax for Hero
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 30;
        const y = (e.clientY - window.innerHeight / 2) / 30;

        gsap.to('.hero-content', {
            rotateY: x,
            rotateX: -y,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Smooth Scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project Modal Logic (God Tier)
    const projectData = {
        'neural-core': {
            title: 'Neural Core',
            category: 'AI Infrastructure',
            tech: 'PyTorch, CUDA, Next.js',
            impact: '300% Processing Speed',
            desc: 'A planetary-scale AI backbone designed for sub-millisecond neural processing. We architected the entire core from scratch using low-level optimization and advanced 3D monitoring interfaces.',
            img: 'images/project1.jpg'
        },
        'nexus-mobile': {
            title: 'Nexus Mobile',
            category: 'Next-Gen App',
            tech: 'Flutter, WebGL, Firebase',
            impact: '5M+ Active Users',
            desc: 'Redefining mobile interaction through spatial UI and ultra-fluid animations. Nexus is not just an app; it\'s a portable ecosystem that adapts to user behavior in real-time.',
            img: 'images/project2.jpg'
        },
        'vortex-cloud': {
            title: 'Vortex Cloud',
            category: 'Platform Dashboard',
            tech: 'Three.js, D3.js, AWS',
            impact: '99.99% Global Uptime',
            desc: 'A decentralized cloud monitoring platform that visualizes global data streams in 3D space. Vortex allows enterprise leaders to see their empire from a God-eye view.',
            img: 'images/project3.jpg'
        },
        'zenith-shop': {
            title: 'Zenith Shop',
            category: 'E-Commerce Engine',
            tech: 'Shopify Plus, GSAP, Node.js',
            impact: '150% Conversion Lift',
            desc: 'The gold standard of luxury e-commerce. Zenith combines high-fashion aesthetics with a military-grade checkout engine for a zero-friction shopping experience.',
            img: 'images/project4.jpg'
        }
    };

    const modal = document.getElementById('project-modal');
    const projectCards = document.querySelectorAll('.project-card');
    const closeModal = document.querySelector('.close-modal');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectData[projectId];

            if (data) {
                document.getElementById('modal-img').src = data.img;
                document.getElementById('modal-title').innerText = data.title;
                document.getElementById('modal-category').innerText = data.category;
                document.getElementById('modal-tech').innerText = data.tech;
                document.getElementById('modal-impact').innerText = data.impact;
                document.getElementById('modal-desc').innerText = data.desc;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scroll
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scroll
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Hero Visibility Bug Fix (0% Bugs)
    // Forced show after 100ms just in case GSAP/AOS hangs
    setTimeout(() => {
        gsap.to('.hero-content h1, .hero-content h2, .hero-content p', {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });
    }, 100);
});
