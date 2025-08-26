import './TopTips.css';

function ContactUs() {
  const handleLaunchContact = () => {
    // You can customize this URL or action
    window.open('/contact', '_blank');
  };

  return (
      <div className="hot-topics-container">
        <h3 className="hot-topics-title">
          Get In Touch
        </h3>
        <div className="contact-section">
        <div className="contact-content">
          <div className="contact-description">
            <p className="feedback-text">
              Feedback and connections are the cornerstone of innovation and growth. 
              We believe in building meaningful relationships that drive progress and create 
              lasting impact. Your insights help us improve, and your collaboration opens 
              doors to new possibilities. Please contact us for any project enquiries, 
              partnerships, or simply to share your thoughts. Together, we can achieve more.
            </p>
          </div>
          
          <div className="contact-info">
            <h4 className="contact-title">Ready to Connect?</h4>
          </div>
          
          <button className="launch-contact-btn" onClick={handleLaunchContact}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15,3 21,3 21,9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Contact Us Here
          </button>
        </div>
      </div>
      </div>
  );
};

export default ContactUs;