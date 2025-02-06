function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(particle);
    }
}

createParticles();

document.addEventListener('DOMContentLoaded', function() {
    const earlyAccessBtn = document.getElementById('earlyAccessBtn');
    const signupForm = document.getElementById('signupForm');
    
    earlyAccessBtn.addEventListener('click', function() {
        signupForm.classList.toggle('active');
        if (signupForm.classList.contains('active')) {
            earlyAccessBtn.textContent = 'Hide Form';
        } else {
            earlyAccessBtn.textContent = 'Get Early Access';
        }
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = signupForm.querySelector('input[type="email"]').value;
        // Here you would typically send the email to your backend
        alert('Thank you for your interest! We\'ll notify you when early access becomes available.');
        signupForm.querySelector('input[type="email"]').value = '';
        signupForm.classList.remove('active');
        earlyAccessBtn.textContent = 'Get Early Access';
    });
}); 