const translations = {
  pt: {
    ui: {
      brandTag: "Regularização fiscal inteligente",
      navBenefits: "Benefícios",
      navSolution: "Solução",
      topbarLogin: "Entrar",
      topbarAccess: "Acessar MVP",
      topbarBackHome: "← Início",
      topbarLogout: "Sair",
      heroEyebrow: "POC de regularização fiscal digital",
      heroTitle: "Uma experiência clara para consultar débitos, simular acordos e agir com rapidez.",
      heroText: "Este MVP traduz a proposta da SmartReg Fiscal em uma interface moderna, acessível e pronta para demonstração, com login mock, extrato consolidado e jornada guiada de regularização.",
      heroExplore: "Explorar demonstração",
      heroSeeModules: "Ver módulos do MVP",
      heroHighlights: [
        "Extrato unificado municipal, estadual e federal",
        "Simulação de parcelamento com cenários comparativos",
        "Notificações e score de priorização em linguagem cidadã"
      ],
      panelTitle: "Resumo do contribuinte",
      panelMetrics: [
        { label: "Total em aberto", value: "R$ 48.320,90", detail: "3 esferas integradas" },
        { label: "Melhor opção hoje", value: "24x de R$ 2.113", detail: "Economia de 18% em encargos" },
        { label: "Probabilidade de adesão", value: "82/100", detail: "Perfil favorável à regularização" }
      ],
      benefitsEyebrow: "Valor da solução",
      benefitsTitle: "Uma jornada única para contribuinte e gestão pública.",
      benefitCards: [
        { title: "Consulta centralizada", text: "Consolida débitos em um só ambiente com visão por esfera, vencimento, status e criticidade." },
        { title: "Decisão assistida", text: "Mostra cenários de parcelamento com economia potencial, prazos e impacto mensal." },
        { title: "Comunicação clara", text: "Traduz linguagem técnica em passos objetivos, avisos inteligentes e próximos passos acionáveis." },
        { title: "Visão de risco", text: "Indica propensão de regularização e ajuda a priorizar campanhas e acompanhamento." }
      ],
      solutionEyebrow: "Escopo demonstrado",
      solutionTitle: "Módulos do MVP front-end",
      timeline: [
        { title: "Login mock", text: "Acesso demonstrativo com perfis prontos para pessoa física, empresa e gestor público." },
        { title: "Dashboard principal", text: "KPIs, extrato consolidado, pendências prioritárias e mensagens orientadas por contexto." },
        { title: "Simulador visual", text: "Cenários comparativos de regularização sem necessidade de backend nesta etapa." },
        { title: "Notificações e próximos passos", text: "Canal unificado para mensagens, status da jornada e CTA para adesão ao acordo." }
      ],
      loginHeaderTitle: "Entrar no ambiente de demonstração",
      loginHeaderText: "Use um dos acessos abaixo para visualizar a experiência.",
      profileLabel: "Perfil",
      profileOptions: ["Pessoa física", "Pessoa jurídica", "Gestor público"],
      loginIdLabel: "CPF/CNPJ ou e-mail",
      loginPasswordLabel: "Senha mock",
      loginSubmit: "Entrar com dados mock",
      demoUserChips: ["Maria Souza", "Metalúrgica Aurora", "Gestora PGM"],
      loginHint: (username, password) => `Login demonstrativo: ${username} com senha ${password}.`,
      invalidCredentials: (username, password) => `Credenciais inválidas. Use ${username} e senha ${password}.`,
      debtCardLabel: "Extrato consolidado",
      debtCardTitle: "Débitos identificados",
      debtCountLabel: (count) => `${count} registros`,
      scenarioCardLabel: "Simulador",
      scenarioCardTitle: "Melhores cenários",
      riskCardLabel: "Motor analítico",
      riskCardTitle: "Score de regularização",
      riskScoreLabel: "Score atual",
      notificationCardLabel: "Notificações",
      notificationCardTitle: "Comunicação ativa",
      welcomeGreeting: (name) => `Olá, ${name}.`,
      welcomePanel: (name) => `${name}, este é o seu painel.`
    },
    data: {
      mockUsers: {
        cidadao: {
          profileLabel: "Ambiente do contribuinte",
          username: "maria.souza@gov.demo",
          password: "smartreg123",
          name: "Maria Souza",
          intro: "Aqui está o resumo consolidado da sua situação fiscal e as melhores opções para regularização.",
          stats: [
            { label: "Valor consolidado", value: "R$ 48.320,90", detail: "3 débitos ativos" },
            { label: "Economia potencial", value: "R$ 8.950,10", detail: "via transação municipal" },
            { label: "Prazo recomendado", value: "24 meses", detail: "com menor impacto mensal" },
            { label: "Pendência crítica", value: "1 alerta", detail: "vencimento em 9 dias" }
          ],
          debts: [
            { title: "IPTU em Dívida Ativa - Curitiba", amount: "R$ 12.480,50", meta: "Municipal • Vencido há 132 dias • Prioridade alta" },
            { title: "ISS Autônomo - Regularização simplificada", amount: "R$ 6.340,40", meta: "Municipal • Elegível para desconto de encargos" },
            { title: "Débito PGFN consolidado", amount: "R$ 29.500,00", meta: "Federal • Parcelável • Atualizado hoje" }
          ],
          scenarios: [
            { title: "Cenário recomendado", badge: "24x de R$ 2.113", description: "Equilibra desconto em encargos e parcela mensal compatível com seu histórico.", meta: "Entrada reduzida • Economia estimada de 18%" },
            { title: "Liquidação acelerada", badge: "12x de R$ 3.920", description: "Menor custo total do acordo para quem busca sair da inadimplência mais rápido.", meta: "Economia estimada de 24%" }
          ],
          risk: { score: 82, label: "Alta probabilidade de regularização espontânea", description: "Seu perfil demonstra boa aderência a acordos digitais. A recomendação é enviar proposta com desconto e lembrete em até 48 horas." },
          notifications: [
            { title: "Proposta disponível para adesão", tag: "Push gov.br", body: "Existe uma condição vantajosa para regularização do IPTU com economia relevante sobre encargos.", meta: "Enviada hoje às 09:15" },
            { title: "Prazo de oportunidade", tag: "E-mail", body: "Faltam 9 dias para encerramento da campanha municipal com condições facilitadas.", meta: "Agendada para amanhã às 08:00" }
          ]
        },
        empresa: {
          profileLabel: "Ambiente empresarial",
          username: "financeiro@aurora.demo",
          password: "smartreg123",
          name: "Metalúrgica Aurora LTDA",
          intro: "Esta visão prioriza impacto financeiro, passivos por esfera e oportunidades de negociação para a empresa.",
          stats: [
            { label: "Passivo total", value: "R$ 318.904,20", detail: "5 inscrições ativas" },
            { label: "Melhor acordo", value: "60x de R$ 5.870", detail: "com entrada negociada" },
            { label: "Risco operacional", value: "Moderado", detail: "2 certidões impactadas" },
            { label: "Alertas urgentes", value: "2", detail: "necessitam ação esta semana" }
          ],
          debts: [
            { title: "ISSQN - Curitiba", amount: "R$ 42.880,90", meta: "Municipal • Inscrito • Suspende CND local" },
            { title: "Contribuições federais", amount: "R$ 196.023,30", meta: "Federal • PGFN • Elegível a transação" },
            { title: "ICMS complementar", amount: "R$ 80.000,00", meta: "Estadual • Em fase de consolidação sintética" }
          ],
          scenarios: [
            { title: "Fluxo preservado", badge: "60x de R$ 5.870", description: "Mantém previsibilidade de caixa e reduz pressão imediata no capital de giro.", meta: "Entrada de 6% • Redução parcial de multa" },
            { title: "Redução máxima", badge: "24x de R$ 12.940", description: "Alternativa com menor custo total do passivo, indicada para quitação mais rápida.", meta: "Economia estimada de 21%" }
          ],
          risk: { score: 68, label: "Boa chance de adesão mediante negociação assistida", description: "A empresa tende a responder melhor a ofertas com previsibilidade de caixa e comunicação voltada à retomada de certidões." },
          notifications: [
            { title: "Certidão com restrição", tag: "Painel", body: "Há impacto direto em certidões fiscais enquanto o débito municipal permanecer em aberto.", meta: "Atualizado há 2 horas" },
            { title: "Campanha empresarial ativa", tag: "SMS", body: "Condições especiais para empresas com histórico de regularização parcial já estão disponíveis.", meta: "Enviada ontem às 16:40" }
          ]
        },
        gestor: {
          profileLabel: "Ambiente da gestão pública",
          username: "gestora.pgm@demo.gov",
          password: "smartreg123",
          name: "Fernanda Ribeiro",
          intro: "Esta visão destaca indicadores do piloto, priorização de casos e comunicação ativa para campanhas de adesão.",
          stats: [
            { label: "Contribuintes no piloto", value: "7.000", detail: "5 mil PF + 2 mil PJ" },
            { label: "Taxa de adesão", value: "16,8%", detail: "acima da meta inicial" },
            { label: "Recuperação estimada", value: "R$ 12,4 mi", detail: "no ciclo atual" },
            { label: "Fila prioritária", value: "842 casos", detail: "score acima de 75" }
          ],
          debts: [
            { title: "Cluster A - alta propensão", amount: "312 contribuintes", meta: "Score 80+ • Melhor resposta a push e e-mail" },
            { title: "Cluster B - negociação assistida", amount: "421 contribuintes", meta: "Faixa de débito média • Sensíveis a parcelamento" },
            { title: "Cluster C - recuperação complexa", amount: "109 contribuintes", meta: "Baixa responsividade • Requer fluxo complementar" }
          ],
          scenarios: [
            { title: "Campanha imediata", badge: "842 alvos", description: "Notificar contribuintes com score alto nas próximas 48 horas tende a maximizar conversão.", meta: "Canal sugerido: push + e-mail" },
            { title: "Ação de reforço", badge: "421 alvos", description: "Segmentação por faixa de débito e mensagem de previsibilidade melhora a adesão desse grupo.", meta: "Canal sugerido: SMS + atendimento assistido" }
          ],
          risk: { score: 74, label: "Campanha com retorno projetado acima da meta da POC", description: "O modelo indica potencial de conversão consistente no cluster de maior score. Priorizar esse grupo reduz custo por regularização." },
          notifications: [
            { title: "Campanha recomendada pelo motor analítico", tag: "Painel gestor", body: "A fila de maior retorno previsto já foi preparada para disparo com linguagem cidadã.", meta: "Gerado hoje às 07:45" },
            { title: "SLA de integração", tag: "Operação", body: "A fonte municipal operou com fallback em cache por 14 minutos sem impacto na experiência do usuário.", meta: "Ocorrência encerrada" }
          ]
        }
      }
    }
  },
  en: {
    ui: {
      brandTag: "Smart tax regularization",
      navBenefits: "Benefits",
      navSolution: "Solution",
      topbarLogin: "Sign in",
      topbarAccess: "Access MVP",
      topbarBackHome: "← Home",
      topbarLogout: "Log out",
      heroEyebrow: "Digital tax regularization POC",
      heroTitle: "A clear experience to check debts, simulate agreements and act quickly.",
      heroText: "This MVP translates the SmartReg Fiscal proposal into a modern, accessible interface ready for demonstration, with mock login, a consolidated statement and a guided regularization journey.",
      heroExplore: "Explore demo",
      heroSeeModules: "See MVP modules",
      heroHighlights: [
        "Unified municipal, state and federal statement",
        "Installment plan simulation with comparative scenarios",
        "Notifications and prioritization score in citizen-friendly language"
      ],
      panelTitle: "Taxpayer summary",
      panelMetrics: [
        { label: "Total outstanding", value: "$48,320.90", detail: "3 integrated levels" },
        { label: "Best option today", value: "24x of $2,113", detail: "18% savings on charges" },
        { label: "Adherence probability", value: "82/100", detail: "Profile favorable to regularization" }
      ],
      benefitsEyebrow: "Solution value",
      benefitsTitle: "A single journey for taxpayers and public management.",
      benefitCards: [
        { title: "Centralized inquiry", text: "Consolidates debts in one place with a view by level, due date, status and criticality." },
        { title: "Assisted decision", text: "Shows installment scenarios with potential savings, deadlines and monthly impact." },
        { title: "Clear communication", text: "Translates technical language into objective steps, smart alerts and actionable next steps." },
        { title: "Risk view", text: "Indicates likelihood of regularization and helps prioritize campaigns and follow-up." }
      ],
      solutionEyebrow: "Demonstrated scope",
      solutionTitle: "Front-end MVP modules",
      timeline: [
        { title: "Mock login", text: "Demo access with ready-made profiles for individuals, companies and public managers." },
        { title: "Main dashboard", text: "KPIs, consolidated statement, priority pending items and context-driven messages." },
        { title: "Visual simulator", text: "Comparative regularization scenarios with no backend needed at this stage." },
        { title: "Notifications and next steps", text: "Unified channel for messages, journey status and CTA to join the agreement." }
      ],
      loginHeaderTitle: "Sign in to the demo environment",
      loginHeaderText: "Use one of the accounts below to view the experience.",
      profileLabel: "Profile",
      profileOptions: ["Individual", "Company", "Public manager"],
      loginIdLabel: "Tax ID or email",
      loginPasswordLabel: "Mock password",
      loginSubmit: "Sign in with mock data",
      demoUserChips: ["Maria Souza", "Metalúrgica Aurora", "PGM Manager"],
      loginHint: (username, password) => `Demo login: ${username} with password ${password}.`,
      invalidCredentials: (username, password) => `Invalid credentials. Use ${username} and password ${password}.`,
      debtCardLabel: "Consolidated statement",
      debtCardTitle: "Identified debts",
      debtCountLabel: (count) => `${count} records`,
      scenarioCardLabel: "Simulator",
      scenarioCardTitle: "Best scenarios",
      riskCardLabel: "Analytics engine",
      riskCardTitle: "Regularization score",
      riskScoreLabel: "Current score",
      notificationCardLabel: "Notifications",
      notificationCardTitle: "Active communication",
      welcomeGreeting: (name) => `Hello, ${name}.`,
      welcomePanel: (name) => `${name}, this is your dashboard.`
    },
    data: {
      mockUsers: {
        cidadao: {
          profileLabel: "Taxpayer environment",
          username: "maria.souza@gov.demo",
          password: "smartreg123",
          name: "Maria Souza",
          intro: "Here is the consolidated summary of your tax situation and the best regularization options.",
          stats: [
            { label: "Consolidated amount", value: "$48,320.90", detail: "3 active debts" },
            { label: "Potential savings", value: "$8,950.10", detail: "via municipal transaction" },
            { label: "Recommended term", value: "24 months", detail: "with lowest monthly impact" },
            { label: "Critical pending item", value: "1 alert", detail: "due in 9 days" }
          ],
          debts: [
            { title: "Property tax in active debt - Curitiba", amount: "$12,480.50", meta: "Municipal • Overdue for 132 days • High priority" },
            { title: "Self-employed service tax - Simplified regularization", amount: "$6,340.40", meta: "Municipal • Eligible for charge discount" },
            { title: "Consolidated federal debt", amount: "$29,500.00", meta: "Federal • Installments available • Updated today" }
          ],
          scenarios: [
            { title: "Recommended scenario", badge: "24x of $2,113", description: "Balances a discount on charges with a monthly installment compatible with your history.", meta: "Reduced down payment • Estimated 18% savings" },
            { title: "Accelerated payoff", badge: "12x of $3,920", description: "Lowest total agreement cost for those seeking to clear the debt faster.", meta: "Estimated 24% savings" }
          ],
          risk: { score: 82, label: "High probability of spontaneous regularization", description: "Your profile shows strong adherence to digital agreements. Recommendation: send a discounted proposal with a reminder within 48 hours." },
          notifications: [
            { title: "Proposal available to join", tag: "gov.br Push", body: "There is a favorable condition for property tax regularization with significant savings on charges.", meta: "Sent today at 9:15 AM" },
            { title: "Opportunity deadline", tag: "Email", body: "9 days left until the municipal campaign with easier terms ends.", meta: "Scheduled for tomorrow at 8:00 AM" }
          ]
        },
        empresa: {
          profileLabel: "Business environment",
          username: "financeiro@aurora.demo",
          password: "smartreg123",
          name: "Metalúrgica Aurora LTDA",
          intro: "This view prioritizes financial impact, liabilities by level and negotiation opportunities for the company.",
          stats: [
            { label: "Total liabilities", value: "$318,904.20", detail: "5 active filings" },
            { label: "Best agreement", value: "60x of $5,870", detail: "with negotiated down payment" },
            { label: "Operational risk", value: "Moderate", detail: "2 clearance certificates impacted" },
            { label: "Urgent alerts", value: "2", detail: "require action this week" }
          ],
          debts: [
            { title: "Municipal service tax - Curitiba", amount: "$42,880.90", meta: "Municipal • Filed • Suspends local clearance certificate" },
            { title: "Federal contributions", amount: "$196,023.30", meta: "Federal • PGFN • Eligible for transaction" },
            { title: "Additional state VAT", amount: "$80,000.00", meta: "State • In synthetic consolidation phase" }
          ],
          scenarios: [
            { title: "Preserved cash flow", badge: "60x of $5,870", description: "Maintains cash predictability and reduces immediate pressure on working capital.", meta: "6% down payment • Partial penalty reduction" },
            { title: "Maximum reduction", badge: "24x of $12,940", description: "Alternative with the lowest total liability cost, suited for faster payoff.", meta: "Estimated 21% savings" }
          ],
          risk: { score: 68, label: "Good chance of adherence with assisted negotiation", description: "The company tends to respond better to offers with cash predictability and communication focused on restoring clearance certificates." },
          notifications: [
            { title: "Restricted clearance certificate", tag: "Panel", body: "There is a direct impact on tax clearance certificates while the municipal debt remains outstanding.", meta: "Updated 2 hours ago" },
            { title: "Active business campaign", tag: "SMS", body: "Special terms for companies with a history of partial regularization are now available.", meta: "Sent yesterday at 4:40 PM" }
          ]
        },
        gestor: {
          profileLabel: "Public management environment",
          username: "gestora.pgm@demo.gov",
          password: "smartreg123",
          name: "Fernanda Ribeiro",
          intro: "This view highlights pilot indicators, case prioritization and active communication for adherence campaigns.",
          stats: [
            { label: "Taxpayers in the pilot", value: "7,000", detail: "5k individuals + 2k companies" },
            { label: "Adherence rate", value: "16.8%", detail: "above the initial target" },
            { label: "Estimated recovery", value: "$12.4M", detail: "in the current cycle" },
            { label: "Priority queue", value: "842 cases", detail: "score above 75" }
          ],
          debts: [
            { title: "Cluster A - high propensity", amount: "312 taxpayers", meta: "Score 80+ • Best response to push and email" },
            { title: "Cluster B - assisted negotiation", amount: "421 taxpayers", meta: "Mid debt range • Sensitive to installment plans" },
            { title: "Cluster C - complex recovery", amount: "109 taxpayers", meta: "Low responsiveness • Requires complementary flow" }
          ],
          scenarios: [
            { title: "Immediate campaign", badge: "842 targets", description: "Notifying high-score taxpayers within the next 48 hours tends to maximize conversion.", meta: "Suggested channel: push + email" },
            { title: "Reinforcement action", badge: "421 targets", description: "Segmenting by debt range with a predictability-focused message improves adherence for this group.", meta: "Suggested channel: SMS + assisted service" }
          ],
          risk: { score: 74, label: "Campaign with projected return above the POC target", description: "The model indicates consistent conversion potential in the higher-score cluster. Prioritizing this group reduces the cost per regularization." },
          notifications: [
            { title: "Campaign recommended by the analytics engine", tag: "Manager panel", body: "The highest expected-return queue has already been prepared for dispatch with citizen-friendly language.", meta: "Generated today at 7:45 AM" },
            { title: "Integration SLA", tag: "Operations", body: "The municipal source ran on cache fallback for 14 minutes with no impact on user experience.", meta: "Incident closed" }
          ]
        }
      }
    }
  }
};

const LANG_STORAGE_KEY = "smartreg-lang";

function getStoredLang() {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  return stored === "en" ? "en" : "pt";
}

function setStoredLang(lang) {
  localStorage.setItem(LANG_STORAGE_KEY, lang);
}
