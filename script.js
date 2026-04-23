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
            title: 'Ecolearn',
            category: 'Web Learning',
            tech: 'React, Node.js, Next.js',
            impact: '300% Engagement',
            desc: 'A comprehensive web learning platform designed for optimal knowledge retention. Ecolearn integrates interactive modules and progress tracking.',
            img: 'images/ecolearnind.png',
            link: 'https://ecolearnind.vercel.app'
        },
        'nexus-mobile': {
            title: 'Furnihome id',
            category: 'Furniture Website',
            tech: 'React, Three.js, Tailwind',
            impact: '5M+ Active Users',
            desc: 'Redefining furniture shopping through spatial UI and ultra-fluid animations. Furnihome id offers an immersive catalog experience.',
            img: 'images/furnihome project.png',
            link: 'https://furnihomeid.vercel.app'
        },
        'vortex-cloud': {
            title: 'Zenith OS',
            category: 'Productivity Tools',
            tech: 'Electron, React, Node.js',
            impact: '99.99% Global Uptime',
            desc: 'A comprehensive productivity suite with native performance. Zenith OS allows seamless workflow management for professionals.',
            img: 'images/zenith.png',
            link: 'https://zenithosid.vercel.app'
        },
        'zenith-shop': {
            title: 'AURA SNEAKERS',
            category: 'E-Commerce Website',
            tech: 'Shopify Plus, GSAP, Node.js',
            impact: '150% Conversion Lift',
            desc: 'The gold standard of sneaker e-commerce. AURA SNEAKERS combines high-fashion aesthetics with a seamless checkout engine for a zero-friction shopping experience.',
            img: 'images/aurasneakers.jpeg',
            link: 'https://aurasneakersid.vercel.app/'
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
                
                const linkEl = document.getElementById('modal-link');
                if (linkEl) {
                    linkEl.href = data.link || '#';
                }

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scroll
            }
        });
    });

    const insightData = {
        'renaissance': {
            title: 'The Renaissance of Artificial Intelligence',
            category: 'Neural Core',
            img: 'images/artic1.jpg',
            desc: 'As AI rapidly evolves, we are entering a new era of computational capability. The transition from simple automated tasks to complex reasoning algorithms is reshaping industries at an unprecedented scale. Our analysis delves into how sub-millisecond processing power is redefining human-machine collaboration in the modern workspace.',
            takeaway: 'Sub-millisecond processing bridges the gap between human intuition and machine execution.'
        },
        'immune': {
            title: 'Architecting Immune Digital Systems',
            category: 'Elite Defense',
            img: 'images/artiic2.jpg',
            desc: 'Traditional cybersecurity measures act as a static wall against dynamic threats. The new standard requires an immune system approach—self-healing architectures that predict, isolate, and neutralize breaches before they occur. We explore the implementation of AI-driven immunity to secure vital infrastructures.',
            takeaway: 'Predictive, self-healing architectures replace static firewalls for robust security.'
        },
        'spatial': {
            title: 'Luxury in the Third Dimension',
            category: 'Spatial UX',
            img: 'images/artiic3.jpg',
            desc: 'The web is moving from 2D flat layouts to immersive spatial environments. True luxury in digital design is no longer just aesthetics, but the seamless, fluid interaction within a 3D space. This shift demands new principles in depth perception, motion timing, and psychological color theory to evoke genuine emotion.',
            takeaway: 'Spatial UX translates physical luxury into fluid, emotional digital experiences.'
        }
    };

    const insightModal = document.getElementById('insight-modal');
    const insightCards = document.querySelectorAll('.insight-trigger');

    insightCards.forEach(card => {
        card.addEventListener('click', () => {
            const insightId = card.getAttribute('data-insight');
            const data = insightData[insightId];

            if (data) {
                document.getElementById('insight-modal-img').src = data.img;
                document.getElementById('insight-modal-title').innerText = data.title;
                document.getElementById('insight-modal-category').innerText = data.category;
                document.getElementById('insight-modal-desc').innerText = data.desc;
                document.getElementById('insight-modal-takeaway').innerText = data.takeaway;

                insightModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeModals = document.querySelectorAll('.close-modal');
    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = 'auto';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
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
