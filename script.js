/* ==========================================================================
   NexusDev — Interactive Logic & Learning Roadmap Engine
   Vanilla JavaScript (ESNext)
   Features:
   - Dynamic Interactive Roadmap Tracks (Frontend, Fullstack, Backend, AI)
   - Step Completion & Persistent Progress Tracker (LocalStorage)
   - Mouse Spotlight Aura Tracking
   - Dark/Light Theme Switching with Storage
   - Animated Stats Counters (Intersection Observer)
   - Dynamic FAQ Accordion
   - Contact Form Validation & Animated Toast System with Confetti
   - Mobile Navigation Drawer
   ========================================================================== */

// --- Roadmap Data Structure ---
const ROADMAP_DATA = {
  frontend: {
    title: "Frontend Developer Roadmap 2026",
    desc: "დაეუფლე თანამედროვე ინტერფეისების, რესპონსიული დიზაინის, React-ისა და Next.js-ის ეკოსისტემას.",
    duration: "4-6 თვე",
    projects: "8 პრაქტიკული პროექტი",
    level: "დამწყებიდან პროფესიონალამდე",
    steps: [
      {
        id: "fe-1",
        num: "01",
        phase: "საბაზისო",
        heading: "ვებ-ტექნოლოგიების საფუძვლები & Semantic HTML5",
        duration: "3 კვირა",
        desc: "თანამედროვე ვებ-სტანდარტები, სემანტიკური მარკირება, ხელმისაწვდომობა (Accessibility / a11y) და SEO ოპტიმიზაციის პრინციპები.",
        skills: ["HTML5", "CSS3 Basics", "Responsive Meta", "Accessibility", "Git & GitHub"],
        deliverable: "სრულად რესპონსიული მრავალგვერდიანი სააგენტოს ვებსაიტი სუფთა სემანტიკით."
      },
      {
        id: "fe-2",
        num: "02",
        phase: "სტილიზაცია",
        heading: "თანამედროვე CSS, Flexbox, Grid & ანიმაციები",
        duration: "4 კვირა",
        desc: "მოწინავე CSS არქიტექტურა, Flexbox, CSS Grid, Glassmorphism, მიკრო-ანიმაციები, მობილური ადაპტაცია (Mobile-First) და Tailwind CSS.",
        skills: ["CSS Grid", "Flexbox", "Tailwind CSS", "Keyframes", "Custom Properties"],
        deliverable: "ინტერაქტიული Dashboard-ის UI კომპონენტების ნაკრები და ანიმირებული Landing Page."
      },
      {
        id: "fe-3",
        num: "03",
        phase: "ლოგიკა",
        heading: "JavaScript (ESNext), DOM & ასინქრონული პროგრამირება",
        duration: "6 კვირა",
        desc: "JS-ის ძირითადი და მოწინავე კონცეფციები: Closures, Promises, Async/Await, Fetch API, Event Loop, მოდულები და ობიექტზე ორიენტირებული კოდი.",
        skills: ["JavaScript ES6+", "DOM Manipulation", "Async/Await", "Fetch API", "Local Storage"],
        deliverable: "E-Commerce აპლიკაცია კალათით, ფილტრებითა და რეალურ API-სთან ინტეგრაციით."
      },
      {
        id: "fe-4",
        num: "04",
        phase: "ფრეიმვორკი",
        heading: "React 19 & TypeScript-ის ეკოსისტემა",
        duration: "6 კვირა",
        desc: "კომპონენტური არქიტექტურა, Hooks (useState, useEffect, useMemo, custom hooks), State Management (Zustand/Redux Toolkit) და TypeScript ტიპიზაცია.",
        skills: ["React 19", "TypeScript", "Zustand", "React Router", "TanStack Query"],
        deliverable: "პროექტების მართვის SaaS პლატფორმა (Trello/Jira-ს ანალოგი) Drag & Drop ფუნქციით."
      },
      {
        id: "fe-5",
        num: "05",
        phase: "წარმოება",
        heading: "Next.js 15, SSR/SSG, Server Components & დიპლოი",
        duration: "4 კვირა",
        desc: "App Router, Server Actions, SEO ოპტიმიზაცია, Lighthouse 100/100 ქულა, ტესტირება (Jest / Vitest) და Vercel-ზე ავტომატური დიპლოი.",
        skills: ["Next.js 15", "Server Components", "SEO Best Practices", "Vitest", "Vercel CI/CD"],
        deliverable: "სრულფასოვანი AI-გენერატორი ვებ-აპლიკაცია ავტორიზაციითა და გადახდის სისტემით."
      }
    ]
  },
  fullstack: {
    title: "Full-Stack Engineer Roadmap 2026",
    desc: "დაეუფლე როგორც კლიენტის (Frontend), ისე სერვერის (Backend) და მონაცემთა ბაზების შექმნასა და დაკავშირებას.",
    duration: "6-8 თვე",
    projects: "10 პრაქტიკული პროექტი",
    level: "ინტენსიური პროფესიული კურსი",
    steps: [
      {
        id: "fs-1",
        num: "01",
        phase: "საფუძვლები",
        heading: "Core Frontend & TypeScript მასტერინგი",
        duration: "5 კვირა",
        desc: "სიღრმისეული JavaScript, მკაცრი TypeScript ტიპიზაცია, React 19 კომპონენტები და Clean Code არქიტექტურა.",
        skills: ["TypeScript", "React 19", "Tailwind CSS", "Git Workflow", "Component Driven UI"],
        deliverable: "თანამედროვე Analytics Dashboard რეალურ მონაცემებზე მომუშავე გრაფიკებით."
      },
      {
        id: "fs-2",
        num: "02",
        phase: "სერვერი",
        heading: "Node.js, Express & RESTful API არქიტექტურა",
        duration: "5 კვირა",
        desc: "სერვერული პროგრამირება Node.js გარემოში, Express.js, Middleware, JWT ავთენტიფიკაცია, უსაფრთხოების სტანდარტები (CORS, Rate Limit).",
        skills: ["Node.js", "Express.js", "REST APIs", "JWT & Cookies", "Security Best Practices"],
        deliverable: "სერვისული REST API როლებზე დაფუძნებული ავტორიზაციითა და დაცვით."
      },
      {
        id: "fs-3",
        num: "03",
        phase: "მონაცემები",
        heading: "მონაცემთა ბაზები: PostgreSQL, Prisma ORM & MongoDB",
        duration: "5 კვირა",
        desc: "რელაციური და დოკუმენტური ბაზების მოდელირება, ინდექსები, ტრანზაქციები, მიგრაციები და Prisma ORM-თან მუშაობა.",
        skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Database Indexing", "SQL Queries"],
        deliverable: "E-Commerce პლატფორმის მონაცემთა არქიტექტურა რეალური შეკვეთების სისტემით."
      },
      {
        id: "fs-4",
        num: "04",
        phase: "სრული სტეკი",
        heading: "Next.js Full-Stack, Real-time WebSockets & Caching",
        duration: "6 კვირა",
        desc: "Server Actions, რეალურ დროში კომუნიკაცია (Socket.io), ქეშირება Redis-ით და ფაილების ატვირთვა Cloudinary/S3-ზე.",
        skills: ["Next.js Fullstack", "Socket.io", "Redis Cache", "AWS S3 / Cloudinary", "Zod Validation"],
        deliverable: "რეალურ დროში მომუშავე გუნდური ჩათი & დოკუმენტების კოლაბორაციული რედაქტორი."
      },
      {
        id: "fs-5",
        num: "05",
        phase: "DevOps",
        heading: "Docker, CI/CD პაიპლაინები & Cloud Deployment",
        duration: "4 კვირა",
        desc: "კონტეინერიზაცია Docker-ით, Docker Compose, GitHub Actions ავტომატური ტესტირებისთვის და დიპლოი Railway/Render/AWS-ზე.",
        skills: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Monitoring & Logging"],
        deliverable: "სრულად კონტეინერიზებული, მონიტორინგის სისტემით აღჭურვილი Production აპლიკაცია."
      }
    ]
  },
  backend: {
    title: "Backend Architect Roadmap 2026",
    desc: "მაღალი დატვირთვის მქონე სერვერები, მიკროსერვისული არქიტექტურა, SQL/NoSQL ოპტიმიზაცია და მასშტაბირებადობა.",
    duration: "5-7 თვე",
    projects: "7 სიღრმისეული სერვერული პროექტი",
    level: "საშუალოდან არქიტექტორამდე",
    steps: [
      {
        id: "be-1",
        num: "01",
        phase: "ბირთვი",
        heading: "Node.js Internals, TypeScript & Clean Architecture",
        duration: "4 კვირა",
        desc: "Event Loop-ის შიდა მუშაობა, Streams, Buffers, Worker Threads, მკაცრი ტიპიზაცია და Dependency Injection პატერნები.",
        skills: ["Node.js Internals", "TypeScript", "Clean Architecture", "Unit Testing", "Streams & Buffers"],
        deliverable: "მაღალი სიჩქარის ფაილების სტრიმინგისა და დამუშავების მიკროსერვისი."
      },
      {
        id: "be-2",
        num: "02",
        phase: "მონაცემები",
        heading: "Advanced SQL, PostgreSQL Performance & Redis",
        duration: "5 კვირა",
        desc: "რთული Query-ების ოპტიმიზაცია, EXPLAIN ANALYZE, Triggers, Partitioning, და Redis In-Memory ქეშირება.",
        skills: ["PostgreSQL Advanced", "Redis In-Memory", "Query Tuning", "Transactions & ACID", "Database Sharding"],
        deliverable: "მილიონობით ჩანაწერზე ოპტიმიზებული ფინანსური ტრანზაქციების ბირთვი."
      },
      {
        id: "be-3",
        num: "03",
        phase: "კომუნიკაცია",
        heading: "Message Queues, RabbitMQ, Kafka & Microservices",
        duration: "6 კვირა",
        desc: "ასინქრონული მესიჯინგი, RabbitMQ, Apache Kafka საფუძვლები, Event-Driven არქიტექტურა და gRPC სერვისთაშორისი კავშირი.",
        skills: ["RabbitMQ", "Kafka Basics", "gRPC", "Event-Driven", "Microservices Design"],
        deliverable: "დისტრიბუციული შეტყობინებებისა და შეკვეთების დამუშავების სისტემა."
      },
      {
        id: "be-4",
        num: "04",
        phase: "უსაფრთხოება",
        heading: "Auth, OAuth2, Rate-Limiting & Security Audit",
        duration: "4 კვირა",
        desc: "OAuth 2.0, OpenID Connect, Role-Based Access Control (RBAC), DDoS დაცვა, OWASP Top 10 და Penetration Testing საფუძვლები.",
        skills: ["OAuth 2.0", "RBAC", "OWASP Security", "Rate Limiting", "Data Encryption"],
        deliverable: "ავთენტიფიკაციისა და უფლებამოსილების მართვის ცენტრალიზებული Identity Provider."
      },
      {
        id: "be-5",
        num: "05",
        phase: "ინფრასტრუქტურა",
        heading: "Kubernetes, Docker, Prometheus & Grafana Monitoring",
        duration: "4 კვირა",
        desc: "კონტეინერების ორკესტრაცია Kubernetes-ით, CI/CD პაიპლაინი, ლოგირება და Prometheus & Grafana მეტრიკები.",
        skills: ["Kubernetes", "Prometheus", "Grafana", "ELK Stack", "DevOps Pipelines"],
        deliverable: "მონიტორინგითა და ავტო-სკეილინგით აღჭურვილი წარმოების გარემო ღრუბელში."
      }
    ]
  },
  ai: {
    title: "AI & Modern Stack Roadmap 2026",
    desc: "შეისწავლე როგორ შექმნა ინტელექტუალური აპლიკაციები LLM-ების, RAG-ის, LangChain-ისა და ვექტორული ბაზების მეშვეობით.",
    duration: "4-5 თვე",
    projects: "6 AI-ინტეგრირებული პროექტი",
    level: "ინოვაციური თანამედროვე ტრეკი",
    steps: [
      {
        id: "ai-1",
        num: "01",
        phase: "საფუძვლები",
        heading: "AI API-ები & Prompt Engineering ინჟინერია",
        duration: "3 კვირა",
        desc: "OpenAI, Anthropic & Gemini API-ების ინტეგრაცია, სისტემური პრომპტები, Function Calling და სტრუქტურირებული JSON პასუხები.",
        skills: ["OpenAI / Gemini API", "Prompt Engineering", "Function Calling", "JSON Schema", "TypeScript"],
        deliverable: "ინტელექტუალური კონტენტ-გენერატორი და კოდის ავტომატური ასისტენტი."
      },
      {
        id: "ai-2",
        num: "02",
        phase: "მონაცემები",
        heading: "ვექტორული ბაზები & Embeddings (RAG არქიტექტურა)",
        duration: "4 კვირა",
        desc: "ტექსტის ვექტორიზაცია (Embeddings), Pinecone / Supabase pgvector, Semantic Search და საკუთარ მონაცემებზე მომუშავე RAG სისტემა.",
        skills: ["Vector DB", "Pinecone", "pgvector", "RAG Architecture", "Semantic Search"],
        deliverable: "ჭკვიანი დოკუმენტების ანალიტიკოსი: ჩატი PDF ფაილებთან და მონაცემებთან."
      },
      {
        id: "ai-3",
        num: "03",
        phase: "აგენტები",
        heading: "AI Agents & LangChain / Vercel AI SDK",
        duration: "5 კვირა",
        desc: "ავტონომიური AI აგენტები, LangChain/LlamaIndex, Vercel AI SDK სტრიმინგისთვის და მრავალსაფეხურიანი ამოცანების ავტომატიზაცია.",
        skills: ["Vercel AI SDK", "LangChain", "AI Agents", "Tool Calling", "Memory Management"],
        deliverable: "ავტონომიური ბიზნეს-ასისტენტი, რომელიც გეგმავს შეხვედრებს და პასუხობს მეილებს."
      },
      {
        id: "ai-4",
        num: "04",
        phase: "წარმოება",
        heading: "AI პროდუქტის დიზაინი, ოპტიმიზაცია & უსაფრთხოება",
        duration: "3 კვირა",
        desc: "ტოკენების ხარჯის ოპტიმიზაცია, Prompt Injection-ისგან დაცვა, რეალურ დროში სტრიმინგი და წარმოებისთვის მზადყოფნა.",
        skills: ["Token Optimization", "AI Safety", "Streaming UI", "Latency Reduction", "Production Ready"],
        deliverable: "სრული AI SaaS პროდუქტი გამოწერის სისტემითა და მომხმარებლის კაბინეტით."
      }
    ]
  }
};

