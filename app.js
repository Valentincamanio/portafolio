/* ===========================
   DATA — Editá esto con tus proyectos
=========================== */
const projects = [
  {
    title: "Proyecto Uno",
    tags: ["React", "Node.js", "API REST"],
    url: "#",
  },
  {
    title: "Proyecto Dos",
    tags: ["JavaScript", "CSS", "UI Design"],
    url: "#",
  },
  {
    title: "Proyecto Tres",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    url: "#",
  },
];

/* ===========================
   RENDER PROYECTOS
=========================== */
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  projects.forEach((project, i) => {
    const a = document.createElement("a");
    a.classList.add("project-item", "reveal");
    a.href = project.url;
    if (project.url !== "#") a.target = "_blank";

    const num = String(i + 1).padStart(2, "0");
    const tags = project.tags.map(t => `<span class="project-tag">${t}</span>`).join("");

    a.innerHTML = `
      <span class="project-num">${num}</span>
      <div class="project-info">
        <div class="project-title">${project.title}</div>
        <div class="project-tags">${tags}</div>
      </div>
      <span class="project-arrow">↗</span>
    `;

    container.appendChild(a);
  });
}

/* ===========================
   SCROLL REVEAL
=========================== */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ===========================
   AÑO ACTUAL EN FOOTER
=========================== */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ===========================
   NAV ACTIVO AL SCROLL
=========================== */
function initNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ===========================
   INIT
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setYear();
  initReveal();
  initNav();
});