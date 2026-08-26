import serviceImg from '../assets/Service.png'
import { Helmet } from 'react-helmet-async'
import './Service.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L1 9L12 15L23 9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 11.09V17C5 17 7.5 20 12 20C16.5 20 19 17 19 17V11.09" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Student Visa',
    desc: 'Expert guidance for study permits at top universities in Canada, Australia, UK, USA and more.',
    points: ['University shortlisting', 'SOP & document prep', 'Visa filing & interview prep', 'Post-landing support']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 3L3 10.5L10.5 13.5M21 3L13.5 21L10.5 13.5M21 3L10.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Visitor Visa',
    desc: 'Hassle-free tourist and visitor visa processing for individuals, couples and families.',
    points: ['Travel history review', 'Financial documentation', 'Cover letter drafting', 'Fast-track processing']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Business Immigration',
    desc: 'Investor and entrepreneur visa solutions to help you expand your business internationally.',
    points: ['Investor visa filing', 'Entrepreneur permits', 'Business plan review', 'Intra-company transfers']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 21V19C3 16.79 5.24 15 8 15H10C12.76 15 15 16.79 15 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 3.13C17.16 3.35 18 4.38 18 5.63C18 6.87 17.16 7.9 16 8.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 21V19C20.99 17.76 20.15 16.73 19 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Family Sponsorship',
    desc: 'Reunite with your loved ones through spouse, dependent and family reunification visas.',
    points: ['Spousal sponsorship', 'Dependent child visas', 'Parent & grandparent PR', 'Relationship documentation']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 2C9.5 6 8 9 8 12C8 15 9.5 18 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 2C14.5 6 16 9 16 12C16 15 14.5 18 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Permanent Residency',
    desc: 'Complete PR and citizenship application support for Canada, Australia, New Zealand and more.',
    points: ['Express Entry / SkillSelect', 'Points calculation & profile', 'PR application filing', 'Citizenship guidance']
  }
]

const stats = [
  { value: '18+', label: 'Years of Practice' },
  { value: '12,400+', label: 'Successful Applications' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Approval Rate' }
]

function Service() {
  return (
    <div className="sr-page">
      <Helmet>
        <title>Services — Global Visa Connect</title>
        <meta name="description" content="Complete immigration services — student visa, visitor visa, PR, family sponsorship and business immigration." />
      </Helmet>

      {/* Hero */}
      <section className="sr-hero" style={{ backgroundImage: `url(${serviceImg})` }}>
        <div className="sr-hero-overlay" />
        <div className="sr-container sr-hero-content">
          <span className="sr-badge">OUR SERVICES</span>
          <h1>Complete Immigration<br /><span>Solutions All in One Place</span></h1>
          <p>
            From student permits to permanent residency — we offer end-to-end
            immigration services across every major category and destination.
          </p>
          <div className="sr-hero-btns">
            <a href="#contact" className="sr-btn sr-btn-primary">Book Free Consultation →</a>
            <a href="#services-list" className="sr-btn sr-btn-outline">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sr-stats">
        <div className="sr-container">
          <div className="sr-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="sr-stat-item">
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="services-list" className="sr-services">
        <div className="sr-container">
          <div className="sr-section-header">
            <span className="sr-label">What We Offer</span>
            <h2>All Immigration Services</h2>
            <p>Tailored solutions for every stage of your immigration journey</p>
          </div>
          <div className="sr-services-grid">
            {services.map((s, i) => (
              <div key={i} className="sr-service-card">
                <div className="sr-service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="sr-service-points">
                  {s.points.map((pt, j) => (
                    <li key={j}>
                      <span className="sr-check">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="sr-link">Get Started →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Strip */}
      <section className="sr-why-strip">
        <div className="sr-container">
          <div className="sr-why-strip-grid">
            <div className="sr-why-strip-item">
              <div className="sr-why-icon">🏅</div>
              <h4>ICCRC & MARA Registered</h4>
              <p>Licensed and regulated immigration consultants you can trust.</p>
            </div>
            <div className="sr-why-strip-item">
              <div className="sr-why-icon">📋</div>
              <h4>Fixed Fees, No Surprises</h4>
              <p>Transparent pricing with written timelines from day one.</p>
            </div>
            <div className="sr-why-strip-item">
              <div className="sr-why-icon">👤</div>
              <h4>Dedicated Case Manager</h4>
              <p>One expert handles your file end to end — never a call centre.</p>
            </div>
            <div className="sr-why-strip-item">
              <div className="sr-why-icon">🌐</div>
              <h4>40+ Countries Covered</h4>
              <p>Expert guidance for every major immigration destination worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="sr-cta">
        <div className="sr-container sr-cta-content">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Book a free consultation and our experts will guide you to the right pathway.</p>
          <div className="sr-cta-btns">
            <a href="tel:+918699078400" className="sr-btn sr-btn-white">📞 Call Us Now</a>
            <a href="mailto:info@globalvisaservices.com" className="sr-btn sr-btn-secondary">✉️ Send Inquiry</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Service
