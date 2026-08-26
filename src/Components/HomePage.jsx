import { useState, useEffect } from 'react'
import logo from '../assets/GVC-logo.png'
import heroImg from '../assets/HerosectionImg.png'
import consultantImg from '../assets/consulatant.png'
import './HomePage.css'

function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'Student Visa',
      description: 'Expert guidance for study permits in top universities worldwide',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L1 9L12 15L23 9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 11.09V17C5 17 7.5 20 12 20C16.5 20 19 17 19 17V11.09" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Work Permit',
      description: 'Comprehensive support for employment-based immigration',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Visitor Visa',
      description: 'Hassle-free tourist and visitor visa processing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3L3 10.5L10.5 13.5M21 3L13.5 21L10.5 13.5M21 3L10.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Business Immigration',
      description: 'Investor and entrepreneur visa solutions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Family Sponsorship',
      description: 'Reunite with your loved ones through family visas',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 21V19C3 16.79 5.24 15 8 15H10C12.76 15 15 16.79 15 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 3.13C17.16 3.35 18 4.38 18 5.63C18 6.87 17.16 7.9 16 8.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 21V19C20.99 17.76 20.15 16.73 19 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Permanent Residency',
      description: 'Complete PR and citizenship application support',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 2C9.5 6 8 9 8 12C8 15 9.5 18 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 2C14.5 6 16 9 16 12C16 15 14.5 18 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ]

  const destinations = [
    { name: 'Canada', flag: '🇨🇦', programs: 'Express Entry, PNP, Study & Work' },
    { name: 'Australia', flag: '🇦🇺', programs: 'Skilled Migration, Student Visa' },
    { name: 'United Kingdom', flag: '🇬🇧', programs: 'Skilled Worker, Graduate Route' },
    { name: 'United States', flag: '🇺🇸', programs: 'H1B, L1, Student Visa' },
    { name: 'New Zealand', flag: '🇳🇿', programs: 'Skilled Migrant, Work Visa' },
    { name: 'Europe', flag: '🇪🇺', programs: 'Schengen, Work Permits' }
  ]

  const process = [
    { step: '01', title: 'Free Consultation', desc: 'Initial assessment of your eligibility' },
    { step: '02', title: 'Profile Evaluation', desc: 'Comprehensive analysis of your case' },
    { step: '03', title: 'Documentation', desc: 'Expert guidance on required documents' },
    { step: '04', title: 'Application', desc: 'Professional submission and tracking' },
    { step: '05', title: 'Success', desc: 'Visa approval and next steps' }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      country: 'Canada PR',
      text: 'Global Visa Services made my Canadian PR dream come true. Professional, transparent, and highly knowledgeable team.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      country: 'Australia Student Visa',
      text: 'Seamless process from start to finish. They handled everything professionally and my visa was approved within weeks.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      country: 'UK Work Visa',
      text: 'Best immigration consultants! They guided me through every step and ensured all documents were perfect.',
      rating: 5
    }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img src={logo} alt="Global Visa Services" />
            </div>
            <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
              <a href="#destinations" onClick={() => scrollToSection('destinations')}>Destinations</a>
              <a href="#process" onClick={() => scrollToSection('process')}>Process</a>
              <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Reviews</a>
              <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
            <div className="nav-cta">
              <a href="tel:+918699078400" className="btn btn-primary">Book Consultation</a>
            </div>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="badge-hero">LICENSED IMMIGRATION CONSULTANTS SINCE 2008</span>
            <h1>Your global future, <span className="highlight">expertly navigated.</span></h1>
            <p>Global Visa Connect guides students, professionals and families through study, work and residency pathways in over 40 countries — with a process built on precision, transparency and genuine care.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-lg">Book a Consultation →</a>
              <a href="#services" className="btn btn-outline btn-lg">Explore Visa Services</a>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <span className="star">⭐</span>
                <span>4.9/5 from 2,100+ clients</span>
              </div>
              <div className="trust-item">
                <span className="badge-icon">✓</span>
                <span>ICCRC & MARA registered advisors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>18+</h3>
              <p>YEARS OF PRACTICE</p>
            </div>
            <div className="stat-item">
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>12,400+</h3>
              <p>SUCCESSFUL APPLICATIONS</p>
            </div>
            <div className="stat-item">
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>40+</h3>
              <p>COUNTRIES SERVED</p>
            </div>
            <div className="stat-item">
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>98%</h3>
              <p>APPROVAL RATE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="label">Our Expertise</span>
            <h2>Comprehensive Visa Services</h2>
            <p>End-to-end immigration solutions tailored to your unique needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="why-grid">
            <div className="why-image">
              <div className="why-image-placeholder">
                <img src={consultantImg} alt="Expert Team" />
              </div>
            </div>
            <div className="why-content">
              <span className="label-red">WHY CHOOSE US</span>
              <h2>Advice you can act on. Process you can trust.</h2>
              <div className="why-list">
                <div className="why-item">
                  <div className="why-icon-circle">✓</div>
                  <div>
                    <h4>Licensed expertise</h4>
                    <p>Regulated consultants with decades of combined casework across every major immigration jurisdiction.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon-circle">⚙️</div>
                  <div>
                    <h4>Personalised guidance</h4>
                    <p>One dedicated case manager who knows your file end to end — never a call centre, never a script.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon-circle">📋</div>
                  <div>
                    <h4>Transparent process</h4>
                    <p>Fixed fees, written timelines and a client portal so you always know exactly where your file stands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <div className="section-header">
            <span className="label">How It Works</span>
            <h2>Your Immigration Journey</h2>
            <p>A simple, transparent process designed for your success</p>
          </div>
          <div className="process-timeline">
            {process.map((item, index) => (
              <div key={index} className="process-item">
                <div className="process-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="destinations">
        <div className="container">
          <div className="section-header">
            <span className="label">Global Reach</span>
            <h2>Immigration Destinations</h2>
            <p>Expert guidance for your dream destination</p>
          </div>
          <div className="destinations-grid">
            {destinations.map((dest, index) => (
              <div key={index} className="destination-card">
                <div className="dest-flag">{dest.flag}</div>
                <h3>{dest.name}</h3>
                <p>{dest.programs}</p>
                <a href="#contact" className="dest-link">Explore Programs →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="label">Success Stories</span>
            <h2>What Our Clients Say</h2>
            <p>Trusted by thousands of successful immigrants</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Immigration Journey?</h2>
            <p>Book a free consultation with our expert immigration consultants today</p>
            <div className="cta-buttons">
              <a href="tel:+918699078400" className="btn btn-primary btn-lg">Book Free Consultation</a>
              <a href="mailto:info@globalvisaservices.com" className="btn btn-secondary btn-lg">Send Inquiry</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img src={logo} alt="Global Visa Services" className="footer-logo" />
              <p>Your trusted partner for immigration success. ICCRC & MARA registered consultants.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Student Visa</a></li>
                <li><a href="#services">Work Permit</a></li>
                <li><a href="#services">PR Applications</a></li>
                <li><a href="#services">Business Immigration</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li>📞 <a href="tel:+918699078400">+91 8699078400</a></li>
                <li>📧 <a href="mailto:info@globalvisaservices.com">info@globalvisaservices.com</a></li>
                <li>📍 SCO 85-86 (4th Floor)<br />Sector 34A, Chandigarh</li>
                <li>🕒 Mon-Sat: 9:00 AM - 7:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Global Visa Services. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
