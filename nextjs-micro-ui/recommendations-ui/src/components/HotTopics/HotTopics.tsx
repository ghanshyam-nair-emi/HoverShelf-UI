import './HotTopics.css';

import React, { useState } from 'react';

type WorkItem = {
  title: string;
  imageUrl: string;
  description: string;
  Pageurl: string;
};

function HotTopics() {
  const workItems: WorkItem[] = [
    { 
      title: 'Cheddar AI – News Verification Engine', 
      imageUrl: '/Cheddar.png',
      description: 'Cheddar AI is an MCP-based fact-checking engine designed to verify the authenticity of trending news. By leveraging trusted sources and intelligent algorithms, it confirms whether a story is officially validated or not, empowering users to make informed decisions and avoid misinformation.',
      Pageurl: 'http://localhost:5173/'
    },
    {
      title: "Laubi – Intercom Alert System",
      imageUrl: "/laubi.png",
      description: "Laubi is a mobile-based intercom alert system that enables seamless real-time communication within households or buildings. Designed for convenience and quick coordination, Laubi lets users send and receive voice or text alerts across devices, making it ideal for families, offices, or shared living spaces.",
      Pageurl: "https://laubi.example.com/"
    },
    { 
      title: 'Mangalyavedi – Nair Matrimony Platform', 
      imageUrl: '/Mangalyavedi.png',
      description: 'Mangalyavedi is a culturally focused matrimonial platform built for the Nair community. Developed using PHP and AJAX-powered CMS tools, it provides a respectful, modern interface for profile creation, matchmaking, and communication—blending tradition with intuitive digital experiences.',
      Pageurl: 'https://mangalyavedi.online/'
    },
    { 
      title: 'Pumpernickel – Browser MCP Agent', 
      imageUrl: '/pumpernickel.png',
      description: 'Pumpernickel is an intelligent MCP (Model Context Protocol) agent that operates directly within your browser. It provides seamless AI assistance for web tasks, content analysis, and automated workflows, enhancing your browsing experience with powerful AI capabilities.',
      Pageurl: 'https://pumpernickel.example.com/'
    },
    { 
      title: 'PodInsights', 
      imageUrl: 'spotify-transcript.png',
      description: 'Spotify Transcript delivers concise, AI-generated transcripts of Spotify podcasts. Perfect for quick insights and key takeaways, it transforms audio content into digestible text summaries, making podcast content more accessible and searchable.',
      Pageurl: 'https://github.com/ghanshyam-nair-emi/PodInsights'
    },
    { 
      title: 'ArxivSearch – AI Research Assistant', 
      imageUrl: '/arxiv-search.png',
      description: 'ArxivSearch is a Streamlit-powered AI research assistant that helps users discover academic papers on arXiv. Utilizing OpenAI GPT-4o-mini, MultiOn web browsing, and Mem0 with Qdrant for user context, it maintains memory of interests and past interactions for personalized research experiences.',
      Pageurl: 'https://arxiv-search.example.com/'
    },
    { 
      title: 'Hovershelf – Smart Retail Experience', 
      imageUrl: '/Hovershelfshop.png',
      description: 'Hovershelf is a next-gen retail platform that redefines how consumers shop online. By combining immersive UI/UX with innovative product displays and streamlined checkout processes, it offers a futuristic shopping journey tailored to tech-savvy customers.',
      Pageurl: 'http://localhost:4200/shop'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === workItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? workItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleLaunchClick = () => {
    const currentItem = workItems[currentIndex];
    if (currentItem.Pageurl) {
      window.open(currentItem.Pageurl, '_blank');
    }
  };

  return (
    <div className="hot-topics-container">
      <h3 className="hot-topics-title">
        Products and Work
      </h3>
      
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>
        
        <div className="carousel-content">
          <div className="carousel-slide">
            <div className="product-image-container">
              <img 
                src={workItems[currentIndex]?.imageUrl} 
                alt={workItems[currentIndex]?.title}
                className="product-image"
              />
              <button className="launch-btn" onClick={handleLaunchClick}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Launch
              </button>
            </div>
            <div className="product-info">
              <h4 className="product-title">
                {workItems[currentIndex]?.title}
              </h4>
              <p className="product-description">
                {workItems[currentIndex]?.description}
              </p>
            </div>
          </div>
        </div>
        
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
      
      <div className="carousel-indicators">
        {workItems.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HotTopics;