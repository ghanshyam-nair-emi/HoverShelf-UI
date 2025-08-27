// pages/index.tsx

import { useEffect, useState } from 'react';

import Link from 'next/link';
import React from 'react';
import styles from './Home.module.css';
import { useAuth } from '../contexts/AuthContext';

// import dynamic from 'next/dynamic'; // Comment this out temporarily



// Remote components (TEMPORARILY COMMENTED OUT FOR TESTING)
/*
const NavigationApp = dynamic(() => import('navigation_ui/NavigationApp' as any), {
  ssr: false,
  loading: () => <p>Loading Navigation...</p>
});

const RecommendationsApp = dynamic(() => import('recommendations_ui/RecommendationsApp' as any), {
  ssr: false,
  loading: () => <p>Loading Recommendations...</p>
});

const SearchApp = dynamic(() => import('search_ui/SearchApp' as any), {
  ssr: false,
  loading: () => <p>Loading Searches...</p>
});
*/

type NavigationToggleDetail = { isCollapsed: boolean };
type NavigationExpansionDetail = { isExpanded: boolean };

export default function Home() {
  console.log('🚀 Home component is loading...'); // Debug log
  
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(true);
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);
  const { user, loading, logout } = useAuth();

  console.log('🔄 After useAuth hook - user:', user, 'loading:', loading); // Debug log

  useEffect(() => {
    console.log('🔍 Debug Info:');
    console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
    console.log('Firebase Config:', {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.substring(0, 10) + '...',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
    console.log('User state:', user);
    console.log('Loading state:', loading);
    console.log('Local storage JWT:', localStorage.getItem('jwt'));
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

    window.addEventListener('navigationToggle', handleNavigationToggle);
    window.addEventListener('navigationExpanded', handleNavigationExpansionToggle);

    return () => {
      window.removeEventListener('navigationToggle', handleNavigationToggle);
      window.removeEventListener('navigationExpanded', handleNavigationExpansionToggle);
    };
  }, []);

  if (loading) {
    console.log('🔄 Showing loading state');
    return (
      <div className={styles.container}>
        <p>Loading user...</p>
      </div>
    );
  }

  if (!user) {
    console.log('❌ No user found, showing login prompt');
    return (
      <div className={styles.container}>
        <h1>Welcome to HoverShelf</h1>
        <p>You need to log in to access the app.</p>
        <Link href="/login">
          <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007cba', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}>
            Go to Login
          </button>
        </Link>
      </div>
    );
  }

  console.log('✅ User authenticated, showing main app');
  return (
    <div className={styles.container}>
      <h1>Welcome, {user.email}!</h1>
      <p>You are successfully logged in!</p>
      
      {/* Placeholder content instead of micro-frontends */}
      <div style={{ 
        border: '2px solid #007cba', 
        borderRadius: '8px',
        padding: '20px', 
        margin: '20px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <h3>🧭 Navigation Section</h3>
        <p>Navigation micro-frontend will load here when enabled</p>
      </div>
      
      <div style={{ 
        border: '2px solid #28a745', 
        borderRadius: '8px',
        padding: '20px', 
        margin: '20px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <h3>🔍 Search Section</h3>
        <p>Search micro-frontend will load here when enabled</p>
      </div>
      
      <div style={{ 
        border: '2px solid #ffc107', 
        borderRadius: '8px',
        padding: '20px', 
        margin: '20px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <h3>💡 Recommendations Section</h3>
        <p>Recommendations micro-frontend will load here when enabled</p>
      </div>

      <button onClick={logout} style={{
        padding: '12px 24px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '20px'
      }}>
        Logout
      </button>
    </div>
  );
}