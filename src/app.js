const circle = document.querySelectorAll('.skill-range');

const animateCircle = (speedometer) => {
  const percent = speedometer.dataset.percent;
  let current = 0;
  const target = percent * 3.6; 

  const interval = setInterval(() => {
    current += 3.6; 
    speedometer.style.background = `conic-gradient(from 0deg, #44787d 0deg ${current - 90}deg, #e2d2d2ff ${current - 90}deg)`;
    
    if (current >= target) {
      clearInterval(interval);
    }
  }, 15); 
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting ) {
      animateCircle(entry.target);
    }
  });
}, { threshold: 0.4 });

circle.forEach(circle => observer.observe(circle));

