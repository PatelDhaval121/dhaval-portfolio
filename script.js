// Mobile navigation and contact-template helper
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const copyButton = document.getElementById("copy-email");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const template = "Hello Dhaval,\\n\\nI visited your portfolio and would like to connect with you about an opportunity/project.\\n\\nBest regards,";
    try {
      await navigator.clipboard.writeText(template);
      copyButton.innerHTML = "Template copied <span>✓</span>";
    } catch {
      window.prompt("Copy this email template:", template);
    }
  });
}
