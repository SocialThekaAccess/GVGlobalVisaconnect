import './WorkVisa.css'

const programs = [
  {
    country: '🇨🇦',
    name: 'Canada',
    visa: 'LMIA / Express Entry',
    duration: '1–3 years',
    desc: 'Canada\'s open work permit and LMIA pathways offer a direct route to PR for skilled workers.'
  },
  {
    country: '🇦🇺',
    name: 'Australia',
    visa: 'TSS 482 / Employer Sponsored',
    duration: '2–4 years',
    desc: 'Skilled workers can enter Australia through employer-sponsored visas with PR pathway.'
  },
  {
    country: '🇬🇧',
    name: 'United Kingdom',
    visa: 'Skilled Worker Visa',
    duration: '5 years',
    desc: 'UK Skilled Worker visa for eligible roles with a licensed sponsor and salary threshold.'
  },
  {
    country: '🇺🇸',
    name: 'United States',
    visa: 'H-1B / L-1 Visa',
    duration: '3–6 years',
    desc: 'Specialty occupation and intra-company transfer visas for professionals and executives.'
  },
  {
    country: '🇩🇪',
    name: 'Germany',
    visa: 'EU Blue Card / Work Visa',
    duration: '2–4 years',
    desc: 'Germany\'s EU Blue Card for qualified professionals with a job offer and recognised degree.'
  },
  {
    country: '🇳🇿',
    name: 'New Zealand',
    visa: 'Accredited Employer Work Visa',
    duration: '2–3 years',
    desc: 'New Zealand\'s streamlined work visa for roles with accredited employers and skill shortages.'
  }
]

const steps = [
  { step: '01', title: 'Profile Assessment', desc: 'We evaluate your work experience, qualifications and identify the best-fit work visa pathway.' },
  { step: '02', title: 'Job Offer Support', desc: 'Guidance on finding employer sponsors and connecting with recruitment partners abroad.' },
  { step: '03', title: 'Documentation', desc: 'Credential assessment, police clearance, reference letters and all supporting documents.' },
  { step: '04', title: 'Visa Application', desc: 'We prepare and submit your work visa application with a strong cover letter.' },
  { step: '05', title: 'Interview Prep', desc: 'Mock interviews, embassy briefings and tailored preparation for your visa interview.' },
  { step: '06', title: 'Post-Approval', desc: 'Travel planning, settlement guidance and support for your first weeks abroad.' }
]

const categories = [
  { icon: '💻', title: 'IT & Technology', desc: 'Software engineers, data scientists, cybersecurity specialists and IT managers.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Doctors, nurses, allied health professionals and medical researchers.' },
  { icon: '⚙️', title: 'Engineering', desc: 'Civil, mechanical, electrical and structural engineers across all sectors.' },
  { icon: '💰', title: 'Finance & Accounting', desc: 'CPAs, financial analysts, investment bankers and actuaries.' },
  { icon: '🎓', title: 'Education', desc: 'Teachers, lecturers and academic researchers for international institutions.' },
  { icon: '🏗️', title: 'Trades & Construction', desc: 'Electricians, plumbers, welders and skilled construction workers.' }
]

const faqs = [
  {
    q: 'Do I need a job offer before applying?',
    a: 'Most work visas require a job offer from a licensed employer. However, some pathways like Canada\'s Express Entry allow you to apply without one.'
  },
  {
    q: 'Will my qualifications be recognised abroad?',
    a: 'We guide you through credential assessment bodies (WES, Engineers Australia, etc.) to ensure your qualifications are recognised in your target country.'
  },
  {
    q: 'Can my family come with me on a work visa?',
    a: 'Yes — most work visas allow spouse and dependent children to accompany you. Spouses often receive open work permits too.'
  },
  {
    q: 'Can a work visa lead to permanent residency?',
    a: 'Yes. Canada, Australia, New Zealand, UK and Germany all have clear PR pathways for skilled workers after 2–5 years of employment.'
  }
]

function WorkVisa() {
  return (
    <div className="wv-page">

      {/* Hero */}
      <section className="wv-hero">
        <div className="wv-hero-overlay" />
        <div className="wv-container wv-hero-content">
          <span className="wv-badge">WORK PERMIT SERVICES</span>
          <h1>Work Abroad.<br /><span>Build a Global Career.</span></h1>
          <p>
            From job offer to visa approval — we handle every step of your
            international work permit with precision and care.
          </p>
          <div className="wv-hero-btns">
            <a href="#contact" className="wv-btn wv-btn-primary">Book Free Consultation →</a>
            <a href="#programs" className="wv-btn wv-btn-outline">View Destinations</a>
          </div>
          <div className="wv-hero-stats">
            <div className="wv-stat"><strong>4,200+</strong><span>Workers Placed</span></div>
            <div className="wv-stat"><strong>6</strong><span>Countries</span></div>
            <div className="wv-stat"><strong>96%</strong><span>Visa Success</span></div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="wv-categories">
        <div className="wv-container">
          <div className="wv-section-header">
            <span className="wv-label">We Cover All Industries</span>
            <h2>Job Categories We Specialise In</h2>
            <p>Work permit support across all major skilled occupations</p>
          </div>
          <div className="wv-categories-grid">
            {categories.map((c, i) => (
              <div key={i} className="wv-category-card">
                <div className="wv-category-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="wv-programs">
        <div className="wv-container">
          <div className="wv-section-header">
            <span className="wv-label">Top Destinations</span>
            <h2>Work Visa Programs</h2>
            <p>Expert guidance for every major work destination</p>
          </div>
          <div className="wv-programs-grid">
            {programs.map((p, i) => (
              <div key={i} className="wv-program-card">
                <div className="wv-program-flag">{p.country}</div>
                <div className="wv-program-info">
                  <h3>{p.name}</h3>
                  <div className="wv-program-meta">
                    <span>{p.visa}</span>
                    <span>·</span>
                    <span>{p.duration}</span>
                  </div>
                  <p>{p.desc}</p>
                </div>
                <a href="#contact" className="wv-link">Apply Now →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="wv-process">
        <div className="wv-container">
          <div className="wv-section-header">
            <span className="wv-label">How It Works</span>
            <h2>Our Step-by-Step Process</h2>
            <p>A clear path from your current job to your dream career abroad</p>
          </div>
          <div className="wv-steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="wv-step">
                <div className="wv-step-num">{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wv-faq">
        <div className="wv-container">
          <div className="wv-section-header">
            <span className="wv-label">FAQ</span>
            <h2>Common Questions</h2>
            <p>Everything you need to know before you apply</p>
          </div>
          <div className="wv-faq-grid">
            {faqs.map((f, i) => (
              <div key={i} className="wv-faq-item">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="wv-cta">
        <div className="wv-container wv-cta-content">
          <h2>Ready to Start Your Work Visa Journey?</h2>
          <p>Book a free session with our certified immigration advisors today.</p>
          <div className="wv-cta-btns">
            <a href="tel:+918699078400" className="wv-btn wv-btn-primary">📞 Call Us Now</a>
            <a href="mailto:info@globalvisaservices.com" className="wv-btn wv-btn-secondary">✉️ Send Inquiry</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default WorkVisa
