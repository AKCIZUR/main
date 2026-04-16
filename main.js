// main.js – veškerá logika aplikace
import content from './content.js';

gsap.registerPlugin(ScrollTrigger);

// ----- Načtení obsahu do DOM -----
function populateContent() {
    // Navigace
    document.getElementById('nav-logo').textContent = content.nav.logo;
    document.getElementById('footer-logo').textContent = content.footer.logo;
    document.getElementById('footer-year').textContent = content.footer.year;
    
    // Desktop navigační odkazy
    const desktopNav = document.getElementById('desktop-nav-links');
    desktopNav.innerHTML = content.nav.links.map(link => 
        `<a href="${link.href}" class="nav-link hover:text-white transition-colors">${link.text}</a>`
    ).join('');
    
    // Mobilní navigace
    const mobileNav = document.getElementById('mobile-nav-links');
    mobileNav.innerHTML = content.nav.links.map(link => 
        `<a href="${link.href}" class="mobile-link hover:text-accent transition-colors">${link.text}</a>`
    ).join('');
    
    // Footer sociální odkazy
    const footerSocial = document.getElementById('footer-social');
    footerSocial.innerHTML = content.footer.social.map(item => 
        `<a href="${item.href}" class="hover:text-black transition-colors">${item.text}</a>`
    ).join('');
    
    // Loading
    document.getElementById('loading-text').textContent = content.loading.text;
    
    // Hero
    document.getElementById('hero-label').textContent = content.hero.label;
    document.getElementById('hero-heading').textContent = content.hero.heading;
    document.getElementById('hero-subheading').textContent = content.hero.subheading;
    document.getElementById('hero-btn').textContent = content.hero.button;
    document.getElementById('scroll-text').textContent = content.hero.scrollHint;
    
    // Marquee
    const marquee = document.getElementById('marquee-content');
    const marqueeItems = content.marquee.items;
    const marqueeSet = marqueeItems.map(item => 
        `<span class="fluid-text text-6xl text-white/5">${item}</span><span class="text-accent text-2xl">◆</span>`
    ).join('');
    marquee.innerHTML = `<div class="flex items-center gap-8 px-8 whitespace-nowrap">${marqueeSet}</div>`.repeat(2);
    
    // About
    document.getElementById('about-badge').textContent = content.about.badge;
    document.getElementById('about-heading').innerHTML = content.about.heading;
    document.getElementById('about-text1').textContent = content.about.text1;
    document.getElementById('about-text2').textContent = content.about.text2;
    const aboutBadges = document.getElementById('about-badges');
    aboutBadges.innerHTML = content.about.badges.map(b => `<span class="badge">${b}</span>`).join('');
    
    // Stats
    document.getElementById('stats-heading').textContent = content.stats.heading;
    document.getElementById('stats-subheading').textContent = content.stats.subheading;
    const statsCards = document.getElementById('stats-cards');
    statsCards.innerHTML = content.stats.cards.map((card, i) => `
        <div class="stat-card rounded-2xl p-8 text-center reveal-up" style="transition-delay: ${i * 0.1}s">
            <div class="fluid-text text-5xl text-accent mb-2" data-count="${card.value}">0</div>
            <div class="text-sm text-gray-500 uppercase tracking-wider">${card.label}</div>
        </div>
    `).join('');
    
    // Work
    document.getElementById('work-badge').textContent = content.work.badge;
    document.getElementById('work-heading').innerHTML = content.work.heading;
    const viewAll = document.getElementById('work-view-all');
    viewAll.innerHTML = `${content.work.viewAll} <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>`;
    
    const projectsContainer = document.getElementById('work-projects');
    projectsContainer.innerHTML = content.work.projects.map((proj, i) => `
        <div class="group relative overflow-hidden rounded-2xl reveal-up ${i % 2 === 1 ? 'md:mt-20' : ''}">
            <div class="aspect-[4/3] overflow-hidden">
                <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute bottom-0 left-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span class="text-accent text-sm uppercase tracking-wider">${proj.category}</span>
                <h3 class="fluid-text text-2xl mt-1">${proj.title}</h3>
            </div>
        </div>
    `).join('');
    
    // Services
    document.getElementById('services-badge').textContent = content.services.badge;
    document.getElementById('services-heading').innerHTML = content.services.heading;
    document.getElementById('services-description').textContent = content.services.description;
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = content.services.features.map(f => `
        <div class="feature-item feature-line pl-6 reveal-up">
            <h3 class="text-xl font-medium mb-2">${f.title}</h3>
            <p class="text-gray-500 font-light">${f.description}</p>
        </div>
    `).join('');
    
    // Horizontal
    document.getElementById('horizontal-badge').textContent = content.horizontal.badge;
    document.getElementById('horizontal-heading').innerHTML = content.horizontal.heading;
    const horizontalContainer = document.getElementById('horizontal-container');
    horizontalContainer.innerHTML = content.horizontal.cards.map(c => `
        <div class="card rounded-2xl overflow-hidden">
            <div class="aspect-[3/4]">
                <img src="${c.image}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500">
            </div>
            <div class="p-6">
                <span class="text-accent text-xs uppercase tracking-wider">${c.year}</span>
                <h3 class="text-lg font-medium mt-1">${c.title}</h3>
            </div>
        </div>
    `).join('');
    
    // Quote
    document.getElementById('quote-text').textContent = content.quote.text;
    document.getElementById('quote-author').textContent = content.quote.author;
    document.getElementById('quote-author-title').textContent = content.quote.authorTitle;
    
    // CTA
    document.getElementById('cta-heading').innerHTML = content.cta.heading;
    document.getElementById('cta-text').textContent = content.cta.text;
    document.getElementById('cta-btn').textContent = content.cta.button;
    
    // Footer
    document.getElementById('footer-text').textContent = content.footer.bigText;
}

