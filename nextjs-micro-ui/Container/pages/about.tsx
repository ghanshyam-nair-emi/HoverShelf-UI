import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.mainhomeContainer}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Cal+Sans&display=swap" rel="stylesheet" />
      
      <div className={styles.mainhomeHeader}>
        <div className={styles.mainhomeHeaderImage}>
          <div className={styles.designSvg}>
            <svg width="200" height="200" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_11)">
                <path d="M6.558 1.734C6.38459 1.46982 6.15104 1.2505 5.8765 1.094C5.1225 0.6615 4.151 0.7375 3.2545 1.2395C1.59 2.172 0.5 3.925 0.5 6C0.5 8.77 2.505 11.0065 5.1235 11.43C5.4095 11.4763 5.70167 11.4997 6 11.5C6.72661 11.5027 7.44651 11.3609 8.1178 11.0828C8.78909 10.8046 9.39837 10.3958 9.91019 9.88004C10.422 9.36427 10.8261 8.75186 11.0991 8.07845C11.372 7.40504 11.5083 6.68407 11.5 5.9575C11.4885 4.9915 11.101 3.806 10.4885 2.8585C9.8785 1.9145 8.9405 1.0545 7.775 1.0655C7.206 1.0665 6.8175 1.3795 6.558 1.7345M9.8855 3.807C9.67665 3.7737 9.46431 3.76815 9.254 3.7905L8.674 2.8155L7.815 3.325L8.261 4.075C8.07464 4.16328 7.89645 4.26785 7.7285 4.3875L7.7195 4.3585C7.586 3.9535 7.328 3.621 6.984 3.2905L6.986 3.2805C7.0205 3.119 7.0755 2.9105 7.158 2.708C7.3445 2.25 7.561 2.0645 7.778 2.0645H7.7835C8.429 2.0575 9.1015 2.553 9.649 3.4005C9.734 3.53183 9.813 3.66683 9.886 3.8055M6.805 5.305C6.64 5.309 6.4705 5.3275 6.305 5.3635L6.289 5.3375C6.1554 5.12289 5.98031 4.93709 5.774 4.791C5.379 4.5135 4.838 4.376 4.253 4.5945C4.1994 4.56362 4.1454 4.53345 4.091 4.504L5.7075 2.9195L5.0075 2.2055L3.09 4.085C2.685 3.9675 2.3065 3.9255 1.9665 3.9725C2.35774 3.18709 2.97736 2.53836 3.744 2.1115C4.426 1.7295 5.0125 1.7505 5.3795 1.961C5.7295 2.1615 6.02 2.6165 5.947 3.4295L5.9245 3.681L6.1135 3.8485C6.5245 4.212 6.6955 4.447 6.7695 4.6715C6.8215 4.829 6.8385 5.0195 6.805 5.305ZM5.4 5.8075C4.973 6.165 4.6865 6.6665 4.52 7.2085L3.033 5.576L2.2935 6.25L4.3375 8.494C4.335 9.09 4.4115 9.7 4.5225 10.2515C3.63746 9.9478 2.86988 9.37431 2.32772 8.61169C1.78555 7.84907 1.49607 6.93569 1.5 6C1.5 5.48 1.6445 5.1965 1.8145 5.0725C1.975 4.9545 2.3275 4.858 3.0495 5.1245C3.3105 5.221 3.6125 5.369 3.958 5.584L4.209 5.74L4.467 5.595C4.7785 5.42 5.0165 5.482 5.199 5.61C5.279 5.666 5.3475 5.736 5.4 5.8075ZM6.2825 10.491L9.9285 6.4725L9.188 5.8005L7.722 7.416L7.7255 6.909L6.7255 6.902L6.714 8.527L5.4725 9.8955C5.379 9.385 5.3225 8.8365 5.3405 8.322C5.3725 7.4445 5.723 6.7235 6.2415 6.438C6.4565 6.3195 6.836 6.273 7.136 6.326L7.581 6.4035L7.7035 5.969C7.7675 5.7425 7.937 5.5 8.202 5.284C8.47112 5.06708 8.78392 4.91085 9.119 4.826C9.5195 4.728 9.861 4.779 10.086 4.934C10.2825 5.069 10.48 5.345 10.4985 5.911V5.92L10.5 6C10.5048 7.14595 10.0702 8.25017 9.28576 9.08553C8.50127 9.92089 7.4265 10.4239 6.2825 10.491Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_1_11">
                  <rect width="12" height="12" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.designSvg2}>
            <svg width="200" height="200" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_3)">
                <path d="M5.15234 4.28654C5.15234 3.65666 5.40257 3.05256 5.84796 2.60717C6.29336 2.16177 6.89745 1.91154 7.52734 1.91154H8.63584C9.07934 1.91154 9.30084 1.91154 9.47034 1.99754C9.61934 2.07354 9.74034 2.19454 9.81634 2.34354C9.90234 2.51304 9.90234 2.73454 9.90234 3.17804V4.28654C9.90234 4.50304 9.87334 4.71304 9.81884 4.91254H8.60684C7.99587 4.91156 7.39902 5.09621 6.89534 5.44204M4.46084 6.33254L5.61084 7.48304M5.61084 7.48304C5.68058 7.0222 5.85674 6.58445 6.12534 6.20354C6.33453 5.90581 6.59531 5.64791 6.89534 5.44204M5.61084 7.48304C5.53716 7.96775 5.58091 8.46308 5.73934 8.92704M8.42284 8.12704L5.38734 11.1625M6.89534 5.44204C6.6801 5.08207 6.37517 4.78408 6.01034 4.57717C5.64552 4.37026 5.23326 4.26151 4.81384 4.26154H3.68234C3.22984 4.26154 3.00334 4.26154 2.83034 4.34954C2.67804 4.42655 2.55434 4.55024 2.47734 4.70254C2.38934 4.87554 2.38934 5.10204 2.38934 5.55454V6.68554C2.38937 7.08405 2.4876 7.47641 2.67535 7.82791C2.86311 8.17942 3.13459 8.47924 3.4658 8.70084C3.797 8.92245 4.17771 9.05903 4.57426 9.09848C4.97081 9.13793 5.37097 9.07905 5.73934 8.92704M5.73934 8.92704C5.97081 9.60734 6.43651 10.1832 7.05332 10.5519C7.67013 10.9206 8.3979 11.058 9.10668 10.9397C9.81547 10.8214 10.4591 10.4551 10.9228 9.90606C11.3864 9.35705 11.6399 8.66113 11.6378 7.94254V6.52854C11.6378 5.96254 11.6378 5.68004 11.5278 5.46404C11.4308 5.27354 11.2763 5.11904 11.0863 5.02204C10.8703 4.91204 10.5873 4.91204 10.0213 4.91204H9.81934" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_5_3">
                  <rect width="12" height="12" fill="white" transform="translate(0.889343 0.537045)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.mainhomeHeaderContent}>
          <div className={styles.texthead}>
            <p>
              Think again in a different way.Every story<br/>
              has its own interpretation. We specialize<br/>
              in creating unique and personalized stories
              to life<br/>
              <br/>
            </p>
          </div>
          <div className={styles.imagehead}>
            <img src="/maps.jpg" alt="Museum of Art and Photography" height="450" width="450"/>
          </div>
        </div>
      </div>

      {/* About Company Section */}
      <div className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h1>About Hoversehelf</h1>
            <p>
              Hoversehelf is a forward-thinking technology company and parent organization 
              to multiple innovative products. We specialize in creating cutting-edge solutions 
              that bridge the gap between human creativity and technological advancement.
            </p>
            <p>
              Our mission is to transform ideas into reality through strategic design, 
              artificial intelligence, and seamless user experiences.
            </p>
          </div>
          <div className={styles.aboutIcon}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Products Portfolio Section */}
      <div className={styles.portfolioSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Product Portfolio</h2>
          <p>Innovative solutions across multiple domains</p>
        </div>
        
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Machine Learning Platform</h3>
            <p>Advanced AI solutions for predictive analytics, natural language processing, and computer vision applications.</p>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="black" strokeWidth="2"/>
                <circle cx="8.5" cy="8.5" r="1.5" fill="black"/>
                <path d="M21 15L16 10L5 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>UI/UX Design Studio</h3>
            <p>Human-centered design solutions that create intuitive and engaging digital experiences across all platforms.</p>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 6.3A1 1 0 0 0 13 5H5A2 2 0 0 0 3 7V17A2 2 0 0 0 5 19H13A1 1 0 0 0 14.7 17.7L19 13.4A1 1 0 0 0 19 10.6L14.7 6.3Z" stroke="black" strokeWidth="2"/>
                <path d="M9 9L9 15" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 12L12 12" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Data Analytics Suite</h3>
            <p>Comprehensive data visualization and business intelligence tools for data-driven decision making.</p>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 21L9.5 16.5L14.5 16.5L16 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>AI Content Generator</h3>
            <p>Next-generation content creation tools powered by generative AI for marketing, design, and storytelling.</p>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2"/>
                <path d="M19.4 15A1.65 1.65 0 0 0 21 13.35A1.65 1.65 0 0 0 19.4 11.65L18.7 12.35A7.81 7.81 0 0 0 18.7 11.65A1.65 1.65 0 0 0 19.4 9A1.65 1.65 0 0 0 21 7.35A1.65 1.65 0 0 0 19.4 5.65L18.7 6.35A7.81 7.81 0 0 0 18.7 5.65A1.65 1.65 0 0 0 19.4 3A1.65 1.65 0 0 0 21 1.35" stroke="black" strokeWidth="2"/>
                <path d="M4.6 9A1.65 1.65 0 0 0 3 10.65A1.65 1.65 0 0 0 4.6 12.35L5.3 11.65A7.81 7.81 0 0 0 5.3 12.35A1.65 1.65 0 0 0 4.6 15A1.65 1.65 0 0 0 3 16.65A1.65 1.65 0 0 0 4.6 18.35L5.3 17.65A7.81 7.81 0 0 0 5.3 18.35A1.65 1.65 0 0 0 4.6 21A1.65 1.65 0 0 0 3 22.65" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            <h3>DevOps Automation</h3>
            <p>Streamlined deployment pipelines, infrastructure management, and continuous integration solutions.</p>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Digital Transformation</h3>
            <p>End-to-end digital solutions helping businesses adapt and thrive in the modern digital landscape.</p>
          </div>
        </div>
      </div>

      {/* Company Values Section */}
      <div className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2>Our Core Values</h2>
        </div>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11H15M9 15H15M17 21L12 16L7 21H17ZM20 8V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18V6A2 2 0 0 1 6 4H14L20 10V8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Innovation</h3>
            <p>Pushing boundaries with creative solutions and emerging technologies</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19A2 2 0 0 0 15 17H9A2 2 0 0 0 7 19V21M23 21V19A2 2 0 0 0 21 17H19M16 3.13A4 4 0 0 1 18 7A4 4 0 0 1 16 10.87M13 7A4 4 0 1 1 5 7A4 4 0 0 1 13 7Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Collaboration</h3>
            <p>Building strong partnerships and fostering teamwork across all projects</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Excellence</h3>
            <p>Delivering high-quality solutions that exceed client expectations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;