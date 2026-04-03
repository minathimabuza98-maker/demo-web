/**
 * Elite Flooring Solutions - Main Script
 * Handles navigation, form validation, and interactive elements.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- Contact Form Validation ---
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation check (HTML5 'required' handles basic cases)
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const message = (document.getElementById('message') as HTMLTextAreaElement).value;

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all required fields.';
        formStatus.className = 'text-center text-sm mt-4 text-red-600 block';
        return;
      }

      // Simulate form submission
      formStatus.textContent = 'Sending message...';
      formStatus.className = 'text-center text-sm mt-4 text-amber-700 block';

      setTimeout(() => {
        formStatus.textContent = 'Thank you! Your message has been sent successfully. We will contact you soon.';
        formStatus.className = 'text-center text-sm mt-4 text-green-600 block';
        contactForm.reset();
      }, 1500);
    });
  }

  // --- Smooth Scrolling for Internal Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Sticky Navbar Background Change on Scroll ---
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('bg-white', 'shadow-md');
        nav.classList.remove('bg-white/90', 'backdrop-blur-md');
      } else {
        nav.classList.remove('bg-white', 'shadow-md');
        nav.classList.add('bg-white/90', 'backdrop-blur-md');
      }
    });
  }
});
