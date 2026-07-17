// Global variables
let portfolioData = {};
let skillsData = {};
let projectsData = {};

// DOM elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const backToTopBtn = document.getElementById('back-to-top');
const skillsContainer = document.getElementById('skills-container');
const projectsGrid = document.getElementById('projects-grid');
const experienceTimeline = document.getElementById('experience-timeline');
const certificationsGrid = document.getElementById('certifications-grid');
const projectModal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Initialize AOS animation library
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Load data
        await loadData();
        
        // Initialize components
        initializeNavigation();
        initializeScrollEffects();
        loadSkills();
        loadProjects();
        loadExperience();
        initializeProjectFiltering();
        initializeModal();
        initializeContactForm();
        initializeCounters();
        
        console.log('Portfolio initialized successfully');
        
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        showError('Failed to load portfolio content. Please refresh the page.');
    }
});

// Load data from JSON files
async function loadData() {
    try {
        const [portfolioResponse, skillsResponse, projectsResponse] = await Promise.all([
            fetch('data/portfolio-data.json'),
            fetch('data/skills-data.json'),
            fetch('data/projects-data.json')
        ]);
        
        if (!portfolioResponse.ok || !skillsResponse.ok || !projectsResponse.ok) {
            throw new Error('Failed to fetch data');
        }
        
        portfolioData = await portfolioResponse.json();
        skillsData = await skillsResponse.json();
        projectsData = await projectsResponse.json();
        
        console.log('Data loaded successfully');
        
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
}

// Initialize navigation
function initializeNavigation() {
    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile nav when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Active navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Back to top button
    function handleBackToTop() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', function() {
        handleNavbarScroll();
        handleBackToTop();
    });
    
    // Back to top click handler
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Load skills section
function loadSkills() {
    if (!skillsData.skillCategories) {
        console.error('Skills data not loaded');
        return;
    }
    
    skillsContainer.innerHTML = skillsData.skillCategories.map(category => `
        <div class="skill-category" data-aos="fade-up" data-aos-delay="${skillsData.skillCategories.indexOf(category) * 100}">
            <div class="category-header">
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h3 class="category-title">${category.category}</h3>
            </div>
            <div class="skills-list">
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-name">
                            <i class="${skill.icon} skill-icon"></i>
                            <span>${skill.name}</span>
                        </div>
                        <div class="skill-level">${skill.level}%</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Load projects section
function loadProjects() {
    if (!projectsData.projects) {
        console.error('Projects data not loaded');
        return;
    }
    
    // Sort projects: featured first, then by year
    const sortedProjects = projectsData.projects.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return parseInt(b.year) - parseInt(a.year);
    });
    
    projectsGrid.innerHTML = sortedProjects.map((project, index) => `
        <div class="project-card" 
             data-category="${project.category.toLowerCase().replace(/\s+/g, '-')}"
             data-aos="fade-up" 
             data-aos-delay="${index * 100}"
             onclick="openProjectModal(${project.id})">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='images/cloud-security-project.png'">
                <div class="project-status">${project.status}</div>
            </div>
            <div class="project-content">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.slice(0, 4).map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                    ${project.technologies.length > 4 ? `<span class="tech-tag">+${project.technologies.length - 4} more</span>` : ''}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                        <i class="fab fa-github"></i>
                        Source Code
                    </a>
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Load experience section
function loadExperience() {
    if (!portfolioData.experience) {
        console.error('Experience data not loaded');
        return;
    }
    
    // Load experience timeline
    experienceTimeline.innerHTML = portfolioData.experience.map((job, index) => `
        <div class="timeline-item" data-aos="fade-right" data-aos-delay="${index * 200}">
            <div class="timeline-content">
                <h3 class="job-title">${job.position}</h3>
                <div class="company-name">${job.company}</div>
                <div class="job-duration">${job.duration}</div>
                <p class="job-description">${job.description}</p>
                <ul class="job-achievements">
                    ${job.achievements.map(achievement => `
                        <li>${achievement}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');
    
    // Load certifications
    if (portfolioData.certifications) {
        certificationsGrid.innerHTML = portfolioData.certifications.map((cert, index) => `
            <div class="cert-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="cert-name">${cert.name}</div>
                <div class="cert-issuer">${cert.issuer}</div>
                <div class="cert-year">${cert.year}</div>
            </div>
        `).join('');
    }
}

// Initialize project filtering
function initializeProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Initialize modal
function initializeModal() {
    // Close modal when clicking close button
    modalClose.addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

// Open project modal
function openProjectModal(projectId) {
    const project = projectsData.projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = project.title;
    
    modalBody.innerHTML = `
        <div class="modal-project-content">
            <div class="modal-project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="modal-project-info">
                <div class="project-category">${project.category}</div>
                <p class="project-description">${project.longDescription}</p>
                
                <div class="project-highlights">
                    <h4>Key Highlights</h4>
                    <ul>
                        ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-technologies">
                    <h4>Technologies Used</h4>
                    <div class="tech-grid">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-actions">
                    <a href="${project.github}" target="_blank" class="btn btn-github">
                        <i class="fab fa-github"></i>
                        View Source Code
                    </a>
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#28a745';
            
            // Reset form
            this.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
            
            // Show success message
            alert('Thank you for your message! I\'ll get back to you soon.');
            
        }, 2000);
    });
}

// Initialize animated counters
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Show error message
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-notification';
    errorDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4757;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 9999;
            animation: slideIn 0.3s ease;
        ">
            <i class="fas fa-exclamation-triangle"></i>
            ${message}
        </div>
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some extra interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title .title-line');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${parallax}px)`;
        }, 10));
    }
    
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Add CSS animation for ripple effect
const rippleCSS = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Global functions (needed for onclick handlers)
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// Performance optimization
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Non-critical tasks
        console.log('Portfolio ready for interaction');
    });
}

// Service Worker registration for offline capability
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}
