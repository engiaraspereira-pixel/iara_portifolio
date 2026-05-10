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
import { useReveal } from "@/hooks/use-reveal";

const WHATSAPP_URL =
  "https://wa.me/5511978856858?text=Ol%C3%A1%2C%20Iara.%20Quero%20conversar%20sobre%20um%20projeto%20digital.";

const INSTAGRAM_URL =
  "https://www.instagram.com/iara.solucoesdigitais?igsh=MXZ1dHM0ZTVqYnM1Mg%3D%3D&utm_source=qr";


function Logo({ className = "h-11" }: { className?: string }) {
  return (
    <img
      src={logoIara}
      alt="IAra Soluções Digitais"
      className={`${className} w-auto rounded-xl object-contain`}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#solucoes", "Soluções"],
    ["#ecossistema", "Ecossistema"],
    ["#metodo", "Método"],
    ["#portfolio", "Portfólio"],
    ["#sobre", "Sobre"],
    ["#contato", "Contato"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/96 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[5rem] max-w-[1440px] items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="IAra Soluções Digitais">
          <Logo className="h-12 sm:h-[3.25rem]" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="link-underline text-sm text-white/70 transition-colors hover:text-white"
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
            aria-label="Instagram da IAra Soluções Digitais"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/7 text-white transition-colors hover:border-copper hover:text-copper sm:flex"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 items-center gap-2 rounded-full bg-copper px-5 text-sm font-semibold text-navy transition-colors hover:bg-white md:inline-flex"
          >
            Começar projeto
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/7 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base text-white/78"
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-copper px-5 text-sm font-semibold text-navy"
            >
              Falar no WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#f7f4ee]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(17,48,71,0.05)_0%,transparent_38%),radial-gradient(circle_at_86%_16%,rgba(218,147,83,0.22),transparent_30%)]" />
      <div className="absolute -right-20 top-24 -z-10 hidden h-[38rem] w-[38rem] rounded-full border border-copper/20 lg:block" />
      <div className="absolute -right-4 top-44 -z-10 hidden h-[26rem] w-[26rem] rounded-full border border-navy/10 lg:block" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
        <div className="reveal">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-xs font-medium text-navy/68 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
            Tecnologia • inteligência • resultados
          </span>

          <h1 className="max-w-4xl text-balance font-display text-[3.4rem] font-semibold leading-[0.92] text-navy sm:text-[5rem] lg:text-[7.2rem]">
            Digital que organiza, comunica e vende.
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-navy/66 lg:text-xl">
            A IAra cria páginas, automações, sistemas e campanhas para empresas
            que precisam transformar ideias em uma estrutura digital clara,
            bonita e mensurável.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-between gap-5 rounded-full bg-navy pl-6 pr-2 font-semibold text-white transition-colors hover:bg-[#1f4560]"
            >
              Planejar meu projeto
              <span className="grid h-10 w-10 place-items-center rounded-full bg-copper text-navy transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#solucoes"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-navy/12 bg-white px-6 font-medium text-navy transition-colors hover:border-copper"
            >
              Conhecer soluções
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="reveal relative min-h-[520px]">
          <div className="absolute left-0 top-12 w-[58%] rounded-[2rem] bg-navy p-5 shadow-[0_30px_90px_rgba(17,48,71,0.18)]">
            <Logo className="h-16" />
            <div className="mt-12 grid gap-3">
              {[
                ["01", "Página de conversão"],
                ["02", "Campanha e conteúdo"],
                ["03", "Dados e automação"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white"
                >
                  <span className="text-xs text-copper">{number}</span>
                  <span className="text-sm text-white/78">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 w-[58%] rounded-[2rem] border border-navy/10 bg-white p-5 shadow-[0_30px_90px_rgba(17,48,71,0.12)]">
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
                  className="rounded-2xl bg-[#f7f4ee] p-5 text-navy"
                >
                  <Icon className="mb-7 h-5 w-5 text-copper" />
                  <div className="font-display text-2xl">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-[16%] w-[70%] rounded-[2rem] border border-copper/28 bg-white p-6 shadow-[0_26px_90px_rgba(17,48,71,0.14)]">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-copper/16 text-copper">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-3xl leading-tight text-navy">
                  Crescimento com estrutura
                </div>
                <p className="mt-3 leading-relaxed text-navy/60">
                  Primeiro a estratégia. Depois a tecnologia certa para vender,
                  atender e evoluir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsBar() {
  const items = [
    ["Landing pages", "para gerar leads"],
    ["Meta Ads", "para atrair demanda"],
    ["Automações", "para ganhar tempo"],
    ["Sistemas web", "para organizar a operação"],
  ];

  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-[1440px] divide-y divide-white/10 px-5 md:px-8 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {items.map(([title, text]) => (
          <div key={title} className="py-8 lg:px-7">
            <div className="font-display text-3xl text-copper">{title}</div>
            <div className="mt-2 text-sm text-white/58">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Solutions() {
  const cards = [
    {
      icon: MousePointerClick,
      title: "Presença que converte",
      desc: "Landing pages e sites com narrativa clara, identidade visual e CTA direto para transformar visita em conversa.",
    },
    {
      icon: Sparkles,
      title: "Campanhas com intenção",
      desc: "Criativos, calendário e Meta Ads alinhados com a oferta para atrair pessoas mais próximas da decisão.",
    },
    {
      icon: Workflow,
      title: "Automação de rotina",
      desc: "Fluxos para reduzir trabalho manual, organizar dados e conectar WhatsApp, formulários e sistemas.",
    },
    {
      icon: LayoutDashboard,
      title: "Sistemas sob medida",
      desc: "Painéis, áreas internas e aplicações web para organizar processos que já não cabem em planilhas.",
    },
  ];

  return (
    <section id="solucoes" className="py-[5.5rem] lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="reveal mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-label">[01] Soluções</div>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1] text-navy lg:text-7xl">
              Estratégia digital pensada como ecossistema.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-navy/62 lg:justify-self-end">
            O melhor resultado não vem de uma peça isolada. Vem da conexão entre
            oferta, comunicação, tráfego, atendimento e dados.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className={`reveal group rounded-[1.6rem] border border-navy/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-copper/50 lg:p-9 ${
                  index === 0
                    ? "bg-navy text-white"
                    : "bg-white text-navy shadow-[0_18px_70px_rgba(17,48,71,0.06)]"
                }`}
              >
                <div
                  className={`mb-14 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index === 0 ? "bg-white/10 text-copper" : "bg-copper/13 text-copper"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-4xl leading-tight">
                  {card.title}
                </h3>
                <p
                  className={`mt-5 max-w-xl leading-relaxed ${
                    index === 0 ? "text-white/62" : "text-navy/60"
                  }`}
                >
                  {card.desc}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
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

function Ecosystem() {
  const orbit = ["Oferta", "Página", "Tráfego", "Atendimento", "Dados", "Automação"];

  return (
    <section id="ecossistema" className="overflow-hidden bg-[#f7f4ee] py-[5.5rem] lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="reveal">
          <div className="section-label">[02] Ecossistema</div>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1] text-navy lg:text-7xl">
            A página é só uma parte da máquina.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy/64">
            Por isso, cada entrega da IAra já nasce com visão de continuidade:
            como atrair, qualificar, atender, registrar e aprender com os dados.
          </p>
        </div>

        <div className="reveal relative min-h-[560px]">
          <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/10" />
          <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper/30" />
          <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-navy p-5 shadow-[0_26px_80px_rgba(17,48,71,0.22)]">
            <Logo className="h-16" />
          </div>
          {orbit.map((item, index) => {
            const positions = [
              "left-[7%] top-[11%]",
              "right-[3%] top-[16%]",
              "left-[1%] top-[47%]",
              "right-[0%] top-[50%]",
              "left-[15%] bottom-[6%]",
              "right-[12%] bottom-[8%]",
            ];
            return (
              <div
                key={item}
                className={`absolute ${positions[index]} rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy shadow-[0_18px_70px_rgba(17,48,71,0.08)]`}
              >
                <div className="text-xs text-copper">0{index + 1}</div>
                <div className="font-display text-2xl">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    ["Diagnosticar", "O que existe hoje, onde trava e qual resultado precisa aparecer primeiro."],
    ["Desenhar", "A jornada, as páginas, os dados e as integrações que sustentam o projeto."],
    ["Construir", "Layout, código, automações e publicação com acabamento profissional."],
    ["Evoluir", "Ajustes, campanhas e novas funcionalidades conforme o negócio amadurece."],
  ];

  return (
    <section id="metodo" className="py-[5.5rem] lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="reveal mb-14 max-w-3xl">
          <div className="section-label">[03] Método</div>
          <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1] text-navy lg:text-7xl">
            Do briefing ao crescimento, sem virar bagunça.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-navy/12 lg:grid-cols-4">
          {steps.map(([title, desc], index) => (
            <article key={title} className="reveal bg-white p-7 lg:min-h-[310px] lg:p-8">
              <div className="mb-20 font-display text-5xl text-copper">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-3xl text-navy">{title}</h3>
              <p className="mt-4 leading-relaxed text-navy/60">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      tag: "Landing Page",
      icon: MousePointerClick,
      title: "Studio Estética Rose",
      desc: "Página de captação com depoimentos, galeria e CTA direto para WhatsApp, integrada a campanha de Meta Ads.",
      result: "+280% leads em 30 dias",
      techs: ["React", "Tailwind", "Meta Ads"],
      dark: true,
    },
    {
      tag: "Sistema Web",
      icon: LayoutDashboard,
      title: "Construtora Renovar",
      desc: "Painel interno para gerenciar orçamentos, clientes e status de obras, substituindo planilhas desconectadas.",
      result: "3h/dia economizadas",
      techs: ["React", "Supabase", "SQL"],
      dark: false,
    },
    {
      tag: "Automação + Ads",
      icon: Zap,
      title: "Clínica NutriVida",
      desc: "Fluxo automatizado de captura, qualificação e agendamento via WhatsApp com Meta Ads como fonte de tráfego.",
      result: "R$ 45k em vendas em 60 dias",
      techs: ["n8n", "Meta Ads", "WhatsApp"],
      dark: false,
    },
  ];

  return (
    <section id="portfolio" className="bg-[#f7f4ee] py-[5.5rem] lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="reveal mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-label">[04] Portfólio</div>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1] text-navy lg:text-7xl">
              Projetos que saem do papel e geram resultado.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-navy/62 lg:justify-self-end">
            Cada entrega carrega estratégia, execução e métricas claras. Aqui
            estão alguns casos que mostram como a IAra une tecnologia e
            resultado real.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className={`reveal group flex flex-col rounded-[1.6rem] border p-7 transition-all duration-500 hover:-translate-y-1 lg:p-8 ${
                  project.dark
                    ? "border-white/10 bg-navy text-white hover:border-copper/50"
                    : "border-navy/10 bg-white text-navy shadow-[0_18px_70px_rgba(17,48,71,0.06)] hover:border-copper/50"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      project.dark
                        ? "bg-white/10 text-copper"
                        : "bg-copper/12 text-copper"
                    }`}
                  >
                    {project.tag}
                  </span>
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-xl ${
                      project.dark
                        ? "bg-white/10 text-copper"
                        : "bg-copper/12 text-copper"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-display text-3xl leading-tight">
                  {project.title}
                </h3>
                <p
                  className={`mt-4 flex-1 leading-relaxed ${
                    project.dark ? "text-white/62" : "text-navy/60"
                  }`}
                >
                  {project.desc}
                </p>

                <div
                  className={`mt-6 flex items-center gap-2 rounded-2xl px-4 py-3 ${
                    project.dark ? "bg-white/8" : "bg-[#f7f4ee]"
                  }`}
                >
                  <TrendingUp className="h-4 w-4 shrink-0 text-copper" />
                  <span className="text-sm font-semibold text-copper">
                    {project.result}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full px-3 py-1 text-xs ${
                        project.dark
                          ? "border border-white/12 text-white/52"
                          : "border border-navy/10 text-navy/50"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Ver projeto
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  const skills = ["React", "Supabase", "Python", "SQL", "Tailwind", "Vercel"];

  return (
    <section id="sobre" className="bg-navy py-[5.5rem] text-white lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
        <div className="reveal">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/7 p-3">
            <img
              src={profileIara}
              alt="Iara Pereira, fundadora da IAra Soluções Digitais"
              className="aspect-square w-full rounded-[1.25rem] object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        <div className="reveal">
          <div className="section-label text-white/48">[05] Direção técnica</div>
          <h2 className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1] lg:text-7xl">
            Tecnologia com olhar comercial e execução próxima.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/64">
            Eu sou Iara Pereira, fundadora da IAra Soluções Digitais. Meu
            trabalho é unir programação, estratégia e comunicação para criar
            soluções que não sejam apenas bonitas: elas precisam ajudar a vender,
            atender e organizar.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm text-white/72"
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

function FinalCTA() {
  return (
    <section id="contato" className="py-[5.5rem] lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-[#f7f4ee] p-8 md:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-copper/18" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <Logo className="h-16" />
              <h2 className="mt-12 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1] text-navy lg:text-7xl">
                Vamos montar a estrutura digital do seu próximo passo?
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy/62">
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
                className="group inline-flex h-[3.75rem] items-center justify-between gap-5 rounded-full bg-navy pl-6 pr-2 font-semibold text-white transition-colors hover:bg-[#1f4560]"
              >
                <span className="inline-flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-copper text-navy transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[3.75rem] items-center justify-center gap-3 rounded-full border border-navy/12 bg-white px-6 font-medium text-navy transition-colors hover:border-copper"
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

function Footer() {
  return (
    <footer className="border-t border-navy/10 py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
        <Logo className="h-12" />
        <div className="flex flex-wrap items-center gap-5 text-sm text-navy/58">
          <a href="#solucoes" className="link-underline hover:text-navy">
            Soluções
          </a>
          <a href="#ecossistema" className="link-underline hover:text-navy">
            Ecossistema
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
        <div className="text-xs text-navy/48">
          ©{new Date().getFullYear()} IAra Soluções Digitais
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  useReveal();

  useEffect(() => {
    document.body.classList.add("antialiased");
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
