import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Home.module.css';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation'
import ProductPage from './ProductPage';
import workData from '../Data/workData';
import ProfilePage from './ProfilePage';
import OurServicesPage from './OurServicesPage';
import AboutCreator from './AboutCreator';
import creatorData from '../Data/creatorData';
// Remote components with the WORKING pattern from your old version
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

type NavigationToggleDetail = { isCollapsed: boolean };
type NavigationExpansionDetail = { isExpanded: boolean };
type SelectionChangeDetail = { id: string ,name: string };

export default function Home() {
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(true);
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);
  const [ViewValue, setViewValue] = useState('');
  const [selectedView, setSelectedView] = useState('search');
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('🔍 Debug Info:');
    console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
    console.log('Firebase Config:', {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.substring(0, 10) + '...',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
    console.log('🔧 Module Federation URLs:');
    console.log('Navigation UI:', process.env.NEXT_PUBLIC_NAVIGATION_UI_URL);
    console.log('Search UI:', process.env.NEXT_PUBLIC_SEARCH_UI_URL);
    console.log('Recommendations UI:', process.env.NEXT_PUBLIC_RECOMMENDATIONS_UI_URL);
    console.log('User state:', user);
    console.log('Loading state:', loading);
    
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      console.log('Local storage JWT:', localStorage.getItem('jwt'));
    }
  }, [user, loading]);

  useEffect(() => {
    const handleNavigationToggle = (event: Event) => {
      const customEvent = event as CustomEvent<NavigationToggleDetail>;
      setIsNavigationCollapsed(customEvent.detail.isCollapsed);
    };

    const handleNavigationExpansionToggle = (event: Event) => {
      const customEvent = event as CustomEvent<NavigationExpansionDetail>;
      setIsNavigationExpanded(customEvent.detail.isExpanded);
    };

    const handleSelectionChange = (event: Event) => {
      const customEvent = event as CustomEvent<SelectionChangeDetail>;
      setSelectedView(customEvent.detail.id);
      setViewValue(customEvent.detail.name);
      console.log('Selection changed to:', customEvent.detail.name);
      console.log()
    };
    const handleLogout = () => {
      logout();
    };

    window.addEventListener('navigationToggle', handleNavigationToggle);
    window.addEventListener('navigationExpanded', handleNavigationExpansionToggle);
    window.addEventListener('mainSelectionChanged', handleSelectionChange);
    window.addEventListener('LogoutEvent', handleLogout);

    return () => {
      window.removeEventListener('navigationToggle', handleNavigationToggle);
      window.removeEventListener('navigationExpanded', handleNavigationExpansionToggle);
      window.removeEventListener('mainSelectionChanged', handleSelectionChange);
      window.removeEventListener('LogoutEvent', handleLogout);
    };
  }, []);

if (loading) {
  return (
    <div className={styles.container}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        gap: '20px'
      }}>
        {/* Spinner */}
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #007cba',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        
        {/* Loading text */}
        <p style={{
          margin: 0,
          color: '#666',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          Loading user...
        </p>
      </div>
      
      {/* CSS animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

if (!user) {
  router.push('/login');
  return null;
}

  return (
    <div
      className={
        isNavigationCollapsed
          ? styles.containerCollapsed
          : isNavigationExpanded
          ? styles.containerExpanded
          : styles.container
      }
    >
      <div className={isNavigationCollapsed ? styles.navigationCollpsed : styles.navigation}>
        <NavigationApp />
      </div>
      
      <div className={styles.search}>
          {selectedView === 'search' && <SearchApp />}
          {selectedView === 'profile' && <ProfilePage />}
          {selectedView === 'disc' && (() => {
              const selectedProduct = workData.find(item => item.id === ViewValue);
              return selectedProduct ? <ProductPage product={selectedProduct} /> : <SearchApp />;
          })()}
          {selectedView === 'Geo' && (() => {
              if (ViewValue === 'Services') {
                  return <OurServicesPage />;
              }
              // else if (ViewValue === 'Work') {
              //     return <WorkPage />;
              // }
              else if (ViewValue === 'Creator') {
                  return <AboutCreator creator={creatorData} />;
              }
              else {
                  return <SearchApp />;
              } 
          })()}
      </div>

      <div className={styles.recommendations}>
        <RecommendationsApp />
      </div>
    </div>
  );
}