import { useState, useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsZoomed(false);
  };

  const handleNext = (e) => {
    e && e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (selectedImage) {
      const nextIndex = (images.indexOf(selectedImage) + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  };

  const handlePrev = (e) => {
    e && e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    if (selectedImage) {
      const prevIndex = (images.indexOf(selectedImage) - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!selectedImage) {
      const timer = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [selectedImage, images]);

  return (
    <div className="gallery-container">
      <div className="carousel">
        <button className="carousel-nav prev" onClick={handlePrev}>‹</button>
        <div className="carousel-content">
          <img 
            src={images[currentIndex]} 
            alt={`Carousel item ${currentIndex + 1}`}
            onClick={() => handleImageClick(images[currentIndex])}
          />
        </div>
        <button className="carousel-nav next" onClick={handleNext}>›</button>
        
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index);
                setSelectedImage(null);
              }}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close">&times;</button>
          <button className="lightbox-nav prev" onClick={handlePrev}>‹</button>
          <button className="lightbox-nav next" onClick={handleNext}>›</button>
          <div 
            className={`lightbox-content ${isZoomed ? 'zoomed' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;