// Mobile Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log("Fortune Wellness Spa website loaded.");
  
  // Mobile menu functionality
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('mobile-menu-open');
      } else {
        document.body.style.overflow = 'auto';
        document.body.classList.remove('mobile-menu-open');
      }
    });
    
    // Close menu when clicking on nav links
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.body.classList.remove('mobile-menu-open');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.body.classList.remove('mobile-menu-open');
      }
    });
  }
  
  // Offers Popup Functionality
  const offersPopup = document.getElementById('offers-popup');
  const popupClose = document.getElementById('popup-close');
  
  if (offersPopup && popupClose) {
    // Show popup after 3 seconds
    setTimeout(function() {
      offersPopup.classList.add('show');
      document.body.style.overflow = 'hidden';
    }, 3000);
    
    // Close popup when close button is clicked
    popupClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      offersPopup.classList.remove('show');
      document.body.style.overflow = '';
    });
    
    // Add touch event for mobile
    popupClose.addEventListener('touchstart', function(e) {
      e.preventDefault();
      e.stopPropagation();
      offersPopup.classList.remove('show');
      document.body.style.overflow = '';
    });
    
    // Additional event listeners for better reliability
    popupClose.addEventListener('mousedown', function(e) {
      e.preventDefault();
      e.stopPropagation();
    });
    
    popupClose.addEventListener('touchend', function(e) {
      e.preventDefault();
      e.stopPropagation();
      offersPopup.classList.remove('show');
      document.body.style.overflow = '';
    });
    
    // Close popup when clicking outside the content
    offersPopup.addEventListener('click', function(event) {
      if (event.target === offersPopup) {
        offersPopup.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
    
    // Add touch event for mobile outside click
    offersPopup.addEventListener('touchend', function(event) {
      if (event.target === offersPopup) {
        event.preventDefault();
        offersPopup.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && offersPopup.classList.contains('show')) {
        offersPopup.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Countdown Timer for Offers Page
  const offersPage = document.querySelector('.offers-page');
  if (offersPage) {
    // Set the target date (October 31, 2025)
    const targetDate = new Date('October 31, 2025 23:59:59').getTime();
    
    // Update countdown every second
    const countdownInterval = setInterval(function() {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Update the display
      const daysElement = document.getElementById('days');
      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');
      
      if (daysElement) daysElement.textContent = days;
      if (hoursElement) hoursElement.textContent = hours;
      if (minutesElement) minutesElement.textContent = minutes;
      if (secondsElement) secondsElement.textContent = seconds;
      
      // If countdown is finished
      if (distance < 0) {
        clearInterval(countdownInterval);
        if (daysElement) daysElement.textContent = '0';
        if (hoursElement) hoursElement.textContent = '0';
        if (minutesElement) minutesElement.textContent = '0';
        if (secondsElement) secondsElement.textContent = '0';
        
        // Optional: Show expired message
        const countdownTimer = document.querySelector('.countdown-timer');
        if (countdownTimer) {
          countdownTimer.innerHTML = '<div class="expired-message">Offer Expired!</div>';
        }
      }
    }, 1000);
  }
});
