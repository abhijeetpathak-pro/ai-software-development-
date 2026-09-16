// Testimonials.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  // ✅ Ab tum yahan apni images daal sakte ho
  const testimonials = [
    {
      id: 1,
      name: 'Mehul Chopra',
      role: 'Leadership',
      company: 'Floofers',
      quote: 'The quality of engineers from Witqualis has been excellent and to the mark. The screening process has been relatively painless where we have never found the need to screen more than 2 candidates per technology. Witqualis, with its wide talent pool has got our organization covered across the entire tech stack.',
      success: 'Client Success: Full tech-stack coverage with vetted senior engineers deployed with zero friction.',
      detail: 'Screened fewer than 2 candidates per technology with immediate velocity.',
      image: '/images/testimonials/Mehul.jpg',
      rating: 5,
      tags: ['Staff Augmentation', 'Full Stack']
    },
    {
      id: 2,
      name: 'Jack Wells',
      role: 'Operations & Growth',
      company: 'Vengreso',
      quote: "WitQualis was helpful in facilitating our connection with qualified developers that fit our project's specific needs. Developers who joined our project are skilled and understood what our development goals sought to achieve. They were communicative, ready to review at a moment's notice, detailed in their work, offered useful suggestions, and was enjoyable to work with.",
      success: "Client Success: Seamless developer onboarding tailored specifically to Chrome extension and CRM ecosystem needs.",
      detail: 'High communication standards, rapid code reviews, and proactive technical suggestions.',
      image: '/images/testimonials/jack_wells.jpg',
      rating: 5,
      tags: ['Dedicated Team', 'Frontend & APIs']
    },
    {
      id: 3,
      name: 'Parth Benerji',
      role: 'COO',
      company: 'StrategicERP',
      quote: "As the COO for our ERP product, I engaged WitQualis for resources in Java, Python, and SQL development. The resources they provided were highly skilled and up to the latest market standards. WitQualis delivered excellent testers and business analysts who played a key role in ensuring the quality and smooth execution of our projects. Their team's technical expertise, professionalism, and adaptability have been invaluable.",
      success: 'Client Success: Cross-functional deployment of Java, Python, SQL developers, QA testers and BAs for ERP delivery.',
      detail: 'Exceptional adaptability and high engineering standards across complex enterprise modules.',
      image: '/images/testimonials/prath.jpg',
      rating: 5,
      tags: ['Enterprise ERP', 'Java & Python', 'QA Testing']
    },
    {
      id: 4,
      name: 'Shailendra Choudhary',
      role: 'Associate Director',
      company: 'GirnarSoft',
      quote: "Witqualis, as a company, has proven to be a highly professional, dependable, and process-driven partner. Their team maintains strong quality, clear communication, and a commitment to timely delivery. Aslam’s dedication has helped us achieve our goals smoothly and on time.",
      success: 'Client Success: High-availability engineering squads delivering process-driven milestones on time.',
      detail: 'Process-driven partnership ensuring high product reliability and clear communication.',
      image: '/images/testimonials/Shailendra.jpg',
      rating: 5,
      tags: ['Automotive AI', 'Process-Driven', 'Dependable']
    },
    {
      id: 5,
      name: 'Jack Wells',
      role: 'Strategic Partner',
      company: 'Vengreso',
      quote: "WitQualis was helpful in facilitating our connection with qualified developers that fit our project's specific needs. Developers who joined our project are skilled and understood what our development goals sought to achieve. They were communicative, ready to review at a moment's notice, detailed in their work, offered useful suggestions, and was enjoyable to work with.",
      success: 'Client Success: Long-term engineering partnership with agile sprint alignment.',
      detail: 'Proactive development team scaling with fast turnaround.',
      image: '/images/testimonials/jack_wells.jpg',
      rating: 5,
      tags: ['Staff Augmentation', 'High Velocity']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsFlipping(false), 600);
  };

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsFlipping(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isFlipping || index === currentIndex) return;
    setIsFlipping(true);
    setCurrentIndex(index);
    setTimeout(() => setIsFlipping(false), 600);
  };

  const current = testimonials[currentIndex];
  const tiltStyle = {
    transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
    transition: 'transform 0.1s ease'
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="testimonials-wrapper">
      <div className="bg-particles">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
        <div className="particle p5"></div>
        <div className="particle p6"></div>
        <div className="particle p7"></div>
        <div className="particle p8"></div>
      </div>

      <div className="testimonials-container">
        <div className="header-section">
          <div className="badge-container">
            <span className="pulse-dot"></span>
            <span className="badge-text">✦ CLIENT STORIES</span>
          </div>
          
          <h1 className="main-title">
            <span className="gradient-text">Hear What</span>
            <span className="highlight-text"> Our Clients Say</span>
          </h1>
          
          <p className="subtitle">
            Real stories from real people who transformed their business with our expertise
          </p>
        </div>

        <div 
          className="card-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={cardRef}
        >
          <div 
            className={`testimonial-card ${isFlipping ? 'flipping' : ''}`}
            style={tiltStyle}
          >
            <div className="glass-overlay"></div>
            <div className="gradient-border"></div>

            <div className="card-content">
              <div className="card-top">
                <div className="rating-stars">
                  <span className="stars">{renderStars(current.rating)}</span>
                  <span className="rating-text">{current.rating}.0</span>
                </div>
                <div className="tags">
                  {current.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="quote-section">
                <div className="quote-mark">"</div>
                <p className="quote-text">{current.quote}</p>
              </div>

              <div className="success-highlight">
                <div className="success-icon-wrapper">
                  <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2"/>
                    <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="success-content">
                  <span className="success-label">Success Story</span>
                  <p>{current.success}</p>
                </div>
              </div>

              <div className="detail-section">
                <span className="arrow-icon">→</span>
                <span>{current.detail}</span>
              </div>

              <div className="client-section">
                <div className="client-avatar-wrapper">
                  {/* ✅ Image with fallback */}
                  <img 
                    src={current.image} 
                    alt={current.name} 
                    className="client-avatar"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src = `https://ui-avatars.com/api/?name=${current.name.replace(' ', '+')}&background=4f46e5&color=fff&size=100`;
                    }}
                  />
                  <div className="avatar-ring"></div>
                </div>
                
                <div className="client-details">
                  <div className="client-name-wrapper">
                    <h3 className="client-name">{current.name}</h3>
                    <span className="verified-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm-1.5 16.5L5.25 12.5l1.5-1.5 3.75 3.75 7.5-7.5 1.5 1.5-9 9z"/>
                      </svg>
                      Verified Client
                    </span>
                  </div>
                  <div className="client-role-wrapper">
                    <span className="client-role">{current.role}</span>
                    <span className="client-company">{current.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-section">
          <button className="nav-btn prev-btn" onClick={handlePrev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="dots-container">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <span className="dot-progress"></span>
              </button>
            ))}
          </div>

          <button className="nav-btn next-btn" onClick={handleNext}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        <div className="counter-section">
          <span className="counter-current">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="counter-divider">—</span>
          <span className="counter-total">{String(testimonials.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