// --- Application State ---
let currentTrack = "frontend";
let completedSteps = new Set();

// --- DOM References ---
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("navMenu");
const mobileToggle = document.getElementById("mobileToggle");
const themeToggle = document.getElementById("themeToggle");
const cursorSpotlight = document.getElementById("cursorSpotlight");

const trackTitle = document.getElementById("trackTitle");
const trackDesc = document.getElementById("trackDesc");
const trackDuration = document.getElementById("trackDuration");
const trackProjects = document.getElementById("trackProjects");
const trackLevel = document.getElementById("trackLevel");
const roadmapTimeline = document.getElementById("roadmapTimeline");
const completedCountEl = document.getElementById("completedCount");
const trackerBarFill = document.getElementById("trackerBarFill");

const contactForm = document.getElementById("contactForm");
const toastContainer = document.getElementById("toastContainer");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadCompletedSteps();
  renderRoadmap(currentTrack);
  initMouseSpotlight();
  initNavbarScroll();
  initStatsObserver();
  initFaqAccordion();
  initContactForm();
  initTrackSwitcher();
  initFooterJumpLinks();
});

// ==========================================================================
// 1. THEME SWITCHING (DARK / LIGHT)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("nexusdev_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("nexusdev_theme", newTheme);
    showToast("თემა განახლდა", `გააქტიურდა ${newTheme === 'dark' ? 'მუქი' : 'ნათელი'} ვიზუალური სტილი`, "🎨");
  });
}

