const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('appeared');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); 


const nameSection = document.querySelector('.name'), 
  aboutSection = document.querySelector('.about')
  
observer.observe(nameSection);
observer.observe(aboutSection);
