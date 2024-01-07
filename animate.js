// Создаем новый экземпляр Intersection Observer
var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) { // Проверяем, если элемент появился в видимой области
      entry.target.classList.add('appeared'); // Добавляем класс "visible" к элементу
      observer.unobserve(entry.target); // Прекращаем отслеживать этот элемент, после того как он появился
    }
  });
}, { threshold: 0.5 }); // Порог 0.5 означает, что элемент считается видимым, когда он занимает хотя бы половину видимой области

// Находим элемент, который мы хотим отслеживать
const nameSection = document.querySelector('.name'), 
aboutSection = document.querySelector('.about')
  
// Начинаем отслеживать этот элемент
observer.observe(nameSection);
observer.observe(aboutSection);