// ==========================================================================
// 2. MOUSE SPOTLIGHT LIGHT AURA
// ==========================================================================
function initMouseSpotlight() {
  if (!cursorSpotlight || window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Linear interpolation for smooth trailing aura
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    cursorSpotlight.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================================================
// 3. NAVBAR SCROLL & ACTIVE STATE & MOBILE DRAWER
// ==========================================================================
function initNavbarScroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active link highlighting
    const sections = document.querySelectorAll("main section");
    const scrollPos = window.scrollY + 160;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Mobile menu toggle
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  // Close mobile menu on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileToggle.classList.remove("active");
      navMenu.classList.remove("open");
    });
  });
}

// ==========================================================================
// 4. ROADMAP LOGIC (RENDER & INTERACTIVE TRACKER)
// ==========================================================================
function loadCompletedSteps() {
  try {
    const saved = localStorage.getItem("nexusdev_completed_steps");
    if (saved) {
      completedSteps = new Set(JSON.parse(saved));
    }
  } catch (e) {
    completedSteps = new Set();
  }
}

function saveCompletedSteps() {
  try {
    localStorage.setItem("nexusdev_completed_steps", JSON.stringify([...completedSteps]));
  } catch (e) {}
}

function initTrackSwitcher() {
  const tabButtons = document.querySelectorAll(".roadmap-tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const trackKey = btn.getAttribute("data-track");
      if (trackKey === currentTrack) return;

      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      currentTrack = trackKey;
      renderRoadmap(trackKey);
    });
  });
}

