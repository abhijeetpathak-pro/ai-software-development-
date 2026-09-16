'use client';

import React, { FC, useState, useRef } from 'react';
import './Team.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
  skills: string[];
}

interface TeamProps {
  title?: string;
  subtitle?: string;
}

const Team: FC<TeamProps> = ({ 
  title = 'OUR TEAM',
  subtitle = 'Meet our creative team members'
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Lynda Howard',
      role: 'UI/UX Designer',
      phone: '+03 1234 5678',
      email: 'lynda@example.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      },
      skills: ['UI Design', 'UX Research', 'Prototyping']
    },
    {
      id: 2,
      name: 'Eva Silva',
      role: 'UX/UI Designer',
      phone: '+03 1234 5678',
      email: 'eva@example.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      },
      skills: ['UX Strategy', 'Wireframing', 'Usability Testing']
    },
    {
      id: 3,
      name: 'Charlie Smith',
      role: 'UI/UX Designer',
      phone: '+03 1234 5678',
      email: 'charlie@example.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      },
      skills: ['Visual Design', 'Design Systems', 'Animation']
    },
    {
      id: 4,
      name: 'Charlie Smith',
      role: 'UI/UX Designer',
      phone: '+03 1234 5678',
      email: 'charlie@example.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      },
      skills: ['Visual Design', 'Design Systems', 'Animation']
    },
    {
      id: 5,
      name: 'Charlie Smith',
      role: 'UI/UX Designer',
      phone: '+03 1234 5678',
      email: 'charlie@example.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      },
      skills: ['Visual Design', 'Design Systems', 'Animation']
    },
    {
      id: 6,
      name: 'Charlie Smith',
      role: 'UI/UX Designer',
      phone: '+03 1234 5678',
      email: 'charlie@example.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      },
      skills: ['Visual Design', 'Design Systems', 'Animation']
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    if (!cardRefs.current[id]) return;
    const rect = cardRefs.current[id]!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="team-wrapper">
      <div className="team-bg-particles">
        <div className="team-particle tp1"></div>
        <div className="team-particle tp2"></div>
        <div className="team-particle tp3"></div>
        <div className="team-particle tp4"></div>
        <div className="team-particle tp5"></div>
      </div>

      <div className="team-container">
        <div className="team-header">
          <div className="team-badge">
            <span className="team-badge-icon">👥</span>
            <span>CREATIVE TEAM</span>
          </div>
          <h2 className="team-title">
            <span className="team-gradient-text">{title}</span>
          </h2>
          <p className="team-subtitle">
            {subtitle}
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => {
            const tiltStyle = {
              transform: `perspective(1000px) rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg)`,
              transition: 'transform 0.1s ease'
            };

            return (
              <div
                key={member.id}
                className={`team-card ${hoveredId === member.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => { setHoveredId(null); handleMouseLeave(); }}
                onMouseMove={(e) => handleMouseMove(e, member.id)}
                ref={(el) => { cardRefs.current[member.id] = el; }}
                style={tiltStyle}
              >
                <div className="team-card-glass"></div>
                <div className="team-card-border"></div>

                <div className="team-card-content">
                  <div className="team-image-wrapper">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="team-image"
                    />
                    <div className="team-image-ring"></div>
                    <div className="team-online-status"></div>
                  </div>

                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>

                  <div className="team-skills">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="team-skill">{skill}</span>
                    ))}
                  </div>

                  <div className="team-contact">
                    <div className="team-contact-item">
                      <span className="team-contact-icon">📞</span>
                      <span>{member.phone}</span>
                    </div>
                    <div className="team-contact-item">
                      <span className="team-contact-icon">✉️</span>
                      <span>{member.email}</span>
                    </div>
                  </div>

                  <div className="team-social">
                    <a href={member.social.linkedin} className="team-social-link linkedin">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="team-social-link twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href={member.social.dribbble} className="team-social-link dribbble">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 004.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.143 10.143 0 006.29 2.166c1.42 0 2.77-.29 4.006-.816zM4.67 16.12c.28-.49 3.06-5.05 8.3-6.67l-.15-.34c-.45-.99-1.01-2.05-1.54-3.06-4.84 1.6-9.35 1.61-9.81 1.61A10.098 10.098 0 004.67 16.12zM4.67 6.08c.48 0 4.25.02 8.86-1.16a54.683 54.683 0 00-1.25-2.07A10.174 10.174 0 004.67 6.08zm11.05-1.16a54.56 54.56 0 011.36 2.18c3.83-.69 4.4-1.45 4.58-1.74a10.11 10.11 0 00-5.94-2.24c.01.55.02 1.14.04 1.82z"/>
                      </svg>
                    </a>
                  </div>

                  <button className="team-profile-btn">
                    <span>View Profile</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="team-cta">
          <div className="team-cta-content">
            <h3>Join Our Team</h3>
            <p>We're always looking for talented designers to join our creative family</p>
          </div>
          <button className="team-cta-btn">
            <span>View Openings</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;