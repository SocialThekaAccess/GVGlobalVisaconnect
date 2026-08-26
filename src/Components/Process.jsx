import { Helmet } from 'react-helmet-async'
import processImg from '../assets/Process.png'
import './Process.css'

const stages = [
  {
    step: '01',
    title: 'Free Consultation',
    desc: 'Book a free session with our certified advisor. We assess your profile, goals and eligibility — no pressure, just honest advice.',
    icon: '🎯',
    details: ['Profile & background review', 'Visa category recommendation', 'Estimated timeline & costs', 'Q&A with licensed consultant']
  },
  {
    step: '02',
    title: 'Profile Evaluation',
    desc: 'A deep-dive assessment of your qualifications, work experience, language scores and immigration history to identify the strongest pathway.',
    icon: '🔍',
    details: ['Points calculation (CRS, skills assessment)', 'Gap analysis & improvement plan', 'Country & program shortlisting', 'Written evaluation report']
  },
  {
    step: '03',
    title: 'Documentation',
    desc: 'We prepare, review and organise every document required for your application — nothing gets missed, nothing gets submitted twice.',
    icon: '📋',
    details: ['Document checklist preparation', 'SOP & cover letter drafting', 'Credential assessment guidance', 'Financial documentation support']
  },
  {
    step: '04',
    title: 'Application Submission',
    desc: 'Your dedicated case manager submits the complete application with a precision-checked file — maximising approval chances from day one.',
    icon: '📤',
    details: ['Final application review', 'Online portal submission', 'Fee payment guidance', 'Submission confirmation & receipt']
  },
  {
    step: '05',
    title: 'Tracking & Follow-Up',
    desc: 'We monitor your application status in real time and communicate with immigration authorities on your behalf when needed.',
    icon: '📡',
    details: ['Real-time status updates', 'Additional document requests handled', 'Embassy/consulate liaison', 'Regular progress reports']
  },
  {
    step: '06',
    title: 'Visa Approval & Beyond',
    desc: 'Once approved, we guide you through travel preparation, pre-departure briefings and post-landing settlement support.',
    icon: '✈️',
    details: ['Visa stamp & document collection', 'Pre-departure briefing', 'Accommodation & forex guidance', 'Post-landing support checklist']
  }
]

const faqs = [
  { q: 'How long does the entire process take?', a: 'It depends on the visa type and country. Student visas typically take 8–14 weeks, work permits 3–6 months, and PR applications 6–18 months. We give you a written timeline at your consultation.' },
  { q: 'What documents do I need to start?', a: 'Typically: passport, educational certificates, work experience letters, language test scores and financial statements. Your case manager will give you a personalised checklist.' },
  { q: 'Do I need to visit your office?', a: 'No — our entire process can be handled online. We use secure portals for document sharing and conduct consultations via video call.' },
  { q: 'What if my application gets refused?', a: 'We analyse the refusal reason, advise on appeal or reapplication options, and prepare a stronger case. Our 98% approval rate means refusals are rare — but we stand by you if it happens.' },
  { q: 'How much does it cost?', a: 'We charge fixed, transparent fees with no hidden charges. Pricing depends on visa type and complexity. You receive a written fee agreement before we begin any work.' },
  { q: 'Can I track my application myself?', a: 'Yes — most immigration portals allow applicants to check status directly. We also provide regular updates and are available for queries throughout the process.' }
]

