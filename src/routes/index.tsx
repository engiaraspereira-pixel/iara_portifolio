import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Database,
  ExternalLink,
  Instagram,
  LayoutDashboard,
  Menu,
  MessageCircle,
  MousePointerClick,
  Rocket,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import logoIara from "@/assets/iara-logo-fundo-azul.png";
import profileIara from "@/assets/iara-perfil.png";

const WHATSAPP_URL =
  "https://wa.me/5511978856858?text=Ol%C3%A1%2C%20Iara.%20Quero%20conversar%20sobre%20um%20projeto%20digital.";

const INSTAGRAM_URL =
  "https://www.instagram.com/iara.solucoesdigitais?igsh=MXZ1dHM0ZTVqYnM1Mg%3D%3D&utm_source=qr";

/* ── Reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ className = "h-11" }: { className?: string }) {
  return (
    <img
      src={logoIara}
      alt="IAra Soluções Digitais"
      className={`${className} w-auto rounded-xl object-contain`}
    />
  );
}

/* ══════════════════════════════════════════
   HEADER
══════════════════════════════════════════ */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    ["#solucoes", "Soluções"],
    ["#ecossistema", "Ecossistema"],
    ["#metodo", "Método"],
    ["#portfolio", "Portfólio"],
    ["#sobre", "Sobre"],
    ["#contato", "Contato"],
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#0e2839]/96 shadow-[0_4px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-[#0e2839]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="IAra Soluções Digitais">
          <Logo className="h-12 sm:h-14" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="link-underline text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/70 transition-all hover:border-copper hover:text-[#d99055] sm:flex"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden h-10 items-center gap-2 rounded-full bg-[#d99055] px-5 text-sm font-semibold text-[#12334c] transition-all hover:bg-white md:inline-flex"
          >
            Começar projeto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/8 text-white lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0e2839] px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/75 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#d99055] px-5 text-sm font-semibold text-[#12334c]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#0e2839]"
    >
      {/* Animated gradient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-pulse-glow absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#d99055]/10 blur-[120px]" />
        <div className="animate-float-slow absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#1f5a8a]/30 blur-[100px]" />
        <div className="animate-float absolute left-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-[#d99055]/6 blur-[80px]" />
      </div>

      {/* Decorative circles */}
      <div className="animate-spin-slow pointer-events-none absolute right-10 top-10 hidden h-72 w-72 rounded-full border border-[#d99055]/15 lg:block" />
      <div className="pointer-events-none absolute right-20 top-20 hidden h-48 w-48 rounded-full border border-white/6 lg:block" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
        {/* Left: text */}
        <div className="reveal">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d99055]/30 bg-[#d99055]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#d99055]">
            <span className="animate-pulse-glow h-1.5 w-1.5 rounded-full bg-[#d99055]" />
            Tecnologia · Inteligência · Resultados
          </span>

          <h1 className="mt-4 max-w-2xl text-balance font-display text-5xl font-semibold leading-[1] text-white sm:text-6xl lg:text-[5.5rem]">
            Digital que{" "}
            <span className="text-gradient">organiza,</span>{" "}
            comunica e vende.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/60">
            A IAra cria páginas, automações, sistemas e campanhas para
            empresas que precisam transformar ideias em uma estrutura
            digital clara, bonita e mensurável.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-between gap-4 rounded-full bg-[#d99055] pl-6 pr-2 font-semibold text-[#12334c] transition-all hover:bg-white"
            >
              Planejar meu projeto
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#12334c] text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#solucoes"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-6 font-medium text-white transition-all hover:border-[#d99055]/50 hover:bg-white/5"
            >
              Ver soluções
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right: animated cards */}
        <div className="reveal-right relative hidden min-h-[520px] lg:block">
          {/* Card 1 — top left */}
          <div className="animate-float glass-dark absolute left-0 top-8 w-[55%] rounded-3xl p-5">
            <Logo className="h-12" />
            <div className="mt-10 grid gap-2.5">
              {[
                ["01", "Página de conversão"],
                ["02", "Campanha e conteúdo"],
                ["03", "Dados e automação"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
                >
                  <span className="text-xs font-bold text-[#d99055]">{n}</span>
                  <span className="text-sm text-white/75">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — top right */}
          <div className="animate-float-alt glass absolute right-0 top-0 w-[55%] rounded-3xl p-5">
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  [MousePointerClick, "Captação"],
                  [Workflow, "Fluxos"],
                  [Database, "Dados"],
                  [Bot, "IA"],
                ] as const
              ).map(([Icon, label]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-[#f7f4ee] p-5 text-[#12334c]"
                >
                  <Icon className="mb-6 h-5 w-5 text-[#d99055]" />
                  <div className="font-display text-xl font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 — bottom center */}
          <div className="glass absolute bottom-0 left-[14%] w-[72%] rounded-3xl border border-[#d99055]/25 p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#d99055]/15 text-[#d99055]">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-2xl font-semibold leading-tight text-[#12334c]">
                  Crescimento com estrutura
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#12334c]/60">
                  Primeiro a estratégia. Depois a tecnologia certa para vender, atender e evoluir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fbfaf7] to-transparent" />
    </section>
  );
}

/* ══════════════════════════════════════════
   METRICS BAR
══════════════════════════════════════════ */
function MetricsBar() {
  const items = [
    { title: "Landing pages", sub: "que geram leads reais", color: "text-[#d99055]" },
    { title: "Meta Ads", sub: "para atrair demanda qualificada", color: "text-[#d99055]" },
    { title: "Automações", sub: "para ganhar tempo útil", color: "text-[#d99055]" },
    { title: "Sistemas web", sub: "para organizar a operação", color: "text-[#d99055]" },
  ];

  return (
    <section className="bg-[#12334c]">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/8 px-5 md:px-8 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {items.map(({ title, sub, color }, i) => (
          <div key={title} className={`reveal py-8 lg:px-8 delay-${i + 1}`}>
            <div className={`font-display text-2xl font-semibold ${color}`}>
              {title}
            </div>
            <div className="mt-1.5 text-sm text-white/50">{sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SOLUTIONS
══════════════════════════════════════════ */
function Solutions() {
  const cards = [
    {
      icon: MousePointerClick,
      tag: "Conversão",
      title: "Presença que converte",
      desc: "Landing pages e sites com narrativa clara, identidade visual e CTA direto para transformar visita em conversa.",
      dark: true,
    },
    {
      icon: Sparkles,
      tag: "Campanhas",
      title: "Campanhas com intenção",
      desc: "Criativos, calendário e Meta Ads alinhados com a oferta para atrair pessoas mais próximas da decisão.",
      dark: false,
    },
    {
      icon: Workflow,
      tag: "Automação",
      title: "Automação de rotina",
      desc: "Fluxos para reduzir trabalho manual, organizar dados e conectar WhatsApp, formulários e sistemas.",
      dark: false,
    },
    {
      icon: LayoutDashboard,
      tag: "Sistemas",
      title: "Sistemas sob medida",
      desc: "Painéis, áreas internas e aplicações web para organizar processos que já não cabem em planilhas.",
      dark: false,
    },
  ];

  return (
    <section id="solucoes" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div className="reveal">
            <div className="section-label">[01] Soluções</div>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1] text-[#12334c] lg:text-6xl">
              Estratégia digital pensada como{" "}
              <span className="text-gradient">ecossistema.</span>
            </h2>
          </div>
          <p className="reveal text-lg leading-relaxed text-[#12334c]/60 lg:justify-self-end">
            O melhor resultado não vem de uma peça isolada. Vem da conexão
            entre oferta, comunicação, tráfego, atendimento e dados.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className={`card-hover reveal group rounded-3xl border p-8 lg:p-10 delay-${i + 1} ${
                  card.dark
                    ? "border-white/10 bg-[#12334c] text-white"
                    : "border-[#12334c]/8 bg-white text-[#12334c] shadow-[0_12px_50px_rgba(17,48,71,0.07)]"
                }`}
              >
                <div className="mb-3 inline-flex items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                      card.dark
                        ? "bg-[#d99055]/15 text-[#d99055]"
                        : "bg-[#d99055]/12 text-[#d99055]"
                    }`}
                  >
                    {card.tag}
                  </span>
                </div>

                <div
                  className={`mb-10 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    card.dark ? "bg-white/10 text-[#d99055]" : "bg-[#d99055]/12 text-[#d99055]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-display text-3xl font-semibold leading-tight">
                  {card.title}
                </h3>
                <p
                  className={`mt-4 leading-relaxed ${
                    card.dark ? "text-white/58" : "text-[#12334c]/58"
                  }`}
                >
                  {card.desc}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#d99055]">
                  Ver caminho
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   ECOSYSTEM
══════════════════════════════════════════ */
function Ecosystem() {
  const orbit = ["Oferta", "Página", "Tráfego", "Atendimento", "Dados", "Automação"];
  const positions = [
    "left-[6%] top-[10%]",
    "right-[2%] top-[14%]",
    "left-[0%] top-[46%]",
    "right-[0%] top-[49%]",
    "left-[13%] bottom-[5%]",
    "right-[10%] bottom-[7%]",
  ];

  return (
    <section id="ecossistema" className="overflow-hidden bg-[#f7f4ee] py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <div className="section-label">[02] Ecossistema</div>
          <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1] text-[#12334c] lg:text-6xl">
            A página é só uma parte da{" "}
            <span className="text-gradient">máquina.</span>
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-[#12334c]/62">
            Por isso, cada entrega da IAra já nasce com visão de
            continuidade: como atrair, qualificar, atender, registrar e
            aprender com os dados.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {orbit.map((item, i) => (
              <div
                key={item}
                className={`reveal rounded-2xl border border-[#12334c]/8 bg-white px-4 py-3 text-center shadow-sm delay-${i + 1}`}
              >
                <span className="block text-xs font-bold text-[#d99055]">0{i + 1}</span>
                <span className="mt-1 block font-semibold text-[#12334c]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right relative hidden min-h-[580px] lg:block">
          {/* Outer ring */}
          <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d99055]/25" />
          {/* Inner ring */}
          <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#12334c]/10" />
          {/* Center */}
          <div className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#12334c] shadow-[0_20px_70px_rgba(17,48,71,0.3)]">
            <Logo className="h-14" />
          </div>
          {orbit.map((item, i) => (
            <div
              key={item}
              className={`animate-float absolute ${positions[i]} rounded-2xl border border-[#12334c]/8 bg-white px-4 py-3 shadow-[0_8px_30px_rgba(17,48,71,0.1)]`}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <div className="text-xs font-bold text-[#d99055]">0{i + 1}</div>
              <div className="font-display text-lg font-semibold text-[#12334c]">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   METHOD
══════════════════════════════════════════ */
function Method() {
  const steps = [
    ["Diagnosticar", "O que existe hoje, onde trava e qual resultado precisa aparecer primeiro."],
    ["Desenhar", "A jornada, as páginas, os dados e as integrações que sustentam o projeto."],
    ["Construir", "Layout, código, automações e publicação com acabamento profissional."],
    ["Evoluir", "Ajustes, campanhas e novas funcionalidades conforme o negócio amadurece."],
  ];

  return (
    <section id="metodo" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-16">
          <div className="section-label">[03] Método</div>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1] text-[#12334c] lg:text-6xl">
            Do briefing ao crescimento,{" "}
            <span className="text-gradient">sem virar bagunça.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, desc], i) => (
            <article
              key={title}
              className={`card-hover reveal group rounded-3xl border border-[#12334c]/8 bg-white p-7 shadow-[0_8px_40px_rgba(17,48,71,0.05)] delay-${i + 1}`}
            >
              <div className="mb-16 font-display text-6xl font-semibold text-gradient">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#12334c]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#12334c]/58">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PORTFOLIO
══════════════════════════════════════════ */
function Portfolio() {
  const projects = [
    {
      tag: "Landing Page",
      icon: MousePointerClick,
      title: "Studio Estética Rose",
      desc: "Página de captação com depoimentos, galeria e CTA direto para WhatsApp, integrada a campanha de Meta Ads.",
      result: "+280% leads em 30 dias",
      techs: ["React", "Tailwind", "Meta Ads"],
      accent: "bg-gradient-to-br from-[#12334c] to-[#1f5a8a]",
      light: false,
    },
    {
      tag: "Sistema Web",
      icon: LayoutDashboard,
      title: "Construtora Renovar",
      desc: "Painel interno para gerenciar orçamentos, clientes e status de obras, substituindo planilhas desconectadas.",
      result: "3h/dia economizadas",
      techs: ["React", "Supabase", "SQL"],
      accent: "bg-gradient-to-br from-[#f7f4ee] to-[#ede9e0]",
      light: true,
    },
    {
      tag: "Automação + Ads",
      icon: Zap,
      title: "Clínica NutriVida",
      desc: "Fluxo automatizado de captura, qualificação e agendamento via WhatsApp com Meta Ads como fonte de tráfego.",
      result: "R$ 45k em vendas em 60 dias",
      techs: ["n8n", "Meta Ads", "WhatsApp"],
      accent: "bg-gradient-to-br from-[#12334c] to-[#0e2839]",
      light: false,
    },
  ];

  return (
    <section id="portfolio" className="bg-[#f7f4ee] py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div className="reveal">
            <div className="section-label">[04] Portfólio</div>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1] text-[#12334c] lg:text-6xl">
              Projetos que saem do papel e{" "}
              <span className="text-gradient">geram resultado.</span>
            </h2>
          </div>
          <p className="reveal text-lg leading-relaxed text-[#12334c]/62 lg:justify-self-end">
            Cada entrega carrega estratégia, execução e métricas claras.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className={`card-hover reveal group flex flex-col overflow-hidden rounded-3xl delay-${i + 1}`}
              >
                {/* Colored header */}
                <div className={`${p.accent} relative flex min-h-[160px] items-end p-6`}>
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${
                      p.light ? "bg-[#12334c]/10 text-[#12334c]" : "bg-white/12 text-[#d99055]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`ml-auto rounded-full px-3 py-1 text-xs font-semibold ${
                      p.light
                        ? "bg-[#12334c]/10 text-[#12334c]"
                        : "bg-white/12 text-white"
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col border border-t-0 border-[#12334c]/8 bg-white px-6 py-6 rounded-b-3xl">
                  <h3 className="font-display text-2xl font-semibold text-[#12334c]">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#12334c]/60">{p.desc}</p>

                  <div className="mt-5 flex items-center gap-2 rounded-2xl bg-[#d99055]/10 px-4 py-3">
                    <TrendingUp className="h-4 w-4 shrink-0 text-[#d99055]" />
                    <span className="text-sm font-semibold text-[#d99055]">{p.result}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.techs.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#12334c]/10 px-3 py-1 text-xs text-[#12334c]/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d99055]"
                  >
                    Ver projeto
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   ABOUT
══════════════════════════════════════════ */
function About() {
  const skills = ["React", "Supabase", "Python", "SQL", "Tailwind", "Vercel", "n8n", "Meta Ads"];

  return (
    <section id="sobre" className="bg-[#12334c] py-24 text-white lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div className="reveal">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <img
              src={profileIara}
              alt="Iara Pereira, fundadora da IAra Soluções Digitais"
              className="aspect-square w-full rounded-[1.25rem] object-cover object-center"
              loading="lazy"
            />
            {/* Floating badge */}
            <div className="animate-float glass absolute bottom-8 right-[-1rem] rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-xs font-semibold text-[#d99055]">Fundadora & Dev</div>
              <div className="mt-0.5 text-sm font-bold text-[#12334c]">Iara Pereira</div>
            </div>
          </div>
        </div>

        <div className="reveal-right">
          <div className="section-label text-[#d99055]/70">[05] Direção técnica</div>
          <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1] lg:text-6xl">
            Tecnologia com olhar comercial e{" "}
            <span className="text-gradient">execução próxima.</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/60">
            Eu sou Iara Pereira, fundadora da IAra Soluções Digitais. Meu
            trabalho é unir programação, estratégia e comunicação para criar
            soluções que não sejam apenas bonitas: elas precisam ajudar a
            vender, atender e organizar.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className={`reveal rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-medium text-white/72 delay-${(i % 5) + 1}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FINAL CTA
══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section id="contato" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-[#12334c] p-10 md:p-16">
          {/* Glows */}
          <div className="animate-pulse-glow pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#d99055]/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#1f5a8a]/40 blur-[60px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <Logo className="h-14" />
              <h2 className="mt-10 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1] text-white lg:text-6xl">
                Vamos montar a estrutura digital do seu{" "}
                <span className="text-gradient">próximo passo?</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/58">
                Me conte sua ideia e eu te ajudo a transformar em uma solução
                viável: página, campanha, automação, sistema ou um caminho
                enxuto entre eles.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-between gap-4 rounded-full bg-[#d99055] pl-6 pr-2 font-semibold text-[#12334c] transition-all hover:bg-white"
              >
                <span className="inline-flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#12334c] text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 px-6 font-medium text-white transition-all hover:border-[#d99055]/50 hover:bg-white/5"
              >
                <Instagram className="h-5 w-5" />
                Ver Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-[#12334c]/8 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
        <Logo className="h-11" />
        <div className="flex flex-wrap items-center gap-6 text-sm text-[#12334c]/50">
          {["#solucoes", "#ecossistema", "#portfolio", "#sobre"].map((href) => (
            <a key={href} href={href} className="link-underline hover:text-[#12334c]">
              {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#12334c]">
            Instagram
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#12334c]">
            WhatsApp
          </a>
        </div>
        <div className="text-xs text-[#12334c]/40">
          © {new Date().getFullYear()} IAra Soluções Digitais
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   ROOT
══════════════════════════════════════════ */
export function Landing() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <Header />
      <main>
        <Hero />
        <MetricsBar />
        <Solutions />
        <Ecosystem />
        <Method />
        <Portfolio />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
