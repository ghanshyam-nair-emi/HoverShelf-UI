import './SearchTypebarCarousel.css';

import React, { use, useEffect, useRef, useState } from 'react';

const SearchTypebarCarousel = ({handleSearchType}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const carouselRef = useRef(null);
  
  // Search type categories
  const searchTypes = [
    { id: 'all', label: 'All', },
    { id: 'industries', label: 'Industries', },
    { id: 'companies', label: 'Companies' },
    { id: 'brands', label: 'Brands' },
    { id: 'channels', label: 'Channels' },
    { id: 'product-innovation', label: 'Product & Innovation' },
    { id: 'economies', label: 'Economies' },
    { id: 'consumers', label: 'Consumers' }
  ];

  const [activeButton, setActiveButton] = useState('all');
  useEffect(() => {
    handleSearchType(activeButton);
  }, [activeButton, handleSearchType]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -150,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 150,
        behavior: 'smooth'
      });
    }
  };

  return (
          <div className="SearchTypebar">
            <div className="carousel-container">
              <button className="nav-button prev-button" onClick={scrollLeft}>
                <span>‹</span>
              </button>
              
              <div className="button-carousel" ref={carouselRef}>
                {searchTypes.map((type) => (
                  <button
                    key={type.id}
                    className={`carousel-button ${activeButton === type.id ? 'active' : ''}`}
                    onClick={() => setActiveButton(type.id)}
                  >
                    <span className="button-label">{type.label}</span>
                  </button>
                ))}
              </div>
              
              <button className="nav-button next-button" onClick={scrollRight}>
                <span>›</span>
              </button>
            </div>
          </div>
        )}
export default SearchTypebarCarousel;