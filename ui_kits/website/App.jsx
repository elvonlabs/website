/* Elvon Labs — website UI kit (warm mentorship landing page).
   A friendly, student-facing recreation built from the launch-kit copy
   and composed from the design-system primitives.
   Registers window.ElvonSite and mounts into #root. */

const DS = window.ElvonLabsDesignSystem_d7be89;
const { NavBar, SectionHeading, Card, Tag, Button, Badge, StatCard, Logo, Icon,
        Input, Textarea, Select, CheckboxCard } = DS;

const SANS = "var(--font-sans)";
const DISP = "var(--font-display)";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
}

function getCurrentRoute() {
  const pathname = window.location.pathname || '/';
  const normalized = pathname.replace(/\/index\.html$/, '');
  return normalized === '/careers' || normalized.startsWith('/careers/') ? 'careers' : 'home';
}

function navigateTo(path) {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
  }
}

function useRoute() {
  const [route, setRoute] = React.useState(getCurrentRoute());
  React.useEffect(() => {
    const onPopState = () => setRoute(getCurrentRoute());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  return [route, setRoute];
}

const Section = ({ id, bg, children, style }) => (
  <section id={id} style={{ background: bg || 'transparent', padding: '88px 24px', ...style }}>
    <div style={{ maxWidth: 1120, margin: '0 auto' }}>{children}</div>
  </section>
);

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-canvas)', padding: '96px 24px 80px' }}>
      <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: 9999, background: 'var(--glow-indigo)', filter: 'blur(60px)', top: -120, left: '6%' }} />
      <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: 9999, background: 'var(--glow-coral)', filter: 'blur(60px)', top: -80, right: '8%' }} />
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: 9999, background: 'var(--glow-sun)', filter: 'blur(60px)', bottom: -140, left: '40%' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: 9999, padding: '6px 14px 6px 8px', boxShadow: 'var(--shadow-sm)', marginBottom: 24 }}>
          <Badge tone="solid">New</Badge>
          <span style={{ fontFamily: SANS, fontSize: 13, color: 'var(--text-muted)' }}>Now enrolling students &amp; professionals</span>
        </div>
        <h1 style={{ fontFamily: DISP, fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 22px' }}>
          Learn to do real research — with a researcher who actually publishes.
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 19, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 670, margin: '0 auto 32px' }}>
          Elvon Labs mentors students <em style={{ fontStyle: 'normal', color: 'var(--text-body)', fontWeight: 600 }}>and working professionals</em> one-on-one through a genuine AI or healthcare project — teaching a research method you'll use for the rest of your career. No formal research background required.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={() => scrollToId('apply')}>Apply now</Button>
          <Button variant="ghost" size="lg" onClick={() => scrollToId('programs')}>Start with a Foundations Pod</Button>
        </div>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 44 }}>
          <StatCard value="634" label="Citations" tone="lavender" />
          <StatCard value="10" label="h-index" tone="peach" />
          <StatCard value="1:1" label="With a published PhD" tone="mint" />
          <StatCard value="14 wks" label="To a finished paper" tone="butter" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Who it's for (dual audience) ---------------- */
const AUDIENCES = [
  {
    tone: 'indigo', icon: 'book', kicker: 'Students',
    title: 'High-schoolers & undergrads',
    body: "Start early and stand out. Learn how research actually works and finish with a paper you authored, understand, and can defend — plus a letter from a published researcher.",
    points: ['No experience needed — we start from how to read a paper', 'A portfolio-ready paper in your own name', 'Foundations Pod on-ramp from $499'],
    foot: 'Most younger students begin with a Foundations Pod.',
  },
  {
    tone: 'coral', icon: 'ai', kicker: 'Industry professionals',
    title: 'Pros with real-world expertise',
    body: "No formal research background required. Your day-to-day work is often the fastest bridge to a research question worth pursuing — and we've mentored professionals to co-author real, peer-reviewed papers.",
    points: ['Turn hard-won domain expertise into a research question', 'Publish alongside your job — async feedback between sessions', 'Genuine co-authorship where your contribution merits it'],
    foot: 'Bring the domain; we bring the method.',
  },
];