function renderRoadmap(trackKey) {
  const data = ROADMAP_DATA[trackKey];
  if (!data) return;

  // Update Track Header Meta
  trackTitle.textContent = data.title;
  trackDesc.textContent = data.desc;
  trackDuration.textContent = data.duration;
  trackProjects.textContent = data.projects;
  trackLevel.textContent = data.level;

  // Clear Timeline
  roadmapTimeline.innerHTML = "";

  // Render Steps
  data.steps.forEach((step) => {
    const isCompleted = completedSteps.has(step.id);

    const stepEl = document.createElement("div");
    stepEl.className = `timeline-step ${isCompleted ? "completed" : ""}`;
    stepEl.id = `step-node-${step.id}`;

    stepEl.innerHTML = `
      <div class="step-marker">
        <span class="step-num">${step.num}</span>
        <span class="step-phase">${step.phase}</span>
      </div>

      <div class="step-card glass-card">
        <div class="step-card-header">
          <div class="step-title-group">
            <h4 class="step-heading">${step.heading}</h4>
            <span class="step-duration-badge">⏱️ ${step.duration}</span>
          </div>

          <button class="step-check-btn ${isCompleted ? "checked" : ""}" data-step-id="${step.id}" aria-label="ეტაპის დასრულება">
            <span class="check-icon">${isCompleted ? "✓" : "○"}</span>
            <span class="check-label">${isCompleted ? "დასრულებულია" : "მონიშნე დასრულებულად"}</span>
          </button>
        </div>

        <p class="step-desc">${step.desc}</p>

        <div class="step-tags-wrap">
          ${step.skills.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
        </div>

        <div class="step-deliverable">
          <span class="deliverable-icon">🎯</span>
          <div class="deliverable-text">
            <strong>რეალური პროექტი:</strong> ${step.deliverable}
          </div>
        </div>
      </div>
    `;

    roadmapTimeline.appendChild(stepEl);
  });

  // Attach event listeners to toggle buttons
  const checkBtns = roadmapTimeline.querySelectorAll(".step-check-btn");
  checkBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const stepId = btn.getAttribute("data-step-id");
      toggleStepCompletion(stepId, btn);
    });
  });

  updateProgressTracker();
}