// ----- Loading screen -----
const loadingTl = gsap.timeline();
loadingTl.to('#loading-bar-fill', {
    width: '100%',
    duration: 1.5,
    ease: 'power2.inOut',
    onComplete: () => {
        loadingTl.to('#loading-screen', {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                document.getElementById('loading-screen').style.display = 'none';
                startAnimations();
            }
        });
    }
});

// ----- Lenis smooth scroll -----
const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true
});

function rafLoop(time) {
    lenis.raf(time);
    requestAnimationFrame(rafLoop);
}
requestAnimationFrame(rafLoop);
lenis.on('scroll', ScrollTrigger.update);

// ----- Custom cursor -----
const cursorEl = document.getElementById('cursor');
const followerEl = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (evt) => {
    gsap.to(cursorEl, {
        x: evt.clientX,
        y: evt.clientY,
        duration: 0.1
    });
    gsap.to(followerEl, {
        x: evt.clientX,
        y: evt.clientY,
        duration: 0.3
    });
});

const hoverables = document.querySelectorAll('a, button, .magnetic-wrap, .group');
hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => followerEl.classList.add('hover'));
    el.addEventListener('mouseleave', () => followerEl.classList.remove('hover'));
});

// ----- Magnetic buttons -----
document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
    const btn = wrap.querySelector('button');
    
    wrap.addEventListener('mousemove', (evt) => {
        const rect = wrap.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const offsetX = evt.clientX - centerX;
        const offsetY = evt.clientY - centerY;

        gsap.to(btn, {
            x: offsetX * 0.5,
            y: offsetY * 0.5,
            duration: 0.4,
            ease: 'power2.out'
        });
    });

    wrap.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)'
        });
    });
});

// ----- Mobile menu -----
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        mobileMenu.style.pointerEvents = 'auto';
        gsap.to(mobileMenu, { opacity: 1, duration: 0.3 });
    } else {
        gsap.to(mobileMenu, { 
            opacity: 0, 
            duration: 0.3, 
            onComplete: () => mobileMenu.style.pointerEvents = 'none' 
        });
    }
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        menuOpen = false;
        gsap.to(mobileMenu, { 
            opacity: 0, 
            duration: 0.3, 
            onComplete: () => mobileMenu.style.pointerEvents = 'none' 
        });
    });
});

