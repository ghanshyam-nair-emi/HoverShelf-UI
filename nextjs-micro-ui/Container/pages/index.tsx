import { useCallback, useEffect, useState } from 'react';

import React from 'react';
import Welcome from './Welcome/welcome';
import dynamic from 'next/dynamic';
import styles from './Home.module.css'; // CSS Module

const NavigationApp = dynamic(
  () => {
    if (typeof window !== 'undefined') {
      return import('navigation_ui/NavigationApp' as any).catch(() => {
        return () => <div>Navigation UI not available</div>;
      });
    }
    return Promise.resolve(() => <div>Loading...</div>);
  },
  {
    ssr: false, // This is crucial - prevents SSR for federated modules
    loading: () => <p>Loading Navigation...</p>
  }
);

const RecommendationsApp = dynamic(
  () => {
    if (typeof window !== 'undefined') {
      return import('recommendations_ui/RecommendationsApp' as any).catch(() => {
        return () => <div>Recommendations UI not available</div>;
      });
    }
    return Promise.resolve(() => <div>Loading...</div>);
  },
  {
    ssr: false, // This is crucial - prevents SSR for federated modules
    loading: () => <p>Loading Recommendations...</p>
  }
);

const SearchApp = dynamic(
  () => {
    if (typeof window !== 'undefined') {
      return import('search_ui/SearchApp' as any).catch(() => {
        return () => <div>Search UI not available</div>;
      });
    }
    return Promise.resolve(() => <div>Loading...</div>);
  },
  {
    ssr: false, // This is crucial - prevents SSR for federated modules
    loading: () => <p>Loading Searches...</p>
  }
);

export default function Home() {
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(true);
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);
  type NavigationToggleDetail = { isCollapsed: boolean };
  type NavigationExpansionDetail = { isExpanded: boolean };


    const handleNavigationExpansionToggle = (event: Event) => {
      const customEvent = event as CustomEvent<NavigationExpansionDetail>;
      setIsNavigationExpanded(customEvent.detail.isExpanded);
    };

useEffect(() => {
    const handleNavigationToggle = (event: Event) => {
      const customEvent = event as CustomEvent<NavigationToggleDetail>;
      setIsNavigationCollapsed(customEvent.detail.isCollapsed);
    };

    window.addEventListener('navigationToggle', handleNavigationToggle);
    window.addEventListener('navigationExpanded', handleNavigationExpansionToggle);

    return () => {
      window.removeEventListener('navigationToggle', handleNavigationToggle);
      window.removeEventListener('navigationExpanded', handleNavigationExpansionToggle);
    };
  }, []);


  return (

    <div className={isNavigationCollapsed ? styles.containerCollapsed: (isNavigationExpanded ? styles.containerExpanded : styles.container)}>
      <div className={isNavigationCollapsed ? styles.navigationCollpsed: styles.navigation}>
        <NavigationApp />
      </div>

      <div className={styles.search}>
        <SearchApp />
      </div>

      <div className={styles.recommendations}>
        <RecommendationsApp />
      </div>
    </div>

  );
}