function toggleStepCompletion(stepId, button) {
  const stepContainer = document.getElementById(`step-node-${stepId}`);
  const isNowCompleted = !completedSteps.has(stepId);

  if (isNowCompleted) {
    completedSteps.add(stepId);
    button.classList.add("checked");
    button.querySelector(".check-icon").textContent = "✓";
    button.querySelector(".check-label").textContent = "დასრულებულია";
    if (stepContainer) stepContainer.classList.add("completed");
    showToast("შესანიშნავია! 🎉", "ეტაპი წარმატებით მონიშნულია!", "🚀");
  } else {
    completedSteps.delete(stepId);
    button.classList.remove("checked");
    button.querySelector(".check-icon").textContent = "○";
    button.querySelector(".check-label").textContent = "მონიშნე დასრულებულად";
    if (stepContainer) stepContainer.classList.remove("completed");
  }

  saveCompletedSteps();
  updateProgressTracker();
}

function updateProgressTracker() {
  const currentSteps = ROADMAP_DATA[currentTrack].steps;
  const total = currentSteps.length;
  let done = 0;

  currentSteps.forEach((s) => {
    if (completedSteps.has(s.id)) done++;
  });

  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  completedCountEl.textContent = `${done} / ${total} დასრულებული (${percent}%)`;
  trackerBarFill.style.width = `${percent}%`;

  if (percent === 100 && total > 0) {
    showToast("გილოცავთ! 🏆", `${ROADMAP_DATA[currentTrack].title} სრულად დასრულებულია!`, "🌟");
    triggerConfetti();
  }
}

