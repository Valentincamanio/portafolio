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
   SKILLS DATA
=========================== */
const skills = [
  {
    category: "Lenguajes de programación",
    items: [
      {
        name: "JavaScript",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#F7DF1E"/><path d="M9.5 24.5l2.1-1.27c.4.72.77 1.33 1.65 1.33.84 0 1.37-.33 1.37-1.61V15h2.6v8c0 2.65-1.55 3.86-3.82 3.86-2.05 0-3.24-1.06-3.9-2.36zM19.1 24.2l2.1-1.22c.55.9 1.27 1.56 2.54 1.56 1.07 0 1.75-.53 1.75-1.27 0-.88-.7-1.19-1.88-1.7l-.65-.28c-1.86-.79-3.1-1.79-3.1-3.88 0-1.93 1.47-3.4 3.77-3.4 1.64 0 2.82.57 3.66 2.06l-2 1.28c-.44-.79-.92-1.1-1.66-1.1-.76 0-1.24.48-1.24 1.1 0 .77.48 1.08 1.59 1.56l.65.28c2.19.94 3.43 1.9 3.43 4.05 0 2.32-1.82 3.58-4.27 3.58-2.39 0-3.94-1.14-4.69-2.63z" fill="#000"/></svg>`
      },
      {
        name: "TypeScript",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#3178C6"/><path d="M18.4 22.7v2.3c.37.19.82.33 1.33.43.52.1 1.06.15 1.64.15.56 0 1.09-.06 1.59-.18.5-.12.94-.32 1.31-.59.37-.28.67-.63.88-1.07.22-.44.33-.97.33-1.6 0-.46-.07-.87-.2-1.21a2.7 2.7 0 00-.58-.93 4.1 4.1 0 00-.93-.72 10.7 10.7 0 00-1.24-.6 8.6 8.6 0 01-.84-.39 2.8 2.8 0 01-.55-.38 1.3 1.3 0 01-.3-.43 1.4 1.4 0 01-.1-.53c0-.18.04-.35.1-.5.07-.15.17-.28.3-.38.13-.1.29-.18.48-.24.19-.05.4-.08.64-.08.17 0 .35.01.53.04.18.03.36.08.53.14.17.07.34.15.49.26.15.1.29.23.4.38v-2.16a5.4 5.4 0 00-1.17-.3 8.1 8.1 0 00-1.37-.1c-.55 0-1.07.06-1.56.19-.49.13-.92.33-1.29.6-.37.27-.66.62-.87 1.04-.21.42-.32.92-.32 1.5 0 .74.2 1.38.6 1.9.4.52 1 .96 1.82 1.3.32.13.62.26.89.39.27.13.5.27.69.42.19.15.34.32.45.5.1.18.16.39.16.63 0 .19-.03.37-.1.53a1.1 1.1 0 01-.3.42c-.14.12-.31.21-.52.27-.21.07-.46.1-.75.1-.49 0-.97-.09-1.43-.27a4.3 4.3 0 01-1.27-.82zM13.1 17.4H16v-2h-8.5v2h2.9v8.5h2.7V17.4z" fill="white"/></svg>`
      },
    ]
  },
  {
    category: "Frontend",
    items: [
      {
        name: "HTML 5",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#E34F26"/><path d="M7 4l1.8 20.4L16 27l7.2-2.6L25 4H7zm13.8 6.5H13l.2 2.5h7.4l-.6 6.7-4 1.1-4-1.1-.3-3h2.4l.1 1.5 1.8.5 1.8-.5.2-2.5H11.8L11 8.5h10.1l-.3 2z" fill="white"/></svg>`
      },
      {
        name: "CSS",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#1572B6"/><path d="M7 4l1.8 20.4L16 27l7.2-2.6L25 4H7zm12 14.6l-3 .8-3-.8-.2-2.5h2.4l.1 1.3 1.7.5 1.7-.5.2-2.1-5.6-1.5-.4-5h8.8l-.3 2.5H13l.1 1.5 3.9 1 .9.3 1 .3-.9 5.2z" fill="white"/></svg>`
      },
      {
        name: "React",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#20232A"/><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5" fill="none"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(120 16 16)"/></svg>`
      },
      {
        name: "Next.js",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#000"/><circle cx="16" cy="16" r="10" fill="#000" stroke="#fff" stroke-width="1"/><path d="M12.5 12v8l7-8v5.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      },
      {
        name: "Tailwind",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#0F172A"/><path d="M16 9c-2.7 0-4.4 1.35-5 4.05 1-1.35 2.17-1.856 3.5-1.55.76.19 1.3.74 1.9 1.35.98 1 2.1 2.15 4.6 2.15 2.7 0 4.4-1.35 5-4.05-1 1.35-2.17 1.856-3.5 1.55-.76-.19-1.3-.74-1.9-1.35C20.62 10.15 19.5 9 17 9h-1zm-5 6.05c-2.7 0-4.4 1.35-5 4.05 1-1.35 2.17-1.856 3.5-1.55.76.19 1.3.74 1.9 1.35.98 1 2.1 2.15 4.6 2.15 2.7 0 4.4-1.35 5-4.05-1 1.35-2.17 1.856-3.5 1.55-.76-.19-1.3-.74-1.9-1.35-.98-1-2.1-2.15-4.6-2.15z" fill="#38BDF8"/></svg>`
      },
      {
        name: "Sass",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#1a1a1a"/><path d="M16 7c-5 0-9 2.24-9 5 0 1.74 1.38 3.27 3.5 4.24-.1.35-.16.72-.16 1.1 0 2.14 1.84 3.88 4.12 3.88.35 0 .7-.04 1.02-.12.6 1.2 1.85 2.02 3.27 2.02 2.03 0 3.67-1.6 3.67-3.57 0-.12-.01-.24-.02-.36C24.07 18.22 25 16.72 25 15c0-4.42-4.03-8-9-8zm2.75 14.56c-.97 0-1.76-.76-1.76-1.7 0-.94.79-1.7 1.76-1.7.97 0 1.76.76 1.76 1.7 0 .94-.79 1.7-1.76 1.7z" fill="#CC6699"/></svg>`
      },
    ]
  },
  {
    category: "Backend & DB",
    items: [
      {
        name: "Node.js",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#1a1a1a"/><path d="M16 5L6 10.5v11L16 27l10-5.5v-11L16 5zm0 2.3l7.7 4.2v8.5L16 24.2l-7.7-4.2v-8.5L16 7.3zm-1 4v5h2v-5h-2zm0 7v2h2v-2h-2z" fill="#539E43"/></svg>`
      },
      {
        name: "PostgreSQL",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#1a1a1a"/><path d="M22 10c0-2.76-2.69-5-6-5s-6 2.24-6 5v3c0 2.76 2.69 5 6 5h1v4.5c0 .28.22.5.5.5s.5-.22.5-.5V18c2.76-.17 4.96-2.33 4.98-5H22v-3zm-2 3c0 2.21-1.79 4-4 4s-4-1.79-4-4v-3c0-2.21 1.79-4 4-4s4 1.79 4 4v3z" fill="#336791"/></svg>`
      },
      {
        name: "Git",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#1a1a1a"/><path d="M27.3 14.7l-10-10a2 2 0 00-2.83 0l-2.12 2.12 2.68 2.68A2.38 2.38 0 0118 13.38v.14a2.38 2.38 0 11-1.38 2.19l-2.5-2.5v6.57A2.38 2.38 0 1111.75 22a2.38 2.38 0 012.38-2.38h.12V12.9L11.5 10.17a2 2 0 000 2.83l-2.83 2.83a2 2 0 000 2.83l10 10a2 2 0 002.83 0l5.8-5.8a2 2 0 000-2.83l-5.8-5.82z" fill="#F05032"/></svg>`
      },
      {
        name: "Figma",
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="#1a1a1a"/><path d="M13 25a3 3 0 003-3v-3h-3a3 3 0 000 6z" fill="#0ACF83"/><path d="M10 16a3 3 0 013-3h3v6h-3a3 3 0 01-3-3z" fill="#A259FF"/><path d="M10 10a3 3 0 013-3h3v6h-3a3 3 0 01-3-3z" fill="#F24E1E"/><path d="M16 7h3a3 3 0 010 6h-3V7z" fill="#FF7262"/><path d="M22 16a3 3 0 11-6 0 3 3 0 016 0z" fill="#1ABCFE"/></svg>`
      },
    ]
  }
];

/* ===========================
   RENDER SKILLS
=========================== */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  skills.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.classList.add("reveal");

    const title = document.createElement("div");
    title.classList.add("skills-group-title");
    title.textContent = group.category;

    const grid = document.createElement("div");
    grid.classList.add("skills-grid");

    group.items.forEach((skill) => {
      const card = document.createElement("div");
      card.classList.add("skill-card");
      card.innerHTML = `${skill.svg}<span>${skill.name}</span>`;
      grid.appendChild(card);
    });

    groupEl.appendChild(title);
    groupEl.appendChild(grid);
    container.appendChild(groupEl);
  });
}

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
  renderSkills();
  renderProjects();
  setYear();
  initReveal();
  initNav();
});