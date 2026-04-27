const mockUsers = {
  cidadao: {
    profileLabel: "Ambiente do contribuinte",
    username: "maria.souza@gov.demo",
    password: "smartreg123",
    name: "Maria Souza",
    intro:
      "Aqui está o resumo consolidado da sua situação fiscal e as melhores opções para regularização.",
    stats: [
      { label: "Valor consolidado", value: "R$ 48.320,90", detail: "3 débitos ativos" },
      { label: "Economia potencial", value: "R$ 8.950,10", detail: "via transação municipal" },
      { label: "Prazo recomendado", value: "24 meses", detail: "com menor impacto mensal" },
      { label: "Pendência crítica", value: "1 alerta", detail: "vencimento em 9 dias" },
    ],
    debts: [
      {
        title: "IPTU em Dívida Ativa - Curitiba",
        amount: "R$ 12.480,50",
        meta: "Municipal • Vencido há 132 dias • Prioridade alta",
      },
      {
        title: "ISS Autônomo - Regularização simplificada",
        amount: "R$ 6.340,40",
        meta: "Municipal • Elegível para desconto de encargos",
      },
      {
        title: "Débito PGFN consolidado",
        amount: "R$ 29.500,00",
        meta: "Federal • Parcelável • Atualizado hoje",
      },
    ],
    scenarios: [
      {
        title: "Cenário recomendado",
        badge: "24x de R$ 2.113",
        description: "Equilibra desconto em encargos e parcela mensal compatível com seu histórico.",
        meta: "Entrada reduzida • Economia estimada de 18%",
      },
      {
        title: "Liquidação acelerada",
        badge: "12x de R$ 3.920",
        description: "Menor custo total do acordo para quem busca sair da inadimplência mais rápido.",
        meta: "Economia estimada de 24%",
      },
    ],
    risk: {
      score: 82,
      label: "Alta probabilidade de regularização espontânea",
      description:
        "Seu perfil demonstra boa aderência a acordos digitais. A recomendação é enviar proposta com desconto e lembrete em até 48 horas.",
    },
    notifications: [
      {
        title: "Proposta disponível para adesão",
        tag: "Push gov.br",
        body: "Existe uma condição vantajosa para regularização do IPTU com economia relevante sobre encargos.",
        meta: "Enviada hoje às 09:15",
      },
      {
        title: "Prazo de oportunidade",
        tag: "E-mail",
        body: "Faltam 9 dias para encerramento da campanha municipal com condições facilitadas.",
        meta: "Agendada para amanhã às 08:00",
      },
    ],
  },
  empresa: {
    profileLabel: "Ambiente empresarial",
    username: "financeiro@aurora.demo",
    password: "smartreg123",
    name: "Metalúrgica Aurora LTDA",
    intro:
      "Esta visão prioriza impacto financeiro, passivos por esfera e oportunidades de negociação para a empresa.",
    stats: [
      { label: "Passivo total", value: "R$ 318.904,20", detail: "5 inscrições ativas" },
      { label: "Melhor acordo", value: "60x de R$ 5.870", detail: "com entrada negociada" },
      { label: "Risco operacional", value: "Moderado", detail: "2 certidões impactadas" },
      { label: "Alertas urgentes", value: "2", detail: "necessitam ação esta semana" },
    ],
    debts: [
      {
        title: "ISSQN - Curitiba",
        amount: "R$ 42.880,90",
        meta: "Municipal • Inscrito • Suspende CND local",
      },
      {
        title: "Contribuições federais",
        amount: "R$ 196.023,30",
        meta: "Federal • PGFN • Elegível a transação",
      },
      {
        title: "ICMS complementar",
        amount: "R$ 80.000,00",
        meta: "Estadual • Em fase de consolidação sintética",
      },
    ],
    scenarios: [
      {
        title: "Fluxo preservado",
        badge: "60x de R$ 5.870",
        description: "Mantém previsibilidade de caixa e reduz pressão imediata no capital de giro.",
        meta: "Entrada de 6% • Redução parcial de multa",
      },
      {
        title: "Redução máxima",
        badge: "24x de R$ 12.940",
        description: "Alternativa com menor custo total do passivo, indicada para quitação mais rápida.",
        meta: "Economia estimada de 21%",
      },
    ],
    risk: {
      score: 68,
      label: "Boa chance de adesão mediante negociação assistida",
      description:
        "A empresa tende a responder melhor a ofertas com previsibilidade de caixa e comunicação voltada à retomada de certidões.",
    },
    notifications: [
      {
        title: "Certidão com restrição",
        tag: "Painel",
        body: "Há impacto direto em certidões fiscais enquanto o débito municipal permanecer em aberto.",
        meta: "Atualizado há 2 horas",
      },
      {
        title: "Campanha empresarial ativa",
        tag: "SMS",
        body: "Condições especiais para empresas com histórico de regularização parcial já estão disponíveis.",
        meta: "Enviada ontem às 16:40",
      },
    ],
  },
  gestor: {
    profileLabel: "Ambiente da gestão pública",
    username: "gestora.pgm@demo.gov",
    password: "smartreg123",
    name: "Fernanda Ribeiro",
    intro:
      "Esta visão destaca indicadores do piloto, priorização de casos e comunicação ativa para campanhas de adesão.",
    stats: [
      { label: "Contribuintes no piloto", value: "7.000", detail: "5 mil PF + 2 mil PJ" },
      { label: "Taxa de adesão", value: "16,8%", detail: "acima da meta inicial" },
      { label: "Recuperação estimada", value: "R$ 12,4 mi", detail: "no ciclo atual" },
      { label: "Fila prioritária", value: "842 casos", detail: "score acima de 75" },
    ],
    debts: [
      {
        title: "Cluster A - alta propensão",
        amount: "312 contribuintes",
        meta: "Score 80+ • Melhor resposta a push e e-mail",
      },
      {
        title: "Cluster B - negociação assistida",
        amount: "421 contribuintes",
        meta: "Faixa de débito média • Sensíveis a parcelamento",
      },
      {
        title: "Cluster C - recuperação complexa",
        amount: "109 contribuintes",
        meta: "Baixa responsividade • Requer fluxo complementar",
      },
    ],
    scenarios: [
      {
        title: "Campanha imediata",
        badge: "842 alvos",
        description: "Notificar contribuintes com score alto nas próximas 48 horas tende a maximizar conversão.",
        meta: "Canal sugerido: push + e-mail",
      },
      {
        title: "Ação de reforço",
        badge: "421 alvos",
        description: "Segmentação por faixa de débito e mensagem de previsibilidade melhora a adesão desse grupo.",
        meta: "Canal sugerido: SMS + atendimento assistido",
      },
    ],
    risk: {
      score: 74,
      label: "Campanha com retorno projetado acima da meta da POC",
      description:
        "O modelo indica potencial de conversão consistente no cluster de maior score. Priorizar esse grupo reduz custo por regularização.",
    },
    notifications: [
      {
        title: "Campanha recomendada pelo motor analítico",
        tag: "Painel gestor",
        body: "A fila de maior retorno previsto já foi preparada para disparo com linguagem cidadã.",
        meta: "Gerado hoje às 07:45",
      },
      {
        title: "SLA de integração",
        tag: "Operação",
        body: "A fonte municipal operou com fallback em cache por 14 minutos sem impacto na experiência do usuário.",
        meta: "Ocorrência encerrada",
      },
    ],
  },
};

