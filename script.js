document.addEventListener("DOMContentLoaded", () => {
    // Lightbox erstellen
    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.innerHTML = `
        <img id="lightbox-image" src="" alt="">
        <span id="lightbox-close">&times;</span>
    `;
    document.body.appendChild(overlay);

    const lightboxImage = document.getElementById("lightbox-image");

    document.querySelectorAll("img:not(#navToggle)").forEach(img => {
        img.style.cursor = "zoom-in";

        img.addEventListener("click", e => {
            lightboxImage.src = e.target.src;
            lightboxImage.alt = e.target.alt || "";
            overlay.classList.add("active");
        });
    });

    // Schließen
    overlay.addEventListener("click", e => {
        if (e.target === overlay || e.target.id === "lightbox-close") {
            overlay.classList.remove("active");
            lightboxImage.src = "";
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            overlay.classList.remove("active");
            lightboxImage.src = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const citrus = document.getElementById("citrus");
    const citrus2 = document.getElementById("citrus2");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const fadeDistance = 300;

        let opacity1 = 1 - (scrollY / fadeDistance);
        opacity1 = Math.max(0, Math.min(1, opacity1));
        citrus.style.opacity = opacity1;

        if (!citrus2) return;

        let opacity2 = scrollY / fadeDistance;
        opacity2 = Math.max(0, Math.min(1, opacity2));
        citrus2.style.opacity = opacity2;
    });
});

const nav = document.querySelector("nav");
const navLightbox = document.getElementById("navLightbox");

document.getElementById("navToggle").onclick = () => {
    if (getComputedStyle(nav).display === "none") {
        nav.style.display = "block";
        navLightbox.classList.add("show");
    }
    
    else {
        nav.style.display = "none";
        navLightbox.classList.remove("show");
    }
}

navLightbox.onclick = () => {
    nav.style.display = "none";
    navLightbox.classList.remove("show");
}