function AudienceCard({ a }) {
  const fill = TONE_FILL[a.tone], ink = TONE_INK[a.tone];
  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: '32px 30px', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 56, height: 56, borderRadius: 18, background: fill, color: ink, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={a.icon} size={28} />
        </div>
        <div>
          <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', color: ink }}>{a.kicker}</div>
          <h3 style={{ fontFamily: DISP, fontSize: 24, fontWeight: 700, color: 'var(--ink-900)', margin: '2px 0 0', lineHeight: 1.15, letterSpacing: '-0.01em' }}>{a.title}</h3>
        </div>
      </div>
      <p style={{ fontFamily: SANS, fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{a.body}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '2px 0 0', display: 'flex', flexDirection: 'column', gap: 11 }}>
        {a.points.map((p) => (
          <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ color: ink, flexShrink: 0, marginTop: 1 }}><Icon name="check" size={18} /></span>
            <span style={{ fontFamily: SANS, fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-body)' }}>{p}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 'auto', paddingTop: 8, display: 'flex', alignItems: 'center', gap: 8, fontFamily: SANS, fontSize: 13.5, fontWeight: 500, color: ink }}>
        <span style={{ width: 6, height: 6, borderRadius: 9999, background: ink, display: 'inline-block' }} />
        {a.foot}
      </div>
    </div>
  );
}

function Audience() {
  return (
    <Section id="who it's for" bg="var(--band-mint)">
      <SectionHeading eyebrow="Who it's for" title="No research background required"
        lead="Two kinds of people thrive at Elvon — students starting early, and professionals turning real-world expertise into research. The method is the same; your starting point is what changes." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginTop: 56 }}>
        {AUDIENCES.map((a) => <AudienceCard key={a.kicker} a={a} />)}
      </div>
    </Section>
  );
}

/* ---------------- Differentiators ---------------- */
const DIFFS = [
  { icon: 'ai', tone: 'indigo', title: 'A real researcher, not a matchmaker', body: 'You work directly with a published PhD in AI and healthcare — not a randomly assigned mentor from a directory of thousands.' },
  { icon: 'cs', tone: 'coral', title: 'Method over merit-badges', body: 'We teach a repeatable research process — frame, design, build, evaluate, conclude — that transfers to any field. The paper is the by-product; the thinking is the point.' },
  { icon: 'check', tone: 'mint', title: 'Honest about outcomes', body: 'We help students produce work worth publishing and support submission to legitimate venues. We never sell a guaranteed publication — and real researchers can tell the difference.' },
  { icon: 'healthcare', tone: 'sun', title: 'Specialists in AI & health', body: 'Depth in one domain beats a generalist at the same price. Our work lives where AI meets healthcare.' },
];
const TONE_FILL = { indigo: 'var(--indigo-100)', coral: 'var(--coral-100)', mint: 'var(--mint-100)', sun: 'var(--sun-100)' };
const TONE_INK = { indigo: 'var(--indigo-600)', coral: 'var(--coral-600)', mint: '#1c7a60', sun: '#9a6a12' };

