// Simple JS to avoid email scraping bots
const email = "amcaqt06@gmail.com";
document.getElementById("email").textContent = email;

// Small animation on load
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translatey(20px)";

    setTimeout(() => {
        card.style.transition = "0.6s ease";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
    }, index * 200);
});
