document.addEventListener('DOMContentLoaded', function() {
    // 1. Menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Cerrar menú al hacer clic en enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // 2. Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 3. Animaciones al hacer scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const windowHeight = window.innerHeight;
        const triggerBottom = windowHeight * 0.85;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animated');
            }
        });
    }

    function setupAnimations() {
        // Elementos a animar
        const sections = document.querySelectorAll('section');
        const headings = document.querySelectorAll('.section-title, .section-subtitle');
        const cards = document.querySelectorAll('.about-card, .service-card, .testimonial-card');
        const benefits = document.querySelectorAll('.benefit-card');
        
        // Configurar animaciones
        headings.forEach(heading => {
            heading.classList.add('animate-on-scroll', 'slide-up');
        });
        
        cards.forEach((card, index) => {
            card.classList.add('animate-on-scroll', 'fade-in');
            card.style.animationDelay = `${index * 0.1}s`;
        });
        
        benefits.forEach((benefit, index) => {
            benefit.classList.add('animate-on-scroll', 'scale-in');
            benefit.style.animationDelay = `${index * 0.15}s`;
        });
        
        sections.forEach(section => {
            const content = section.querySelector('.container');
            if (content) {
                content.classList.add('animate-on-scroll', 'fade-in');
            }
        });
        
        // Animación especial para el hero
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('animate-on-scroll', 'slide-left');
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.classList.add('animate-on-scroll', 'slide-right');
            }
        }
    }

    // Iniciar animaciones
    setupAnimations();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar la página
    
    // 4. Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío (reemplazar con código real)
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }

    // 5. Efecto hover para tarjetas de servicios
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});