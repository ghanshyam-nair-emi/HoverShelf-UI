import React from 'react';

const MicroComponent: React.FC = () => {
  return (
    <div style={{ border: '1px solid blue', padding: '20px', margin: '20px' }}>
      <h2>Micro UI Component</h2>
      <p>This component is loaded from the micro UI app!</p>
    </div>
  );
};

export default MicroComponent;