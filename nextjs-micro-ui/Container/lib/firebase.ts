import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Debug logging

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);