import studyVisaImg from '../assets/StudyVisa.png'
import canadaImg from '../assets/Canada.png'
import australiaImg from '../assets/Austraila.png'
import ukImg from '../assets/UK.png'
import usImg from '../assets/US.png'
import nzImg from '../assets/Newzeland.png'
import europeImg from '../assets/Europe.png'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import './StudyVisa.css'

const programs = [
  {
    img: canadaImg,
    name: 'Canada',
    visa: 'Student Permit',
    duration: '1–4 years',
    desc: 'Study at top-ranked Canadian universities with post-graduation rights through PGWP.',
    tag: 'Most Popular'
  },
  {
    img: australiaImg,
    name: 'Australia',
    visa: 'Student Visa (500)',
    duration: '2–4 years',
    desc: 'World-class education with study rights during and after your degree.',
    tag: 'Top Rated'
  },
  {
    img: ukImg,
    name: 'United Kingdom',
    visa: 'Student Visa',
    duration: '1–3 years',
    desc: 'Prestigious UK degrees with the Graduate Route visa for 2 years post-study.',
    tag: ''
  },
  {
    img: usImg,
    name: 'United States',
    visa: 'F-1 Student Visa',
    duration: '2–4 years',
    desc: 'Access to Ivy League and top US universities with OPT opportunities.',
    tag: ''
  },
  {
    img: nzImg,
    name: 'New Zealand',
    visa: 'Student Visa',
    duration: '1–3 years',
    desc: 'Safe, welcoming country with quality education and pathways to residency.',
    tag: ''
  },
  {
    img: europeImg,
    name: 'Europe',
    visa: 'Student Visa',
    duration: '2–3 years',
    desc: 'Low or no tuition fees at public universities with strong career prospects in Europe.',
    tag: ''
  }
]

const steps = [
  { step: '01', title: 'Free Eligibility Check', desc: 'We assess your academic background, language scores and shortlist best-fit universities.' },
  { step: '02', title: 'University Selection', desc: 'Tailored list of programs matching your goals, budget and eligibility.' },
  { step: '03', title: 'Application & SOP', desc: 'We prepare and submit your university applications with a compelling Statement of Purpose.' },
  { step: '04', title: 'Offer Letter & Fees', desc: 'Guidance on accepting offer, paying tuition deposit and getting your COE / CAS.' },
  { step: '05', title: 'Visa Filing', desc: 'Complete visa documentation, financial proofs, interview prep and submission.' },
  { step: '06', title: 'Pre-Departure', desc: 'Accommodation, forex, travel briefing — we prepare you for everything.' }
]

const faqs = [
  {
    q: 'What IELTS score do I need?',
    a: 'Most universities require 6.0–6.5 overall. Some accept PTE or TOEFL equivalents. We help you choose programs matching your current score.'
  },
  {
    q: 'Can I stay while studying abroad?',
    a: 'Yes — most countries allow part-time opportunities during studies. Canada, Australia and UK allow full-time during breaks.'
  },
  {
    q: 'What is the typical processing time?',
    a: 'University admissions take 4–8 weeks. Student visa processing is 4–12 weeks depending on the country.'
  },
  {
    q: 'Can I bring my family?',
    a: 'Yes. Spouse and dependant visas are available for most countries. We handle the entire family application together.'
  }
]