// --- Estado de autenticação ---
let currentUser = null;

// --- Refs do DOM ---
const topnav = document.getElementById("topnav");
const topbarActions = document.getElementById("topbarActions");
const allPages = document.querySelectorAll(".page");
const profileSelect = document.getElementById("profileSelect");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginForm = document.getElementById("loginForm");
const loginHint = document.getElementById("loginHint");
const userChips = document.querySelectorAll(".user-chip");
const statsGrid = document.getElementById("statsGrid");
const debtList = document.getElementById("debtList");
const scenarioList = document.getElementById("scenarioList");
const riskCard = document.getElementById("riskCard");
const notificationList = document.getElementById("notificationList");
const debtCountPill = document.getElementById("debtCountPill");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeCopy = document.getElementById("welcomeCopy");
const dashboardEyebrow = document.getElementById("dashboardEyebrow");

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
      setTopbarDashboard(mockUsers[currentUser].name);
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
    <button class="ghost-button" id="openLoginButton" type="button">Entrar</button>
    <button class="primary-button" id="heroLoginButton" type="button">Acessar MVP</button>
  `;
  document.getElementById("openLoginButton").addEventListener("click", () => navigate("login"));
  document.getElementById("heroLoginButton").addEventListener("click", () => navigate("login"));
}

function setTopbarLogin() {
  topnav.style.display = "none";
  topbarActions.innerHTML = `
    <button class="ghost-button" id="backHomeButton" type="button">← Início</button>
  `;
  document.getElementById("backHomeButton").addEventListener("click", () => navigate("home"));
}

function setTopbarDashboard(userName) {
  topnav.style.display = "none";
  topbarActions.innerHTML = `
    <span class="user-name-badge">${userName}</span>
    <button class="ghost-button" id="logoutButton" type="button">Sair</button>
  `;
  document.getElementById("logoutButton").addEventListener("click", () => {
    currentUser = null;
    navigate("login");
  });
}

// --- Formulário de login ---
function updateInputs(profileKey) {
  const user = mockUsers[profileKey];
  profileSelect.value = profileKey;
  usernameInput.value = user.username;
  passwordInput.value = user.password;
  loginHint.textContent = `Login demonstrativo: ${user.username} com senha ${user.password}.`;
  loginHint.style.color = "";
  userChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.profile === profileKey);
  });
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const profileKey = profileSelect.value;
  const user = mockUsers[profileKey];
  const validCredentials =
    usernameInput.value.trim() === user.username && passwordInput.value === user.password;

  if (!validCredentials) {
    loginHint.textContent = `Credenciais inválidas. Use ${user.username} e senha ${user.password}.`;
    loginHint.style.color = "#9a4728";
    return;
  }

  currentUser = profileKey;
  navigate("dashboard");
});

profileSelect.addEventListener("change", (event) => {
  updateInputs(event.target.value);
});

userChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    updateInputs(chip.dataset.profile);
  });
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

// --- Renderização do dashboard ---
function currencyWidth(score) {
  return `${Math.max(10, Math.min(100, score))}%`;
}

function renderDashboard(profileKey) {
  const user = mockUsers[profileKey];
  dashboardEyebrow.textContent = user.profileLabel;
  welcomeTitle.textContent =
    profileKey === "gestor" ? `Olá, ${user.name}.` : `${user.name}, este é o seu painel.`;
  welcomeCopy.textContent = user.intro;
  debtCountPill.textContent = `${user.debts.length} registros`;

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
        <small>Score atual</small>
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
window.addEventListener("hashchange", handleRoute);
handleRoute();
