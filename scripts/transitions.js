document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); 
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});