let currentLang = getStoredLang();

function t(path) {
  const parts = path.split(".");
  let node = translations[currentLang];
  for (const part of parts) {
    node = node[part];
  }
  return node;
}

function ui(key) {
  return t(`ui.${key}`);
}

function mockUsers() {
  return translations[currentLang].data.mockUsers;
}

// --- Estado de autenticação ---
let currentUser = null;

// --- Refs do DOM ---
const langSwitch = document.getElementById("langSwitch");
const topnav = document.getElementById("topnav");
const topbarActions = document.getElementById("topbarActions");
const allPages = document.querySelectorAll(".page");
const profileSelect = document.getElementById("profileSelect");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginForm = document.getElementById("loginForm");
const loginHint = document.getElementById("loginHint");
const demoUsers = document.getElementById("demoUsers");
const statsGrid = document.getElementById("statsGrid");
const debtList = document.getElementById("debtList");
const scenarioList = document.getElementById("scenarioList");
const riskCard = document.getElementById("riskCard");
const notificationList = document.getElementById("notificationList");
const debtCountPill = document.getElementById("debtCountPill");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeCopy = document.getElementById("welcomeCopy");
const dashboardEyebrow = document.getElementById("dashboardEyebrow");
const heroHighlights = document.getElementById("heroHighlights");
const panelMetrics = document.getElementById("panelMetrics");
const benefitGrid = document.getElementById("benefitGrid");
const solutionTimeline = document.getElementById("solutionTimeline");

// --- Roteador ---
const PAGE_ROUTES = new Set(["", "home", "login", "dashboard"]);

function navigate(page) {
  location.hash = page === "home" ? "" : page;
}

function showPage(pageId) {
  allPages.forEach((p) => p.classList.toggle("active", p.id === pageId));
  window.scrollTo({ top: 0, behavior: "instant" });
}

function handleRoute() {
  const hash = location.hash.replace("#", "") || "";

  if (!PAGE_ROUTES.has(hash)) {
    // Âncora interna da tela inicial (ex: #beneficios, #solucao)
    const el = document.getElementById(hash);
    if (el) {
      const homePage = document.getElementById("page-home");
      if (!homePage.classList.contains("active")) {
        setTopbarHome();
        showPage("page-home");
      }
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
    }
    return;
  }

  switch (hash) {
    case "login":
      setTopbarLogin();
      showPage("page-login");
      updateInputs(profileSelect.value || "cidadao");
      break;
    case "dashboard":
      if (!currentUser) {
        navigate("login");
        return;
      }
      setTopbarDashboard(mockUsers()[currentUser].name);
      renderDashboard(currentUser);
      showPage("page-dashboard");
      break;
    default:
      setTopbarHome();
      showPage("page-home");
  }
}

// --- Estados do topbar ---
function setTopbarHome() {
  topnav.style.display = "";
  topbarActions.innerHTML = `
    <button class="ghost-button" id="openLoginButton" type="button">${ui("topbarLogin")}</button>
    <button class="primary-button" id="heroLoginButton" type="button">${ui("topbarAccess")}</button>
  `;
  document.getElementById("openLoginButton").addEventListener("click", () => navigate("login"));
  document.getElementById("heroLoginButton").addEventListener("click", () => navigate("login"));
}

function setTopbarLogin() {
  topnav.style.display = "none";
  topbarActions.innerHTML = `
    <button class="ghost-button" id="backHomeButton" type="button">${ui("topbarBackHome")}</button>
  `;
  document.getElementById("backHomeButton").addEventListener("click", () => navigate("home"));
}

function setTopbarDashboard(userName) {
  topnav.style.display = "none";
  topbarActions.innerHTML = `
    <span class="user-name-badge">${userName}</span>
    <button class="ghost-button" id="logoutButton" type="button">${ui("topbarLogout")}</button>
  `;
  document.getElementById("logoutButton").addEventListener("click", () => {
    currentUser = null;
    navigate("login");
  });
}

