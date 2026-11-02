import type { ReactNode } from 'react';
import { MobileNavigation } from '@/components/mobile-navigation';

const projects = [
  {
    name: 'Dahab Zaman',
    label: 'FINTECH · EGYPT',
    icon: 'imgDahabZamanOfficialAppIcon.png',
    summary:
      'Real-time prices, Market Watch, interactive charts, and secure eKYC with Valify.',
    website: 'https://dahabzaman.eg/',
    app: 'https://apps.apple.com/eg/app/dahab-zaman/id6768819171',
  },
  {
    name: 'Skyloov',
    label: 'REAL ESTATE · UAE',
    icon: 'imgSkyloovOfficialAppIcon.png',
    summary:
      'Property search, 360° SDK integration, real-time chat, and AI-assisted discovery.',
    website: 'https://www.skyloov.com/',
    app: 'https://apps.apple.com/na/app/skyloov/id1499596800',
  },
  {
    name: 'Ryalto',
    label: 'HEALTHCARE · UK',
    icon: 'imgRyaltoOfficialAppIcon.png',
    summary:
      'Messaging, voice and video calls, activity feeds, and shift discovery for healthcare teams.',
    website: 'https://www.ryaltogroup.com/',
    app: 'https://apps.apple.com/us/app/ryalto/id1144521219',
  },
  {
    name: 'Fashion Frame AI',
    label: 'AI · FASHION',
    icon: 'imgFashionFrameAiOfficialAppIcon.png',
    summary:
      'AI-powered digital wardrobe, personal styling, virtual try-on, and outfit planning.',
    website: 'https://fashionframe.ai/',
    app: 'https://apps.apple.com/us/app/fashion-frame-ai/id6783524393',
  },
];

function ExternalLink({
  href,
  children,
  className,
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
    </a>
  );
}

function AppIcon({
  project,
  size,
}: {
  project: (typeof projects)[number];
  size: number;
}) {
  return (
    <img
      src={`./figma/${project.icon}`}
      width={size}
      height={size}
      alt=""
      className="app-icon"
    />
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <ExternalLink
        href={project.app}
        label={`${project.name} on the App Store`}
        className="project-icon"
      >
        <AppIcon project={project} size={48} />
      </ExternalLink>
      <p className="eyebrow">{project.label}</p>
      <h3>{project.name}</h3>
      <p className="project-summary">{project.summary}</p>
      <div className="project-links">
        <ExternalLink
          href={project.app}
          label={`View ${project.name} on App Store`}
        >
          View on App Store ↗
        </ExternalLink>
        <ExternalLink
          href={project.website}
          label={`Visit ${project.name} website`}
        >
          Visit website ↗
        </ExternalLink>
      </div>
    </article>
  );
}

