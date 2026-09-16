// components/FestivalAlbum.tsx
"use client";

import React, { useState, useRef } from 'react';
import './FestivalAlbum.css';

interface ImageItem {
  id: number;
  image: string;
  alt: string;
  festival: string;
}

const FestivalAlbum: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const images: ImageItem[] = [
    // Diwali
    { id: 1, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&h=600&fit=crop', alt: 'Diwali Celebration', festival: '🎆 Diwali' },
    { id: 2, image: 'https://images.unsplash.com/photo-1592754862818-824262d0b45b?w=800&h=600&fit=crop', alt: 'Diwali Rangoli', festival: '🎆 Diwali' },
    { id: 3, image: 'https://images.unsplash.com/photo-1559067916-7f7bc0d9c8b1?w=800&h=600&fit=crop', alt: 'Diwali Fireworks', festival: '🎆 Diwali' },
    { id: 4, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&h=600&fit=crop', alt: 'Diwali Puja', festival: '🎆 Diwali' },
    
    // Holi
    { id: 5, image: 'https://images.unsplash.com/photo-1546521343-4eb2a0f3d5f4?w=800&h=600&fit=crop', alt: 'Holi Colors', festival: '🌈 Holi' },
    { id: 6, image: 'https://images.unsplash.com/photo-1546521343-4eb2a0f3d5f4?w=800&h=600&fit=crop', alt: 'Holi Celebration', festival: '🌈 Holi' },
    { id: 7, image: 'https://images.unsplash.com/photo-1546521343-4eb2a0f3d5f4?w=800&h=600&fit=crop', alt: 'Holi Fun', festival: '🌈 Holi' },
    { id: 8, image: 'https://images.unsplash.com/photo-1546521343-4eb2a0f3d5f4?w=800&h=600&fit=crop', alt: 'Holi Colors', festival: '🌈 Holi' },
    
    // Christmas
    { id: 9, image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=800&h=600&fit=crop', alt: 'Christmas Tree', festival: '🎄 Christmas' },
    { id: 10, image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=800&h=600&fit=crop', alt: 'Christmas Carol', festival: '🎄 Christmas' },
    { id: 11, image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=800&h=600&fit=crop', alt: 'Christmas Gifts', festival: '🎄 Christmas' },
    { id: 12, image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=800&h=600&fit=crop', alt: 'Christmas Feast', festival: '🎄 Christmas' },
    
    // New Year
    { id: 13, image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=600&fit=crop', alt: 'New Year Party', festival: '🎊 New Year' },
    { id: 14, image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=600&fit=crop', alt: 'New Year Fireworks', festival: '🎊 New Year' },
    { id: 15, image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=600&fit=crop', alt: 'New Year Celebration', festival: '🎊 New Year' },
    { id: 16, image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=600&fit=crop', alt: 'New Year Eve', festival: '🎊 New Year' },
    
    // Ganesh Chaturthi
    { id: 17, image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=800&h=600&fit=crop', alt: 'Ganesh Idol', festival: '🙏 Ganesh' },
    { id: 18, image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=800&h=600&fit=crop', alt: 'Ganesh Puja', festival: '🙏 Ganesh' },
    { id: 19, image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=800&h=600&fit=crop', alt: 'Ganesh Decoration', festival: '🙏 Ganesh' },
    { id: 20, image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=800&h=600&fit=crop', alt: 'Ganesh Procession', festival: '🙏 Ganesh' },
    { id: 21, image: 'https://images.unsplash.com/photo-1565207910453-44b26ca6aa68?w=800&h=600&fit=crop', alt: 'Ganesh Celebration', festival: '🙏 Ganesh' },
    
    // Extra
    { id: 22, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&h=600&fit=crop', alt: 'Festival Celebration', festival: '🎉 Festival' },
    { id: 23, image: 'https://images.unsplash.com/photo-1546521343-4eb2a0f3d5f4?w=800&h=600&fit=crop', alt: 'Colorful Festival', festival: '🎉 Festival' },
    { id: 24, image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=800&h=600&fit=crop', alt: 'Festival Lights', festival: '🎉 Festival' },
  ];

  const openLightbox = (image: ImageItem) => {
    const index = images.findIndex(item => item.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="album-container">
      {/* Header */}
      <div className="album-header">
        <h1 className="album-title">
          <span className="title-gradient">🎊 Festival</span> Memories
        </h1>
        <p className="album-subtitle">Celebrating moments that matter</p>
      </div>

      {/* Grid */}
      <div className="album-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`album-card ${hoveredId === image.id ? 'flipped' : ''}`}
            onMouseEnter={() => setHoveredId(image.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => openLightbox(image)}
          >
            <div className="album-card-inner">
              {/* Front */}
              <div className="album-card-front">
                <img src={image.image} alt={image.alt} className="album-card-image" />
                <div className="album-card-overlay">
                  <span className="album-card-festival">{image.festival}</span>
                </div>
              </div>
              
              {/* Back */}
              <div className="album-card-back">
                <span className="album-card-icon">📸</span>
                <p className="album-card-alt">{image.alt}</p>
                <span className="album-card-view">Click to view</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="album-footer">
        <span>📸 {images.length} Memories</span>
        <span>❤️ Captured with love</span>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="album-lightbox" onClick={closeLightbox}>
          <div className="album-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="album-lightbox-close" onClick={closeLightbox}>✕</button>
            
            <button className="album-lightbox-nav prev" onClick={() => navigateImage('prev')}>
              ‹
            </button>
            
            <img src={selectedImage.image} alt={selectedImage.alt} className="album-lightbox-image" />
            
            <button className="album-lightbox-nav next" onClick={() => navigateImage('next')}>
              ›
            </button>
            
            <div className="album-lightbox-footer">
              <span className="album-lightbox-festival">{selectedImage.festival}</span>
              <span className="album-lightbox-counter">{currentIndex + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FestivalAlbum;