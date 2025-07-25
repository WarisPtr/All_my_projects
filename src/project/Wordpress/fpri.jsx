import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Fpri() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragged, setDragged] = useState(false);

  const images = [
    { id: 1, src: '/ProjectCoverImage/wordpress/fpri1.png', thumb: '/ProjectCoverImage/wordpress/fpri1.png', title: 'ภาพที่ 1' },
    { id: 2, src: '/ProjectCoverImage/wordpress/fpri2.png', thumb: '/ProjectCoverImage/wordpress/fpri2.png', title: 'ภาพที่ 2' },
    { id: 3, src: '/ProjectCoverImage/wordpress/fpri3.png', thumb: '/ProjectCoverImage/wordpress/fpri3.png', title: 'ภาพที่ 3' },
    { id: 4, src: '/ProjectCoverImage/wordpress/fpri4.png', thumb: '/ProjectCoverImage/wordpress/fpri4.png', title: 'ภาพที่ 4' },
    { id: 5, src: '/ProjectCoverImage/wordpress/fpri5.png', thumb: '/ProjectCoverImage/wordpress/fpri5.png', title: 'ภาพที่ 5' },
    { id: 6, src: '/ProjectCoverImage/wordpress/fpri6.png', thumb: '/ProjectCoverImage/wordpress/fpri6.png', title: 'ภาพที่ 6' }
  ];

  const openPopup = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const closePopup = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    openPopup(images[nextIndex], nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    openPopup(images[prevIndex], prevIndex);
  };

  const toggleZoom = (e) => {
    if (dragged) return; // ถ้าเพิ่งลาก ห้ามซูม
    if (zoomLevel === 1) {
      setZoomLevel(2.5);
    } else {
      setZoomLevel(1);
      setImagePosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragged(false);
    setDragStart({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      setDragged(true);
    }
    setImagePosition({ x: dx, y: dy });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'Escape': closePopup(); break;
        case 'ArrowRight': nextImage(); break;
        case 'ArrowLeft': prevImage(); break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-6xl mx-auto p-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => openPopup(image, index)}
          >
            <img
              src={image.thumb}
              alt={image.title}
              className="w-full h-80 object-cover"
            />
            {/* Overlay with Zoom Icon */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
            </div>
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
              <p className="text-white text-sm font-medium">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup/Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button onClick={closePopup} className="absolute top-4 right-4 text-white z-20"><X size={32} /></button>
          <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-20"><ChevronLeft size={48} /></button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-20"><ChevronRight size={48} /></button>

          <div
            className="max-w-4xl max-h-full flex flex-col items-center"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="relative"
              style={{ maxWidth: '80vw', maxHeight: '80vh' }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                onMouseDown={handleMouseDown}
                onClick={toggleZoom}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
                className="max-w-full max-h-[80vh] object-contain rounded-lg select-none"
                style={{
                  transform: `scale(${zoomLevel}) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
                  cursor: zoomLevel === 1 ? 'zoom-in' : (isDragging ? 'grabbing' : 'grab'),
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm">{currentIndex + 1} / {images.length}</p>
            </div>
          </div>

          {/* Background Click to Close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closePopup}
          />
        </div>
      )}
    </div>
  );
}
