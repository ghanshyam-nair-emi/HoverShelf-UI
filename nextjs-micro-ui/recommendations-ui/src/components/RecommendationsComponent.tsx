import React from 'react';
import Suggestions from './Suggestions/Suggestions';
import TopTips from './TopTips/TopTips';
import HotTopics from './HotTopics/HotTopics';

const RecommendationsComponent: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: '8px',
        height: '100%',
        width: '100%',
        padding: '8px',
        margin: 0,
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: 'transparent',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden',
        boxSizing: 'border-box',
        flexWrap: 'nowrap'
      }}
    >
      <div style={{ flex: '1 1 33%', minWidth: '200px', height: '100%' }}>
        <HotTopics />
      </div>
      <div style={{ flex: '1 1 34%', minWidth: '220px', height: '100%' }}>
        <Suggestions />
      </div>
      <div style={{ flex: '1 1 33%', minWidth: '200px', height: '100%' }}>
        <TopTips />
      </div>
    </div>
  );
};


export default RecommendationsComponent;