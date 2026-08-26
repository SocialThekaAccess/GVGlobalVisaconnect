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
    icon: '🏅',
    title: 'Licensed & Regulated',
    desc: 'All our consultants are ICCRC and MARA registered — fully licensed, fully accountable.'
  },
  {
    icon: '🤝',
    title: 'Client First, Always',
    desc: 'We treat every case as if it were our own. Your goals are our goals, your success is our success.'
  },
  {
    icon: '🔍',
    title: 'Radical Transparency',
    desc: 'Fixed fees, written timelines, clear communication. No surprises, no hidden charges — ever.'
  },
  {
    icon: '🌐',
    title: 'Global Expertise',
    desc: 'Decades of combined casework across Canada, Australia, UK, USA, New Zealand and Europe.'
  },
  {
    icon: '👤',
    title: 'Dedicated Case Manager',
    desc: 'One expert owns your file end to end. Not a call centre, not a rotating team — one person.'
  },
  {
    icon: '🚀',
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
    role: 'Work Permit Specialist',
    exp: '10+ years',
    cred: 'ICCRC Member',
    desc: 'Rajiv specialises in LMIA, Express Entry and employer-sponsored pathways, with an unbroken 96% first-attempt success rate.'
  }
]

const milestones = [
  { year: '2008', event: 'Founded in Chandigarh with a team of 3 advisors and a mission to transform immigration consulting in India.' },
  { year: '2012', event: 'Crossed 1,000 successful visa applications. Expanded to student visa and work permit categories.' },
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
        <div className="au-container au-hero-content">
          <span className="au-badge">ABOUT US</span>
          <h1>Trusted by Thousands<br /><span>Built on Integrity</span></h1>
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

      {/* Team */}
      <section className="au-team">
        <div className="au-container">
          <div className="au-section-header">
            <span className="au-label">The People Behind Your Case</span>
            <h2>Meet Our Team</h2>
            <p>Licensed experts who treat your case as their own</p>
          </div>
          <div className="au-team-grid">
            {team.map((t, i) => (
              <div key={i} className="au-team-card">
                <div className="au-team-avatar">
                  {t.name.charAt(0)}
                </div>
                <div className="au-team-info">
                  <h3>{t.name}</h3>
                  <span className="au-team-role">{t.role}</span>
                  <div className="au-team-meta">
                    <span className="au-team-tag">{t.exp}</span>
                    <span className="au-team-tag">{t.cred}</span>
                  </div>
                  <p>{t.desc}</p>
                </div>
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
          <h2>Ready to Work With Us?</h2>
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
