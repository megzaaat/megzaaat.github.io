const apps = [
  {
    id: 'gold-era', index: '01', name: 'Gold Era Egypt', label: 'Fintech · Gold & commodities', theme: 'gold', role: 'Senior Flutter Developer', platforms: 'iOS · Android',
    summary: 'A production trading application for monitoring, buying, selling, and settling physical gold and commodities.',
    contribution: 'Real-time prices and Market Watch, interactive charts, trading and portfolio flows, eKYC, push notifications, lifecycle-aware synchronization, plus performance and stability work.',
    facts: ['100K+ Android downloads', 'Live market data', 'Physical settlement'],
    stack: ['Flutter', 'Dart', 'BLoC / Cubit', 'Firebase', 'REST APIs', 'eKYC'],
    images: ['/apps/gold-era/screen-1.webp', '/apps/gold-era/screen-2.webp', '/apps/gold-era/screen-3.webp'],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/qa/app/gold-era-egypt/id6670565909' }, { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.tradepss.golderatrading' }],
  },
  {
    id: 'skyloov', index: '02', name: 'Skyloov Property Portal', label: 'PropTech · UAE real estate', theme: 'blue', role: 'Senior Mobile Developer · Team Lead', platforms: 'iOS · Android',
    summary: 'A UAE property marketplace helping buyers and renters discover verified listings and connect with real-estate professionals.',
    contribution: 'Led mobile delivery across property discovery, real-time chat and tracking, immersive 360° viewing, AI-assisted search, analytics, attribution, architecture, code review, and releases.',
    facts: ['Property discovery', '360° experiences', 'AI-assisted search'],
    stack: ['Flutter', 'Clean Architecture', '360 SDKs', 'AppsFlyer', 'AI APIs', 'Real-time events'],
    images: ['/apps/skyloov/screen-1.webp', '/apps/skyloov/screen-2.webp', '/apps/skyloov/screen-3.webp'],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/fr/app/skyloov-property-portal/id1499596800?l=en' }, { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.skyloov.app.user' }],
  },
  {
    id: 'ryalto', index: '03', name: 'Ryalto', label: 'Workforce · Healthcare', theme: 'teal', role: 'Mobile Application Developer', platforms: 'iOS · Android',
    summary: 'A secure workforce engagement and communications app connecting teams across healthcare and other industries.',
    contribution: 'Built secure messaging, group chat, voice and video calling, organisational feeds, shared calendars, shift experiences, work updates, surveys, and push notification flows.',
    facts: ['10K+ Android downloads', 'Secure communication', 'Video calling'],
    stack: ['Flutter', 'WebRTC', 'Firebase', 'Push notifications', 'REST APIs'],
    images: ['/apps/ryalto/screen-1.png', '/apps/ryalto/screen-2.png', '/apps/ryalto/screen-3.png'],
    links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.ryaltoapp.rightnurse' }, { label: 'Official website', href: 'https://ryalto.app/' }],
  },
];

const experience = [
  { dates: 'Sep 2025 — Present', company: 'Gold Era Egypt', role: 'Senior Flutter Developer', points: ['Own production Flutter features across real-time market data, trading, identity verification, notifications, and app lifecycle.', 'Drive performance, stability, debugging, native integration, and release quality across iOS and Android.'] },
  { dates: 'Feb 2023 — Aug 2025', company: 'Skyloov', role: 'Senior Mobile Application Developer · Team Lead', points: ['Led mobile architecture and delivery for a large-scale property platform, balancing roadmap, quality, and release management.', 'Reviewed code, mentored developers, coordinated sprints, and shipped chat, tracking, 360° experiences, AI features, and analytics integrations.'] },
  { dates: 'Aug 2020 — Jan 2023', company: 'Ryalto', role: 'Mobile Application Developer', points: ['Delivered cross-platform healthcare workforce features with Flutter, Firebase, WebRTC, REST integrations, and notifications.', 'Built real-time communication, calendars, feeds, shift experiences, and maintainable application architecture.'] },
  { dates: 'Jan 2019 — Jul 2020', company: 'Green Code', role: 'Mobile Application Developer', points: ['Shipped tourism and education applications using Flutter, native integrations, authentication, Firebase, payments, and third-party SDKs.', 'Improved maintainability and performance through reusable architecture and disciplined release workflows.'] },
];

