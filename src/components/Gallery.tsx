// components/Gallery.tsx
"use client";

import React, { useState, useRef, useEffect, FC } from 'react';
import './Gallery.css';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  date?: string;
  tags?: string[];
}

interface GalleryProps {
  title?: string;
  subtitle?: string;
}

const Gallery: FC<GalleryProps> = ({ 
  title = 'Our Creative Gallery',
  subtitle = 'Explore our work and creative projects'
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'AI Dashboard Design',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Modern AI dashboard with real-time analytics and data visualization.',
      date: '2024-01-15',
      tags: ['Dashboard', 'AI', 'Analytics']
    },
    {
      id: 2,
      title: 'Mobile App Interface',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Sleek mobile app design with intuitive navigation and user experience.',
      date: '2024-01-10',
      tags: ['Mobile', 'UI', 'App Design']
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop',
      description: 'Complete brand identity design including logo, color palette, and typography.',
      date: '2024-01-05',
      tags: ['Branding', 'Identity', 'Logo']
    },
    {
      id: 4,
      title: 'Data Visualization',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop',
      description: 'Interactive data visualization dashboard for business intelligence.',
      date: '2023-12-20',
      tags: ['Data', 'Visualization', 'Dashboard']
    },
    {
      id: 5,
      title: 'Website Redesign',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Complete website redesign with modern UI and improved performance.',
      date: '2023-12-15',
      tags: ['Web', 'Redesign', 'UI']
    },
    {
      id: 6,
      title: 'Product Photography',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      description: 'Professional product photography for e-commerce and marketing.',
      date: '2023-12-10',
      tags: ['Photography', 'Product', 'E-commerce']
    },
    {
      id: 7,
      title: 'Social Media Campaign',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1432889821006-31494094585e?w=600&h=500&fit=crop',
      description: 'Creative social media campaign design with engaging visuals.',
      date: '2023-12-05',
      tags: ['Social Media', 'Marketing', 'Creative']
    },
    {
      id: 8,
      title: '3D Product Design',
      category: '3D',
      image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=600&h=400&fit=crop',
      description: '3D product design and rendering for manufacturing and prototyping.',
      date: '2023-11-28',
      tags: ['3D', 'Design', 'Rendering']
    },
    {
      id: 9,
      title: 'Typography Poster',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=500&fit=crop',
      description: 'Creative typography poster design with bold colors and unique layout.',
      date: '2023-11-20',
      tags: ['Typography', 'Poster', 'Design']
    }
  ];

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && selectedItem) {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setSelectedItem(filteredItems[nextIndex]);
      }
      if (e.key === 'ArrowLeft' && selectedItem) {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setSelectedItem(filteredItems[prevIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, filteredItems]);

  return (
    <section className="gallery-wrapper">
      {/* Animated Background */}
      <div className="gallery-bg-particles">
        <div className="gallery-particle gp1"></div>
        <div className="gallery-particle gp2"></div>
        <div className="gallery-particle gp3"></div>
        <div className="gallery-particle gp4"></div>
        <div className="gallery-particle gp5"></div>
        <div className="gallery-particle gp6"></div>
      </div>

      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-badge">
            <span className="gallery-badge-icon">🖼️</span>
            <span>GALLERY</span>
          </div>
          <h2 className="gallery-title">
            <span className="gallery-gradient-text">{title}</span>
          </h2>
          <p className="gallery-subtitle">
            {subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`gallery-filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'All' ? '📋 All' : category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => {
            const tiltStyle = {
              transform: `perspective(800px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: 'transform 0.1s ease'
            };

            // Different sizes for masonry effect
            const sizeClass = index % 5 === 0 ? 'large' : 
                           index % 3 === 0 ? 'tall' : 
                           index % 4 === 0 ? 'wide' : 'normal';

            return (
              <div
                key={item.id}
                className={`gallery-item ${sizeClass}`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => { setHoveredId(null); handleMouseLeave(); }}
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                ref={(el) => { cardRefs.current[item.id] = el; }}
                style={tiltStyle}
                onClick={() => openLightbox(item)}
              >
                <div className="gallery-item-inner">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="gallery-item-image"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className={`gallery-item-overlay ${hoveredId === item.id ? 'active' : ''}`}>
                    <div className="gallery-item-content">
                      <span className="gallery-item-category">{item.category}</span>
                      <h3 className="gallery-item-title">{item.title}</h3>
                      <p className="gallery-item-description">{item.description}</p>
                      
                      <div className="gallery-item-tags">
                        {item.tags?.map((tag, i) => (
                          <span key={i} className="gallery-item-tag">{tag}</span>
                        ))}
                      </div>
                      
                      <div className="gallery-item-actions">
                        <span className="gallery-item-date">{item.date}</span>
                        <span className="gallery-item-expand">↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="gallery-view-all">
          <button className="gallery-view-all-btn">
            <span>View All Projects</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedItem && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            
            <div className="gallery-lightbox-image-wrapper">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="gallery-lightbox-image"
              />
            </div>
            
            <div className="gallery-lightbox-info">
              <span className="gallery-lightbox-category">{selectedItem.category}</span>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
              
              <div className="gallery-lightbox-tags">
                {selectedItem.tags?.map((tag, i) => (
                  <span key={i} className="gallery-lightbox-tag">{tag}</span>
                ))}
              </div>
              
              <div className="gallery-lightbox-nav">
                <button 
                  className="gallery-lightbox-nav-btn prev"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
                    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                    setSelectedItem(filteredItems[prevIndex]);
                  }}
                >
                  ‹
                </button>
                <span className="gallery-lightbox-counter">
                  {filteredItems.findIndex(item => item.id === selectedItem.id) + 1} / {filteredItems.length}
                </span>
                <button 
                  className="gallery-lightbox-nav-btn next"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
                    const nextIndex = (currentIndex + 1) % filteredItems.length;
                    setSelectedItem(filteredItems[nextIndex]);
                  }}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;