// --- Conteúdo estático traduzido ---
function renderStaticContent() {
  document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  langSwitch.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });

  heroHighlights.innerHTML = ui("heroHighlights").map((item) => `<li>${item}</li>`).join("");

  panelMetrics.innerHTML = ui("panelMetrics")
    .map(
      (metric) => `
        <article>
          <small>${metric.label}</small>
          <strong>${metric.value}</strong>
          <span>${metric.detail}</span>
        </article>
      `,
    )
    .join("");

  benefitGrid.innerHTML = ui("benefitCards")
    .map(
      (card) => `
        <article class="feature-card">
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `,
    )
    .join("");

  solutionTimeline.innerHTML = ui("timeline")
    .map(
      (item, index) => `
        <article class="timeline-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");

  const profileOptions = ui("profileOptions");
  Array.from(profileSelect.options).forEach((option, index) => {
    option.textContent = profileOptions[index];
  });

  const demoLabels = ui("demoUserChips");
  demoUsers.querySelectorAll(".user-chip").forEach((chip, index) => {
    chip.textContent = demoLabels[index];
  });
}

function setLanguage(lang) {
  if (lang !== "pt" && lang !== "en") return;
  currentLang = lang;
  setStoredLang(lang);
  renderStaticContent();
  updateInputs(profileSelect.value || "cidadao");

  const hash = location.hash.replace("#", "") || "";
  if (hash === "" || hash === "home") {
    setTopbarHome();
  } else if (hash === "login") {
    setTopbarLogin();
  } else if (hash === "dashboard" && currentUser) {
    setTopbarDashboard(mockUsers()[currentUser].name);
    renderDashboard(currentUser);
  }
}

// --- Formulário de login ---
function updateInputs(profileKey) {
  const user = mockUsers()[profileKey];
  profileSelect.value = profileKey;
  usernameInput.value = user.username;
  passwordInput.value = user.password;
  loginHint.textContent = ui("loginHint")(user.username, user.password);
  loginHint.style.color = "";
  demoUsers.querySelectorAll(".user-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.profile === profileKey);
  });
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const profileKey = profileSelect.value;
  const user = mockUsers()[profileKey];
  const validCredentials =
    usernameInput.value.trim() === user.username && passwordInput.value === user.password;

  if (!validCredentials) {
    loginHint.textContent = ui("invalidCredentials")(user.username, user.password);
    loginHint.style.color = "#9a4728";
    return;
  }

  currentUser = profileKey;
  navigate("dashboard");
});

profileSelect.addEventListener("change", (event) => {
  updateInputs(event.target.value);
});

demoUsers.addEventListener("click", (event) => {
  const chip = event.target.closest(".user-chip");
  if (!chip) return;
  updateInputs(chip.dataset.profile);
});

// --- Botões da tela inicial ---
document.getElementById("heroDashboardButton").addEventListener("click", () => {
  navigate(currentUser ? "dashboard" : "login");
});

document.querySelectorAll("[data-scroll]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

langSwitch.addEventListener("click", (event) => {
  const target = event.target.closest("[data-lang]");
  if (!target) return;
  setLanguage(target.dataset.lang);
});

// --- Renderização do dashboard ---
function currencyWidth(score) {
  return `${Math.max(10, Math.min(100, score))}%`;
}

function renderDashboard(profileKey) {
  const user = mockUsers()[profileKey];
  dashboardEyebrow.textContent = user.profileLabel;
  welcomeTitle.textContent =
    profileKey === "gestor" ? ui("welcomeGreeting")(user.name) : ui("welcomePanel")(user.name);
  welcomeCopy.textContent = user.intro;
  debtCountPill.textContent = ui("debtCountLabel")(user.debts.length);

  statsGrid.innerHTML = user.stats
    .map(
      (stat) => `
        <article class="stat-card">
          <small>${stat.label}</small>
          <strong>${stat.value}</strong>
          <span>${stat.detail}</span>
        </article>
      `,
    )
    .join("");

  debtList.innerHTML = user.debts
    .map(
      (debt) => `
        <article class="debt-item">
          <div class="debt-head">
            <h5>${debt.title}</h5>
            <span class="debt-amount">${debt.amount}</span>
          </div>
          <div class="debt-meta">${debt.meta}</div>
        </article>
      `,
    )
    .join("");

  scenarioList.innerHTML = user.scenarios
    .map(
      (scenario) => `
        <article class="scenario-card">
          <div class="scenario-head">
            <h5>${scenario.title}</h5>
            <span class="scenario-badge">${scenario.badge}</span>
          </div>
          <p>${scenario.description}</p>
          <div class="scenario-meta">${scenario.meta}</div>
        </article>
      `,
    )
    .join("");

  riskCard.innerHTML = `
    <div class="risk-header">
      <div>
        <small>${ui("riskScoreLabel")}</small>
        <strong class="risk-score">${user.risk.score}/100</strong>
      </div>
      <span class="pill">${user.risk.label}</span>
    </div>
    <div class="risk-bar" aria-hidden="true">
      <span style="width: ${currencyWidth(user.risk.score)}"></span>
    </div>
    <p>${user.risk.description}</p>
  `;

  notificationList.innerHTML = user.notifications
    .map(
      (item) => `
        <article class="notification-item">
          <div class="notification-head">
            <h5>${item.title}</h5>
            <span class="notification-tag">${item.tag}</span>
          </div>
          <p>${item.body}</p>
          <div class="notification-meta">${item.meta}</div>
        </article>
      `,
    )
    .join("");
}

// --- Inicialização ---
renderStaticContent();
window.addEventListener("hashchange", handleRoute);
handleRoute();
