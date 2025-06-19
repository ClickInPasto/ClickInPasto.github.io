document.addEventListener('DOMContentLoaded', function() {
    // Sample services data - replace with your actual services
    const services = [
        {
            name: "Asesorías",
            description: "Consultoría en ventas, estudio de mercado, creación de proyectos, asesoría de comercio exterior (importaciones y exportaciones).",
            image: "images/services/asesorias.jpg"
        },
        {
            name: "Branding",
            description: "Diseños de logos, colores y piezas que llevarán el ADN de tu marca o empresa.",
            image: "images/services/branding.jpg"
        },
        {
            name: "Marketing Digital",
            description: "Páginas web, e-commerce, landing pages, administración de redes sociales, chatbots y automatización.",
            image: "images/services/marketing.jpg"
        },
        {
            name: "Impresión UV",
            description: "Impresión en gran formato en diferentes materiales con tecnología UV de alta calidad.",
            image: "images/services/impresion.jpg"
        },
        {
            name: "Corte Láser",
            description: "Precisión y calidad en corte láser para diversos materiales y aplicaciones.",
            image: "images/services/laser.jpg"
        },
        {
            name: "Productos POP",
            description: "Soluciones creativas para puntos de venta que destacan tu producto.",
            image: "images/services/pop.jpg"
        },
        {
            name: "Bolsas",
            description: "Bolsas de cambrel, lienzo, plásticos ecológicos reutilizables para tu marca.",
            image: "images/services/bolsas.jpg"
        },
        {
            name: "Pantallas LED",
            description: "Solución completa en pantallas LED para interiores y exteriores.",
            image: "images/services/led.jpg"
        },
        {
            name: "Letreros Exterior",
            description: "Diseño e instalación de letreros exteriores duraderos y llamativos.",
            image: "images/services/letreros.jpg"
        },
        {
            name: "Diseño de Fachadas",
            description: "Diseño de fachadas en material Alucobond y otros materiales premium.",
            image: "images/services/fachadas.jpg"
        },
        {
            name: "Render y Eventos",
            description: "Render y montaje de eventos con diseños impactantes y memorables.",
            image: "images/services/eventos.jpg"
        }
    ];

    const servicesContainer = document.getElementById('services-container');
    
    // Load services into carousel
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.name}" class="service-image">
            <div class="service-info">
                <h3 class="service-name">${service.name}</h3>
                <p class="service-description">${service.description}</p>
            </div>
        `;
        
        servicesContainer.appendChild(serviceCard);
    });

    // Initialize carousel
    const carousel = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (serviceCards.length > 0) {
        let currentIndex = 0;
        let autoAdvanceInterval;
        const cardWidth = serviceCards[0].offsetWidth + 30;
        
        const updateCarousel = () => {
            carousel.scrollTo({
                left: currentIndex * cardWidth,
                behavior: 'smooth'
            });
        };
        
        // Previous button click
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : serviceCards.length - 1;
            updateCarousel();
            resetAutoAdvance();
        });
        
        // Next button click
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < serviceCards.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
            resetAutoAdvance();
        });
        
        // Auto-advance carousel
        const startAutoAdvance = () => {
            autoAdvanceInterval = setInterval(() => {
                currentIndex = (currentIndex < serviceCards.length - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            }, 5000);
        };
        
        const resetAutoAdvance = () => {
            clearInterval(autoAdvanceInterval);
            startAutoAdvance();
        };
        
        // Pause on hover
        carousel.addEventListener('mouseenter', () => clearInterval(autoAdvanceInterval));
        carousel.addEventListener('mouseleave', startAutoAdvance);
        
        // Initialize
        updateCarousel();
        startAutoAdvance();
    }
});