import Link from 'next/link';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Register.module.css';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const firebaseIdToken = await userCredential.user.getIdToken();

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firebaseToken: firebaseIdToken,
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                }),
            });

            if (!res.ok) {
                throw new Error('Registration failed');
            }

            const data = await res.json();
            login(data.token);

            setSuccess('Account created successfully! Redirecting...');
            
            // Redirect to home page after a brief delay
            setTimeout(() => {
                router.push('/');
            }, 1500);

        } catch (err: any) {
            setError(err.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formCard}>
                {/* Company Logo/Name */}
                <div className={styles.header}>
                    <h1 className={styles.title}>HoverShelf</h1>
                    <p className={styles.subtitle}>Create your account</p>
                </div>

                <form onSubmit={handleRegister}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

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
                        <small className={styles.helpText}>Minimum 6 characters</small>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    {error && (
                        <div className={styles.errorMessage}>
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className={styles.successMessage}>
                            {success}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`${styles.primaryButton} ${loading ? styles.loading : ''}`}
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                {/* Login link */}
                <div className={styles.linkSection}>
                    <p className={styles.linkText}>Already have an account?</p>
                    <Link href="/login">
                        <button className={styles.secondaryButton}>
                            Sign In Instead
                        </button>
                    </Link>
                </div>

                {/* Terms and Privacy */}
                <div className={styles.terms}>
                    <p className={styles.termsText}>
                        By creating an account, you agree to our{' '}
                        <a href="#" className={styles.termsLink}>Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className={styles.termsLink}>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
}