function Differentiators() {
  return (
    <Section id="why" bg="var(--surface-canvas)">
      <SectionHeading eyebrow="What makes Elvon different" title="Built for the thinking, not the trophy"
        lead="A boutique program with a real publication record behind it — and a refusal to over-promise." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 22, marginTop: 56 }}>
        {DIFFS.map((d) => (
          <Card key={d.title} hover>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: TONE_FILL[d.tone], display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: TONE_INK[d.tone] }}>
              <Icon name={d.icon} size={26} />
            </div>
            <h3 style={{ fontFamily: DISP, fontSize: 19, fontWeight: 700, color: 'var(--ink-900)', margin: '0 0 8px', lineHeight: 1.25 }}>{d.title}</h3>
            <p style={{ fontFamily: SANS, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{d.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Programs ---------------- */
const TIERS = [
  { name: 'Research Foundations Pod', price: '$499', cadence: '6 weeks · small group', tone: 'sun',
    blurb: 'Learn how research actually works and leave with a real proposal. The best first step if you\'re exploring.',
    points: ['Live cohort of 4–6 students', 'One 90-min session/week + async', 'Literature review + research proposal', 'Readiness assessment for Core'],
    cta: 'Join a pod', featured: false },
  { name: 'Core Research Mentorship', price: '$3,500', cadence: '14 weeks · 1:1', tone: 'indigo',
    blurb: 'Your own project, start to finish, with weekly mentorship and a paper you can defend.',
    points: ['Weekly 1:1 with a published researcher', 'The full 5-stage Elvon method', 'A portfolio-ready research paper', 'A specific letter of recommendation'],
    cta: 'Apply now', featured: true },
  { name: 'Advanced / Undergrad Track', price: 'from $4,500', cadence: '16–20 weeks · 1:1', tone: 'coral',
    blurb: 'Ambitious AI/health work aimed at a workshop or near-publishable standard.',
    points: ['A more ambitious AI/health project', 'Targeted at peer-reviewed workshops', 'Genuine co-authorship where merited', 'Premium showcasing & submission support'],
    cta: 'Talk to us', featured: false },
];

function ProgramCard({ t }) {
  const accent = TONE_INK[t.tone];
  return (
    <div style={{
      position: 'relative',
      background: t.featured ? 'var(--surface-ink)' : 'var(--white)',
      border: t.featured ? 'none' : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '30px 28px',
      boxShadow: t.featured ? 'var(--shadow-lg)' : 'var(--shadow-card)',
      transform: t.featured ? 'translateY(-8px)' : 'none',
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      {t.featured && <div style={{ position: 'absolute', top: 20, right: 20 }}><Badge tone="coral">Most popular</Badge></div>}
      <div>
        <Tag variant={t.tone === 'sun' ? 'sun' : t.tone === 'coral' ? 'coral' : 'indigo'}>{t.cadence}</Tag>
      </div>
      <h3 style={{ fontFamily: DISP, fontSize: 23, fontWeight: 700, lineHeight: 1.2, margin: 0, color: t.featured ? 'var(--white)' : 'var(--ink-900)' }}>{t.name}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontFamily: DISP, fontSize: 38, fontWeight: 700, letterSpacing: '-0.02em', color: t.featured ? 'var(--indigo-300)' : accent }}>{t.price}</span>
      </div>
      <p style={{ fontFamily: SANS, fontSize: 14.5, lineHeight: 1.6, margin: 0, color: t.featured ? 'var(--text-on-ink)' : 'var(--text-muted)' }}>{t.blurb}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0', display: 'flex', flexDirection: 'column', gap: 11 }}>
        {t.points.map((p) => (
          <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ color: t.featured ? 'var(--indigo-300)' : accent, flexShrink: 0, marginTop: 1 }}><Icon name="check" size={18} /></span>
            <span style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.5, color: t.featured ? '#d9d2ea' : 'var(--text-body)' }}>{p}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 'auto', paddingTop: 8 }}>
        <Button variant={t.featured ? 'primary' : t.tone === 'coral' ? 'secondary' : 'soft'} full onClick={() => scrollToId('apply')}>{t.cta}</Button>
      </div>
    </div>
  );
}

function Programs() {
  return (
    <Section id="programs" bg="var(--band-lavender)">
      <SectionHeading eyebrow="Programs" title="Three ways in"
        lead="A low-risk pod that feeds the flagship 1:1 program, plus a deeper track for advanced students. Need-based partial scholarships available each cohort." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22, marginTop: 60, alignItems: 'start' }}>
        {TIERS.map((t) => <ProgramCard key={t.name} t={t} />)}
      </div>
    </Section>
  );
}

/* ---------------- Method ---------------- */
const PHASES = [
  { n: '01', title: 'Background & framing', wk: 'Weeks 1–3', body: 'Read the literature, find the gap, and turn it into a sharp, answerable research question.' },
  { n: '02', title: 'Approach & design', wk: 'Weeks 4–6', body: 'Choose valid, testable methods; handle data responsibly; lock a concrete, scoped plan.' },
  { n: '03', title: 'Build / systems', wk: 'Weeks 7–9', body: 'Implement the model, system, or analysis with reproducibility and good practice.' },
  { n: '04', title: 'Evaluation', wk: 'Weeks 10–11', body: 'Design fair evaluations, run them, and interpret results honestly — limitations included.' },
  { n: '05', title: 'Conclusions & comms', wk: 'Weeks 12–14', body: 'Write the full paper, revise, defend it, and plan submission to legitimate venues.' },
];

function Method() {
  return (
    <Section id="method" bg="var(--surface-canvas)">
      <SectionHeading eyebrow="The Elvon method" title="A method you'll use for life"
        lead="Each phase maps to a part of a real paper — so by the end you have both the skill and the artifact." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18, marginTop: 56 }}>
        {PHASES.map((p, i) => (
          <div key={p.n} style={{ background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '22px 20px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontFamily: DISP, fontSize: 30, fontWeight: 700, color: ['var(--indigo-500)','var(--coral-500)','var(--sun-400)','var(--mint-500)','var(--indigo-500)'][i], letterSpacing: '-0.02em', marginBottom: 6 }}>{p.n}</div>
            <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-faint)', marginBottom: 10 }}>{p.wk}</div>
            <h3 style={{ fontFamily: DISP, fontSize: 17, fontWeight: 700, color: 'var(--ink-900)', margin: '0 0 8px', lineHeight: 1.25 }}>{p.title}</h3>
            <p style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Founder ---------------- */
function Founder() {
  return (
    <Section id="founder" bg="var(--band-peach)">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.4fr)', gap: 48, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 200, height: 200, borderRadius: '50%', background: 'linear-gradient(150deg, var(--indigo-500), var(--coral-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <span style={{ fontFamily: DISP, fontSize: 64, fontWeight: 700, color: 'var(--white)' }}>VW</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <StatCard value="634" label="Citations" tone="plain" style={{ minWidth: 110, boxShadow: 'var(--shadow-card)' }} />
            <StatCard value="10" label="h-index" tone="plain" style={{ minWidth: 110, boxShadow: 'var(--shadow-card)' }} />
          </div>
        </div>
        <div>
          <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--coral-600)', marginBottom: 14 }}>Your mentor</div>
          <h2 style={{ fontFamily: DISP, fontSize: 38, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink-900)', margin: '0 0 18px', lineHeight: 1.12 }}>Vijay Walunj, PhD</h2>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 16px' }}>
            Researcher in AI, software engineering, and healthcare; published author and engineering leader. Vijay has mentored industry professionals to co-author real, peer-reviewed papers — and Elvon Labs brings that same standard to future innovators.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Tag variant="indigo">Senior IEEE member</Tag>
            <Tag variant="mint">Deep learning</Tag>
            <Tag variant="sun">Beyond 5G</Tag>
            <Tag variant="coral">Healthcare</Tag>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: 'Do you guarantee publication?', a: 'No. We help students produce strong work and support submission to legitimate venues, but no honest program can guarantee peer-reviewed publication — and guarantees are a red flag.' },
  { q: 'Who does the mentoring?', a: 'A published researcher in AI / healthcare — currently the founder, and vetted expert mentors as we grow.' },
  { q: 'How long and how much time?', a: '14 weeks for Core, about 5 hours a week including your independent work between weekly sessions.' },
  { q: 'What ages is this for?', a: "High-schoolers, undergraduates, and working professionals — there's no upper age limit, and no research background required. Younger students usually start with a Foundations Pod; for minors, the agreement and payment are with a parent or guardian." },
  { q: 'Is financial aid available?', a: 'Yes — a limited number of need-based partial scholarships each cohort.' },
];

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border-default)' }}>
      <button onClick={onToggle} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, background: 'none', border: 'none', cursor: 'pointer', padding: '22px 4px', textAlign: 'left' }}>
        <span style={{ fontFamily: DISP, fontSize: 19, fontWeight: 600, color: 'var(--ink-900)' }}>{q}</span>
        <span style={{ flexShrink: 0, color: 'var(--indigo-600)', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 200ms ease', fontFamily: SANS, fontSize: 28, fontWeight: 300, lineHeight: 1 }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height 260ms ease' }}>
        <p style={{ fontFamily: SANS, fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 4px 22px' }}>{a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <Section id="faq" bg="var(--surface-canvas)">
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <SectionHeading eyebrow="FAQ" title="Honest answers" />
        <div style={{ marginTop: 40 }}>
          {FAQS.map((f, i) => <FaqItem key={f.q} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Apply / CTA ---------------- */
const INTERESTS = ['Artificial Intelligence', 'Healthcare', 'Foundational Computer Science', 'Telecommunications', 'Quantum Computing', 'Robotics', 'Other'];

function Apply() {
  const [areas, setAreas] = React.useState([]);
  const [sent, setSent] = React.useState(false);
  const toggle = (a) => setAreas((p) => p.includes(a) ? p.filter((x) => x !== a) : [...p, a]);

  return (
    <Section id="apply" bg="var(--surface-ink)" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--coral-300)', marginBottom: 16 }}>Apply</div>
          <h2 style={{ fontFamily: DISP, fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', margin: '0 0 18px', lineHeight: 1.1 }}>Start your research journey</h2>
          <p style={{ fontFamily: SANS, fontSize: 18, lineHeight: 1.6, color: 'var(--text-on-ink)', margin: '0 0 24px' }}>
            Tell us a little about you and what you'd like to work on. We'll follow up to find the right starting point — a Foundations Pod or a full Core project.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['A paper you authored and understand', 'A letter from a published researcher', 'A research method you can reuse'].map((o) => (
              <li key={o} style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: SANS, fontSize: 15, color: '#d9d2ea' }}>
                <span style={{ color: 'var(--indigo-300)' }}><Icon name="check" size={18} /></span>{o}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 30, boxShadow: 'var(--shadow-lg)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--mint-100)', color: '#1c7a60', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><Icon name="check" size={28} /></div>
              <h3 style={{ fontFamily: DISP, fontSize: 24, fontWeight: 700, color: 'var(--ink-900)', margin: '0 0 8px' }}>Thanks — you're on the list.</h3>
              <p style={{ fontFamily: SANS, color: 'var(--text-muted)', margin: '0 0 18px' }}>We'll be in touch soon to find your starting point.</p>
              <Button variant="soft" onClick={() => setSent(false)}>Submit another</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input label="Full name" required placeholder="Vihaa W." />
              <Input label="Email" type="email" required placeholder="you@example.com" />
              <Select label="I'm a…" placeholder="Select one" options={['High school student', 'Undergraduate', 'Industry professional / engineer', 'Parent / guardian', 'Other']} />
              <div>
                <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 600, color: 'var(--text-body)', marginBottom: 10 }}>What interests you?</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {INTERESTS.map((a) => <CheckboxCard key={a} label={a} checked={areas.includes(a)} onChange={() => toggle(a)} />)}
                </div>
              </div>
              <Textarea label="Anything else? (optional)" rows={3} placeholder="Background, papers, projects, what you'd want to work on..." />
              <Button type="submit" variant="primary" size="lg" full>Submit application</Button>
              <p style={{ fontFamily: SANS, fontSize: 12.5, color: 'var(--text-faint)', textAlign: 'center', margin: 0 }}>Under 18? We'll loop in a parent or guardian for enrollment.</p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Careers ---------------- */
const CAREER_ROLES = [
  {
    title: 'Marketing Intern',
    intro: 'Help grow Elvon’s LinkedIn presence and tell the Elvon story to students, parents, and the research community.',
    duties: [
      'Draft and schedule LinkedIn posts',
      'Grow and engage the audience through comments, DMs, and outreach',
      'Create light content such as captions, simple graphics, and short-form copy',
      'Track engagement and suggest improvements',
    ],
    requirements: [
      'Strong writing and tone — direct, honest, and free of hype',
      'Interest in marketing, communications, or growth; no experience required',
      'Familiarity with LinkedIn',
      'Self-starter with a clear point of view',
    ],
  },
  {
    title: 'Software Research Engineer Intern',
    intro: 'Build the tools behind Elvon’s research mentorship — data pipelines, small internal apps, and experiments — working directly with the founder.',
    duties: [
      'Build and maintain internal tools and scripts',
      'Prototype data pipelines and experiment infrastructure',
      'Help reproduce and extend paper results under mentor guidance',
      'Support code review, documentation, and testing',
    ],
    requirements: [
      'Solid programming fundamentals; Python preferred',
      'CS, AI, or ML coursework or self-directed projects',
      'Comfort with ambiguity and iteration',
      'Self-starter who can move from idea to execution',
    ],
  },
];

function CareersPage() {
  return (
    <div style={{ background: 'var(--surface-canvas)' }}>
      <section style={{ background: 'linear-gradient(135deg, rgba(75,61,219,0.1), rgba(252,249,244,0.95))', padding: '88px 24px 64px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: 9999, padding: '6px 14px 6px 8px', boxShadow: 'var(--shadow-sm)', marginBottom: 24 }}>
            <Badge tone="solid">Careers</Badge>
            <span style={{ fontFamily: SANS, fontSize: 13, color: 'var(--text-muted)' }}>Small team · founder-led · remote-friendly</span>
          </div>
          <h1 style={{ fontFamily: DISP, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 16px' }}>
            Help us build honest research mentorship.
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', margin: 0, maxWidth: 760 }}>
            We’re a small founder-led team building a more direct and practical approach to research mentorship for students and working professionals.
          </p>
        </div>
      </section>

      <section style={{ padding: '24px 24px 80px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {CAREER_ROLES.map((role) => (
              <div key={role.title} style={{ background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: '24px', padding: '28px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                  <Tag variant="indigo">Unpaid</Tag>
                  <Tag variant="mint">Remote</Tag>
                  <Tag variant="sun">Part-time</Tag>
                </div>
                <h2 style={{ fontFamily: DISP, fontSize: 24, fontWeight: 700, color: 'var(--ink-900)', margin: '0 0 12px' }}>{role.title}</h2>
                <p style={{ fontFamily: SANS, fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-muted)', margin: '0 0 18px' }}>{role.intro}</p>
                <div style={{ marginBottom: 18 }}>
                  <h3 style={{ fontFamily: SANS, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--indigo-600)', margin: '0 0 10px' }}>What you’ll do</h3>
                  <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--text-body)', fontFamily: SANS, fontSize: 14.5, lineHeight: 1.5 }}>
                    {role.duties.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div style={{ marginBottom: 22 }}>
                  <h3 style={{ fontFamily: SANS, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--indigo-600)', margin: '0 0 10px' }}>What we’re looking for</h3>
                  <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--text-body)', fontFamily: SANS, fontSize: 14.5, lineHeight: 1.5 }}>
                    {role.requirements.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <a
                  href={`mailto:hello@elvonlabs.com?subject=${encodeURIComponent(`${role.title} Application`)}`}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', padding: '12px 18px', background: 'var(--indigo-600)', color: 'var(--white)', textDecoration: 'none', fontFamily: SANS, fontSize: 14, fontWeight: 600 }}
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.7, color: 'var(--text-muted)', marginTop: 28 }}>
            To apply, email <a href="mailto:hello@elvonlabs.com" style={{ color: 'var(--indigo-600)', textDecoration: 'none' }}>hello@elvonlabs.com</a> with the role in the subject line.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function SiteFooter({ onNavigate }) {
  return (
    <footer id="contact" style={{ background: 'var(--surface-ink)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <Logo size={22} color="var(--white)" />
        <p style={{ fontFamily: SANS, color: '#9a93a8', fontSize: 13, margin: 0 }}>© {new Date().getFullYear()} Elvon Labs · Every student is the true author of their own work.</p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a href="/careers" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('careers'); }} style={{ fontFamily: SANS, color: '#c9c2d6', fontSize: 14, textDecoration: 'none' }}>Careers</a>
          <a href="mailto:hello@elvonlabs.com" style={{ fontFamily: SANS, color: '#c9c2d6', fontSize: 14, textDecoration: 'none' }}>hello@elvonlabs.com</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- App ---------------- */
function App() {
  const [route, setRoute] = useRoute();
  const nav = route === 'home' ? ["Who it's for", 'Programs', 'Method', 'Mentors', 'FAQ', 'Careers'] : ['Home', 'Careers'];

  const handleNavigate = (id) => {
    if (id === 'careers') {
      navigateTo('/careers');
      setRoute('careers');
      return;
    }
    if (id === 'home') {
      navigateTo('/');
      setRoute('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (route !== 'home') {
      navigateTo('/');
      setRoute('home');
      window.setTimeout(() => scrollToId(id), 0);
      return;
    }
    scrollToId(id);
  };

  return (
    <div style={{ background: 'var(--surface-canvas)' }}>
      <NavBar items={nav} active={route === 'home' ? '' : 'careers'} onNavigate={handleNavigate}
        cta={<Button size="sm" onClick={() => handleNavigate(route === 'home' ? 'apply' : 'home')}>{route === 'home' ? 'Apply' : 'Back home'}</Button>} />
      <main>
        {route === 'careers' ? (
          <CareersPage />
        ) : (
          <>
            <Hero />
            <Audience />
            <Differentiators />
            <Programs />
            <Method />
            <Founder />
            <Faq />
            <Apply />
          </>
        )}
      </main>
      <SiteFooter onNavigate={handleNavigate} />
    </div>
  );
}

window.ElvonSite = { App };

const _root = document.getElementById('root');
if (_root) ReactDOM.createRoot(_root).render(<App />);
