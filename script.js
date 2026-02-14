const html = document.documentElement;
const btn = document.getElementById("themeBtn");
const icon = document.getElementById("themeIcon");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

/* WhatsApp Direct Link (Hire Me) */
const WA_NUMBER = "8801932791214";
const WA_TEXT = encodeURIComponent(
  "Hi Khairul, I want to hire you for a website. Can we discuss details?"
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

// Attach WhatsApp link everywhere
const hireTop = document.getElementById("hireBtnTop");
const hireHero = document.getElementById("hireBtnHero");
const hireCTA = document.getElementById("hireBtnCTA");
const whatsBtn = document.getElementById("whatsBtn");
const whatsText = document.getElementById("whatsText");

[hireTop, hireHero, hireCTA, whatsBtn, whatsText].forEach((el) => {
  if (!el) return;
  el.href = WA_LINK;
});

// Send button -> opens WhatsApp
const sendBtn = document.getElementById("sendBtn");
if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    window.open(WA_LINK, "_blank", "noopener");
  });
}

/* Theme Toggle */
const saved = localStorage.getItem("theme");
if (saved) {
  html.setAttribute("data-theme", saved);
  icon.textContent = saved === "light" ? "☀️" : "🌙";
}
btn.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  icon.textContent = next === "light" ? "☀️" : "🌙";
  localStorage.setItem("theme", next);
});

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => io.observe(el));
