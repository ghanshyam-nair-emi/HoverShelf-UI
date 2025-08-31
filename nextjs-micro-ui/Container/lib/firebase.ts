import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Debug logging
console.log('🔥 Firebase Config Debug:');
console.log('API Key:', process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Found' : 'Missing');
console.log('Auth Domain:', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);
console.log('Project ID:', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Check if all required fields are present
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
    console.error('❌ Firebase configuration incomplete:', firebaseConfig);
    throw new Error('Firebase configuration is incomplete. Check your environment variables.');
}

console.log('✅ Firebase config loaded successfully');
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);