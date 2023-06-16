const menuButton = document.querySelector("#checkbox");
const menuPanel = document.querySelector("#menu-panel");
const menuBorders = document.querySelector("#menu-panel-borderbox")
let menuPanelCheck = true;
menuButton.addEventListener("click", () => {
    if (menuPanelCheck) {
        menuPanel.style.top = "-30vw";
        menuPanel.style.display = "flex";
        menuBorders.style.display = "block"
        setTimeout(() => {
            menuPanel.style.top = "0vw";
        }, 50);
        menuPanelCheck = false;
    }
    else if (!menuPanelCheck) {
        menuPanel.style.top = "-30vw";
        setTimeout(() => {
            menuPanel.style.display = "none";
            menuBorders.style.display = "none"
        }, 500);
        menuPanelCheck = true;
    }
});

function menuButtonDebug() {
    checkbox.disabled = true;
    setTimeout(function () {
        checkbox.disabled = false;
    }, 520);
};