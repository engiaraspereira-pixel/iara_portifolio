import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarDays,
  Instagram,
  LayoutDashboard,
  Menu,
  MessageCircle,
  MousePointerClick,
  Rocket,
  TrendingUp,
  UserRound,
  Workflow,
  X,
} from "lucide-react";
import logoIara from "@/assets/iara-logo-tech-transparente.png";
import heroBg from "@/assets/hero-bg.jpg";
import techAiCreation from "@/assets/tech-ai-creation.svg";
import portfolioQualiflow from "@/assets/portfolio-qualiflow.svg";
import portfolioAdvogado from "@/assets/portfolio-advogado.svg";
import portfolioBallet from "@/assets/portfolio-ballet.svg";
import profileIara from "@/assets/iara-perfil.png";
import workImage from "@/assets/work-1.jpg";
import shapeOne from "@/assets/shape-1.jpg";
import shapeTwo from "@/assets/shape-2.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511978856858?text=Ol%C3%A1%2C%20Iara.%20Quero%20conversar%20sobre%20um%20projeto%20digital.";

const INSTAGRAM_URL =
  "https://www.instagram.com/iara.solucoesdigitais?igsh=MXZ1dHM0ZTVqYnM1Mg%3D%3D&utm_source=qr";

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <img
      src={logoIara}
      alt="IAra Soluções Digitais"
      className={`${className} w-auto object-contain`}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#inicio", "Home"],
    ["#solucoes", "Soluções"],
    ["#cases", "Cases"],
    ["#sobre", "Quem Somos"],
    ["#blog", "Blog"],
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#071c46]/96 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "bg-[#071c46]"
      }`}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 md:px-8">
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([href, label], index) => (
            <a
              key={href}
              href={href}
              className={`link-underline text-[15px] font-semibold transition-colors ${
                index === 0 ? "text-[#d99055]" : "text-white/82 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#inicio"
          aria-label="IAra Soluções Digitais"
          className="justify-self-start lg:justify-self-center"
        >
          <Logo className="h-12 sm:h-14" />
        </a>

        <div className="flex items-center justify-end gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#d99055]/70 text-white transition-all hover:bg-[#d99055] hover:text-[#071c46] sm:flex"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#d99055]/70 text-white transition-all hover:bg-[#d99055] hover:text-[#071c46] sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-12 items-center rounded-full bg-[#d99055] px-7 text-[15px] font-semibold text-[#071c46] transition-all hover:bg-white md:inline-flex"
          >
            Entre em contato
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#071c46] px-5 py-7 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-white/82"
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#d99055] px-6 font-semibold text-[#071c46]"
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

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#071c46]">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-58"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,28,70,0.98)_0%,rgba(7,28,70,0.82)_48%,rgba(7,28,70,0.42)_100%)]" />
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-35" />
      <div className="pointer-events-none absolute bottom-16 right-0 hidden h-72 w-[40vw] rounded-l-full border-y border-l border-[#d99055]/30 bg-[#d99055]/8 diagonal-stripes md:block" />
      <div className="pointer-events-none absolute bottom-14 right-[11vw] hidden h-16 w-[30vw] border border-white/55 diagonal-bars lg:block" />

      <div className="mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center px-5 py-10 md:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:py-8">
        <div className="reveal max-w-4xl">
          <p className="max-w-2xl text-lg leading-relaxed text-white/88 sm:text-xl">
            Na IAra, conectamos estratégia digital, tecnologia e inteligência para{" "}
            <strong className="font-semibold text-white">crescimento com estrutura.</strong>
          </p>

          <h1 className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[4.15rem]">
            Páginas, campanhas e sistemas para{" "}
            <strong className="font-black text-gradient">transformar ideias em negócios.</strong>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/76 sm:text-lg">
            Landing pages, automações, sistemas web e campanhas digitais em um ecossistema claro,
            bonito e mensurável.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Planejar meu projeto
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
            <a href="#cases" className="btn-outline">
              Ver cases
            </a>
          </div>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              ["01", "Estratégia"],
              ["02", "Execução"],
              ["03", "Evolução"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur"
              >
                <span className="text-sm font-black text-[#d99055]">{number}</span>
                <span className="ml-3 text-sm font-semibold text-white/84">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right relative hidden min-h-[460px] lg:block">
          <div className="absolute right-0 top-8 w-[72%] overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/8 shadow-2xl backdrop-blur">
            <img
              src={techAiCreation}
              alt="Tecnologia, dados e inteligência artificial aplicada à criação digital"
              className="aspect-[1.45/1] w-full object-cover"
            />
          </div>
          <div className="glass-panel animate-float absolute left-8 top-24 w-[42%] p-6">
            <Logo className="h-12" />
            <div className="mt-8 space-y-3">
              {["Estratégia", "Criação", "Automação"].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-4 py-3"
                >
                  <span className="text-xs font-bold text-[#d99055]">0{index + 1}</span>
                  <span className="text-sm font-medium text-white/82">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-light animate-float-alt absolute bottom-8 right-10 w-[58%] p-7">
            <Rocket className="h-7 w-7 text-[#d99055]" />
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-[#071c46]">
              Digital bonito, mensurável e pronto para vender.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  const items = [
    "Landing Pages",
    "Meta Ads",
    "Automações",
    "Sistemas Web",
    "Dashboards",
    "Conteúdo",
    "Funis",
    "IA aplicada",
  ];

  return (
    <section className="border-y border-[#071c46]/8 bg-white py-10">
      <div className="marquee">
        <div className="marquee-track">
          {[...items, ...items].map((item, index) => (
            <span key={`${item}-${index}`} className="brand-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cards = [
    {
      icon: MousePointerClick,
      title: "Landing pages que convertem",
      desc: "Narrativa, layout e CTA pensados para transformar visitantes em conversas reais.",
    },
    {
      icon: TrendingUp,
      title: "Campanhas com intenção",
      desc: "Meta Ads, criativos e calendário conectados com uma oferta clara.",
    },
    {
      icon: Workflow,
      title: "Automação de processos",
      desc: "Fluxos para reduzir trabalho manual, organizar dados e acelerar atendimento.",
    },
    {
      icon: LayoutDashboard,
      title: "Sistemas e painéis",
      desc: "Aplicações sob medida para operações que já não cabem em planilhas.",
    },
    {
      icon: Bot,
      title: "IA aplicada",
      desc: "Uso prático de inteligência artificial para conteúdo, análise e produtividade.",
    },
  ];

  function scrollSolutions(direction: "previous" | "next") {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>(".solution-card");
    const amount = card ? card.offsetWidth + 28 : carousel.clientWidth * 0.82;
    carousel.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-[#071c46] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal">
            <div className="section-label">Marketing e tecnologia em um só lugar</div>
            <h2 className="mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-tight lg:text-6xl">
              Temos as melhores soluções para você.
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0"
          >
            Ver todas
          </a>
        </div>
      </div>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-left"
        aria-label="Voltar soluções"
        onClick={() => scrollSolutions("previous")}
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      <div className="relative">
        <div ref={carouselRef} className="scroll-row solution-carousel px-5 md:px-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className={`solution-card reveal delay-${(index % 5) + 1}`}>
                <Icon className="h-12 w-12 text-[#d99055]" />
                <h3 className="mt-12 font-display text-3xl font-bold leading-tight text-[#d99055]">
                  {card.title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-white/82">{card.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-white"
                >
                  Ver detalhes
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right"
        aria-label="Avançar soluções"
        onClick={() => scrollSolutions("next")}
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </section>
  );
}

function Method() {
  const steps = [
    ["Diagnóstico", "Entender o negócio, a oferta, o público e o que precisa destravar primeiro."],
    ["Estratégia", "Desenhar a jornada, as páginas, os canais, os dados e as integrações."],
    ["Execução", "Criar layout, código, campanhas, automações e publicação com acabamento."],
    ["Evolução", "Medir, ajustar e adicionar novas peças conforme o projeto ganha tração."],
  ];

  return (
    <section id="metodo" className="bg-[#fbfaf7] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-14 max-w-3xl">
          <div className="section-label">Método IAra</div>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-tight text-[#071c46] lg:text-6xl">
            Um caminho claro do briefing ao crescimento.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, desc], index) => (
            <article key={title} className={`method-card reveal delay-${index + 1}`}>
              <div className="text-6xl font-black text-gradient">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-12 font-display text-2xl font-bold text-[#071c46]">{title}</h3>
              <p className="mt-4 leading-relaxed text-[#071c46]/64">{desc}</p>
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
      tag: "Sistema web",
      title: "Qualiflow",
      desc: "Produto próprio para qualificação, organização de dados e apoio a fluxos internos.",
      image: portfolioQualiflow,
      result: "Produto em desenvolvimento",
    },
    {
      tag: "Landing + campanha",
      title: "Adriano Oliveira Farias",
      desc: "Página para atuação previdenciária, campanha Meta Ads e materiais de conteúdo.",
      image: portfolioAdvogado,
      result: "Landing + tráfego pago",
    },
    {
      tag: "Próximo projeto",
      title: "Thais Fima Ballet",
      desc: "Página institucional e captação para escola de ballet com direção visual delicada.",
      image: portfolioBallet,
      result: "Design e conteúdo",
    },
  ];

  return (
    <section id="cases" className="bg-[#0b3471] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal">
            <div className="section-label">Transformações de resultado</div>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-tight lg:text-6xl">
              Projetos que saem do papel com estratégia e presença.
            </h2>
          </div>
          <div className="hidden gap-3 lg:flex">
            <button className="nav-circle" aria-label="Anterior">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button className="nav-circle" aria-label="Próximo">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className={`case-card reveal delay-${index + 1}`}>
              <img
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                className="h-64 w-full object-cover"
              />
              <div className="p-7">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#d99055]">
                  {project.tag}
                </span>
                <h3 className="mt-5 font-display text-3xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-relaxed text-white/76">{project.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d99055]/14 px-4 py-2 text-sm font-semibold text-[#d99055]">
                  <TrendingUp className="h-4 w-4" />
                  {project.result}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturePortfolio() {
  return (
    <section className="relative overflow-hidden bg-[#071c46] py-24 text-white lg:py-32">
      <div className="absolute left-1/4 top-16 h-64 w-64 rounded-full border border-[#d99055]/28 diagonal-stripes opacity-50" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <div className="reveal-left relative">
          <img
            src={workImage}
            alt="Projeto digital em tela"
            className="aspect-[1.18/1] w-full rounded-[1.75rem] object-cover shadow-2xl"
          />
          <img
            src={shapeOne}
            alt=""
            className="absolute -right-10 -top-10 hidden h-56 w-72 rounded-[1.5rem] object-cover shadow-xl lg:block"
          />
        </div>
        <div className="reveal-right rounded-[1.75rem] bg-[#d99055] p-8 text-[#071c46] shadow-2xl lg:p-12">
          <h2 className="font-display text-4xl font-bold leading-tight lg:text-5xl">
            Portfólio baseado em performance, não só aparência.
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Cada página, campanha e automação nasce com uma pergunta simples: como isso ajuda a
            vender, atender melhor ou organizar o próximo passo?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex w-full items-center justify-center rounded-full border border-[#071c46] px-6 py-4 font-semibold transition-colors hover:bg-[#071c46] hover:text-white"
          >
            Entenda como seu projeto pode performar mais
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const skills = ["React", "Supabase", "Python", "SQL", "Tailwind", "Vercel", "n8n", "Meta Ads"];

  return (
    <section id="sobre" className="bg-[#071c46] py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div className="reveal-left relative">
          <div className="absolute -right-6 -top-7 h-full w-full rounded-[2rem] bg-[#d99055]" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d99055]/60 bg-white/8 p-3">
            <img
              src={profileIara}
              alt="Iara Pereira, fundadora da IAra Soluções Digitais"
              className="aspect-square w-full rounded-[1.25rem] object-cover object-center"
            />
          </div>
        </div>

        <div className="reveal-right">
          <div className="quote-mark">“</div>
          <p className="max-w-2xl text-2xl font-semibold leading-relaxed lg:text-3xl">
            Tecnologia com olhar comercial, comunicação clara e execução próxima.
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/72">
            Eu sou Iara Pereira, fundadora da IAra Soluções Digitais. Meu trabalho é unir
            programação, estratégia e comunicação para criar soluções que sejam bonitas, úteis e
            mensuráveis.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#d99055]/45 px-4 py-2 text-sm font-semibold text-[#d99055]"
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

function Blog() {
  const posts = [
    {
      image: shapeTwo,
      author: "IAra Soluções Digitais",
      date: "Estratégia",
      title: "Como transformar uma ideia em uma página que vende",
    },
    {
      image: techAiCreation,
      author: "IA aplicada",
      date: "Automação",
      title: "Onde a inteligência artificial realmente economiza tempo",
    },
    {
      image: workImage,
      author: "Performance",
      date: "Campanhas",
      title: "O que medir depois que sua landing page vai ao ar",
    },
  ];

  return (
    <section id="blog" className="bg-[#0b3471] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal">
            <div className="section-label">Conteúdos diversos</div>
            <h2 className="mt-5 font-display text-4xl font-bold lg:text-6xl">Visite nosso blog</h2>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Acessar conteúdos
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.title} className={`blog-card reveal delay-${index + 1}`}>
              <img
                src={post.image}
                alt=""
                className="aspect-[1.4/1] w-full rounded-[1.25rem] object-cover"
              />
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="blog-pill">
                  <UserRound className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="blog-pill">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight">{post.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterFooter() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-[#071c46] py-20 text-white">
      <div className="absolute -bottom-24 right-[-3rem] hidden text-[22rem] font-black leading-none text-[#d99055]/16 lg:block">
        IA
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="reveal">
            <div className="section-label">Newsletter</div>
            <h2 className="mt-3 max-w-md font-display text-3xl font-bold leading-tight">
              Assine nossa <span className="text-gradient">newsletter</span> e receba conteúdos,
              dicas e novidades.
            </h2>
          </div>
          <form className="reveal-right grid gap-5 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
            {["Nome*", "Email*"].map((label) => (
              <label key={label} className="grid gap-3 font-semibold">
                {label}
                <input className="field" type={label === "Email*" ? "email" : "text"} />
              </label>
            ))}
            <label className="grid gap-3 font-semibold">
              Interesse*
              <select className="field">
                <option>Selecione</option>
                <option>Landing page</option>
                <option>Campanhas</option>
                <option>Automação</option>
                <option>Sistema web</option>
              </select>
            </label>
            <button
              className="h-14 rounded-full bg-[#d99055] px-8 font-semibold text-[#071c46]"
              type="button"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-14" />
            <div className="mt-6 flex gap-3">
              <a
                className="social-circle"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                className="social-circle"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          <FooterColumn
            title="Soluções"
            items={["Landing Pages", "Meta Ads", "Automações", "Sistemas web"]}
          />
          <FooterColumn title="Home" items={["Quem Somos", "Cases", "Método", "Blog"]} />
          <FooterColumn
            title="Conheça"
            items={["Marketing", "Tecnologia", "IA aplicada", "Performance"]}
          />
        </div>
        <div className="mt-12 text-sm text-white/45">
          © {new Date().getFullYear()} IAra Soluções Digitais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-bold text-[#d99055]">{title}</h3>
      <ul className="mt-5 space-y-3 text-white/78">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-5 z-50 grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-[#2fcf58] text-white shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}

export function Landing() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <Header />
      <main>
        <Hero />
        <CapabilityStrip />
        <Solutions />
        <Method />
        <Portfolio />
        <FeaturePortfolio />
        <About />
        <Blog />
      </main>
      <NewsletterFooter />
      <FloatingWhatsApp />
    </div>
  );
}