function StudyVisa() {
  const [showPopup, setShowPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'student',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! We will contact you soon.')
    setShowPopup(false)
    setFormData({ name: '', email: '', phone: '', service: 'student', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="sv-page">
      <Helmet>
        <title>Study Visa — Global Visa Connect</title>
        <meta name="description" content="Expert student visa guidance for Canada, Australia, UK, USA and more. 5,800+ students placed. 97% visa success rate." />
      </Helmet>

      {/* Hero */}
      <section className="sv-hero" style={{ backgroundImage: `url(${studyVisaImg})` }}>
        <div className="sv-hero-overlay" />
        <div className="sv-container sv-hero-content">
          <span className="sv-badge">STUDENT VISA SERVICES</span>
          <h1>Study Abroad<br />Your Future Starts Here</h1>
          <p>
            From university selection to visa approval — we handle every step so
            you can focus on choosing where to build your future.
          </p>
          <div className="sv-hero-btns">
            <a href="#contact" className="sv-btn sv-btn-primary">Book Free Consultation →</a>
            <a href="#programs" className="sv-btn sv-btn-outline">View Destinations</a>
          </div>
          <div className="sv-hero-stats">
            <div className="sv-stat"><strong>5,800+</strong><span>Students Placed</span></div>
            <div className="sv-stat"><strong>40+</strong><span>Universities</span></div>
            <div className="sv-stat"><strong>97%</strong><span>Visa Success</span></div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="sv-programs">
        <div className="sv-container">
          <div className="sv-section-header">
            <span className="sv-label">Top Destinations</span>
            <h2>Study Visa Programs</h2>
            <p>Expert guidance for every major study destination</p>
          </div>
          <div className="sv-programs-grid">
            {programs.map((p, i) => (
              <div key={i} className="sv-program-card">
                <div className="sv-dest-img-wrap">
                  <img src={p.img} alt={p.name} className="sv-dest-img" />
                  {p.tag && <span className="sv-dest-tag">{p.tag}</span>}
                </div>
                <div className="sv-dest-body">
                  <h3>{p.name}</h3>
                  <div className="sv-program-meta">
                    <span>{p.visa}</span>
                    <span>·</span>
                    <span>{p.duration}</span>
                  </div>
                  <p>{p.desc}</p>
                  <button onClick={() => setShowPopup(true)} className="sv-link">Apply Now →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sv-process">
        <div className="sv-container">
          <div className="sv-section-header">
            <span className="sv-label">How It Works</span>
            <h2>Our Step-by-Step Process</h2>
            <p>A clear, guided journey from dream to departure</p>
          </div>
          <div className="sv-steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="sv-step">
                <div className="sv-step-num">{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="sv-why">
        <div className="sv-container sv-why-grid">
          <div className="sv-why-content">
            <span className="sv-label-red">WHY CHOOSE US</span>
            <h2>More than a visa agent — a lifelong academic partner.</h2>
            <ul className="sv-why-list">
              <li>
                <div className="sv-why-icon">✓</div>
                <div>
                  <h4>Certified Education Counsellors</h4>
                  <p>ICCRC-regulated advisors with 18+ years of overseas admissions experience.</p>
                </div>
              </li>
              <li>
                <div className="sv-why-icon">🎯</div>
                <div>
                  <h4>Personalised University Shortlisting</h4>
                  <p>We match programs to your profile, budget and career goals — not a generic list.</p>
                </div>
              </li>
              <li>
                <div className="sv-why-icon">📄</div>
                <div>
                  <h4>End-to-End Documentation</h4>
                  <p>SOP, LORs, financial docs, visa forms — reviewed and submitted by our team.</p>
                </div>
              </li>
              <li>
                <div className="sv-why-icon">🌐</div>
                <div>
                  <h4>Post-Landing Support</h4>
                  <p>Accommodation, bank account setup, SIM — we stay with you after you land.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="sv-why-visual">
            <div className="sv-why-card">
              <div className="sv-why-card-icon">🎓</div>
              <h3>5,800+</h3>
              <p>Students successfully placed in universities across 6 countries</p>
            </div>
            <div className="sv-why-card sv-why-card-accent">
              <div className="sv-why-card-icon">⭐</div>
              <h3>4.9 / 5</h3>
              <p>Average rating from students and parents across all our branches</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sv-faq">
        <div className="sv-container">
          <div className="sv-section-header">
            <span className="sv-label">FAQ</span>
            <h2>Common Questions</h2>
            <p>Everything you need to know before you apply</p>
          </div>
          <div className="sv-faq-grid">
            {faqs.map((f, i) => (
              <div key={i} className="sv-faq-item">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="sv-cta">
        <div className="sv-container sv-cta-content">
          <h2>Ready to Apply for Your Student Visa?</h2>
          <p>Book a free session with our certified education counsellors today.</p>
          <div className="sv-cta-btns">
            <a href="tel:+918699078400" className="sv-btn sv-btn-primary">📞 Call Us Now</a>
            <a href="mailto:info@globalvisaservices.com" className="sv-btn sv-btn-secondary">✉️ Send Inquiry</a>
          </div>
        </div>
      </section>

      {/* Contact Form Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
            <h2>Apply Now</h2>
            <p>Fill out the form and our team will contact you within 24 hours</p>
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 "
                />
              </div>
              <div className="form-group">
                <label>Service *</label>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="student">Student Visa</option>
                  <option value="visitor">Visitor Visa</option>
                  <option value="pr">Permanent Residency</option>
                  <option value="business">Business Immigration</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your plans..."
                ></textarea>
              </div>
              <button type="submit" className="sv-btn sv-btn-primary" style={{width: '100%'}}>
                Submit Application →
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default StudyVisa
