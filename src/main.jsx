import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, BookOpen, CalendarDays, Check, ChevronRight, ExternalLink, Mail, Menu, Search, Send, Sparkles, X } from 'lucide-react';
import './styles.css';

const sources = [
  { n: '01', label: 'Google Search Central', title: 'SEO Starter Guide', href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
  { n: '02', label: 'Google Search Central', title: 'Structured data markup', href: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
  { n: '03', label: 'Microsoft Bing', title: 'AI Performance in Webmaster Tools', href: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview' },
  { n: '04', label: 'OpenAI', title: 'Overview of OpenAI crawlers', href: 'https://developers.openai.com/api/docs/bots' },
];

const benchmarks = [
  { signal: 'LCP', benchmark: '≤ 2.5 sec', meaning: 'Loading performance', source: 'Google Search Central', href: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
  { signal: 'INP', benchmark: '< 200 ms', meaning: 'Interaction responsiveness', source: 'Google Search Central', href: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
  { signal: 'CLS', benchmark: '< 0.1', meaning: 'Visual stability', source: 'Google Search Central', href: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
  { signal: 'Citations', benchmark: 'Establish baseline', meaning: 'Times pages are cited in AI answers', source: 'Microsoft Bing', href: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview' },
  { signal: 'Grounding queries', benchmark: 'Track recurring phrases', meaning: 'Queries used to retrieve cited content', source: 'Microsoft Bing', href: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview' },
];

const insights = [
  { tag: 'FOUNDATION', title: 'The search surface is now a conversation', text: 'Classic rankings still matter. But the new question is whether your brand is clear enough to be selected, summarized, and cited in an answer.', href: '/playbook' },
  { tag: 'STRUCTURE', title: 'Build an evidence layer, not a content pile', text: 'The most useful SEO program connects entities, proof, first-hand experience, and internal links into one navigable knowledge system.', href: '/playbook#proof' },
  { tag: 'MEASUREMENT', title: 'Visibility is bigger than a position number', text: 'Track the full journey: impressions, qualified visits, branded demand, assisted conversions, and the pages that earn citations.', href: '/authority' },
];

function Meta({ title, description, path = '' }) {
  useEffect(() => {
    document.title = title;
    const set = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) { el = document.createElement('meta'); property ? el.setAttribute('property', name) : el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    set('description', description);
    set('og:title', title, true);
    set('og:description', description, true);
    set('og:type', path === '/playbook' || path === '/authority' ? 'article' : 'website', true);
    set('og:url', `https://www.seogeoconsulting.hk${path}`, true);
    set('og:image', 'https://www.seogeoconsulting.hk/og.png', true);
    set('twitter:card', 'summary_large_image');
    set('twitter:title', title);
    set('twitter:description', description);
    set('twitter:image', 'https://www.seogeoconsulting.hk/og.png');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', `https://www.seogeoconsulting.hk${path}`);
  }, [title, description, path]);
  return null;
}

function Schema({ page = 'home' }) {
  useEffect(() => {
    const org = {
      '@type': 'Organization',
      '@id': 'https://www.seogeoconsulting.hk/#organization',
      name: 'SEO / GEO Consulting',
      url: 'https://www.seogeoconsulting.hk/',
      email: 'hello@seogeoconsulting.hk',
      areaServed: ['Hong Kong', 'Greater Bay Area'],
      sameAs: [
        'https://itehk.com.hk/',
        'https://www.seogeoworks.hk/',
        'https://www.mysearchvisibility.hk/',
        'https://www.myseogeoexperts.hk/',
        'https://www.myairanking.hk/',
        'https://hk.linkedin.com/company/ite-limited',
        'https://www.facebook.com/itehk.ltd/',
      ],
    };
    let data;
    if (page === 'playbook') {
      data = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The SEO / GEO Playbook',
        description: 'A practical system for making expertise discoverable in search and AI answers.',
        author: org,
        publisher: org,
        mainEntityOfPage: 'https://www.seogeoconsulting.hk/playbook',
        image: 'https://www.seogeoconsulting.hk/og.png',
        inLanguage: 'en-HK',
      };
    } else if (page === 'authority') {
      data = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Authority Scorecard for SEO and GEO',
        description: 'A practical checklist for measuring whether a brand is easy to find, understand, and cite in search and AI answers.',
        author: org,
        publisher: org,
        mainEntityOfPage: 'https://www.seogeoconsulting.hk/authority',
        image: 'https://www.seogeoconsulting.hk/og.png',
        inLanguage: 'en-HK',
        about: ['SEO', 'Generative engine optimization', 'Search visibility', 'Hong Kong'],
      };
    } else {
      data = {
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'WebSite', '@id': 'https://www.seogeoconsulting.hk/#website', name: 'SEO / GEO Consulting', url: 'https://www.seogeoconsulting.hk', description: 'Practical SEO and generative engine optimization guidance for ambitious teams.', publisher: { '@id': 'https://www.seogeoconsulting.hk/#organization' }, potentialAction: { '@type': 'SearchAction', target: 'https://www.seogeoconsulting.hk/?q={search_term_string}', 'query-input': 'required name=search_term_string' } },
          org,
          { '@type': 'ProfessionalService', '@id': 'https://www.seogeoconsulting.hk/#service', name: 'SEO / GEO Consulting', url: 'https://www.seogeoconsulting.hk/', provider: { '@id': 'https://www.seogeoconsulting.hk/#organization' }, areaServed: ['Hong Kong', 'Greater Bay Area'], serviceType: ['SEO', 'Generative engine optimization'] },
          { '@type': 'Article', '@id': 'https://www.seogeoconsulting.hk/#case-study', headline: 'Case study: making a multidisciplinary GBA agency easier to understand', description: 'A public-source case study showing how entity clarity, offer architecture, and evidence help a regional digital partner become easier to understand.', author: { '@id': 'https://www.seogeoconsulting.hk/#organization' }, publisher: { '@id': 'https://www.seogeoconsulting.hk/#organization' }, dateModified: '2026-09-03', mainEntityOfPage: 'https://www.seogeoconsulting.hk/#case-study', about: { '@type': 'Organization', name: 'iTE Limited', url: 'https://itehk.com.hk' }, citation: ['https://itehk.com.hk/', 'https://itehk.com.hk/service/it-solutions'] },
          { '@type': 'Dataset', '@id': 'https://www.seogeoconsulting.hk/#authority-benchmarks', name: 'SEO and GEO authority benchmarks', description: 'Reference thresholds and measurement definitions used in the SEO / GEO Consulting case study.', url: 'https://www.seogeoconsulting.hk/authority', creator: { '@id': 'https://www.seogeoconsulting.hk/#organization' }, license: 'https://creativecommons.org/licenses/by/4.0/', variableMeasured: [
            { '@type': 'PropertyValue', name: 'Largest Contentful Paint', value: '≤ 2.5 seconds', measurementMethod: 'Google Search Central Core Web Vitals' },
            { '@type': 'PropertyValue', name: 'Interaction to Next Paint', value: '< 200 milliseconds', measurementMethod: 'Google Search Central Core Web Vitals' },
            { '@type': 'PropertyValue', name: 'Cumulative Layout Shift', value: '< 0.1', measurementMethod: 'Google Search Central Core Web Vitals' },
            { '@type': 'PropertyValue', name: 'AI citations', value: 'Establish a baseline', measurementMethod: 'Microsoft Bing AI Performance' },
            { '@type': 'PropertyValue', name: 'Grounding queries', value: 'Track recurring phrases', measurementMethod: 'Microsoft Bing AI Performance' }
          ] }
        ]
      };
    }
    let script = document.getElementById('structured-data');
    if (!script) { script = document.createElement('script'); script.id = 'structured-data'; script.type = 'application/ld+json'; document.head.appendChild(script); }
    script.textContent = JSON.stringify(data);
  }, [page]);
  return null;
}

function Header() {
  const [open, setOpen] = React.useState(false);
  return <header className="site-header"><div className="nav-wrap">
    <a className="brand" href="/" aria-label="SEO / GEO Consulting home"><span className="brand-mark">S<span>/</span>G</span><span>SEO / GEO<br /><em>CONSULTING</em></span></a>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
      <a href="/#method">Method</a><a href="/playbook">Playbook</a><a href="/authority">Authority</a><a href="/#case-study">Case study</a><a href="/#calculator">ROI calculator</a><a href="/#insights">Field notes</a><a href="/#contact">Contact</a><a href="/#about">About</a>
      <a className="nav-cta" href="https://itehk.com.hk" target="_blank" rel="noreferrer">Visit itehk.com.hk <ArrowUpRight size={16} /></a>
    </nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
  </div></header>;
}

function ArrowLink({ children, href = '#' }) { return <a className="arrow-link" href={href}>{children}<ArrowUpRight size={16} /></a>; }

function RoiCalculator() {
  const [sessions, setSessions] = React.useState(5000);
  const [conversion, setConversion] = React.useState(2.5);
  const [value, setValue] = React.useState(1800);
  const [lift, setLift] = React.useState(35);
  const projectedSessions = Math.round(sessions * (1 + lift / 100));
  const incrementalSessions = projectedSessions - sessions;
  const incrementalLeads = Math.round(incrementalSessions * (conversion / 100));
  const pipeline = incrementalLeads * value;
  const formatCurrency = (amount) => new Intl.NumberFormat('en-HK', { style: 'currency', currency: 'HKD', maximumFractionDigits: 0 }).format(amount);
  return <section className="roi section-shell" id="calculator"><div className="section-label">05 / ROI CALCULATOR</div><div className="roi-heading"><div><h2>What could a clearer signal <span>unlock?</span></h2><p>Build a directional scenario from your current organic baseline. Adjust the assumptions to see how additional qualified discovery could translate into leads and pipeline.</p></div><div className="roi-disclaimer"><Sparkles size={17} /><span>This is a planning model, not a forecast or guarantee. Use your own analytics to validate the assumptions.</span></div></div><div className="roi-card"><div className="roi-inputs"><RoiInput label="Current monthly organic sessions" value={sessions} min={500} max={100000} step={500} onChange={setSessions} format={(n) => n.toLocaleString()} /><RoiInput label="Organic conversion rate" value={conversion} min={0.5} max={10} step={0.5} suffix="%" onChange={setConversion} format={(n) => n.toFixed(1)} /><RoiInput label="Average value per lead" value={value} min={200} max={20000} step={100} prefix="HK$" onChange={setValue} format={(n) => n.toLocaleString()} /><RoiInput label="Illustrative visibility lift" value={lift} min={5} max={100} step={5} suffix="%" onChange={setLift} format={(n) => n.toString()} /></div><div className="roi-results"><span className="case-panel-label">SCENARIO OUTPUT</span><div className="roi-big-number">{formatCurrency(pipeline)}<small>potential incremental pipeline</small></div><div className="roi-stats"><div><strong>{projectedSessions.toLocaleString()}</strong><span>projected monthly sessions</span></div><div><strong>+{incrementalLeads.toLocaleString()}</strong><span>additional monthly leads</span></div><div><strong>+{incrementalSessions.toLocaleString()}</strong><span>incremental visits</span></div></div><a className="arrow-link" href="mailto:hello@seogeoconsulting.hk?subject=ROI%20calculator%20scenario">Discuss this scenario <ArrowUpRight size={16} /></a></div></div><div className="roi-foot"><span>Model: sessions × visibility lift × conversion rate × average value per lead</span><span>Illustrative only · reset with your own data</span></div></section>;
}

function RoiInput({ label, value, min, max, step, onChange, prefix, suffix, format }) { return <label className="roi-input"><span>{label}</span><div className="roi-input-value">{prefix && <small>{prefix}</small>}<output>{format(value)}</output>{suffix && <small>{suffix}</small>}</div><input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} aria-label={label} /></label>; }

function AuditRequest() {
  const [slot, setSlot] = React.useState('Tuesday · 10:00 HKT');
  const [sent, setSent] = React.useState(false);
  const slots = ['Tuesday · 10:00 HKT', 'Wednesday · 14:00 HKT', 'Thursday · 16:30 HKT'];
  const submit = (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent('SEO / GEO audit request'); const body = encodeURIComponent(`Name: ${data.get('name')}\\nWork email: ${data.get('email')}\\nCompany: ${data.get('company')}\\nFocus: ${data.get('focus')}\\nRequested slot: ${slot}\\n\\nNotes:\\n${data.get('notes') || ''}`); window.location.href = `mailto:hello@seogeoconsulting.hk?subject=${subject}&body=${body}`; setSent(true); };
  return <section className="contact section-shell" id="contact"><div className="section-label">06 / AUDIT REQUEST</div><div className="contact-heading"><div><h2>Turn the next question into a <span>useful signal.</span></h2><p>Share a little context and request a 30-minute audit conversation. Your email client will open with a prefilled request; nothing is stored by this interim form.</p></div><div className="contact-mark"><Mail size={26} /><span>Direct to<br />the team</span></div></div><div className="contact-grid"><form className="lead-form" onSubmit={submit}><div className="form-row"><label>Your name<input required name="name" placeholder="Jane Lee" /></label><label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label></div><div className="form-row"><label>Company or website<input required name="company" placeholder="company.com" /></label><label>Primary focus<select name="focus" defaultValue="Organic visibility"><option>Organic visibility</option><option>AI citations / GEO</option><option>Technical SEO</option><option>Content authority</option></select></label></div><label>What should we look at?<textarea name="notes" rows="3" placeholder="Tell us what you want to make easier to find or trust." /></label><button className="button button-primary" type="submit"><Send size={16} /> {sent ? 'Request prepared' : 'Prepare audit request'}</button><small className="form-note">By submitting, your device opens a draft email addressed to hello@seogeoconsulting.hk. Review it before sending.</small></form><div className="booking-widget"><span className="case-panel-label">REQUEST A TIME</span><h3>Choose a starting point.</h3><p>These are request windows, not confirmed appointments. We will reply to confirm availability.</p><div className="slot-list">{slots.map(item => <button key={item} type="button" className={slot === item ? 'slot is-selected' : 'slot'} onClick={() => setSlot(item)}><CalendarDays size={16} /><span>{item}</span>{slot === item && <Check size={15} />}</button>)}</div><div className="booking-footer"><span>30 MINUTES · HONG KONG TIME</span><a href="mailto:hello@seogeoconsulting.hk?subject=Audit%20availability"><Mail size={14} /> Email directly</a></div></div></div></section>;
}

function Home() {
  return <><Meta title="SEO / GEO Consulting — Make your expertise easy to find" description="A practical field guide to SEO and generative engine optimization for ambitious teams building durable visibility." /><Schema /><Header />
    <main>
      <section className="hero section-shell"><div className="hero-copy">
        <p className="eyebrow"><span className="pulse"></span> SEARCH IS CHANGING. YOUR SIGNAL SHOULD TOO.</p>
        <h1>Make your<br /><span>expertise</span><br />easy to find.</h1>
        <p className="hero-lede">SEO makes you discoverable. GEO makes you quotable. We connect the two so the right people find, trust, and remember your brand.</p>
        <div className="hero-actions"><a className="button button-primary" href="/playbook">Read the playbook <ArrowUpRight size={17} /></a><a className="text-link" href="#method">See our method <ChevronRight size={16} /></a></div>
      </div><div className="hero-art" aria-label="Abstract graphic representing connected search signals"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="orbit orbit-three"></div><div className="signal signal-a">SEO</div><div className="signal signal-b">GEO</div><div className="signal signal-c">TRUST</div><div className="art-core"><span>↗</span></div><div className="art-note"><span className="note-dot"></span><strong>Clear signals</strong><br />compound over time</div></div></section>
      <section className="proof-strip"><div><span className="strip-number">01</span><strong>People-first content</strong><span>Useful before it is optimised.</span></div><div><span className="strip-number">02</span><strong>Machine-readable proof</strong><span>Structured for retrieval.</span></div><div><span className="strip-number">03</span><strong>Compounding authority</strong><span>Built to earn the next click.</span></div></section>
      <section className="intro section-shell" id="about"><div className="section-label">01 / WHY THIS MATTERS</div><div className="intro-content"><h2>The best answer is the one people can <span>verify.</span></h2><div><p>Search has moved from a list of links toward a layer of answers, summaries, and recommendations. That does not make the fundamentals obsolete. It makes clarity, evidence, and a coherent point of view more valuable.</p><p>We publish practical guidance for teams that want visibility without chasing every algorithm update. The work is simple to describe: make useful knowledge easy for people and systems to understand.</p><ArrowLink href="/playbook">Explore the full framework</ArrowLink></div></div></section>
      <section className="method section-shell" id="method"><div className="section-label">02 / THE METHOD</div><div className="method-intro"><h2>Four moves.<br /><span>One durable signal.</span></h2><p>Strong organic visibility is not one trick. It is the result of connected decisions, made consistently across content, code, and credibility.</p></div><div className="method-grid"><article><span className="card-index">01</span><h3>Define the entity</h3><p>Make it obvious who you are, what you know, whom you serve, and how your offer fits into the wider category.</p><ArrowLink href="/playbook#entity">Read the move</ArrowLink></article><article><span className="card-index">02</span><h3>Answer the intent</h3><p>Build pages around real questions. Lead with a direct answer, then add context, examples, and the next useful step.</p><ArrowLink href="/playbook#intent">Read the move</ArrowLink></article><article><span className="card-index">03</span><h3>Prove the claim</h3><p>Use first-hand observations, transparent methodology, citations, and outcomes to give both readers and engines something to trust.</p><ArrowLink href="/playbook#proof">Read the move</ArrowLink></article><article><span className="card-index">04</span><h3>Measure the mention</h3><p>Look beyond rank. Monitor qualified discovery, branded demand, assisted action, and whether your pages are being referenced.</p><ArrowLink href="/playbook#measure">Read the move</ArrowLink></article></div></section>
      <section className="case-study section-shell" id="case-study"><div className="section-label">03 / CASE STUDY</div><div className="case-heading"><div><span className="case-kicker">PUBLIC-SOURCE CASE STUDY · HONG KONG / GBA</span><h2>Make a complex<br /><span>offer easier to trust.</span></h2></div><div className="case-summary"><p>iTE Limited brings strategy, media, social, SEO, platform development, and technical consultancy under one roof. This case study shows how a multidisciplinary offer becomes clearer when its proof is structured as a connected knowledge system.</p><a className="button button-primary" href="https://itehk.com.hk" target="_blank" rel="noreferrer">View the client site <ArrowUpRight size={17} /></a></div></div><div className="case-grid"><div className="case-panel case-panel-dark"><span className="case-panel-label">THE BRIEF</span><h3>Turn a wide capability set into one memorable entity.</h3><p>For a regional digital partner, the challenge is not a lack of services. It is helping different audiences understand the relationship between the services, the markets, and the team behind them.</p></div><div className="case-panel"><span className="case-panel-label">THE SIGNALS</span><div className="signal-list"><div><strong>01</strong><span>Entity clarity</span><em>Hong Kong-based, GBA-focused</em></div><div><strong>02</strong><span>Offer architecture</span><em>Strategy → media → technology</em></div><div><strong>03</strong><span>Evidence trail</span><em>Services, contact, and presence</em></div></div></div><div className="case-panel case-result"><span className="case-panel-label">THE RESULT</span><h3>A story that can be read by a person, a crawler, or an answer engine.</h3><p>We translated the public proof into a repeatable authority pattern: define the organisation, group the offer, answer the intent, then link readers to the source of truth.</p><a className="arrow-link" href="/playbook#proof">See the proof framework</a></div></div><div className="case-evidence"><figure className="testimonial-card"><span className="case-panel-label">CLIENT VOICE / PUBLIC POSITIONING</span><blockquote>“Your digital marketing partner for seizing The Greater Bay Area business opportunities.”</blockquote><figcaption><strong>iTE Limited</strong><span>Public homepage positioning · <a href="https://itehk.com.hk" target="_blank" rel="noreferrer">itehk.com.hk <ExternalLink size={12} /></a></span></figcaption><small>This is an attributed first-party statement, not a customer testimonial. Replace it with an approved client quote and named attribution when available.</small></figure><div className="benchmark-card"><div className="benchmark-heading"><div><span className="case-panel-label">AUTHORITY BENCHMARKS</span><h3>Measure the experience, not just the rank.</h3></div><span className="benchmark-note">REFERENCE DATA</span></div><div className="benchmark-table" role="table" aria-label="SEO and GEO authority benchmarks"><div className="benchmark-row benchmark-header" role="row"><span>Signal</span><span>Reference</span><span>What it tells you</span></div>{benchmarks.map(row => <div className="benchmark-row" role="row" key={row.signal}><strong>{row.signal}</strong><span>{row.benchmark}</span><div><span>{row.meaning}</span><a href={row.href} target="_blank" rel="noreferrer">{row.source} <ExternalLink size={11} /></a></div></div>)}</div></div></div><div className="case-foot"><span>Sources checked · September 2026</span><a href="https://itehk.com.hk/service/it-solutions" target="_blank" rel="noreferrer">Review iTE’s public service detail <ExternalLink size={14} /></a></div><div className="vertical-case"><div className="vertical-heading"><span className="case-kicker">SECOND VERTICAL · CROSS-BORDER E-COMMERCE</span><h3>Make regional growth legible before it becomes a channel problem.</h3><p>Cross-border commerce adds market, language, payment, logistics, and trust signals to the discovery problem. Public research shows why this vertical deserves its own authority pattern.</p></div><div className="vertical-stats"><div><strong>65.4%</strong><span>of surveyed Hong Kong companies were already engaging in cross-border e-commerce.</span></div><div><strong>90.0%</strong><span>said online / cross-border sales would drive total-sales growth in the next two years.</span></div><div><strong>75.2%</strong><span>of active e-commerce companies were targeting the Chinese Mainland market.</span></div></div><div className="vertical-proof"><span>VERTICAL AUTHORITY PATTERN</span><b>Local entity → market language → service proof → transaction confidence</b><a href="https://research.hktdc.com/en/article/MTkxMDUzOTE4MA" target="_blank" rel="noreferrer">Read the HKTDC / HKECIC research <ExternalLink size={13} /></a></div></div></section><section className="notes section-shell" id="insights"><div className="section-label">04 / FIELD NOTES</div><div className="notes-heading"><h2>Ideas worth <span>keeping.</span></h2><ArrowLink href="/playbook">View all notes</ArrowLink></div><div className="insight-grid">{insights.map((item, i) => <article className="insight" key={item.title}><span className="insight-tag">{item.tag}</span><span className="insight-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowLink href={item.href}>Read note</ArrowLink></article>)}</div></section>
      <RoiCalculator />
      <AuditRequest />
      <section className="source-band section-shell"><div><span className="eyebrow">SOURCE-LED BY DESIGN</span><h2>Good guidance<br /><span>shows its work.</span></h2></div><div className="source-copy"><p>We anchor our recommendations in first-party documentation and clearly label the difference between a platform requirement, a tested practice, and an informed hypothesis.</p><a className="button button-light" href="/playbook#sources">See our sources <BookOpen size={17} /></a></div></section>
      <section className="closing section-shell"><div className="closing-mark">S<span>/</span>G</div><div><h2>Build a signal<br />that lasts.</h2><p>Want the practical version? Start with the playbook, then score your site with the authority checklist.</p><div className="hero-actions"><a className="button button-primary" href="/playbook">Start reading <ArrowUpRight size={17} /></a><a className="text-link" href="/authority">Authority scorecard <ChevronRight size={16} /></a></div></div></section>
    </main><Footer />
  </>;
}

function Playbook() {
  return <><Meta title="The SEO / GEO Playbook — SEO / GEO Consulting" description="A practical framework for making expertise discoverable in search and quotable in AI answers. Learn entity clarity, intent answers, proof, and measurement." path="/playbook" /><Schema page="playbook" /><Header /><main className="playbook-page"><section className="playbook-hero section-shell"><div className="section-label">FIELD GUIDE / 01</div><h1>The SEO / GEO<br /><span>playbook.</span></h1><p>A practical framework for making expertise discoverable in search and quotable in AI answers.</p><div className="updated"><span className="pulse"></span> LAST UPDATED · SEPTEMBER 2026</div></section><section className="playbook-body section-shell"><aside><div className="toc-title">IN THIS GUIDE</div><a href="#entity">01 — Define the entity</a><a href="#intent">02 — Answer the intent</a><a href="#proof">03 — Prove the claim</a><a href="#measure">04 — Measure the mention</a><a href="#sources">Sources</a></aside><div className="guide-content"><p className="standfirst">Generative Engine Optimisation (GEO) is not a replacement for SEO. It is the practice of making your useful, trustworthy expertise easier for answer engines to retrieve, interpret, and cite.</p><GuideStep id="entity" number="01" title="Define the entity" lead="Before a page can rank for an idea, your site needs to make the underlying entity unambiguous."><p>Write the short version a new reader should remember: what your organisation is, where it operates, which problems it solves, and what makes its point of view credible. Repeat that truth consistently across your navigation, about page, profiles, and service pages.</p><div className="check-list"><div><Check size={17} />A clear organisation or person name</div><div><Check size={17} />A specific category and audience</div><div><Check size={17} />Consistent contact and location details</div></div></GuideStep><GuideStep id="intent" number="02" title="Answer the intent" lead="The page should answer the question before it asks the reader to do anything else."><p>Use the language of the problem, not only the language of your product. Put a concise answer near the top, then support it with definitions, comparisons, examples, and a next step. This is good UX for people and gives retrieval systems clean passages to work with.</p><div className="mini-table"><div><strong>Weak opening</strong><span>We are a leading provider of solutions.</span></div><div><strong>Useful opening</strong><span>SEO helps search engines understand your content; GEO extends that clarity to AI-generated answers.</span></div></div></GuideStep><GuideStep id="proof" number="03" title="Prove the claim" lead="Trust is not a tone of voice. It is a trail of evidence."><p>Make authorship, sources, methodology, and limitations visible. Link to primary references when you make a factual claim. Add first-hand details that could not have been produced by skimming the same ten results. When you update a page, explain what changed.</p><blockquote>“It is more important to supply fewer but complete and accurate recommended properties rather than trying to provide every possible recommended property with less complete, badly-formed, or inaccurate data.”<cite>— Google Search Central, Structured data markup</cite></blockquote></GuideStep><GuideStep id="measure" number="04" title="Measure the mention" lead="A position report is one lens. Build a measurement system that reflects how people actually discover you."><p>Track non-branded impressions, qualified organic sessions, assisted conversions, returning visitors, and the pages that become entry points. For AI visibility, watch citation and grounding-query reporting where the platform provides it. Treat those signals as directional evidence, not a new vanity metric.</p><div className="measure-grid"><div><strong>Discover</strong><span>Impressions · queries · crawl health</span></div><div><strong>Understand</strong><span>Engagement · return visits · scroll depth</span></div><div><strong>Act</strong><span>Leads · assisted conversion · retention</span></div></div></GuideStep><section className="sources" id="sources"><div className="section-label">REFERENCES</div><h2>Start with the<br /><span>primary source.</span></h2><p>These recommendations are designed to be useful without pretending that any platform guarantees a ranking or citation.</p>{sources.map(s => <a className="source-row" href={s.href} target="_blank" rel="noreferrer" key={s.n}><span>{s.n}</span><div><small>{s.label}</small><strong>{s.title}</strong></div><ExternalLink size={16} /></a>)}</section></div></section></main><Footer /></>;
}


function Authority() {
  const pillars = [
    { id: 'entity', n: '01', title: 'Entity clarity', lead: 'Can a stranger name who you are, where you operate, and what category you belong to in one sentence?', checks: ['Consistent organisation name across site and profiles', 'Clear category and audience on the homepage', 'Contact, location, and language signals that match reality'] },
    { id: 'intent', n: '02', title: 'Intent coverage', lead: 'Do your key pages answer the real questions people ask before they ask for a demo?', checks: ['Direct answer near the top of priority pages', 'Comparisons, definitions, and next steps in plain language', 'Internal links that connect related intents'] },
    { id: 'proof', n: '03', title: 'Proof density', lead: 'Is there evidence a third party could cite without guessing?', checks: ['Named sources or methodology on factual claims', 'First-hand detail that is hard to invent from SERPs alone', 'Visible authorship, dates, and update notes'] },
    { id: 'health', n: '04', title: 'Crawl and experience health', lead: 'Can systems retrieve the page and can people stay long enough to trust it?', checks: ['Indexable URLs with a clean sitemap', 'Core Web Vitals within published thresholds', 'No soft-404s, broken assets, or orphan pages'] },
    { id: 'citation', n: '05', title: 'Citation readiness', lead: 'Would another site or an answer engine have a reason to mention you?', checks: ['A citeable page with a stable URL and clear title', 'Shareable summaries others can quote accurately', 'Outbound references that make your work look researched'] },
  ];
  return <><Meta title="Authority Scorecard — SEO / GEO Consulting" description="A practical SEO and GEO authority scorecard for Hong Kong teams: entity clarity, intent answers, proof density, crawl health, and citation readiness in one citeable checklist." path="/authority" /><Schema page="authority" /><Header /><main className="playbook-page"><section className="playbook-hero section-shell"><div className="section-label">FIELD GUIDE / 02</div><h1>Authority<br /><span>scorecard.</span></h1><p>Domain rating follows referring domains. Earn them by becoming clearer, more useful, and easier to cite — then ask partners to link the pages that deserve it.</p><div className="updated"><span className="pulse"></span> LAST UPDATED · SEPTEMBER 2026</div></section><section className="playbook-body section-shell"><aside><div className="toc-title">SCORE THESE</div>{pillars.map(p => <a href={`#${p.id}`} key={p.id}>{p.n} — {p.title}</a>)}<a href="#use">How to use this</a><a href="/playbook">Playbook</a></aside><div className="guide-content"><p className="standfirst">Ahrefs Domain Rating is a backlink metric. On-page work does not raise DR by itself — but citeable assets and clear entity signals make it easier for other sites (including your own network) to link you with confidence.</p>{pillars.map(p => <GuideStep id={p.id} number={p.n} title={p.title} lead={p.lead} key={p.id}><div className="check-list">{p.checks.map(c => <div key={c}><Check size={17} />{c}</div>)}</div></GuideStep>)}<section className="sources" id="use"><div className="section-label">PRACTICE</div><h2>How to use<br /><span>the scorecard.</span></h2><p>Score each pillar from 0–2 (missing, partial, solid). Prioritise anything below 2 before you invest in outreach. When a pillar is solid, point partners to this page or the <a className="arrow-link" href="/playbook" style={{display:'inline-flex'}}>playbook</a> as the destination URL — not only the homepage.</p><div className="measure-grid"><div><strong>Link targets</strong><span>Homepage · Playbook · Authority scorecard</span></div><div><strong>Network</strong><span>Owned sites · partners · press · directories</span></div><div><strong>Measure</strong><span>Referring domains · branded queries · citations</span></div></div><a className="button button-primary" href="/#contact" style={{marginTop:'28px'}}>Request an audit <ArrowUpRight size={17} /></a></section></div></section></main><Footer /></>;
}

function GuideStep({ id, number, title, lead, children }) { return <section className="guide-step" id={id}><div className="guide-number">{number}</div><div><h2>{title}</h2><p className="guide-lead">{lead}</p>{children}</div></section>; }

function Footer() { return <footer className="footer"><div className="section-shell footer-grid"><div><a className="brand" href="/"><span className="brand-mark">S<span>/</span>G</span><span>SEO / GEO<br /><em>CONSULTING</em></span></a><p>Practical thinking for the next search surface.</p></div><div className="footer-links"><div><small>EXPLORE</small><a href="/playbook">Playbook</a><a href="/authority">Authority scorecard</a><a href="/#method">Method</a><a href="/#case-study">Case study</a><a href="/#calculator">ROI calculator</a><a href="/#insights">Field notes</a><a href="/#contact">Contact</a></div><div><small>NETWORK</small><a href="https://itehk.com.hk/" target="_blank" rel="noreferrer">itehk.com.hk <ArrowUpRight size={13} /></a><a href="https://www.seogeoworks.hk/resources/" target="_blank" rel="noreferrer">seogeoworks resources <ArrowUpRight size={13} /></a><a href="https://www.seogeoworks.hk/resources/seo-vs-geo.html" target="_blank" rel="noreferrer">SEO vs GEO <ArrowUpRight size={13} /></a><a href="https://www.mysearchvisibility.hk/" target="_blank" rel="noreferrer">mysearchvisibility.hk <ArrowUpRight size={13} /></a><a href="https://www.myseogeoexperts.hk/" target="_blank" rel="noreferrer">myseogeoexperts.hk <ArrowUpRight size={13} /></a><a href="https://www.myairanking.hk/" target="_blank" rel="noreferrer">myairanking.hk <ArrowUpRight size={13} /></a><a href="mailto:hello@seogeoconsulting.hk">Email us <ArrowUpRight size={13} /></a></div></div></div><div className="section-shell footer-bottom"><span>© 2026 SEO / GEO Consulting</span><span>Built for clarity, not noise.</span></div></footer> }

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/playbook' || path === '/playbook.html') return <Playbook />;
  if (path === '/authority' || path === '/authority.html') return <Authority />;
  return <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
