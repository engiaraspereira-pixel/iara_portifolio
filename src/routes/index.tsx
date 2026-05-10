import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChevronDown,
  Clock,
  LayoutDashboard,
  Menu,
  MessageCircle,
  MousePointerClick,
  Rocket,
  Shield,
  Star,
  Target,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import logoIara from "@/assets/iara-logo-tech-transparente.png";
import heroBg from "@/assets/hero-bg.jpg";
import techAiCreation from "@/assets/tech-ai-creation.svg";
import portfolioQualiflow from "@/assets/portfolio-qualiflow.svg";
import portfolioAdvogado from "@/assets/portfolio-advogado.svg";
import portfolioBallet from "@/assets/portfolio-ballet.svg";
import profileIara from "@/assets/iara-perfil.png";

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
      { threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));
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
    ["#cases", "Portfólio"],
    ["#sobre", "Sobre"],
    ["#faq", "FAQ"],
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
            <InstagramIcon className="h-4 w-4" />
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
            Falar com a IAra
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
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
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-28"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#071c46] via-[#071c46]/95 to-[#0b3471]/80" />
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-22" />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute -right-40 top-[12%] h-[700px] w-[700px] rounded-full border border-[#d99055]/7" />
      <div className="pointer-events-none absolute -right-20 top-[18%] h-[500px] w-[500px] rounded-full border border-[#d99055]/11" />
      <div className="pointer-events-none absolute -right-4 top-[24%] h-[340px] w-[340px] rounded-full border border-[#d99055]/16" />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* Left */}
        <div className="reveal">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d99055]/35 bg-[#d99055]/10 px-5 py-2.5">
            <Zap className="h-4 w-4 text-[#d99055]" />
            <span className="text-sm font-semibold text-[#d99055]">
              Agência Digital · IAra Soluções
            </span>
          </div>

          <h1 className="text-balance font-display text-4xl font-black leading-[1.06] text-white sm:text-5xl lg:text-[4.75rem]">
            Presença digital que{" "}
            <span className="text-gradient">realmente converte.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/68">
            Landing pages, campanhas, automações e sistemas web para empresas que querem crescer com
            estratégia, tecnologia e execução próxima.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Quero meu projeto
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
            <a href="#cases" className="btn-outline">
              Ver portfólio
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-10">
            {[
              ["50+", "Projetos"],
              ["30+", "Clientes"],
              ["100%", "Comprometimento"],
            ].map(([num, label]) => (
              <div key={label} className="px-4 first:pl-0 last:pr-0">
                <div className="font-display text-3xl font-black text-[#d99055] lg:text-4xl">
                  {num}
                </div>
                <div className="mt-1 text-sm text-white/50">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="reveal-right relative hidden min-h-[520px] lg:block">
          <div className="absolute right-0 top-0 w-[73%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <img
              src={techAiCreation}
              alt="Tecnologia e inteligência artificial aplicada"
              className="aspect-[1.4/1] w-full object-cover"
            />
          </div>

          <div className="glass-panel animate-float absolute left-0 top-14 w-[46%] p-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#d99055]">
              Serviços
            </span>
            <div className="mt-4 space-y-2.5">
              {["Landing Pages", "Meta Ads", "Automação", "Sistemas Web"].map((s, i) => (
                <div
                  key={s}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/6 px-3 py-2"
                >
                  <span className="text-xs font-black text-[#d99055]/70">0{i + 1}</span>
                  <span className="text-sm font-medium text-white/85">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-light animate-float-alt absolute bottom-8 right-4 w-[54%] p-6">
            <Rocket className="h-6 w-6 text-[#d99055]" />
            <p className="mt-3 font-display text-xl font-bold leading-snug text-[#071c46]">
              Do briefing ao resultado em tempo recorde.
            </p>
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

function ValueProps() {
  const pillars = [
    {
      icon: Target,
      title: "Estratégia personalizada",
      desc: "Cada projeto começa com entendimento profundo do negócio. Sem template, sem atalho — só o que faz sentido para o seu momento.",
    },
    {
      icon: Clock,
      title: "Entregas pontuais",
      desc: "Processos claros, comunicação constante e cronograma respeitado. Você sabe exatamente o que esperar e quando.",
    },
    {
      icon: Shield,
      title: "Atendimento direto",
      desc: "Você fala com quem executa. Sem intermediários, sem times descoordenados — só parceria de verdade.",
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-14 text-center">
          <div className="section-label-dark">Por que a IAra?</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-[#071c46] lg:text-5xl">
            O que faz nosso trabalho diferente
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, index) => {
            const Icon = p.icon;
            return (
              <article key={p.title} className={`value-card reveal delay-${index + 1}`}>
                <div className="value-icon-wrap">
                  <Icon className="h-6 w-6 text-[#d99055]" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-[#071c46]">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-[#071c46]/60">{p.desc}</p>
              </article>
            );
          })}
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
      desc: "Meta Ads, criativos e calendário conectados com uma oferta clara e mensurável.",
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
    carousel.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  }

  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-[#071c46] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal">
            <div className="section-label">Tudo em um só lugar</div>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-tight lg:text-6xl">
              Soluções digitais completas para o seu negócio.
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0"
          >
            Falar sobre meu projeto
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-left"
        aria-label="Voltar"
        onClick={() => scrollSolutions("previous")}
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      <div className="relative">
        <div ref={carouselRef} className="scroll-row solution-carousel px-5 md:px-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className={`solution-card reveal delay-${(index % 5) + 1}`}
              >
                <div className="solution-icon-wrap">
                  <Icon className="h-6 w-6 text-[#d99055]" />
                </div>
                <h3 className="mt-10 font-display text-2xl font-bold leading-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/70">{card.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-[#d99055] transition-opacity hover:opacity-75"
                >
                  Saiba mais <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right"
        aria-label="Avançar"
        onClick={() => scrollSolutions("next")}
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </section>
  );
}

function Method() {
  const steps = [
    [
      "Diagnóstico",
      "Entender o negócio, a oferta, o público e o que precisa destravar primeiro.",
    ],
    ["Estratégia", "Desenhar a jornada, as páginas, os canais, os dados e as integrações."],
    ["Execução", "Criar layout, código, campanhas, automações e publicação com acabamento."],
    ["Evolução", "Medir, ajustar e adicionar novas peças conforme o projeto ganha tração."],
  ];

  return (
    <section id="metodo" className="bg-[#fbfaf7] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-14 max-w-3xl">
          <div className="section-label-dark">Método IAra</div>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-tight text-[#071c46] lg:text-6xl">
            Do briefing ao crescimento, passo a passo.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, desc], index) => (
            <article key={title} className={`method-card reveal delay-${index + 1}`}>
              <div className="method-number">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="mt-8 font-display text-2xl font-bold text-[#071c46]">{title}</h3>
              <p className="mt-4 leading-relaxed text-[#071c46]/60">{desc}</p>
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
      tag: "Sistema Web · IA",
      title: "Qualiflow",
      desc: "Produto próprio para qualificação, organização de dados e apoio a fluxos internos.",
      image: portfolioQualiflow,
      badge: "Em desenvolvimento",
    },
    {
      tag: "Landing Page · Meta Ads",
      title: "Adriano Oliveira Farias",
      desc: "Página para atuação previdenciária, campanha Meta Ads e materiais de conteúdo.",
      image: portfolioAdvogado,
      badge: "Live",
    },
    {
      tag: "Site Institucional · Identidade Visual",
      title: "Thais Fima Ballet",
      desc: "Página institucional e captação para escola de ballet com direção visual delicada.",
      image: portfolioBallet,
      badge: "Em design",
    },
  ];

  return (
    <section id="cases" className="bg-[#071c46] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal">
            <div className="section-label">Cases reais</div>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-tight lg:text-6xl">
              Projetos com estratégia e identidade.
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0"
          >
            Ver todos os projetos
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className={`portfolio-card reveal delay-${index + 1}`}>
              <div className="portfolio-img-wrap">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-badge">{project.badge}</div>
              </div>
              <div className="p-7">
                <div className="portfolio-tag">{project.tag}</div>
                <h3 className="mt-4 font-display text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/62">{project.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#d99055]"
                >
                  Saiba mais <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Carla Mendonça",
      role: "Empreendedora · São Paulo",
      text: "A IAra transformou completamente minha presença online. A landing page gerou resultados em menos de uma semana. Profissionalismo e atenção aos detalhes em cada etapa.",
      stars: 5,
    },
    {
      name: "Ricardo Fonseca",
      role: "Diretor Comercial · Startup",
      text: "Contratamos para automação de processos e o impacto foi imediato. Reduzimos 60% do trabalho manual. A equipe passou a focar no que realmente importa.",
      stars: 5,
    },
    {
      name: "Ana Beatriz Lima",
      role: "Personal Trainer · Rio de Janeiro",
      text: "Minha campanha de Meta Ads nunca tinha trazido tanto retorno. Com a estratégia da IAra, dobramos as consultas em dois meses. Recomendo demais!",
      stars: 5,
    },
  ];

  return (
    <section className="bg-[#0b3471] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-14 text-center">
          <div className="section-label">Depoimentos</div>
          <h2 className="mt-5 font-display text-4xl font-bold lg:text-6xl">
            O que dizem sobre a IAra
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article key={review.name} className={`testimonial-card reveal delay-${index + 1}`}>
              <div className="flex gap-1">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#d99055] text-[#d99055]" />
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-white/80">"{review.text}"</p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d99055]/20 text-sm font-black text-[#d99055]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{review.name}</div>
                  <div className="text-xs text-white/48">{review.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const skills = ["React", "Supabase", "Python", "SQL", "Tailwind", "Vercel", "n8n", "Meta Ads"];

  return (
    <section id="sobre" className="bg-[#fbfaf7] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div className="reveal-left relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-[#d99055]/15" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d99055]/30 p-2.5 shadow-2xl">
            <img
              src={profileIara}
              alt="Iara Pereira, fundadora da IAra Soluções Digitais"
              className="aspect-square w-full rounded-[1.25rem] object-cover object-center"
            />
          </div>
        </div>

        <div className="reveal-right">
          <div className="section-label-dark">Quem somos</div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-[#071c46] lg:text-5xl">
            Tecnologia com estratégia e execução próxima.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#071c46]/65">
            Eu sou Iara Pereira, fundadora da IAra Soluções Digitais. Uno programação, marketing e
            comunicação para criar soluções bonitas, úteis e mensuráveis — do primeiro contato ao
            resultado real.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#d99055]/40 bg-[#d99055]/8 px-4 py-2 text-sm font-semibold text-[#d99055]"
              >
                {skill}
              </span>
            ))}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#071c46] px-8 py-4 font-semibold text-white transition-all hover:bg-[#0b3471]"
          >
            Vamos conversar <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como funciona o processo de início de um projeto?",
      a: "Tudo começa com uma conversa pelo WhatsApp para entendermos seu negócio, objetivos e o que precisa ser destravado. A partir daí, montamos uma proposta personalizada com escopo, prazo e investimento.",
    },
    {
      q: "Qual o prazo médio para entrega de uma landing page?",
      a: "Landing pages são entregues em 7 a 14 dias úteis após aprovação do briefing e dos materiais. Projetos maiores como sistemas web têm prazos acordados na proposta.",
    },
    {
      q: "Com que tipo de empresa vocês trabalham?",
      a: "Trabalhamos com pequenas e médias empresas, profissionais liberais, prestadores de serviço e startups que querem estruturar ou escalar a presença digital com estratégia.",
    },
    {
      q: "É possível contratar mais de um serviço ao mesmo tempo?",
      a: "Sim! Inclusive faz todo sentido combinar landing page + campanha ou sistema + automação. As peças se potencializam. Montamos pacotes sob medida para cada necessidade.",
    },
    {
      q: "Como acompanho os resultados do projeto?",
      a: "Entregamos relatórios periódicos com os principais indicadores. Para campanhas, os dados ficam disponíveis em tempo real e são revisados em conjunto com você.",
    },
    {
      q: "Vocês atendem clientes de qualquer estado do Brasil?",
      a: "Sim! Atendemos 100% de forma remota, com reuniões por videoconferência e comunicação ágil pelo WhatsApp. Nossos clientes estão em todo o Brasil.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="reveal mb-14 text-center">
          <div className="section-label-dark">Dúvidas frequentes</div>
          <h2 className="mt-5 font-display text-4xl font-bold text-[#071c46] lg:text-5xl">
            Perguntas mais comuns
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item${openIndex === index ? " faq-open" : ""}`}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-question"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#d99055] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>

        <div className="reveal mt-16 rounded-3xl bg-[#071c46] p-8 text-center lg:p-12">
          <h3 className="font-display text-2xl font-bold text-white lg:text-3xl">
            Ainda tem dúvidas? Fale direto com a Iara.
          </h3>
          <p className="mt-3 text-white/58">Resposta rápida e sem enrolação.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#d99055] px-8 py-4 font-semibold text-[#071c46] transition-all hover:bg-white"
          >
            Abrir WhatsApp <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsletterFooter() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-[#071c46] py-20 text-white">
      <div className="absolute -bottom-24 right-[-3rem] hidden text-[22rem] font-black leading-none text-[#d99055]/10 lg:block">
        IA
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="reveal">
            <div className="section-label">Newsletter</div>
            <h2 className="mt-3 max-w-md font-display text-3xl font-bold leading-tight">
              Receba conteúdos, dicas e{" "}
              <span className="text-gradient">novidades</span> da IAra.
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
              className="h-14 rounded-full bg-[#d99055] px-8 font-semibold text-[#071c46] transition-colors hover:bg-white"
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
                <InstagramIcon className="h-5 w-5" />
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
          <FooterColumn
            title="Empresa"
            items={["Quem Somos", "Portfólio", "Método IAra", "FAQ"]}
          />
          <FooterColumn
            title="Contato"
            items={["WhatsApp", "Instagram", "Newsletter", "Email"]}
          />
        </div>

        <div className="mt-12 text-sm text-white/40">
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
      <ul className="mt-5 space-y-3 text-white/72">
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
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CapabilityStrip />
        <ValueProps />
        <Solutions />
        <Method />
        <Portfolio />
        <Testimonials />
        <About />
        <FAQ />
      </main>
      <NewsletterFooter />
      <FloatingWhatsApp />
    </div>
  );
}