const skills = [
  { title: 'Mobile development', featured: true, items: ['Flutter', 'Dart', 'iOS', 'Android', 'Swift', 'Kotlin', 'Java'] },
  { title: 'Architecture & state', items: ['Clean Architecture', 'SOLID', 'BLoC / Cubit', 'Riverpod', 'Provider', 'MVVM'] },
  { title: 'APIs & integrations', items: ['REST', 'GraphQL', 'Firebase', 'Payment gateways', 'Deep linking', 'Third-party SDKs'] },
  { title: 'Real-time & offline', items: ['WebRTC', 'Push notifications', 'Live events', 'App lifecycle', 'Local storage', 'Offline support'] },
  { title: 'Quality & delivery', items: ['Unit testing', 'Code review', 'Performance profiling', 'CI / CD', 'Bitrise', 'Store releases'] },
  { title: 'Leadership', items: ['Team leadership', 'Mentoring', 'Technical decisions', 'Sprint planning', 'Cross-team delivery'] },
];

function Phone({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <figure className={`phone ${className}`}><div className="phone-speaker" /><img src={src} alt={alt} loading="lazy" decoding="async" /></figure>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Ahmed Magdy Asker, home"><span>AM</span><strong>Ahmed Magdy Asker</strong></a>
        <nav aria-label="Primary navigation"><a href="#apps">Applications</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav>
        <a className="nav-cta" href="mailto:ahmedaskerfciscu29@gmail.com">Let&apos;s talk <span>↗</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="availability"><i /> Open to senior mobile opportunities</p>
          <p className="overline">Ahmed Magdy Asker</p>
          <h1 id="hero-title">Senior Mobile<br />Application <em>Developer.</em></h1>
          <p className="hero-lede">I architect and ship production mobile products with <strong>Flutter & Dart</strong>—combining native iOS and Android knowledge, technical leadership, and seven years of delivery experience.</p>
          <div className="hero-actions"><a className="primary-button" href="#apps">View my applications <span>↓</span></a><a className="secondary-button" href="/Ahmed_Magdy_Asker_CV.pdf" download>Download CV</a></div>
          <div className="hero-links"><a href="https://github.com/megzaaat" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/megzaaat/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#contact">Contact ↗</a></div>
        </div>
        <div className="device-stage" aria-label="Selected mobile applications">
          <div className="code-card" aria-hidden="true"><span>mobile_architecture.dart</span><code>BlocProvider(<br />&nbsp;&nbsp;create: (_) =&gt; AppCubit(),<br />&nbsp;&nbsp;child: ProductApp(),<br />);</code></div>
          <Phone src="/apps/gold-era/screen-1.webp" alt="Gold Era Egypt application screen showing its mobile interface" className="phone-main" />
          <Phone src="/apps/skyloov/screen-1.webp" alt="Skyloov application screen showing UAE property discovery" className="phone-side" />
          <div className="floating-chip chip-flutter"><b>Flutter</b><span>Primary expertise</span></div>
          <div className="floating-chip chip-years"><b>7+</b><span>Years in mobile</span></div>
        </div>
        <div className="hero-proof"><span>Flutter</span><span>Dart</span><span>Native iOS</span><span>Native Android</span><span>Architecture</span><span>Team leadership</span></div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-label"><span>01</span> Profile</div>
        <div className="about-grid"><h2 id="about-title">From first commit to the <em>store release.</em></h2><div><p className="lead-copy">I help teams turn ambitious product ideas into mobile applications people can rely on.</p><p>My work spans architecture, interface delivery, native platform integration, real-time systems, performance tuning, release management, and production maintenance. I stay close to both engineering detail and product outcomes—while mentoring developers and creating the conditions for teams to ship well.</p><dl><div><dt>Experience</dt><dd>7+ years</dd></div><div><dt>Specialism</dt><dd>Flutter & Dart</dd></div><div><dt>Industries</dt><dd>Fintech · PropTech · HealthTech · Commerce · Media</dd></div><div><dt>Based in</dt><dd>Cairo, Egypt</dd></div></dl></div></div>
      </section>

      <section className="apps" id="apps" aria-labelledby="apps-title">
        <div className="section-label light"><span>02</span> Selected applications</div>
        <div className="apps-heading"><h2 id="apps-title">Mobile products in<br /><em>the real world.</em></h2><p>Verified public applications across finance, property, and workforce communication. Store imagery is sourced from the official listings.</p></div>
        <div className="app-list">{apps.map((app) => <article className={`app-case theme-${app.theme}`} key={app.id} id={app.id}>
          <div className="case-meta"><span>{app.index}</span><p>{app.label}</p><p>{app.platforms}</p></div>
          <div className="case-grid">
            <div className="case-copy"><p className="case-role">{app.role}</p><h3>{app.name}</h3><p className="case-summary">{app.summary}</p><p className="case-contribution">{app.contribution}</p><ul className="fact-list">{app.facts.map(fact => <li key={fact}>{fact}</li>)}</ul><div className="store-links">{app.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"><small>View on</small><strong>{link.label}</strong><span>↗</span></a>)}</div></div>
            <div className="screens" aria-label={`${app.name} official store screenshots`}>{app.images.map((image, i) => <Phone key={image} src={image} alt={`${app.name} official app screenshot ${i + 1}`} className={`screen-${i + 1}`} />)}</div>
          </div>
          <div className="tech-row"><span>Built with</span>{app.stack.map(item => <b key={item}>{item}</b>)}</div>
        </article>)}</div>
        <div className="secondary-projects">
          <article><div><span>04</span><p>Broker operations · PropTech</p></div><h3>Skyloov CRM</h3><p>A broker-facing workspace supporting listing management, leads, tasks, reporting, and agency collaboration within the Skyloov ecosystem.</p><p className="verification-note">Private product surface — no verified public store listing or screenshots located.</p><a href="https://www.skyloov.com/" target="_blank" rel="noreferrer">Skyloov ecosystem ↗</a></article>
          <article><div><span>05</span><p>Audio · Arabic media</p></div><h3>Audiohat</h3><p>An Arabic radio-drama and audiobook platform with offline listening, subscriptions, community interaction, and content designed for all ages.</p><ul><li>Offline episodes</li><li>Playback controls</li><li>Personal library</li></ul><a href="https://www.audiohatdar.com/" target="_blank" rel="noreferrer">Official website ↗</a></article>
        </div>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="section-label"><span>03</span> Experience</div>
        <div className="section-head"><h2 id="experience-title">Career progression,<br /><em>clearly mobile.</em></h2><p>Four product environments. Increasing ownership. One consistent focus: mobile applications that remain dependable after release.</p></div>
        <div className="timeline">{experience.map((job, i) => <article key={job.company}><div className="timeline-rail"><span>{String(i + 1).padStart(2, '0')}</span><i /></div><p className="dates">{job.dates}</p><div><h3>{job.company}</h3><p className="role">{job.role}</p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="skills" id="skills" aria-labelledby="skills-title">
        <div className="section-label light"><span>04</span> Engineering toolkit</div>
        <div className="section-head light"><h2 id="skills-title">Senior-level depth,<br /><em>organized by impact.</em></h2><p>Strongest in Flutter and Dart, with the native, platform, delivery, and leadership knowledge required to own complete mobile products.</p></div>
        <div className="skill-grid">{skills.map((group, i) => <article className={group.featured ? 'featured-skill' : ''} key={group.title}><span>0{i + 1}</span><h3>{group.title}</h3><div>{group.items.map(item => <b key={item}>{item}</b>)}</div></article>)}</div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="section-label"><span>05</span> Contact</div><div className="contact-grid"><div><p>Have a mobile product that needs senior engineering ownership?</p><h2 id="contact-title">Let&apos;s ship<br /><em>something solid.</em></h2></div><div><a className="email" href="mailto:ahmedaskerfciscu29@gmail.com">ahmedaskerfciscu29@gmail.com <span>↗</span></a><div className="phone-links" aria-label="Phone numbers"><a href="tel:+201022737604"><small>Egypt</small><strong>+20 10 2273 7604</strong><span>↗</span></a><a href="tel:+966565919468"><small>Saudi Arabia</small><strong>+966 56 591 9468</strong><span>↗</span></a></div><p>Cairo, Egypt · Open to senior mobile roles, team leadership, and high-impact product work.</p><nav aria-label="Social links"><a href="https://linkedin.com/in/megzaaat/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/megzaaat" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/Ahmed_Magdy_Asker_CV.pdf" download>Download CV ↓</a></nav></div></div><footer><strong>Ahmed Magdy Asker</strong><span>Senior Mobile Application Developer</span><a href="#top">Back to top ↑</a></footer></section>
    </main>
  );
}
