import './Suggestions.css';

function Suggestions() {
  const handleLaunchAbout = () => {
    // You can customize this URL or action
    window.open('/about', '_blank');
  };

  return (
      <div className="hot-topics-container">
        <h3 className="hot-topics-title">
          About Our Platform
        </h3>
        <div className="about-section">
        <div className="about-content">
          <div className="gif-showcase">
            <img 
              src="/catvid.gif" 
              alt="Showcase Animation" 
              className="showcase-gif"
            />
          </div>
          
          <div className="about-info">
            <h4 className="about-title">About Our Platform</h4>
          </div>
          
          <button className="launch-about-btn" onClick={handleLaunchAbout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15,3 21,3 21,9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Launch About 
          </button>
        </div>
      </div>
      </div>
  );
};

export default Suggestions;