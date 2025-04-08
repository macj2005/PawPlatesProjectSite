
// fading sections
const sections = document.querySelectorAll("section");

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();


// dynamic text
const title = "Fitness Made For You";
const headerTitle = document.querySelector("header h1");
let i = 0;

function typeWriter() {
    if (i < title.length) {
        headerTitle.textContent += title.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

headerTitle.textContent = "";
typeWriter();

// smooth scroll
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({behavior: "smooth"});
    });
});