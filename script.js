const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // só anima uma vez
      }
    });
  });
  
  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });
  