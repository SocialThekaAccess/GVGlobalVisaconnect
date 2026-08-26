import consultantImg from '../assets/consulatant.png'
import heroImg from '../assets/HerosectionImg.png'
import { Helmet } from 'react-helmet-async'
import './AboutUs.css'

const stats = [
  { value: '18+', label: 'Years of Experience' },
  { value: '12,400+', label: 'Successful Applications' },
  { value: '98%', label: 'Visa Approval Rate' },
  { value: '40+', label: 'Countries Served' }
]

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Licensed & Regulated',
    desc: 'All our consultants are ICCRC and MARA registered — fully licensed, fully accountable.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8V14M17 11H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Client First, Always',
    desc: 'We treat every case as if it were our own. Your goals are our goals, your success is our success.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Radical Transparency',
    desc: 'Fixed fees, written timelines, clear communication. No surprises, no hidden charges — ever.'
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
    title: 'Global Expertise',
    desc: 'Decades of combined casework across Canada, Australia, UK, USA, New Zealand and Europe.'
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
    title: 'Dedicated Case Manager',
    desc: 'One expert owns your file end to end. Not a call centre, not a rotating team — one person.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Results-Driven',
    desc: '98% approval rate built on meticulous documentation, deep knowledge and relentless follow-up.'
  }
]

const team = [
  {
    name: 'Harpreet Singh',
    role: 'Founder & Senior Immigration Consultant',
    exp: '18+ years',
    cred: 'ICCRC Registered',
    desc: 'Harpreet founded Global Visa Connect in 2008 with a mission to make immigration honest, simple and accessible for every family.'
  },
  {
    name: 'Simran Kaur',
    role: 'Head of Student Visa Division',
    exp: '12+ years',
    cred: 'MARA Registered',
    desc: 'Simran has personally guided 3,200+ students to universities in Canada, Australia and the UK — a trusted mentor for every applicant.'
  },
  {
    name: 'Rajiv Mehta',
    role: 'PR Specialist',
    exp: '10+ years',
    cred: 'ICCRC Member',
    desc: 'Rajiv specialises in LMIA, Express Entry and employer-sponsored pathways, with an unbroken 96% first-attempt success rate.'
  }
]

const milestones = [
  { year: '2008', event: 'Founded in Chandigarh with a team of 3 advisors and a mission to transform immigration consulting in India.' },
  { year: '2012', event: 'Crossed 1,000 successful visa applications. Expanded to student visa and PR categories.' },
  { year: '2016', event: 'Opened second office in Delhi. Achieved ICCRC and MARA dual registration.' },
  { year: '2019', event: 'Launched dedicated Australia and New Zealand immigration division. 5,000+ cases milestone.' },
  { year: '2022', event: 'Recognised as one of North India\'s top immigration consultancies. 10,000+ successful applications.' },
  { year: '2024', event: '12,400+ successful applications across 40 countries. 98% approval rate maintained.' }
]

function AboutUs() {
  return (
    <div className="au-page">
      <Helmet>
        <title>About Us — Global Visa Connect</title>
        <meta name="description" content="18+ years of immigration expertise. ICCRC & MARA registered. 12,400+ successful applications. Trusted by families across India." />
      </Helmet>

      {/* Hero */}
      <section className="au-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="au-hero-overlay" />
        <div className="au-container">
          <div className="au-hero-content">
            <span className="au-badge">ABOUT US</span>
            <h1>Trusted by Thousands<br />Built on Integrity</h1>
            <p>
              Since 2008, Global Visa Connect has helped over 12,400 students,
              professionals and families build their futures abroad — with honesty,
              expertise and genuine care at every step.
            </p>
            <div className="au-hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="au-hero-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="au-story">
        <div className="au-container au-story-grid">
          <div className="au-story-img">
            <img src={consultantImg} alt="Our Story" />
            <div className="au-story-badge">
              <strong>Since 2008</strong>
              <span>Chandigarh, India</span>
            </div>
          </div>
          <div className="au-story-content">
            <span className="au-label-red">OUR STORY</span>
            <h2>From a small office to 12,400+ success stories.</h2>
            <p>
              Global Visa Connect was founded in 2008 by a team of passionate immigration
              professionals who believed that navigating the immigration system shouldn't
              require luck — it should require expertise.
            </p>
            <p>
              What started as a small consultancy in Chandigarh has grown into one of
              North India's most trusted immigration firms, with a reputation built on
              one thing: delivering results with complete transparency.
            </p>
            <p>
              We have never chased volume over quality. Every file we accept gets our
              full attention, a dedicated case manager, and a strategy built specifically
              for that applicant's profile and goals.
            </p>
            <a href="/contact" className="au-btn au-btn-primary">Start Your Journey →</a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="au-values">
        <div className="au-container">
          <div className="au-section-header">
            <span className="au-label">What Drives Us</span>
            <h2>Our Core Values</h2>
            <p>The principles that guide every case, every conversation, every decision</p>
          </div>
          <div className="au-values-grid">
            {values.map((v, i) => (
              <div key={i} className="au-value-card">
                <div className="au-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="au-timeline">
        <div className="au-container">
          <div className="au-section-header">
            <span className="au-label">Our Journey</span>
            <h2>16 Years of Milestones</h2>
            <p>From our first client to 12,400+ success stories</p>
          </div>
          <div className="au-timeline-list">
            {milestones.map((m, i) => (
              <div key={i} className="au-timeline-item">
                <div className="au-timeline-year">{m.year}</div>
                <div className="au-timeline-dot" />
                <div className="au-timeline-text">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="au-cta">
        <div className="au-container au-cta-content">
          <h2>Ready to Start With Us?</h2>
          <p>Join 12,400+ clients who trusted Global Visa Connect with their future.</p>
          <div className="au-cta-btns">
            <a href="/contact" className="au-btn au-btn-primary">Book Free Consultation →</a>
            <a href="tel:+918699078400" className="au-btn au-btn-secondary">📞 +91 8699078400</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs
