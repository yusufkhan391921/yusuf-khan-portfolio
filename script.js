const portfolio = {
  name: "Yusuf Bin Quasim Khan",
  tagline: "Financial Advisor | Computer Science Graduate | Designer & Video Editor",
  location: "Lucknow, Uttar Pradesh, India",
  about: "Computer Science graduate (B.Tech) with hands-on experience across financial advisory, marketing and lead generation, and graphic design and video editing. Skilled in client communication, content creation and data tools (Python, SQL, Excel, Power BI). Fluent in English, Hindi and Urdu; seeking a role where a mix of technical, creative and customer-facing skills adds value.",
  experience: [
    {
      role: "Financial Advisor",
      company: "Niftel Communications Pvt. Ltd.",
      location: "Lucknow",
      dates: "Apr 2026 – Present",
      responsibilities: [
        "Advise clients on financial products and services, understanding their needs and recommending suitable options.",
        "Handle client communication and follow-ups, maintaining records and meeting monthly targets."
      ]
    },
    {
      role: "Marketing Executive (Lead Generation)",
      company: "Krutanic Solutions (EdTech)",
      location: "Bengaluru",
      dates: "Mar 2025 – Oct 2025",
      responsibilities: [
        "Generated and qualified leads for education programs through outreach and marketing activities.",
        "Worked against defined lead-generation targets in a fixed-plus-incentive role."
      ]
    }
  ],
  projects: [
    {
      name: "AnyToPDF: Offline File-to-PDF App (Android & Web)",
      description: "A private, offline app that converts mixed files (images: JPG, PNG, WEBP, GIF, BMP, TIFF, SVG; documents: DOCX, TXT, RTF, HTML, Markdown; spreadsheets: XLSX, CSV; and PDF merging) into merged or separate PDFs. Includes file preview and reordering, A4/US Letter sizing, portrait/landscape orientation and margin controls. All conversion runs on-device with no server or internet needed.",
      type: "Android & Web",
      url: "https://github.com/yusufkhan391921/Any-to-PDF",
      linkLabel: "View on GitHub"
    }
  ],
  skills: [
    { group: "Data & Technical", items: ["Python", "SQL", "Microsoft Excel", "Power BI"] },
    { group: "Creative", items: ["Video editing", "color grading", "graphic design", "photography"] },
    { group: "Business", items: ["Financial advisory", "lead generation", "marketing", "client communication"] }
  ],
  education: [
    { qualification: "B.Tech, Computer Science", institution: "Shri Ramswaroop Memorial University (SRMU), Lucknow", year: "2025" },
    { qualification: "Diploma, Computer Science", institution: "Shri Ramswaroop Memorial University (SRMU), Lucknow", year: "2022" }
  ],
  certifications: [
    { title: "Deloitte Australia: Technology Job Simulation (Forage)" },
    // TODO: Replace this title with the real course name.
    { title: "Coursera Course Certificate", url: "https://www.coursera.org/account/accomplishments/verify/8B3T3KUGT8BT" }
  ],
  languages: ["English", "Hindi", "Urdu"],
  contact: {
    email: "yusufbinquasimkhan@gmail.com",
    phone: "+91 9415164965",
    location: "Lucknow, India",
    github: "https://github.com/yusufkhan391921",
    linkedin: "https://www.linkedin.com/in/yusuf-khan-b1167b271/"
  }
};