// ----- Animace spouštěné po načtení -----
function startAnimations() {
    // Hero Entrance
    const heroTl = gsap.timeline();
    heroTl.fromTo('#hero-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' });
    heroTl.fromTo('#hero-heading', { yPercent: 100, skewY: 7 }, { yPercent: 0, skewY: 0, duration: 1.5, ease: 'expo.out' }, '-=0.5');
    heroTl.fromTo('#hero-subheading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.7');
    heroTl.fromTo('#hero-btn', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.4');
    heroTl.to('#scroll-hint', { opacity: 1, duration: 0.6 }, '-=0.2');

    // Scroll hint parallax
    gsap.to('#scroll-hint', {
        y: 50, opacity: 0,
        scrollTrigger: { trigger: '#hero', start: 'top top', end: '30% top', scrub: true }
    });

    // Hero background parallax
    gsap.to('#hero > div:first-child', {
        y: 100,
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    // Marquee speed
    gsap.to('.marquee-track', {
        xPercent: -30, ease: 'none',
        scrollTrigger: { trigger: '#marquee-section', start: 'top bottom', end: 'bottom top', scrub: 1 }
    });

    // About image reveal
    ScrollTrigger.create({
        trigger: '#about-img-container',
        start: 'top 80%',
        onEnter: () => document.getElementById('about-img-container').classList.add('active')
    });

    gsap.to('#about-img', {
        yPercent: -10,
        scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: true }
    });

    // About text reveals
    ['#about-badge', '#about-heading', '#about-text1', '#about-text2', '#about-badges'].forEach((el, i) => {
        gsap.to(el, {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
            delay: i * 0.1
        });
    });

    // Stats
    ['#stats-heading', '#stats-subheading'].forEach((el, i) => {
        gsap.to(el, {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
            delay: i * 0.15
        });
    });

    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            onEnter: () => {
                gsap.to(el, {
                    innerText: target,
                    duration: 1.5,
                    ease: 'power2.out',
                    snap: { innerText: 1 },
                    onUpdate: function() { el.textContent = Math.round(parseFloat(el.textContent)); }
                });
            },
            once: true
        });
    });

    document.querySelectorAll('.stat-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 90%' },
            delay: i * 0.1
        });
    });

    // Work reveals
    document.querySelectorAll('#work .reveal-text').forEach(el => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
    });
    document.querySelectorAll('#work .reveal-up').forEach((card, i) => {
        gsap.to(card, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 90%' }, delay: i * 0.15 });
    });

    // Services
    gsap.to('#services .reveal-text', {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '#services', start: 'top 80%' }
    });
    document.querySelectorAll('#features-list .reveal-up').forEach((item, i) => {
        gsap.to(item, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 90%' }, delay: i * 0.15 });
    });

    // Horizontal scroll
    const horizontalContainer = document.getElementById('horizontal-container');
    const cards = horizontalContainer.querySelectorAll('.card');
    const totalWidth = (cards.length * (350 + 24)) - window.innerWidth;
    gsap.to(horizontalContainer, {
        x: -totalWidth, ease: 'none',
        scrollTrigger: {
            trigger: '#horizontal-section',
            start: 'top 20%',
            end: () => `+=${totalWidth}`,
            scrub: 1,
            invalidateOnRefresh: true
        }
    });

    // Quote
    gsap.to('#quote-text', {
        scale: 1.05,
        scrollTrigger: { trigger: '#quote', start: 'top bottom', end: 'bottom top', scrub: true }
    });
    document.querySelectorAll('#quote .reveal-text').forEach((el, i) => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' }, delay: i * 0.15 });
    });

    // CTA
    gsap.to('#cta-heading', {
        scale: 0.95,
        scrollTrigger: { trigger: '#contact', start: 'top 80%', end: 'bottom top', scrub: true }
    });
    document.querySelectorAll('#contact .reveal-text').forEach((el, i) => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' }, delay: i * 0.15 });
    });
    gsap.to('#contact > div:first-child > div', {
        scale: 1.5,
        scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'bottom top', scrub: true }
    });

    // Footer
    gsap.to('#footer-text', {
        scale: 0.5, opacity: 0.5, letterSpacing: '0.2em',
        scrollTrigger: { trigger: '#footer-text', start: 'top bottom', end: 'bottom top', scrub: true }
    });
}

// ----- Smooth anchor scrolling -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) lenis.scrollTo(target);
    });
});

// Spustit vše
populateContent();