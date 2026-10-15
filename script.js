const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

// Decorative waveform bars for the speech project.
const waveform = document.querySelector(".waveform");
if (waveform) {
  const heights = [12, 25, 38, 17, 48, 31, 62, 42, 24, 52, 70, 35, 19, 45, 57, 28, 39, 66, 31, 15, 43, 54, 22, 37, 60, 26, 46, 17, 33, 51, 23];
  heights.forEach((height) => {
    const bar = document.createElement("span");
    bar.style.setProperty("--h", `${height}%`);
    waveform.appendChild(bar);
  });
}