function PhoneShowcase() {
  return (
    <section className="showcase" aria-label="Selected mobile applications">
      <span className="mobile-lettering" aria-hidden="true">
        MOBILE
      </span>
      <div className="phone">
        <div className="phone-screen">
          <div className="status-bar" aria-hidden="true">
            <span>9:41</span>
            <span className="dynamic-island" />
            <div className="status-levels">
              <img src="./figma/imgCellularConnection.svg" alt="" />
              <img src="./figma/imgWifi.svg" alt="" />
              <img src="./figma/imgBattery.svg" alt="" />
            </div>
          </div>
          <div className="phone-content">
            <p className="eyebrow">AHMED MAGDY</p>
            <h2>
              Apps I helped
              <br />
              build.
            </h2>
            <p className="phone-caption">Production work. Real experiences.</p>
            <div className="app-grid">
              {projects.map((project) => (
                <ExternalLink
                  key={project.name}
                  href={project.app}
                  label={`Explore ${project.name} on the App Store`}
                  className="launcher-app"
                >
                  <AppIcon project={project} size={64} />
                  <span>
                    {project.name === 'Fashion Frame AI'
                      ? 'Fashion Frame'
                      : project.name}
                  </span>
                </ExternalLink>
              ))}
            </div>
            <div className="experience-widget">
              <p>7+ years</p>
              <span>
                From idea to App Store.
                <br />
                iOS &amp; Android engineering.
              </span>
            </div>
            <p className="phone-hint">Tap an app to explore ↗</p>
          </div>
          <span className="home-indicator" aria-hidden="true" />
        </div>
      </div>
      <aside className="floating-panel experience-panel">
        <h3>EXPERIENCE</h3>
        <p>
          7+ years building apps.
          <br />2 years leading mobile teams.
        </p>
      </aside>
      <aside className="floating-panel engineering-panel">
        <h3>ENGINEERING</h3>
        <p>
          Clean architecture.
          <br />
          Native integrations.
          <br />
          Production delivery.
        </p>
      </aside>
      <p className="showcase-caption">SELECTED APPS · IOS &amp; ANDROID</p>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="continuous-gradient">
        <header className="site-header inset">
          <a
            className="identity"
            href="#about"
            aria-label="Ahmed Magdy — introduction"
          >
            <span>AM /</span>
            <small>MOBILE ENGINEER</small>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <ExternalLink href="https://github.com/megzaaat">
              GitHub ↗
            </ExternalLink>
            <a href="#contact" className="talk-link">
              Let’s talk
            </a>
          </nav>
          <MobileNavigation />
        </header>
        <main id="main">
          <section
            id="about"
            className="introduction inset"
            aria-label="About Ahmed Magdy"
          >
            <div className="portrait">
              <img
                src="./figma/imgAhmedMagdyPortrait.png"
                alt="Ahmed Magdy"
                width={138}
                height={166}
                fetchPriority="high"
              />
            </div>
            <p className="profile-name">Ahmed Magdy</p>
            <p className="profile-title">Mobile Engineer</p>
            <p className="intro-copy">
              I build mobile experiences
              <span className="desktop-inline"> that feel effortless.</span>
              <span className="mobile-inline"> that feel effortless.</span>
              <br className="desktop-inline" />
              <span className="desktop-inline">
                Thoughtful interfaces. Clean architecture.
                <br />
                Reliable delivery, from idea to App Store.
              </span>
            </p>
          </section>
          <section className="hero inset" aria-labelledby="headline">
            <h1 id="headline">
              MOBILE APPS.
              <br />
              BUILT WITH
              <br />
              PURPOSE.
            </h1>
            <div className="positioning">
              <p>
                From real estate to fintech, I turn complex requirements into
                polished iOS and Android experiences.
              </p>
              <p className="eyebrow">
                7+ YEARS&nbsp; / &nbsp;2 YEARS LEADING TEAMS
              </p>
            </div>
          </section>
          <PhoneShowcase />
        </main>
      </div>
      <section id="work" className="work inset" aria-labelledby="work-title">
        <div className="work-heading">
          <h2 id="work-title" className="eyebrow">
            01 / SELECTED WORK
          </h2>
          <p>Real products. Real responsibility.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <footer id="contact" className="contact inset">
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <h2>
          Let’s build something
          <br />
          people love to use.
        </h2>
        <div className="contact-links">
          <a className="email" href="mailto:ahmedmagdyasker@gmail.com">
            ahmedmagdyasker@gmail.com
          </a>
          <ExternalLink href="https://linkedin.com/in/megzaaat/">
            LinkedIn ↗
          </ExternalLink>
          <ExternalLink href="https://github.com/megzaaat">
            GitHub ↗
          </ExternalLink>
        </div>
        <div className="phone-links">
          <a href="tel:+201022737604">
            Egypt · <span>+20 102 273 7604</span>
          </a>
          <a href="tel:+966565919468">
            Saudi Arabia · <span>+966 56 591 9468</span>
          </a>
        </div>
        <p className="eyebrow copyright">
          © 2026 AHMED MAGDY / MOBILE ENGINEER
        </p>
      </footer>
    </>
  );
}