function Process() {
  return (
    <div className="pr-page">
      <Helmet>
        <title>Our Process — Global Visa Connect</title>
        <meta name="description" content="A clear 6-step immigration process from free consultation to visa approval. Transparent, expert-led and designed around your goals." />
      </Helmet>

      {/* Hero */}
      <section className="pr-hero" style={{ backgroundImage: `url(${processImg})` }}>
        <div className="pr-hero-overlay" />
        <div className="pr-container pr-hero-content">
          <span className="pr-badge">HOW IT WORKS</span>
          <h1>A Process Built<br /><span>for Your Success</span></h1>
          <p>
            Six clear steps from your first consultation to your visa approval —
            with a dedicated expert guiding you at every stage.
          </p>
          <div className="pr-hero-stats">
            <div className="pr-stat"><strong>98%</strong><span>Approval Rate</span></div>
            <div className="pr-stat"><strong>18+</strong><span>Years Experience</span></div>
            <div className="pr-stat"><strong>12,400+</strong><span>Cases Handled</span></div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="pr-steps">
        <div className="pr-container">
          <div className="pr-section-header">
            <span className="pr-label">Step by Step</span>
            <h2>Your Immigration Journey</h2>
            <p>Every case is different — but our process is always the same: thorough, transparent and focused on results.</p>
          </div>
          <div className="pr-steps-list">
            {stages.map((s, i) => (
              <div key={i} className={`pr-step-item ${i % 2 === 1 ? 'reverse' : ''}`}>
                <div className="pr-step-visual">
                  <div className="pr-step-num">{s.step}</div>
                  <div className="pr-step-icon">{s.icon}</div>
                  {i < stages.length - 1 && <div className="pr-step-line" />}
                </div>
                <div className="pr-step-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="pr-step-details">
                    {s.details.map((d, j) => (
                      <li key={j}><span>✓</span>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline strip */}
      <section className="pr-timeline-strip">
        <div className="pr-container">
          <h2>Typical Timelines</h2>
          <div className="pr-timeline-grid">
            <div className="pr-timeline-card">
              <div className="pr-tl-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L1 9L12 15L23 9L12 3Z"/><path d="M5 11.09V17C5 17 7.5 20 12 20C16.5 20 19 17 19 17V11.09"/><path d="M23 9V15"/></svg>
              </div>
              <h4>Student Visa</h4>
              <span>8 – 14 weeks</span>
            </div>
            <div className="pr-timeline-card">
              <div className="pr-tl-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
              </div>
              <h4>Work Permit</h4>
              <span>3 – 6 months</span>
            </div>
            <div className="pr-timeline-card">
              <div className="pr-tl-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3L3 10.5L10.5 13.5M21 3L13.5 21L10.5 13.5M21 3L10.5 13.5"/></svg>
              </div>
              <h4>Visitor Visa</h4>
              <span>2 – 6 weeks</span>
            </div>
            <div className="pr-timeline-card">
              <div className="pr-tl-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12H22"/><path d="M12 2C9.5 6 8 9 8 12C8 15 9.5 18 12 22"/><path d="M12 2C14.5 6 16 9 16 12C16 15 14.5 18 12 22"/></svg>
              </div>
              <h4>Permanent Residency</h4>
              <span>6 – 18 months</span>
            </div>
            <div className="pr-timeline-card">
              <div className="pr-tl-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 21V19C3 16.79 5.24 15 8 15H10C12.76 15 15 16.79 15 19V21"/><path d="M16 3.13C17.16 3.35 18 4.38 18 5.63C18 6.87 17.16 7.9 16 8.12"/><path d="M21 21V19C20.99 17.76 20.15 16.73 19 16.5"/></svg>
              </div>
              <h4>Family Sponsorship</h4>
              <span>4 – 12 months</span>
            </div>
            <div className="pr-timeline-card">
              <div className="pr-tl-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9L12 2L21 9V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9Z"/><path d="M9 21V12H15V21"/></svg>
              </div>
              <h4>Business Immigration</h4>
              <span>6 – 18 months</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pr-faq">
        <div className="pr-container">
          <div className="pr-section-header">
            <span className="pr-label">FAQ</span>
            <h2>Common Questions</h2>
            <p>Everything you need to know about how we work</p>
          </div>
          <div className="pr-faq-grid">
            {faqs.map((f, i) => (
              <div key={i} className="pr-faq-item">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pr-cta">
        <div className="pr-container pr-cta-content">
          <h2>Ready to Begin?</h2>
          <p>Start with a free consultation — we'll map out your exact pathway in 30 minutes.</p>
          <div className="pr-cta-btns">
            <a href="/contact" className="pr-btn pr-btn-primary">Book Free Consultation →</a>
            <a href="tel:+918699078400" className="pr-btn pr-btn-secondary">📞 +91 8699078400</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Process
