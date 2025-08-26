import React from 'react';
import MicroComponent from './components/MicroComponent';

const App: React.FC = () => {
  return (
    <div>
      <MicroComponent />
      <p>This is the entire micro UI application</p>
    </div>
  );
};

export default App;