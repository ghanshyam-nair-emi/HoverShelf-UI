import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext'; // Fix the path - add ../ 

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;