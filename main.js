/**
 * Akshit Sachdeva Portfolio JS Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinksArray = document.querySelectorAll('.nav-link');
    
    const openIcon = menuToggle.querySelector('.menu-icon-open');
    const closeIcon = menuToggle.querySelector('.menu-icon-close');

    function toggleMenu() {
        const isOpen = navLinks.classList.toggle('mobile-open');
        if (isOpen) {
            openIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // We can track scrolling state to avoid observer updates fighting click updates
    let isClickScrolling = false;
    let clickScrollTimeout;

    // Close menu when clicking a link and set active class immediately
    navLinksArray.forEach(link => {
        link.addEventListener('click', () => {
            isClickScrolling = true;
            clearTimeout(clickScrollTimeout);

            navLinksArray.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (navLinks.classList.contains('mobile-open')) {
                toggleMenu();
            }

            // Re-enable scroll observer updates after smooth scroll finishes
            clickScrollTimeout = setTimeout(() => {
                isClickScrolling = false;
            }, 800); 
        });
    });

    // --- 2. SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                // Once visible, we can unobserve if we only want it to animate once
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12, // Trigger when 12% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Offset trigger point slightly
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- 3. ACTIVE NAVBAR ON SCROLL ---
    const sections = document.querySelectorAll('section');
    
    const activeSectionObserver = new IntersectionObserver((entries) => {
        if (isClickScrolling) return; // Skip updating active class if scrolling via nav click

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                navLinksArray.forEach(link => {
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.1, // Lower threshold to trigger easily
        rootMargin: '-80px 0px -50% 0px' // Detect when section is in the top-half of viewport
    });

    sections.forEach(section => {
        activeSectionObserver.observe(section);
    });

    // Fallback: If scrolled to the very bottom, make sure 'Contact' is active
    window.addEventListener('scroll', () => {
        if (isClickScrolling) return;

        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            navLinksArray.forEach(link => {
                if (link.getAttribute('href') === '#contact') {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });

    // --- 4. COPY DIRECT DETAILS ---
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const textToCopy = btn.getAttribute('data-copy');
            const copyIcon = btn.querySelector('.copy-icon');
            const checkIcon = btn.querySelector('.check-icon');

            if (!textToCopy) return;

            try {
                // Clipboard API execution
                await navigator.clipboard.writeText(textToCopy);
                
                // Toggle icon states
                copyIcon.classList.add('hidden');
                checkIcon.classList.remove('hidden');

                // Return back to copy icon after 2 seconds
                setTimeout(() => {
                    copyIcon.classList.remove('hidden');
                    checkIcon.classList.add('hidden');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
});
