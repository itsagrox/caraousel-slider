import React, { useState, useEffect } from 'react';
import Actions from './actions';
import fetchData from '../utilities';

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const handleChange = (action) => {
    setCurrentImage((prev) => {
      if (action === 'next') {
        return (prev + 1) % images.length;
      } else {
        return (prev - 1 + images.length) % images.length;
      }
    });
  };

  const autoChange = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchData();
      setImages(fetchedImages.message);
    };

    loadImages();

    const intervalId = setInterval(autoChange, 1000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='carousel'>
      {images.length > 0 && (
        <img className='slide' src={images[currentImage]} alt={`Slide ${currentImage}`} />
      )}
      <Actions
        onNext={() => handleChange('next')}
        onPrevious={() => handleChange('prev')}
        currentImageIndex={currentImage}
        totalImages={images.length}
      />
    </div>
  );
};

export default Carousel;
