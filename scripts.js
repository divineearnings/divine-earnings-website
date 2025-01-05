// Smooth scrolling for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const sections = document.querySelectorAll("section");

const fadeInOnScroll = () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // Run on page load

const cards = document.querySelectorAll(".membership");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("hover");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("hover");
    });
});

