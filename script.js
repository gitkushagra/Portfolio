function toggleMode() {
    document.body.classList.toggle("dark");
    updateLamp();
}

function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("show");
}



function updateLamp() {
    const icon = document.getElementById("lampIcon");

    if (document.body.classList.contains("dark")) {
        icon.src = "Assets/lamp-dark.png";   // second icon when dark mode
    } else {
        icon.src = "Assets/lamp-light.png";  // first icon when light mode
    }
}

/* set correct icon on first load */
updateLamp();

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("rightArea");
        menu.classList.remove("show");
    });
});


//fixTop Spacing
function adjustTopSpacing() {
    const header = document.getElementById("mainHeader");
    const container = document.querySelector(".container");
    if (header && container) {
        container.style.marginTop = header.offsetHeight + "px";
    }
}

window.addEventListener("load", adjustTopSpacing);
window.addEventListener("resize", adjustTopSpacing);

