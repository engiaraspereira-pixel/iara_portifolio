import { useEffect, useRef, useState } from "react";
import logoIara from "@/assets/iara-logo-tech-transparente.png";
import visualIara from "@/assets/iara-visual.png";
import workLaptop from "@/assets/work-1.jpg";
import portfolioQualiflow from "@/assets/portfolio-qualiflow.svg";
import portfolioAdvogado from "@/assets/portfolio-advogado.svg";
import portfolioBallet from "@/assets/portfolio-ballet.svg";
import techAi from "@/assets/tech-ai-creation.svg";

const WHATSAPP_URL =
  "https://wa.me/5511978856858?text=Ol%C3%A1%2C%20Iara.%20Quero%20conversar%20sobre%20um%20projeto%20digital.";

const INSTAGRAM_URL =
  "https://www.instagram.com/iara.solucoesdigitais?igsh=MXZ1dHM0ZTVqYnM1Mg%3D%3D&utm_source=qr";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-up",
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
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
      const timeout = window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setVisible(true);
      }, 340);
      return () => window.clearTimeout(timeout);
    }, 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return <span className={`rotating-word ${visible ? "is-visible" : ""}`}>{words[index]}</span>;
}

function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rAF: number;
    let targetRX = 0, targetRY = 0;
    let currentRX = 0, currentRY = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      targetRX = -((e.clientY - rect.top - cy) / cy) * 24;
      targetRY = ((e.clientX - rect.left - cx) / cx) * 24;
    };
    const onEnter = () => { hovering = true; };
    const onLeave = () => { hovering = false; targetRX = 0; targetRY = 0; };

    const tick = () => {
      const ease = hovering ? 0.10 : 0.04;
      currentRX += (targetRX - currentRX) * ease;
      currentRY += (targetRY - currentRY) * ease;
      el.style.transform = `perspective(900px) rotateX(${currentRX}deg) rotateY(${currentRY}deg)`;
      rAF = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    rAF = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rAF);
    };
  }, []);

  const latLines = [
    { cy: 60, rx: 122, ry: 22 },
    { cy: 108, rx: 163, ry: 30 },
    { cy: 155, rx: 183, ry: 33 },
    { cy: 200, rx: 188, ry: 36 },
    { cy: 245, rx: 183, ry: 33 },
    { cy: 292, rx: 163, ry: 30 },
    { cy: 340, rx: 122, ry: 22 },
  ];

  const lonCxValues = Array.from({ length: 26 }, (_, i) => -200 + i * 40);

  return (
    <div className="globe-container" ref={containerRef}>
      <svg viewBox="0 0 400 400" className="globe-svg" aria-hidden="true">
        <defs>
          <clipPath id="globe-clip">
            <circle cx="200" cy="200" r="188" />
          </clipPath>
          <radialGradient id="globe-bg" cx="36%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#1e5aa8" />
            <stop offset="45%" stopColor="#0b3471" />
            <stop offset="100%" stopColor="#071c46" />
          </radialGradient>
          <radialGradient id="globe-shine" cx="28%" cy="24%" r="46%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <filter id="globe-glow-filter">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="200" cy="200" r="188" fill="url(#globe-bg)" />

        <g clipPath="url(#globe-clip)">
          {latLines.map((l, i) => (
            <ellipse
              key={`lat-${i}`}
              cx="200"
              cy={l.cy}
              rx={l.rx}
              ry={l.ry}
              fill="none"
              stroke="rgba(217,144,85,0.30)"
              strokeWidth="0.9"
            />
          ))}

          <g className="globe-lons">
            {lonCxValues.map((cx, i) => (
              <ellipse
                key={`lon-${i}`}
                cx={cx}
                cy="200"
                rx="26"
                ry="188"
                fill="none"
                stroke="rgba(217,144,85,0.26)"
                strokeWidth="0.9"
              />
            ))}
          </g>
        </g>

        <circle cx="200" cy="200" r="188" fill="url(#globe-shine)" />
        <circle
          cx="200"
          cy="200"
          r="188"
          fill="none"
          stroke="rgba(217,144,85,0.6)"
          strokeWidth="1.5"
        />

        <g filter="url(#globe-glow-filter)">
          <circle cx="200" cy="200" r="6" fill="#d99055" opacity="0.95" />
          <circle cx="272" cy="154" r="5" fill="#d99055" opacity="0.82" />
          <circle cx="138" cy="246" r="4" fill="#d99055" opacity="0.72" />
          <circle cx="244" cy="284" r="4" fill="#d99055" opacity="0.62" />
          <circle cx="158" cy="136" r="3.5" fill="#d99055" opacity="0.52" />
          <circle cx="310" cy="218" r="3" fill="#d99055" opacity="0.42" />
          <line
            x1="200"
            y1="200"
            x2="272"
            y2="154"
            stroke="rgba(217,144,85,0.45)"
            strokeWidth="1.2"
          />
          <line
            x1="200"
            y1="200"
            x2="138"
            y2="246"
            stroke="rgba(217,144,85,0.38)"
            strokeWidth="1"
          />
          <line
            x1="272"
            y1="154"
            x2="244"
            y2="284"
            stroke="rgba(217,144,85,0.28)"
            strokeWidth="1"
          />
          <line
            x1="158"
            y1="136"
            x2="310"
            y2="218"
            stroke="rgba(217,144,85,0.22)"
            strokeWidth="0.8"
          />
        </g>
      </svg>
      <div className="globe-glow" />
      <div className="globe-orbit" />
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M16.04 3.2A12.74 12.74 0 0 0 5.2 22.63L3.68 28.8l6.33-1.48A12.74 12.74 0 1 0 16.04 3.2Zm0 2.28a10.46 10.46 0 0 1 8.84 16.05 10.45 10.45 0 0 1-13.95 3.62l-.44-.26-3.43.8.82-3.33-.29-.47A10.46 10.46 0 0 1 16.04 5.48Zm-4.13 5.35c-.25 0-.66.1-1 .47-.35.38-1.32 1.28-1.32 3.12s1.35 3.62 1.54 3.87c.19.25 2.6 4.16 6.44 5.67 3.2 1.26 3.85 1.01 4.54.95.69-.06 2.23-.91 2.54-1.79.31-.88.31-1.64.22-1.79-.09-.16-.34-.25-.72-.44-.38-.19-2.23-1.1-2.57-1.23-.35-.13-.6-.19-.85.19-.25.38-.97 1.23-1.19 1.48-.22.25-.44.28-.82.09-.38-.19-1.59-.59-3.03-1.88-1.12-1-1.88-2.23-2.1-2.61-.22-.38-.02-.58.17-.77.17-.17.38-.44.56-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.85-2.05-1.16-2.8-.3-.72-.61-.62-.85-.63h-.72Z"
      />
    </svg>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return <img src={logoIara} alt="IAra Soluções Digitais" className={`site-logo ${className}`} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#solucoes", "Soluções"],
    ["#portfolio", "Portfólio"],
    ["#sobre", "Sobre"],
    ["#contato", "Contato"],
  ];

  return (
    <header className={`main-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#inicio" className="brand-link" aria-label="IAra Soluções Digitais">
        <Logo />
      </a>
      <nav className="desktop-nav">
        {links.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-pill">
          IG
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="header-cta">
          Falar com a IAra
        </a>
        <button type="button" onClick={() => setOpen((v) => !v)} className="menu-button">
          {open ? "✕" : "≡"}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content reveal-left">
        <div className="eyebrow">
          <RotatingWord words={["Sites", "Automações", "IA aplicada", "Campanhas"]} />
          <span className="typing-caret" />
        </div>
        <h1>
          Tecnologia, inteligência e presença digital com <em>resultado.</em>
        </h1>
        <p>
          Landing pages, sistemas web, automações e campanhas para empresas que querem crescer com
          estratégia e execução próxima.
        </p>
        <div className="hero-actions">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Quero meu projeto
          </a>
          <a href="#portfolio" className="ghost-button">
            Ver portfólio
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>+30</strong>
            <span>projetos entregues</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>100%</strong>
            <span>cliente direto</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>3×</strong>
            <span>mais conversão</span>
          </div>
        </div>
      </div>
      <div className="hero-globe reveal-right">
        <Globe />
      </div>
    </section>
  );
}

function Marquee() {
  const row1 = [
    "Sites",
    "Automações",
    "IA aplicada",
    "Campanhas",
    "Landing pages",
    "Sistemas web",
    "Meta Ads",
    "Funis",
  ];
  const row2 = [
    "React",
    "Estratégia",
    "Resultados",
    "Conversão",
    "UX Design",
    "Performance",
    "Dados",
    "Execução",
  ];
  const sep = " ⌁ ";
  const makeText = (items: string[]) =>
    Array.from({ length: 8 }, () => items.join(sep)).join(sep);

  return (
    <div className="marquee-section">
      <div className="marquee-row">
        <div className="marquee-track marquee-track--left">
          <span>{makeText(row1)}</span>
          <span aria-hidden="true">{makeText(row1)}</span>
        </div>
      </div>
      <div className="marquee-row marquee-row--alt">
        <div className="marquee-track marquee-track--right">
          <span>{makeText(row2)}</span>
          <span aria-hidden="true">{makeText(row2)}</span>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      n: "01",
      title: "Landing pages e sites",
      desc: "Páginas bonitas, rápidas e construídas para converter visitantes em contatos e vendas.",
    },
    {
      n: "02",
      title: "Automações e IA",
      desc: "Fluxos inteligentes para reduzir trabalho manual, organizar a operação e escalar resultados.",
      featured: true,
    },
    {
      n: "03",
      title: "Campanhas digitais",
      desc: "Meta Ads, funis e conteúdo com leitura de dados e foco em retorno sobre investimento.",
    },
  ];

  return (
    <section id="solucoes" className="section services-section">
      <div className="section-heading reveal">
        <span className="eyebrow-label">Soluções digitais</span>
        <h2>O essencial para estruturar presença, captação e operação.</h2>
      </div>
      <div className="service-grid">
        {services.map((s, i) => (
          <article
            key={s.n}
            className={`service-card reveal delay-${i + 1} ${s.featured ? "service-card--featured" : ""}`}
          >
            <span className="card-number">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-cta"
            >
              Saiba mais →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      img: portfolioQualiflow,
      title: "Qualiflow",
      tags: ["Sistema web", "IA"],
    },
    {
      img: portfolioAdvogado,
      title: "Escritório Jurídico",
      tags: ["Landing page", "Web design"],
    },
    {
      img: portfolioBallet,
      title: "Academia de Ballet",
      tags: ["Site", "Identidade visual"],
    },
    {
      img: workLaptop,
      title: "Campanha Digital",
      tags: ["Meta Ads", "Funil"],
      isPhoto: true,
    },
  ];

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-heading reveal">
        <span className="eyebrow-label">Portfólio</span>
        <h2>Projetos digitais com acabamento visual e clareza comercial.</h2>
      </div>
      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`portfolio-card reveal delay-${(i % 3) + 1}`}
          >
            <div className="portfolio-img">
              <img src={p.img} alt={p.title} className={p.isPhoto ? "is-photo" : ""} />
            </div>
            <div className="portfolio-overlay">
              <span className="portfolio-access">ACESSAR</span>
            </div>
            <div className="portfolio-info">
              <strong>{p.title}</strong>
              <div className="portfolio-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section about-section">
      <div className="about-photo reveal-left">
        <img src={visualIara} alt="Iara Pereira, fundadora da IAra Soluções Digitais" />
        <div className="about-badge">Fundadora · Iara Pereira</div>
      </div>
      <div className="about-copy reveal-right">
        <span className="eyebrow-label">Quem está por trás</span>
        <h2>Execução próxima, técnica e com olhar de negócio.</h2>
        <p>
          Eu sou Iara Pereira, fundadora da IAra Soluções Digitais. Uno programação, marketing e
          comunicação para criar soluções digitais bonitas, úteis e mensuráveis.
        </p>
        <p>
          Cada projeto tem acompanhamento direto, sem intermediários e com entrega de ponta a ponta.
        </p>
        <div className="skill-list">
          {["React", "Sistemas web", "IA", "Meta Ads", "Automação", "Estratégia"].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
          style={{ marginTop: "32px", display: "inline-flex" }}
        >
          Conversar sobre meu projeto
        </a>
      </div>
    </section>
  );
}

function PhoneMockup({ img, alt, className = "" }: { img: string; alt: string; className?: string }) {
  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <img src={img} alt={alt} />
        </div>
      </div>
      <div className="phone-shadow" />
    </div>
  );
}

function WhyChoose() {
  const items = [
    "Atendimento direto, sem intermediários",
    "Sites que convertem, não apenas impressionam",
    "Automações que liberam o seu tempo",
    "Campanhas com foco em retorno real",
  ];
  return (
    <section className="section why-section">
      <div className="why-copy reveal-left">
        <span className="eyebrow-label">Por que me escolher</span>
        <h2>Tecnologia, estratégia e execução no mesmo lugar.</h2>
        <ul className="why-list">
          {items.map((item) => (
            <li key={item}>
              <span className="why-dot" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Começar agora
        </a>
      </div>
      <div className="why-phones reveal-right">
        <PhoneMockup img={portfolioQualiflow} alt="Sistema Qualiflow" className="phone-1" />
        <PhoneMockup img={techAi} alt="IA aplicada" className="phone-2" />
        <PhoneMockup img={portfolioBallet} alt="Projeto Ballet" className="phone-3" />
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Ana Carla M.",
    role: "Empresária",
    text: "A IAra entregou meu site em tempo recorde e com qualidade acima do esperado. Estou recebendo muito mais contatos.",
  },
  {
    name: "Ricardo S.",
    role: "Advogado",
    text: "Profissionalismo e atenção ao detalhe. A landing page para meu escritório ficou incrível e está convertendo muito bem.",
  },
  {
    name: "Fernanda P.",
    role: "Professora de Ballet",
    text: "Adorei o resultado! O site ficou lindo e os alunos encontram tudo fácilmente. Recomendo muito a IAra.",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="section-heading reveal">
        <span className="eyebrow-label">Depoimentos</span>
        <h2>O que dizem os clientes.</h2>
      </div>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} className={`testimonial-card reveal-up delay-${i + 1}`}>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Quanto tempo leva para entregar um site?",
    a: "Landing pages simples ficam prontas em 5 a 10 dias úteis. Sites mais completos ou sistemas web têm prazo combinado na proposta.",
  },
  {
    q: "Como funciona o processo de criação?",
    a: "Começamos com uma conversa para entender o seu negócio e objetivos. Em seguida, elaboro uma proposta personalizada com escopo, prazo e investimento.",
  },
  {
    q: "Você trabalha com pequenos negócios?",
    a: "Sim. Atendo desde profissionais autônomos até empresas em crescimento. Cada proposta é ajustada ao momento do negócio.",
  },
  {
    q: "O que está incluso no serviço de site?",
    a: "Design, desenvolvimento, publicação, responsividade mobile, otimização de performance e integração com WhatsApp ou formulário.",
  },
  {
    q: "Você faz manutenção após a entrega?",
    a: "Sim. Ofereço pacotes de manutenção mensal ou suporte pontual conforme a necessidade do cliente.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section faq-section">
      <div className="section-heading reveal">
        <span className="eyebrow-label">FAQ</span>
        <h2>Perguntas frequentes.</h2>
      </div>
      <div className="faq-list">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`faq-item reveal delay-${(i % 3) + 1} ${open === i ? "is-open" : ""}`}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className="faq-icon">{open === i ? "−" : "+"}</span>
            </button>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Tecnologia, inteligência e resultados para sua presença digital.</p>
          <div className="footer-socials">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-cta">
          <h3>Pronto para começar?</h3>
          <p>Vamos conversar sobre o seu projeto.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 IAra Soluções Digitais. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <WhatsAppIcon />
    </a>
  );
}

export function Landing() {
  useReveal();

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <WhyChoose />
        <About />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
