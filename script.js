
/* EMMA-CO BEST ALUMINUM LTD */

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Automatically update the copyright year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Your business WhatsApp number, including country code
const businessWhatsApp = "2349021009449";

// Product enquiry buttons
document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;

    const message =
      `Hello EMMA-CO BEST ALUMINUM LTD. ` +
      `I am interested in ${product}. ` +
      `Please send me your current price and available options.`;

    const whatsappURL =
      `https://wa.me/${businessWhatsApp}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
});

// Contact form: prepare an enquiry in WhatsApp
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name =
      document.getElementById("customerName").value.trim();

    const phone =
      document.getElementById("customerPhone").value.trim();

    const product =
      document.getElementById("productChoice").value;

    const details =
      document.getElementById("customerMessage").value.trim();

    if (!name || !product) {
      contactForm.reportValidity();
      return;
    }

    const message = [
      "Hello EMMA-CO BEST ALUMINUM LTD,",
      "",
      `My name is ${name}.`,
      phone ? `My phone number is ${phone}.` : "",
      `I am interested in ${product}.`,
      details ? `My enquiry: ${details}` : "",
      "",
      "Please get back to me. Thank you."
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappURL =
      `https://wa.me/${businessWhatsApp}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
}
