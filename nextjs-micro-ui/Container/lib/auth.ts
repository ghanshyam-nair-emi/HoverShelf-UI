// lib/auth.ts

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "./firebase";

export async function registerUser(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export async function loginUser(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export async function logoutUser() {
    return await signOut(auth);
}
