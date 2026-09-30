// Small interaction: update the footer year automatically.
const year = new Date().getFullYear();
document.querySelector("footer p").textContent = `© ${year} Damie Obasa`;