// ==========================================================================
// 5. ANIMATED STATS COUNTER ON SCROLL
// ==========================================================================
function initStatsObserver() {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach((num) => observer.observe(num));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target"), 10);
  const isPercent = element.textContent.includes("%");
  const isPlus = element.textContent.includes("+");
  const isSlash = element.textContent.includes("/");

  const duration = 1600;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // EaseOutQuad
    const eased = 1 - (1 - progress) * (1 - progress);
    const current = Math.floor(eased * target);

    if (isPercent) {
      element.textContent = `${current}%`;
    } else if (isPlus) {
      element.textContent = `${current}+`;
    } else if (isSlash) {
      element.textContent = `${current}/7`;
    } else {
      element.textContent = current;
    }

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    }
  }

  requestAnimationFrame(updateCount);
}

// ==========================================================================
// 6. FAQ ACCORDION
// ==========================================================================
function initFaqAccordion() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all other items
      accordionItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("active");
          other.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current
      item.classList.toggle("active", !isOpen);
      header.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

// ==========================================================================
// 7. CONTACT FORM VALIDATION & SUBMISSION WITH TOAST & CONFETTI
// ==========================================================================
function initContactForm() {
  if (!contactForm) return;

  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const courseSelect = document.getElementById("courseSelect");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      showFieldError("nameError", true);
      isValid = false;
    } else {
      showFieldError("nameError", false);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError("emailError", true);
      isValid = false;
    } else {
      showFieldError("emailError", false);
    }

    // Validate Course
    if (!courseSelect.value) {
      showFieldError("courseError", true);
      isValid = false;
    } else {
      showFieldError("courseError", false);
    }

    if (!isValid) return;

    // Simulating Form Success
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>იგზავნება...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>გაგზავნა & კონსულტაცია</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      `;

      showToast("განაცხადი მიღებულია! 🚀", `${nameInput.value.trim()}, მენტორი დაგიკავშირდებათ 24 საათში.`, "✅");
      triggerConfetti();
      contactForm.reset();
    }, 900);
  });

  // Clear error on input
  [nameInput, emailInput, courseSelect].forEach((inp) => {
    inp.addEventListener("input", () => {
      inp.closest(".form-group").classList.remove("has-error");
    });
  });
}

function showFieldError(errorId, show) {
  const errorEl = document.getElementById(errorId);
  if (errorEl) {
    const group = errorEl.closest(".form-group");
    if (group) group.classList.toggle("has-error", show);
  }
}

// ==========================================================================
// 8. TOAST NOTIFICATION COMPONENT
// ==========================================================================
function showToast(title, message, icon = "🔔") {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">
      <div class="toast-msg-title">${title}</div>
      <div class="toast-msg-sub">${message}</div>
    </div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hiding");
    setTimeout(() => toast.remove(), 400);
  }, 4200);
}

// ==========================================================================
// 9. LIGHTWEIGHT CANVAS CONFETTI EFFECT
// ==========================================================================
function triggerConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#6366f1", "#a855f7", "#ec4899", "#10b981", "#38bdf8", "#fbbf24"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.45,
      vx: (Math.random() - 0.5) * 14,
      vy: -Math.random() * 14 - 4,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10,
      gravity: 0.35,
      alpha: 1
    });
  }

  let animationFrame;
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach((p) => {
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rSpeed;
      p.alpha -= 0.009;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(render);
    } else {
      cancelAnimationFrame(animationFrame);
      canvas.remove();
    }
  }

  render();
}

// ==========================================================================
// 10. FOOTER TRACK QUICK JUMPS
// ==========================================================================
function initFooterJumpLinks() {
  const jumpLinks = document.querySelectorAll("[data-jump-track]");
  jumpLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const trackKey = link.getAttribute("data-jump-track");
      const targetBtn = document.querySelector(`.roadmap-tab-btn[data-track="${trackKey}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    });
  });
}
