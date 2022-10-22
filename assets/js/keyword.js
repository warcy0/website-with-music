document.addEventListener("keydown", function (zEvent) {
    if (zEvent.shiftKey && zEvent.key === "C") play();
    else if (zEvent.shiftKey && zEvent.key === "D") window.location.href = "https://discord.com/invite/starr"
    else if (zEvent.shiftKey && zEvent.key === "G") window.location.href = "https://github.com/warcy0"
});
