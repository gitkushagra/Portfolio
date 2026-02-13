function toggleMode() {
    document.body.classList.toggle("dark");
    updateLamp();
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