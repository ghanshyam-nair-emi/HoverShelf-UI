import React from 'react';
import RecommendationsComponent from './components/RecommendationsComponent';

const App: React.FC = () => {
  return (
    <div style={{ 
      height: '100%', 
      width: '100%', 
      overflow: 'hidden',
      margin: 0,
      padding: 0 
    }}>
      <RecommendationsComponent />
    </div>
  );
};

export default App;