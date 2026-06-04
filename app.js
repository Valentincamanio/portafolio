
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  const skills = getSkills();
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

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const projects = getProjects();
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
        <div>${project.descripcion} </div>
      </div>
      <span class="project-arrow">↗</span>
    `;

    container.appendChild(a);
  });
}

/* ==== SCROLL ==== */
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
    { threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ====== AÑO ACTUAL ========= */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ===== NAV ===== */
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

/* ===== MENU ===== */
function initHamburger() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });

  // Cerrar al hacer click en un link
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

/* ===== INIT ======= */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  setYear();
  initReveal();
  initNav();
  initHamburger();
});