const icon = (name) => {
  const paths = {
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
};

const main = document.querySelector("#main-content");
const footer = document.querySelector("#site-footer");

const sectionHeading = (number, title, summary = "") => `
  <div class="section-heading" data-reveal>
    <p class="section-kicker">${number} / ${title}</p>
    <div><h2 id="${title.toLowerCase()}-title">${title}</h2>${summary ? `<p class="section-heading__summary">${summary}</p>` : ""}</div>
  </div>`;

main.innerHTML = `
  <section class="hero" id="home" aria-labelledby="hero-title">
    <div class="container hero__inner" data-reveal>
      <p class="eyebrow">Portfolio</p>
      <h1 id="hero-title">${portfolio.name}</h1>
      <p class="hero__tagline">${portfolio.tagline}</p>
      <p class="hero__location">${icon("pin")}${portfolio.location}</p>
      <div class="hero__actions">
        <a class="button" href="assets/Yusuf_Khan_CV.pdf" download>${icon("download")}Download CV</a>
        <a class="button button--quiet" href="#contact">Contact Me${icon("arrow")}</a>
      </div>
    </div>
  </section>

  <section class="section section--surface" id="about" aria-labelledby="about-title">
    <div class="container">
      ${sectionHeading("01", "About")}
      <p class="about-copy" data-reveal>${portfolio.about}</p>
    </div>
  </section>

  <section class="section" id="experience" aria-labelledby="experience-title">
    <div class="container">
      ${sectionHeading("02", "Experience")}
      <div class="timeline">
        ${portfolio.experience.map((job) => `
          <article class="timeline-item" data-reveal>
            <p class="timeline-item__date">${job.dates}</p>
            <div>
              <h3>${job.role}</h3>
              <p class="timeline-item__company">${job.company} · ${job.location}</p>
              <ul>${job.responsibilities.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>
          </article>`).join("")}
      </div>
    </div>
  </section>

  <section class="section section--surface" id="projects" aria-labelledby="projects-title">
    <div class="container">
      ${sectionHeading("03", "Projects")}
      <div class="project-grid">
        ${portfolio.projects.map((project, index) => `
          <article class="project-card" data-reveal>
            <div class="project-card__top"><span class="project-card__number">SELECTED PROJECT</span><span class="project-card__type">${project.type}</span></div>
            <h3>${project.name}</h3>
            <p class="project-card__description">${project.description}</p>
            <a class="text-link" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.linkLabel}${icon("arrow")}</a>
          </article>`).join("")}
      </div>
    </div>
  </section>

  <section class="section" id="skills" aria-labelledby="skills-title">
    <div class="container">
      ${sectionHeading("04", "Skills")}
      <div class="skill-grid">
        ${portfolio.skills.map((group) => `
          <article class="skill-group" data-reveal>
            <h3>${group.group}</h3>
            <ul class="tag-list">${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>`).join("")}
      </div>
    </div>
  </section>

  <section class="section section--surface" id="education" aria-labelledby="education-title">
    <div class="container">
      ${sectionHeading("05", "Education")}
      <div class="education-list">
        ${portfolio.education.map((item) => `
          <article class="education-item" data-reveal>
            <h3>${item.qualification}</h3>
            <p>${item.institution}</p><p class="education-item__year">${item.year}</p>
          </article>`).join("")}
      </div>
      <h3 class="subsection-title" data-reveal>Certifications</h3>
      <ul class="certification-list">
        ${portfolio.certifications.map((item) => `<li data-reveal>${item.url ? `<a class="text-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}${icon("arrow")}</a>` : item.title}</li>`).join("")}
      </ul>
      <h3 class="subsection-title" data-reveal>Languages</h3>
      <p class="language-line" data-reveal><strong>Fluent</strong><span>${portfolio.languages.join(", ")}</span></p>
    </div>
  </section>

  <section class="section" id="contact" aria-labelledby="contact-title">
    <div class="container">
      ${sectionHeading("06", "Contact", "")}
      <div class="contact-layout">
        <div>
          <ul class="contact-details">
            <li><span>Email</span><a href="mailto:${portfolio.contact.email}">${portfolio.contact.email}</a></li>
            <li><span>Phone</span><a href="tel:${portfolio.contact.phone.replaceAll(" ", "")}">${portfolio.contact.phone}</a></li>
            <li><span>Location</span>${portfolio.contact.location}</li>
          </ul>
          <div class="social-links" aria-label="Social profiles">
            <a class="social-link" href="${portfolio.contact.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.29-.5-1.43.11-2.98 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.55.23 2.69.12 2.98.71.78 1.14 1.78 1.14 3 0 4.3-2.61 5.25-5.1 5.52.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>GitHub
            </a>
            <a class="social-link" href="${portfolio.contact.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile, replace with profile URL">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.46H4.98V9h2.95v9.46ZM6.45 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.01 10.75h-2.94v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.19-1.77 2.43v4.68H9.28V9h2.82v1.29h.04c.39-.74 1.35-1.52 2.79-1.52 2.98 0 3.53 1.96 3.53 4.51v5.18Z"/></svg>LinkedIn
            </a>
          </div>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="field"><label for="name">Name</label><input id="name" name="name" autocomplete="name" required placeholder="Your name"></div>
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required placeholder="you@example.com"></div>
          <div class="field"><label for="message">Message</label><textarea id="message" name="message" required placeholder="Write a message"></textarea></div>
          <button class="button" type="submit">Send a message${icon("send")}</button>
        </form>
      </div>
    </div>
  </section>`;

footer.innerHTML = `<p>© ${new Date().getFullYear()} ${portfolio.name}</p><p>Built by <strong>Yusuf Khan</strong></p>`;

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("yusuf-portfolio-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  themeButton.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#1e201f" : "#f5f3ee";
};

applyTheme(storedTheme || (systemPrefersDark.matches ? "dark" : "light"));
themeButton.addEventListener("click", () => {
  const theme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  localStorage.setItem("yusuf-portfolio-theme", theme);
});

const soundButton = document.querySelector(".sound-toggle");
let soundEnabled = localStorage.getItem("yusuf-portfolio-sound") === "on";
let audioContext;

const updateSoundButton = () => {
  soundButton.setAttribute("aria-pressed", String(soundEnabled));
  soundButton.setAttribute("aria-label", `Sound effects ${soundEnabled ? "on" : "off"}`);
  soundButton.title = `Turn sound effects ${soundEnabled ? "off" : "on"}`;
};

const playSound = async (kind) => {
  if (!soundEnabled) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  audioContext ??= new AudioContextClass();
  if (audioContext.state === "suspended") {
    try {
      await audioContext.resume();
    } catch {
      return;
    }
  }

  const tones = {
    hover: { start: 560, end: 720, duration: 0.055, type: "sine" },
    click: { start: 320, end: 440, duration: 0.085, type: "triangle" },
    toggle: { start: 420, end: 640, duration: 0.12, type: "triangle" }
  };
  const tone = tones[kind];
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = tone.type;
  oscillator.frequency.setValueAtTime(tone.start, now);
  oscillator.frequency.exponentialRampToValueAtTime(tone.end, now + tone.duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.035, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + tone.duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + tone.duration);
};

updateSoundButton();
soundButton.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem("yusuf-portfolio-sound", soundEnabled ? "on" : "off");
  updateSoundButton();
  if (soundEnabled) playSound("toggle");
});

document.addEventListener("pointerover", (event) => {
  const target = event.target.closest("a, button, .project-card");
  if (target && !target.contains(event.relatedTarget)) playSound("hover");
});
document.addEventListener("click", (event) => {
  const target = event.target.closest("a, button");
  if (target && !target.matches(".sound-toggle")) playSound("click");
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const closeMenu = () => {
  nav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
};

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  nav.classList.toggle("is-open", !isOpen);
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

// TODO: Replace the mailto handler with a Formspree endpoint if a hosted form is preferred.
document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const subject = `Portfolio message from ${formData.get("name")}`;
  const body = `${formData.get("message")}\n\nFrom: ${formData.get("name")}\nEmail: ${formData.get("email")}`;
  window.location.href = `mailto:${portfolio.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduceMotion) {
  document.body.classList.add("motion-ready");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
}