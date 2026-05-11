import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import logoIara from "@/assets/iara-logo-tech-transparente.png";
import headerLogoIara from "@/assets/iara-header-logo-wide.webp";
import iaraOfficeHq from "@/assets/iara-office-hq.png";
import logoAdriano from "@/assets/logo-adriano-farias-cropped.png";
import qualiflowLoginPage from "@/assets/qualiflow-login-page.png";
import thaisFimaArte from "@/assets/thais-fima-arte.jpeg";
import globeRotation from "@/assets/golden-tech-globe.mp4";
import footerNeuralLogoBg from "@/assets/footer-neural-logo-bg.mp4";
import phoneAiAvatar from "@/assets/phone-ai-avatar.png";
import phoneGoldenBrain from "@/assets/phone-golden-brain.mp4";
import phoneIaraWorkflow from "@/assets/phone-iara-workflow.png";
import techWorkspace from "@/assets/tech-workspace-iara.png";
import techDashboard from "@/assets/tech-dashboard-iara.png";

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
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentWord = words[index] ?? "";

  useEffect(() => {
    const isWordComplete = !isDeleting && text === currentWord;
    const isWordDeleted = isDeleting && text === "";
    const delay = isWordComplete ? 1300 : isWordDeleted ? 280 : isDeleting ? 45 : 85;

    const timeout = window.setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isWordDeleted) {
        setIsDeleting(false);
        setIndex((current) => (current + 1) % words.length);
        return;
      }

      setText((current) =>
        isDeleting
          ? currentWord.slice(0, Math.max(0, current.length - 1))
          : currentWord.slice(0, current.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [currentWord, index, isDeleting, text, words.length]);

  return (
    <span className="rotating-word">
      {text}
      <span className="typing-caret" />
    </span>
  );
}

function Globe() {
  return (
    <div className="globe-container">
      <video
        className="globe-video"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Mundo digital girando"
      >
        <source src={globeRotation} type="video/mp4" />
      </video>
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

function HeaderLogo() {
  return <img src={headerLogoIara} alt="IAra Soluções Digitais" className="header-logo" />;
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
        <HeaderLogo />
      </a>
      <nav className="desktop-nav">
        {links.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram"
        >
          <Instagram size={19} />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="WhatsApp"
        >
          <MessageCircle size={19} />
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="header-cta">
          Falar com a IAra
        </a>
        <button type="button" onClick={() => setOpen((v) => !v)} className="menu-button">
          {open ? <X size={22} /> : <Menu size={22} />}
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
        <div className="hero-proof">
          <span>Design</span>
          <span>Automação</span>
          <span>IA aplicada</span>
          <span>Performance</span>
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
  const sep = " ~ ";
  const makeText = (items: string[]) => Array.from({ length: 3 }, () => items.join(sep)).join(sep);

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      title: "Landing pages e sites",
      desc: "Páginas rápidas, responsivas e pensadas para transformar visita em conversa.",
    },
    {
      title: "Automações e IA",
      desc: "Fluxos para reduzir tarefas repetitivas, organizar dados e acelerar atendimento.",
    },
    {
      title: "Campanhas digitais",
      desc: "Estrutura de tráfego, funil e leitura de indicadores para melhorar decisões.",
    },
    {
      title: "Sistemas web",
      desc: "Ferramentas internas, painéis e experiências digitais sob medida para sua operação.",
    },
    {
      title: "Presença orgânica",
      desc: "Conteúdo, SEO básico e organização de marca para sua empresa ser encontrada.",
    },
    {
      title: "Interfaces e protótipos",
      desc: "Telas, jornadas e protótipos navegáveis antes de partir para o desenvolvimento.",
    },
  ];
  const scroll = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section id="solucoes" className="section services-section">
      <div className="section-heading section-heading--row reveal">
        <div>
          <span className="eyebrow-label">Soluções digitais</span>
          <h2>Serviços enxutos, completos e fáceis de entender.</h2>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={() => scroll("left")} aria-label="Voltar soluções">
            <ChevronLeft size={22} />
          </button>
          <button type="button" onClick={() => scroll("right")} aria-label="Avançar soluções">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
      <div className="service-carousel" ref={carouselRef}>
        {services.map((s, i) => (
          <article key={s.title} className={`service-card reveal delay-${(i % 3) + 1}`}>
            <span className="service-index">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-cta">
              Ver detalhes <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const projects = [
    {
      img: qualiflowLoginPage,
      title: "QualiFlow",
      desc: "Sistema de gestão integrada de obras para rotina operacional.",
      tags: ["Sistema web", "Dashboard"],
      brandClass: "brand-logo--qualiflow-login",
    },
    {
      img: logoAdriano,
      title: "Adriano Farias",
      desc: "Identidade digital e landing page para atuação jurídica.",
      tags: ["Landing page", "Marca"],
      brandClass: "brand-logo--adriano",
    },
    {
      img: thaisFimaArte,
      title: "Thais Fima",
      desc: "Presença digital para estúdio de dança.",
      tags: ["Site", "Portfolio"],
      brandClass: "brand-logo--thais-fima",
    },
    {
      img: techDashboard,
      title: "IAra Tech",
      desc: "Visual de tecnologia e automação alinhado à marca IAra.",
      tags: ["IA", "Automação"],
      isPhoto: true,
    },
  ];
  const scroll = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-heading section-heading--row reveal">
        <div>
          <span className="eyebrow-label">Portfólio</span>
          <h2>Projetos digitais com acabamento visual e clareza comercial.</h2>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={() => scroll("left")} aria-label="Voltar portfólio">
            <ChevronLeft size={22} />
          </button>
          <button type="button" onClick={() => scroll("right")} aria-label="Avançar portfólio">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
      <div className="portfolio-carousel" ref={carouselRef}>
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`portfolio-card reveal delay-${(i % 3) + 1}`}
          >
            <div className="portfolio-img">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className={`${p.isPhoto ? "is-photo" : "is-brand"} ${p.brandClass ?? ""}`}
              />
            </div>
            <div className="portfolio-overlay">
              <span className="portfolio-access">ACESSAR</span>
            </div>
            <div className="portfolio-info">
              <strong>{p.title}</strong>
              <p>{p.desc}</p>
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
        <img src={iaraOfficeHq} alt="Iara Pereira, fundadora da IAra Soluções Digitais" loading="lazy" />
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

function BrandTech() {
  return (
    <section className="section brand-tech-section">
      <div className="brand-tech-copy reveal-left">
        <span className="eyebrow-label">Tecnologia com identidade</span>
        <h2>Visual moderno, presença profissional e sistemas com cara de negócio sério.</h2>
        <p>
          A comunicação da IAra mistura estratégia, design e tecnologia: telas, automações e
          materiais digitais precisam parecer tão confiáveis quanto funcionam.
        </p>
      </div>
      <div className="brand-tech-media reveal-right">
        <img
          className="brand-tech-photo"
          src={techWorkspace}
          alt="Ambiente realista de tecnologia alinhado à marca IAra"
          loading="lazy"
        />
        <div className="brand-tech-logo">
          <Logo />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({
  img,
  alt,
  className = "",
  isVideo = false,
}: {
  img: string;
  alt: string;
  className?: string;
  isVideo?: boolean;
}) {
  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          {isVideo ? (
            <video autoPlay loop muted playsInline preload="none" aria-label={alt}>
              <source src={img} type="video/mp4" />
            </video>
          ) : (
            <img src={img} alt={alt} loading="lazy" />
          )}
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
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="primary-button">
          Começar agora
        </a>
      </div>
      <div className="why-phones reveal-right">
        <PhoneMockup
          img={phoneAiAvatar}
          alt="Avatar de inteligência artificial"
          className="phone-1"
        />
        <PhoneMockup
          img={phoneGoldenBrain}
          alt="Tecnologia com inteligência artificial"
          className="phone-2"
          isVideo
        />
        <PhoneMockup
          img={phoneIaraWorkflow}
          alt="Iara trabalhando com automações"
          className="phone-3"
        />
      </div>
    </section>
  );
}

function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico direto",
      text: "Entendo objetivo, público e prioridade antes de desenhar qualquer tela.",
    },
    {
      number: "02",
      title: "Direção visual",
      text: "A identidade do projeto aparece em layout, conteúdo e experiência mobile.",
    },
    {
      number: "03",
      title: "Entrega acompanhada",
      text: "Publicação, ajustes finais e orientação para você usar o material com segurança.",
    },
  ];

  return (
    <section className="section process-section">
      <div className="section-heading reveal">
        <span className="eyebrow-label">Como eu trabalho</span>
        <h2>Processo simples, visual profissional e entrega acompanhada.</h2>
      </div>
      <div className="process-grid">
        {steps.map((step) => (
          <div className="process-card reveal-up" key={step.number}>
            <span className="process-number">{step.number}</span>
            <div>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
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
      <div className="faq-card reveal">
        <div className="faq-card-aside">
          <span className="eyebrow-label">FAQ</span>
          <h2>Perguntas frequentes.</h2>
          <p>Tire as dúvidas principais antes de chamar no WhatsApp.</p>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`faq-item delay-${(i % 3) + 1} ${open === i ? "is-open" : ""}`}>
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
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="footer">
      <video className="footer-bg-video" autoPlay loop muted playsInline preload="none" aria-hidden="true">
        <source src={footerNeuralLogoBg} type="video/mp4" />
      </video>
      <div className="footer-bg-overlay" />
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <span className="eyebrow-label">Contato</span>
          <h2>Ficou com alguma dúvida?</h2>
          <p>Conte rapidamente o que você precisa e eu retorno pelo WhatsApp.</p>
          <div className="footer-socials">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon footer-social-icon"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon footer-social-icon"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        <form
          className="footer-form"
          onSubmit={(event) => {
            event.preventDefault();
            window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
          }}
        >
          <label>
            <span>Nome</span>
            <input type="text" name="name" placeholder="Seu nome" />
          </label>
          <label>
            <span>WhatsApp</span>
            <input type="tel" name="phone" placeholder="Seu número" />
          </label>
          <label>
            <span>E-mail</span>
            <input type="email" name="email" placeholder="Seu email" />
          </label>
          <label className="footer-form-message">
            <span>Mensagem</span>
            <textarea name="message" placeholder="Mensagem opcional" rows={5} />
          </label>
          <button type="submit" className="primary-button">
            Enviar
          </button>
        </form>
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
        <BrandTech />
        <About />
        <WorkProcess />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
