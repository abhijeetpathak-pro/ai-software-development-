// components/FestivalAlbum.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import './FestivalAlbum.css';

interface FestivalImage {
  id: number;
  title: string;
  festival: string;
  category: string;
  image: string;
  description: string;
  date: string;
  location: string;
}

const FestivalAlbum: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<FestivalImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  const festivalImages: FestivalImage[] = [
    // ===== DIWALI FESTIVAL =====
    {
      id: 1,
      title: 'Diwali Celebration - Lamp Lighting',
      festival: 'Diwali',
      category: 'Diwali',
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=600&h=400&fit=crop',
      description: 'Beautiful diyas and lamps lighting up the Diwali celebration.',
      date: '2024-10-31',
      location: 'Mumbai, India'
    },
    {
      id: 2,
      title: 'Rangoli Art for Diwali',
      festival: 'Diwali',
      category: 'Diwali',
      image: 'https://images.unsplash.com/photo-1592754862818-824262d0b45b?w=600&h=400&fit=crop',
      description: 'Colorful rangoli designs decorating the entrance for Diwali.',
      date: '2024-10-30',
      location: 'Delhi, India'
    },
    {
      id: 3,
      title: 'Diwali Fireworks Display',
      festival: 'Diwali',
      category: 'Diwali',
      image: 'https://images.unsplash.com/photo-1559067916-7f7bc0d9c8b1?w=600&h=500&fit=crop',
      description: 'Spectacular fireworks lighting up the night sky during Diwali.',
      date: '2024-10-31',
      location: 'Jaipur, India'
    },
    {
      id: 4,
      title: 'Family Diwali Puja',
      festival: 'Diwali',
      category: 'Diwali',
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=600&h=400&fit=crop',
      description: 'Family gathering for the traditional Diwali puja ceremony.',
      date: '2024-10-31',
      location: 'Varanasi, India'
    },

    // ===== HOLI FESTIVAL =====
    {
      id: 5,
      title: 'Holi Color Splash',
      festival: 'Holi',
      category: 'Holi',
      image: 'https://images.unsplash.com/photo-1546521343-4eb2a0f3d5f4?w=600&h=400&fit=crop',
      description: 'Vibrant colors flying everywhere during Holi celebration.',
      date: '2024-03-25',
      location: 'Mathura, India'
    },
    {
      id: 6,
      title: 'Holi Water Balloon Fun',
      festival: 'Holi',
      category: 'Holi',
      image: 'https://images.unsplash.com/photo-1546521343-4eb2a0f3d5f4?w=600&h=500&fit=crop',
      description: 'Kids enjoying water balloon fights during Holi.',
      date: '2024-03-25',
      location: 'Vrindavan, India'
    },
    {
      id: 7,
      title: 'Traditional Holi Celebration',
      festival: 'Holi',
      category: 'Holi',
      image: 'https://images.unsplash.com/photo-1546521343-4eb2a0f3d5f4?w=600&h=400&fit=crop',
      description: 'Traditional Holi celebration with music and dance.',
      date: '2024-03-24',
      location: 'Jaipur, India'
    },
    {
      id: 8,
      title: 'Holi with Friends',
      festival: 'Holi',
      category: 'Holi',
      image: 'https://images.unsplash.com/photo-1546521343-4eb2a0f3d5f4?w=600&h=300&fit=crop',
      description: 'Friends enjoying the colorful festival of Holi together.',
      date: '2024-03-25',
      location: 'Delhi, India'
    },

    // ===== CHRISTMAS =====
    {
      id: 9,
      title: 'Christmas Tree Decorating',
      festival: 'Christmas',
      category: 'Christmas',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=600&h=400&fit=crop',
      description: 'Beautiful Christmas tree decorated with lights and ornaments.',
      date: '2024-12-24',
      location: 'New York, USA'
    },
    {
      id: 10,
      title: 'Christmas Carol Singing',
      festival: 'Christmas',
      category: 'Christmas',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=600&h=500&fit=crop',
      description: 'Community Christmas carol singing in the evening.',
      date: '2024-12-24',
      location: 'London, UK'
    },
    {
      id: 11,
      title: 'Christmas Gift Exchange',
      festival: 'Christmas',
      category: 'Christmas',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=600&h=400&fit=crop',
      description: 'Exciting Christmas gift exchange ceremony with family.',
      date: '2024-12-25',
      location: 'Toronto, Canada'
    },
    {
      id: 12,
      title: 'Christmas Feast',
      festival: 'Christmas',
      category: 'Christmas',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=600&h=400&fit=crop',
      description: 'Delicious Christmas feast with family and friends.',
      date: '2024-12-25',
      location: 'Sydney, Australia'
    },

    // ===== NEW YEAR =====
    {
      id: 13,
      title: 'New Year Eve Party',
      festival: 'New Year',
      category: 'New Year',
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&h=400&fit=crop',
      description: 'Exciting New Year\'s Eve party with friends and family.',
      date: '2024-12-31',
      location: 'Dubai, UAE'
    },
    {
      id: 14,
      title: 'New Year Fireworks',
      festival: 'New Year',
      category: 'New Year',
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&h=500&fit=crop',
      description: 'Spectacular New Year fireworks lighting up the city.',
      date: '2024-12-31',
      location: 'Paris, France'
    },
    {
      id: 15,
      title: 'New Year Resolution Writing',
      festival: 'New Year',
      category: 'New Year',
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&h=400&fit=crop',
      description: 'Writing New Year resolutions with hope and excitement.',
      date: '2025-01-01',
      location: 'Tokyo, Japan'
    },
    {
      id: 16,
      title: 'New Year Celebration',
      festival: 'New Year',
      category: 'New Year',
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&h=400&fit=crop',
      description: 'Joyous New Year celebration with family and loved ones.',
      date: '2025-01-01',
      location: 'Mumbai, India'
    },

    // ===== GANESH CHATURTHI =====
    {
      id: 17,
      title: 'Ganesh Idol Immersion',
      festival: 'Ganesh Chaturthi',
      category: 'Ganesh Chaturthi',
      image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=600&h=400&fit=crop',
      description: 'Grand Ganesh idol immersion ceremony during the festival.',
      date: '2024-09-19',
      location: 'Mumbai, India'
    },
    {
      id: 18,
      title: 'Ganesh Chaturthi Puja',
      festival: 'Ganesh Chaturthi',
      category: 'Ganesh Chaturthi',
      image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=600&h=500&fit=crop',
      description: 'Traditional Ganesh Chaturthi puja with family.',
      date: '2024-09-18',
      location: 'Pune, India'
    },
    {
      id: 19,
      title: 'Ganesh Idol Decorations',
      festival: 'Ganesh Chaturthi',
      category: 'Ganesh Chaturthi',
      image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=600&h=400&fit=crop',
      description: 'Beautifully decorated Ganesh idol for the festival.',
      date: '2024-09-18',
      location: 'Delhi, India'
    },
    {
      id: 20,
      title: 'Ganesh Chaturthi Procession',
      festival: 'Ganesh Chaturthi',
      category: 'Ganesh Chaturthi',
      image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=600&h=400&fit=crop',
      description: 'Vibrant Ganesh Chaturthi procession with music and dance.',
      date: '2024-09-19',
      location: 'Ahmedabad, India'
    },
    {
      id: 21,
      title: 'Ganesh Chaturthi Celebration',
      festival: 'Ganesh Chaturthi',
      category: 'Ganesh Chaturthi',
      image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=600&h=300&fit=crop',
      description: 'Community celebration of Ganesh Chaturthi festival.',
      date: '2024-09-19',
      location: 'Hyderabad, India'
    }
  ];

  const categories = ['All', ...new Set(festivalImages.map(item => item.category))];
  
  const filteredImages = activeCategory === 'All' 
    ? festivalImages 
    : festivalImages.filter(item => item.category === activeCategory);

  const openLightbox = (image: FestivalImage) => {
    const index = filteredImages.findIndex(item => item.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    if (filteredImages.length > 0 && currentIndex >= 0) {
      setSelectedImage(filteredImages[currentIndex]);
    }
  }, [currentIndex, filteredImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section className="festival-album-wrapper">
      {/* Animated Background */}
      <div className="festival-bg-particles">
        <div className="festival-particle fp1"></div>
        <div className="festival-particle fp2"></div>
        <div className="festival-particle fp3"></div>
        <div className="festival-particle fp4"></div>
        <div className="festival-particle fp5"></div>
        <div className="festival-particle fp6"></div>
      </div>

      <div className="festival-album-container">
        {/* Header */}
        <div className="festival-header">
          <div className="festival-badge">
            <span className="festival-badge-icon">🎊</span>
            <span>FESTIVAL ALBUM</span>
          </div>
          <h2 className="festival-title">
            <span className="festival-gradient-text">Our Festival</span>
            <span className="festival-highlight-text"> Celebrations</span>
          </h2>
          <p className="festival-subtitle">
            Capturing the joy, colors, and traditions of festivals celebrated around the world
          </p>
          
          {/* Stats */}
          <div className="festival-stats">
            <div className="festival-stat">
              <span className="festival-stat-number">{festivalImages.length}</span>
              <span className="festival-stat-label">Photos</span>
            </div>
            <div className="festival-stat">
              <span className="festival-stat-number">{categories.length - 1}</span>
              <span className="festival-stat-label">Festivals</span>
            </div>
            <div className="festival-stat">
              <span className="festival-stat-number">10+</span>
              <span className="festival-stat-label">Locations</span>
            </div>
          </div>
        </div>

        {/* Filters & Controls */}
        <div className="festival-controls">
          <div className="festival-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`festival-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'All' ? '📋 All Festivals' : category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="festival-view-toggle">
            <button
              className={`festival-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
            >
              ⊞
            </button>
            <button
              className={`festival-view-btn ${viewMode === 'masonry' ? 'active' : ''}`}
              onClick={() => setViewMode('masonry')}
              aria-label="Masonry View"
            >
              ⊟
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`festival-grid ${viewMode}`}>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`festival-item ${viewMode === 'masonry' ? 'masonry-item' : ''}`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(image)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="festival-item-inner">
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="festival-item-image"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="festival-item-gradient"></div>
                
                {/* Content Overlay */}
                <div className={`festival-item-overlay ${hoveredId === image.id ? 'active' : ''}`}>
                  <div className="festival-item-content">
                    <span className="festival-item-category">{image.category}</span>
                    <h3 className="festival-item-title">{image.title}</h3>
                    <p className="festival-item-description">{image.description}</p>
                    <div className="festival-item-meta">
                      <span className="festival-item-date">📅 {image.date}</span>
                      <span className="festival-item-location">📍 {image.location}</span>
                    </div>
                    <span className="festival-item-expand">↗</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="festival-results">
          Showing <strong>{filteredImages.length}</strong> of <strong>{festivalImages.length}</strong> festival photos
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage && (
        <div className="festival-lightbox" onClick={closeLightbox}>
          <div className="festival-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="festival-lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            
            <div className="festival-lightbox-nav">
              <button 
                className="festival-lightbox-nav-btn prev"
                onClick={() => navigateImage('prev')}
              >
                ‹
              </button>
              
              <div className="festival-lightbox-image-wrapper">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="festival-lightbox-image"
                />
                <div className="festival-lightbox-info">
                  <span className="festival-lightbox-category">{selectedImage.category}</span>
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                  <div className="festival-lightbox-meta">
                    <span>📅 {selectedImage.date}</span>
                    <span>📍 {selectedImage.location}</span>
                  </div>
                </div>
              </div>
              
              <button 
                className="festival-lightbox-nav-btn next"
                onClick={() => navigateImage('next')}
              >
                ›
              </button>
            </div>
            
            <div className="festival-lightbox-counter">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FestivalAlbum;