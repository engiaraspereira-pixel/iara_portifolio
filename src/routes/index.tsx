import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Menu,
  MessageCircle,
  Shield,
  Star,
  Target,
  TrendingUp,
  Workflow,
  X,
} from "lucide-react";
import logoIara from "@/assets/iara-logo-tech-transparente.png";
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
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const tid = window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 380);
      return () => window.clearTimeout(tid);
    }, 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.38s ease, transform 0.38s ease",
        display: "inline-block",
      }}
    >
      {words[index]}
    </span>
  );
}

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

function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <img src={logoIara} alt="IAra Soluções Digitais" className={`${className} w-auto object-contain`} />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
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
          {links.map(([href, label], i) => (
            <a
              key={href}
              href={href}
              className={`link-underline text-[15px] font-semibold transition-colors ${
                i === 0 ? "text-[#d99055]" : "text-white/82 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#inicio" aria-label="IAra" className="justify-self-start lg:justify-self-center">
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
  const words = ["Websites", "Landing Pages", "Sistemas Web", "Automações", "Campanhas"];

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#fbfaf7]">
      <div className="hero-grid-light absolute inset-0" />

      <div className="relative mx-auto max-w-5xl px-5 pb-0 pt-20 text-center md:px-8 md:pt-28">
        {/* Rotating word + blinking cursor */}
        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="font-display text-2xl font-bold text-[#d99055] sm:text-3xl">
            <RotatingWord words={words} />
          </span>
          <span className="cursor-blink" />
        </div>

        <h1 className="text-balance font-display text-5xl font-black leading-[1.05] text-[#071c46] sm:text-6xl lg:text-[5.5rem]">
          Presença digital que{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient">realmente converte.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-[#071c46]/58">
          Landing pages, campanhas, automações e sistemas web para empresas que querem crescer com
          estratégia e tecnologia.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light-primary"
          >
            QUERO MEU PROJETO
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a href="#cases" className="btn-light-outline">
            VER PORTFÓLIO
          </a>
        </div>

        {/* Three pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <div className="hero-pill">
            <Target className="h-4 w-4 text-[#d99055]" />
            <span>Estratégia Personalizada</span>
          </div>
          <div className="hero-pill">
            <Clock className="h-4 w-4 text-[#d99055]" />
            <span>Entregas Pontuais</span>
          </div>
          <div className="hero-pill">
            <Shield className="h-4 w-4 text-[#d99055]" />
            <span>Atendimento Direto</span>
          </div>
        </div>

        {/* Mockup image peeking at bottom */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-t-3xl border border-b-0 border-[#071c46]/10 shadow-[0_-8px_60px_rgba(7,28,70,0.1)]">
            <img src={techAiCreation} alt="IAra — projetos digitais" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BigMarquee() {
  const items = [
    "Landing Pages",
    "Meta Ads",
    "Automações",
    "Sistemas Web",
    "IA Aplicada",
    "Funis de Venda",
  ];

  return (
    <section className="overflow-hidden border-y border-[#071c46]/8 bg-white py-10">
      <div className="marquee mb-2">
        <div className="big-marquee-track">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="big-marquee-item">
              {item}&nbsp;<span className="big-marquee-sep">·</span>&nbsp;
            </span>
          ))}
        </div>
      </div>
      <div className="marquee">
        <div className="big-marquee-track-reverse">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="big-marquee-item big-marquee-item--faded">
              {item}&nbsp;<span className="big-marquee-sep">·</span>&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="solucoes" className="bg-[#fbfaf7] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-14">
          <div className="section-label-dark">Tudo em um só lugar</div>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold text-[#071c46] lg:text-6xl">
            Nossos serviços digitais
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#071c46]/58">
            Soluções completas para estruturar presença, gerar leads e automatizar operações — com
            estratégia, tecnologia e execução próxima.
          </p>
        </div>

        {/* Top: featured dark card + two mini cards */}
        <div className="mb-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="service-featured reveal-left">
            <img src={techAiCreation} alt="" className="service-featured-img" />
            <div className="service-featured-content">
              <span className="inline-block rounded-full border border-[#d99055]/50 bg-[#d99055]/12 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#d99055]">
                Principal
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-white lg:text-4xl">
                Landing Pages e Sites
              </h3>
              <p className="mt-3 text-white/68 leading-relaxed">
                Narrativa, layout e CTA pensados para transformar visitantes em clientes reais.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#d99055] hover:opacity-75 transition-opacity"
              >
                Saiba mais <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="service-mini reveal delay-1">
              <TrendingUp className="h-8 w-8 shrink-0 text-[#d99055]" />
              <div>
                <h4 className="font-display text-xl font-bold text-[#071c46]">
                  Meta Ads e Campanhas
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[#071c46]/58">
                  Estratégias pagas com foco em retorno real e mensurável.
                </p>
              </div>
            </div>
            <div className="service-mini reveal delay-2">
              <Workflow className="h-8 w-8 shrink-0 text-[#d99055]" />
              <div>
                <h4 className="font-display text-xl font-bold text-[#071c46]">
                  Automação de Processos
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[#071c46]/58">
                  Fluxos inteligentes para ganhar tempo e escalar com menos esforço.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: 3 white cards with image + overlay */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              image: portfolioQualiflow,
              title: "Sistemas Web",
              desc: "Aplicações sob medida para operações que cresceram além das planilhas.",
            },
            {
              image: portfolioAdvogado,
              title: "Conteúdo Orgânico",
              desc: "Presença orgânica com estratégia de conteúdo que educa e converte.",
            },
            {
              image: portfolioBallet,
              title: "IA Aplicada",
              desc: "Inteligência artificial para produtividade, atendimento e análise de dados.",
            },
          ].map((s, i) => (
            <div key={s.title} className={`service-grid-card reveal delay-${i + 1}`}>
              <div className="service-grid-img-wrap">
                <img src={s.image} alt={s.title} />
                <div className="service-grid-overlay">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-acessar-btn"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-bold text-[#071c46]">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#071c46]/58">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    ["01", "Diagnóstico", "Entender o negócio, a oferta, o público e o que precisa destravar."],
    ["02", "Estratégia", "Desenhar a jornada, as páginas, os canais e as integrações."],
    ["03", "Execução", "Criar layout, código, campanhas e automações com acabamento."],
    ["04", "Evolução", "Medir, ajustar e adicionar novas peças conforme o projeto cresce."],
  ];

  return (
    <section id="metodo" className="bg-[#071c46] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-14 max-w-3xl">
          <div className="section-label">Método IAra</div>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-tight lg:text-6xl">
            Do briefing ao crescimento, passo a passo.
          </h2>
        </div>
        <div className="grid gap-px bg-white/10 md:grid-cols-4">
          {steps.map(([num, title, desc], index) => (
            <div
              key={title}
              className={`reveal delay-${index + 1} flex flex-col gap-6 bg-[#071c46] p-8 hover:bg-[#0b3471] transition-colors duration-300`}
            >
              <span className="font-display text-6xl font-black text-[#d99055]/30">{num}</span>
              <h3 className="font-display text-2xl font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-white/58">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      tags: ["Sistema Web", "IA"],
      title: "Qualiflow",
      desc: "Produto próprio para qualificação, organização de dados e apoio a fluxos internos.",
      image: portfolioQualiflow,
    },
    {
      tags: ["Landing Page", "Meta Ads"],
      title: "Adriano Oliveira Farias",
      desc: "Página para atuação previdenciária, campanha Meta Ads e materiais de conteúdo.",
      image: portfolioAdvogado,
    },
    {
      tags: ["Site Institucional", "Identidade Visual"],
      title: "Thais Fima Ballet",
      desc: "Página institucional e captação para escola de ballet com direção visual delicada.",
      image: portfolioBallet,
    },
  ];

  return (
    <section id="cases" className="bg-[#060f1e] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal">
            <div className="section-label">Portfólio</div>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-tight lg:text-6xl">
              Cases reais com resultado.
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0"
          >
            Iniciar projeto <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={p.title} className={`portfolio-overlay-card reveal delay-${i + 1}`}>
              <div className="portfolio-overlay-img-wrap">
                <img src={p.image} alt={p.title} className="portfolio-overlay-img" />
                <div className="portfolio-overlay-layer">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-acessar-btn"
                  >
                    ACESSAR
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="portfolio-tag-pill">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/52">{p.desc}</p>
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
      role: "Empreendedora · SP",
      text: "A IAra transformou completamente minha presença online. A landing page gerou resultados em menos de uma semana. Profissionalismo e atenção aos detalhes em cada etapa.",
      stars: 5,
    },
    {
      name: "Ricardo Fonseca",
      role: "Diretor Comercial · Startup",
      text: "Contratamos para automação de processos e o impacto foi imediato. Reduzimos 60% do trabalho manual e a equipe focou no que realmente importa.",
      stars: 5,
    },
    {
      name: "Ana Beatriz Lima",
      role: "Personal Trainer · RJ",
      text: "Minha campanha de Meta Ads nunca tinha trazido tanto retorno. Com a estratégia da IAra, dobramos as consultas em dois meses. Recomendo muito!",
      stars: 5,
    },
  ];

  return (
    <section className="bg-[#071c46] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-14 text-center">
          <div className="section-label">Depoimentos</div>
          <h2 className="mt-5 font-display text-4xl font-bold lg:text-6xl">
            O que dizem sobre a IAra
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <article key={r.name} className={`testimonial-card reveal delay-${i + 1}`}>
              <div className="flex gap-1">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-[#d99055] text-[#d99055]" />
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-white/80">"{r.text}"</p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d99055]/20 text-sm font-black text-[#d99055]">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-white/45">{r.role}</div>
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
              alt="Iara Pereira, fundadora"
              className="aspect-square w-full rounded-[1.25rem] object-cover object-center"
            />
          </div>
        </div>
        <div className="reveal-right">
          <div className="section-label-dark">Quem somos</div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-[#071c46] lg:text-5xl">
            Tecnologia com estratégia e execução próxima.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#071c46]/62">
            Eu sou Iara Pereira, fundadora da IAra Soluções Digitais. Uno programação, marketing e
            comunicação para criar soluções bonitas, úteis e mensuráveis — do primeiro contato ao
            resultado real.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#d99055]/40 bg-[#d99055]/8 px-4 py-2 text-sm font-semibold text-[#d99055]"
              >
                {s}
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
      a: "Landing pages são entregues em 7 a 14 dias úteis após aprovação do briefing e dos materiais. Projetos maiores têm prazos acordados na proposta.",
    },
    {
      q: "Com que tipo de empresa vocês trabalham?",
      a: "Pequenas e médias empresas, profissionais liberais e startups que querem estruturar ou escalar a presença digital com estratégia.",
    },
    {
      q: "É possível contratar mais de um serviço ao mesmo tempo?",
      a: "Sim! Combinações como landing page + campanha ou sistema + automação potencializam os resultados. Montamos pacotes sob medida.",
    },
    {
      q: "Como acompanho os resultados do projeto?",
      a: "Entregamos relatórios periódicos com os principais indicadores. Para campanhas, os dados ficam disponíveis em tempo real.",
    },
    {
      q: "Vocês atendem clientes de qualquer estado do Brasil?",
      a: "Sim! Atendemos 100% de forma remota, com reuniões por videoconferência e comunicação ágil pelo WhatsApp.",
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
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? " faq-open" : ""}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="faq-question">
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#d99055] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
        <div className="reveal mt-16 rounded-3xl bg-[#071c46] p-8 text-center lg:p-12">
          <h3 className="font-display text-2xl font-bold text-white lg:text-3xl">
            Ainda tem dúvidas? Fale direto com a Iara.
          </h3>
          <p className="mt-3 text-white/55">Resposta rápida e sem enrolação.</p>
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

function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-[#071c46] py-20 text-white">
      <div className="absolute -bottom-24 right-[-3rem] hidden text-[22rem] font-black leading-none text-[#d99055]/8 lg:block">
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
          {[
            { title: "Soluções", items: ["Landing Pages", "Meta Ads", "Automações", "Sistemas web"] },
            { title: "Empresa", items: ["Quem Somos", "Portfólio", "Método IAra", "FAQ"] },
            { title: "Contato", items: ["WhatsApp", "Instagram", "Newsletter", "Email"] },
          ].map(({ title, items }) => (
            <div key={title}>
              <h3 className="font-bold text-[#d99055]">{title}</h3>
              <ul className="mt-5 space-y-3 text-white/72">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-sm text-white/38">
          © {new Date().getFullYear()} IAra Soluções Digitais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
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
        <BigMarquee />
        <Services />
        <Method />
        <Portfolio />
        <Testimonials />
        <About />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
