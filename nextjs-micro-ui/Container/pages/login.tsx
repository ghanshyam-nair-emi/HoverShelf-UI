import Link from 'next/link';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Login.module.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Sign in with Firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseIdToken = await userCredential.user.getIdToken();

            // Send token to your backend
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firebaseToken: firebaseIdToken }),
            });

            if (!res.ok) {
                throw new Error('Login failed');
            }

            const data = await res.json();
            login(data.token);

            // Redirect to home page
            router.push('/');
        } catch (err: any) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formCard}>
                <div className={styles.companyLogo}>
                    <img src="/logocollapsed.png" alt="Hovershelf Logo" className={styles.logo} />
                </div>
                <div className={styles.header}>
                    <h1 className={styles.title}>Hovershelf</h1>
                    <p className={styles.subtitle}>Welcome back</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    {error && (
                        <div className={styles.errorMessage}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`${styles.primaryButton} ${loading ? styles.loading : ''}`}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                {/* Registration link */}
                <div className={styles.linkSection}>
                    <p className={styles.linkText}>Don't have an account?</p>
                    <Link href="/register">
                        <button className={styles.secondaryButton}>
                            Create New Account
                        </button>
                    </Link>
                </div>

                {/* Forgot password link */}
                <div className={styles.forgotPassword}>
                    <a href="#" className={styles.forgotLink}>
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
}