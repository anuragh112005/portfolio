/**
 * ==============================================================================
 * PERSONAL DEVELOPER PORTFOLIO — JAVASCRIPT LOGIC
 * Language: Pure Vanilla JavaScript (ES6+)
 * Author: Anurag Chaurasia (2nd Year B.Tech CSE, DSEU GB Pant Engineering College)
 * Purpose: Interactive navigation, dynamic project rendering, scroll observers,
 *          clipboard utilities, and accessible UI interactions.
 * ==============================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------------------------
     AUTHENTIC STUDENT DETAILS (Anurag Chaurasia)
     ---------------------------------------------------------------------------- */
  const USER_CONFIG = {
    name: 'Anurag Chaurasia',
    brandTag: 'ANURAG',
    college: 'DSEU GB Pant Engineering College',
    email: 'anuragh112005@gmail.com',
    githubUrl: 'https://github.com/anuragh112005',
    linkedinUrl: 'https://www.linkedin.com/in/anurag-chaurasia-174434394/'
  };

  /* ----------------------------------------------------------------------------
     1. DYNAMIC PROJECTS DATA STRUCTURE (Academic Honesty & Zero Dummy Data)
     Rule: Only real, completed projects are displayed. Empty entries are hidden.
     ---------------------------------------------------------------------------- */
  const projectsData = [
    {
      id: 1,
      number: '01',
      badge: 'FIRST WEB DEV PROJECT',
      title: 'Personal Developer Portfolio',
      description: 'My first Web Development project, created using HTML, CSS and JavaScript. It represents my interest in frontend development and my journey of learning how to turn ideas into interactive websites.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/anuragh112005', 
      liveUrl: '#hero',
      isFlagship: true
    }
    /*
      INSTRUCTIONS FOR ADDING FUTURE PROJECTS:
      When you build a new project in your coursework or personal study, uncomment
      and fill in this template. The script will automatically format and display it:
      
      ,{
        id: 2,
        number: '02',
        badge: 'ACADEMIC PROJECT',
        title: 'Your Next Project Name',
        description: 'Describe what you built, what problem it solves, and what you learned.',
        tech: ['Java', 'DBMS', 'SQL'],
        githubUrl: 'https://github.com/anuragh112005/your-repo',
        liveUrl: 'https://your-live-demo.com',
        isFlagship: false
      }
    */
  ];

  /* ----------------------------------------------------------------------------
     2. DOM ELEMENT SELECTORS
     ---------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollProgressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');
  const currentYearSpan = document.getElementById('current-year');
  const toastElement = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const copyEmailBtn = document.querySelector('.js-copy-email');
  const projectsContainer = document.getElementById('projects-container');
  const allSections = document.querySelectorAll('section[id]');

  /* ----------------------------------------------------------------------------
     3. DYNAMIC COPYRIGHT YEAR
     ---------------------------------------------------------------------------- */
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* ----------------------------------------------------------------------------
     4. READING / SCROLL PROGRESS BAR & STICKY HEADER
     ---------------------------------------------------------------------------- */
  const updateScrollState = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Update top progress bar width
    if (scrollProgressBar && docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    }

    // Toggle header blur and background border
    if (header) {
      if (scrollTop > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Toggle Back to Top Button
    if (backToTopBtn) {
      if (scrollTop > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState(); // Initial check on load

  /* ----------------------------------------------------------------------------
     5. BACK TO TOP SMOOTH SCROLL
     ---------------------------------------------------------------------------- */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ----------------------------------------------------------------------------
     6. MOBILE NAVIGATION DRAWER & ACCESSIBILITY
     ---------------------------------------------------------------------------- */
  const toggleMobileNav = (forceClose = false) => {
    if (!navMenu || !navToggle) return;
    
    const isOpen = forceClose ? false : !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', isOpen);
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    
    // Prevent background scrolling when mobile menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  if (navToggle) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });
  }

  // Close mobile drawer when clicking any navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('open')) {
        toggleMobileNav(true);
      }
    });
  });

  // Close menu if user presses Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
      toggleMobileNav(true);
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open')) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMobileNav(true);
      }
    }
  });

  /* ----------------------------------------------------------------------------
     7. ACTIVE NAVIGATION SECTION HIGHLIGHTING (IntersectionObserver)
     ---------------------------------------------------------------------------- */
  const initSectionObserver = () => {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in upper/middle view
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    allSections.forEach(section => {
      sectionObserver.observe(section);
    });
  };

  initSectionObserver();

  /* ----------------------------------------------------------------------------
     8. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
     ---------------------------------------------------------------------------- */
  const initScrollReveals = () => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    // If browser doesn't support IntersectionObserver or user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Reveal only once for performance
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  };

  initScrollReveals();

  /* ----------------------------------------------------------------------------
     9. TOAST NOTIFICATION UTILITY
     Displays elegant feedback for clipboard copy and user interactions.
     ---------------------------------------------------------------------------- */
  let toastTimer = null;
  const showToast = (message, duration = 3000) => {
    if (!toastElement || !toastMessage) return;

    toastMessage.textContent = message;
    toastElement.classList.add('show');
    toastElement.setAttribute('aria-hidden', 'false');

    if (toastTimer) clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toastElement.classList.remove('show');
      toastElement.setAttribute('aria-hidden', 'true');
    }, duration);
  };

  /* ----------------------------------------------------------------------------
     10. COPY EMAIL TO CLIPBOARD
     ---------------------------------------------------------------------------- */
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailLink = document.getElementById('contact-email');
      const emailText = emailLink ? emailLink.textContent.trim() : USER_CONFIG.email;

      if (!emailText) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(emailText);
        } else {
          // Fallback for older browsers
          const tempInput = document.createElement('textarea');
          tempInput.value = emailText;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }
        showToast('Email address copied to clipboard!');
      } catch (err) {
        showToast(`Email: ${emailText}`);
      }
    });
  }

  /* ----------------------------------------------------------------------------
     11. PLACEHOLDER LINK HANDLER (Guards against dead clicks)
     ---------------------------------------------------------------------------- */
  const contactLinks = document.querySelectorAll('.js-contact-link, .js-repo-link');
  contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const isPlaceholder = href === '#' || href === '' || href.includes('example.com') || href.includes('your-username') || href.includes('your-profile');
      
      if (isPlaceholder) {
        e.preventDefault();
        const type = link.getAttribute('data-type') || link.getAttribute('data-link-type') || 'item';
        showToast(`Please update this ${type} link in index.html with your actual profile.`);
      }
    });
  });

  /* ----------------------------------------------------------------------------
     12. DYNAMIC PROJECTS RENDERER (Filters empty projects automatically)
     ---------------------------------------------------------------------------- */
  const renderDynamicProjects = () => {
    if (!projectsContainer) return;
    
    // Filter only valid projects with genuine titles and descriptions
    const validAdditionalProjects = projectsData.filter(proj => proj.id > 1 && proj.title && proj.description);

    if (validAdditionalProjects.length === 0) {
      // Only the first static flagship project is displayed (adhering strictly to authenticity)
      return;
    }

    validAdditionalProjects.forEach(proj => {
      const card = document.createElement('article');
      card.className = 'project-card reveal-on-scroll';
      card.setAttribute('data-project-id', proj.id);

      const techBadges = proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
      
      const repoHref = proj.githubUrl && proj.githubUrl.trim() !== '' ? proj.githubUrl : '#';
      const liveHref = proj.liveUrl && proj.liveUrl.trim() !== '' ? proj.liveUrl : '#';

      card.innerHTML = `
        <div class="project-card__body">
          <div class="project-card__top">
            <span class="project-card__badge">PROJECT ${proj.number}</span>
            <span class="project-card__type">${proj.badge}</span>
          </div>
          <h3 class="project-card__title">${proj.title}</h3>
          <p class="project-card__description">${proj.description}</p>
          <div class="project-card__tech" aria-label="Technologies used">
            ${techBadges}
          </div>
          <div class="project-card__actions">
            <a href="${repoHref}" class="btn btn--small btn--outline js-repo-link" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>GitHub Repo</span>
            </a>
            ${proj.liveUrl ? `
            <a href="${liveHref}" class="btn btn--small btn--primary" target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
            </a>` : ''}
          </div>
        </div>
      `;

      projectsContainer.appendChild(card);
    });

    // Re-initialize reveals for newly appended cards
    initScrollReveals();
  };

  renderDynamicProjects();

  /* ----------------------------------------------------------------------------
     13. SUBTLE CARD 3D TILT EFFECT (Desktop Only)
     Adds an interactive feel inspired by the reference site without heavy libraries.
     ---------------------------------------------------------------------------- */
  const initCardTilt = () => {
    // Only enable on desktop devices with hover support
    if (window.innerWidth < 1024 || window.matchMedia('(hover: none)').matches) return;

    const tiltCards = document.querySelectorAll('.skill-category-card, .beyond-card, .keyword-pill');

    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -4; // Subtle max 4 deg rotation
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  };

  initCardTilt();

});
