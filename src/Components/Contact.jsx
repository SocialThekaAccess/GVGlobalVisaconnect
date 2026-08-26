import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Contact.css'

const offices = [
  {
    city: 'Chandigarh',
    address: 'SCO 85-86, 4th Floor, Sector 34A',
    phone: '+91 8699078400',
    email: 'info@globalvisaservices.com',
    hours: 'Mon–Sat: 9:00 AM – 7:00 PM',
    primary: true
  }
]

const faqs = [
  { q: 'How long does a consultation take?', a: 'Our free initial consultation is 30–45 minutes. We assess your profile and recommend the best pathway.' },
  { q: 'Is the consultation really free?', a: 'Yes — 100% free, no obligation. We believe in earning your trust before asking for your business.' },
  { q: 'Can I consult online?', a: 'Absolutely. We offer video consultations via Google Meet or Zoom for clients across India and abroad.' },
  { q: 'How quickly will you respond?', a: 'We respond to all inquiries within 2–4 business hours. Urgent cases are prioritised same day.' }
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="ct-page">
      <Helmet>
        <title>Contact Us — Global Visa Connect</title>
        <meta name="description" content="Book a free immigration consultation with our certified advisors. Chandigarh office. Response within 4 hours." />
      </Helmet>

      {/* Hero */}
      <section className="ct-hero">
        <div className="ct-hero-overlay" />
        <div className="ct-container ct-hero-content">
          <span className="ct-badge">GET IN TOUCH</span>
          <h1>Let's Start Your<br /><span>Immigration Journey.</span></h1>
          <p>Book a free consultation with our certified immigration experts — no pressure, just honest advice.</p>
          <div className="ct-hero-trust">
            <div className="ct-trust-item">⭐ 4.9/5 from 2,100+ clients</div>
            <div className="ct-trust-item">✓ Response within 4 hours</div>
            <div className="ct-trust-item">🎓 ICCRC & MARA registered</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="ct-main">
        <div className="ct-container ct-main-grid">

          {/* Form */}
          <div className="ct-form-wrap">
            <div className="ct-form-header">
              <span className="ct-label">Free Consultation</span>
              <h2>Book Your Session</h2>
              <p>Fill in your details and we'll get back to you within 4 business hours.</p>
            </div>

            {submitted ? (
              <div className="ct-success">
                <div className="ct-success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>Thank you, <strong>{formData.name}</strong>. Our team will contact you at <strong>{formData.email}</strong> within 4 business hours.</p>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <div className="ct-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="ct-field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="ct-field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ct-field">
                  <label>Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="student">Student Visa</option>
                    <option value="work">Work Permit</option>
                    <option value="visitor">Visitor Visa</option>
                    <option value="pr">Permanent Residency</option>
                    <option value="family">Family Sponsorship</option>
                    <option value="business">Business Immigration</option>
                  </select>
                </div>

                <div className="ct-field">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us briefly about your situation and goals..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="ct-submit-btn">
                  Book Free Consultation →
                </button>

                <p className="ct-disclaimer">
                  🔒 Your information is 100% confidential and never shared with third parties.
                </p>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="ct-info-panel">

            {/* Quick Contact */}
            <div className="ct-quick-contact">
              <h3>Reach Us Directly</h3>
              <div className="ct-contact-items">
                <a href="tel:+918699078400" className="ct-contact-item">
                  <div className="ct-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className="ct-contact-label">Call Us Now</span>
                    <span className="ct-contact-value">+91 8699078400</span>
                  </div>
                </a>

                <a href="mailto:info@globalvisaservices.com" className="ct-contact-item">
                  <div className="ct-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className="ct-contact-label">Email Us</span>
                    <span className="ct-contact-value">info@globalvisaservices.com</span>
                  </div>
                </a>

                <div className="ct-contact-item">
                  <div className="ct-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <span className="ct-contact-label">Visit Us</span>
                    <span className="ct-contact-value">SCO 85-86, 4th Floor, Sector 34A, Chandigarh</span>
                  </div>
                </div>

                <div className="ct-contact-item">
                  <div className="ct-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className="ct-contact-label">Office Hours</span>
                    <span className="ct-contact-value">Mon–Sat: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="ct-why-box">
              <h4>Why consult with us?</h4>
              <ul>
                <li><span>✓</span> Free, no-obligation assessment</li>
                <li><span>✓</span> ICCRC & MARA licensed advisors</li>
                <li><span>✓</span> 18+ years of immigration expertise</li>
                <li><span>✓</span> 98% visa approval rate</li>
                <li><span>✓</span> Transparent fees, no hidden charges</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="ct-offices">
        <div className="ct-container">
          <div className="ct-section-header">
            <span className="ct-label">Our Locations</span>
            <h2>Visit Our Offices</h2>
          </div>
          <div className="ct-offices-grid">
            {offices.map((o, i) => (
              <div key={i} className={`ct-office-card ${o.primary ? 'primary' : ''}`}>
                {o.primary && <span className="ct-office-badge">Head Office</span>}
                <h3>📍 {o.city}</h3>
                <ul>
                  <li>{o.address}</li>
                  <li><a href={`tel:${o.phone}`}>{o.phone}</a></li>
                  <li><a href={`mailto:${o.email}`}>{o.email}</a></li>
                  <li>{o.hours}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ct-faq">
        <div className="ct-container">
          <div className="ct-section-header">
            <span className="ct-label">FAQ</span>
            <h2>Before You Reach Out</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="ct-faq-grid">
            {faqs.map((f, i) => (
              <div key={i} className="ct-faq-item">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
