import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Contact.module.css';

export default function ContactPage() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [from, setFrom] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    subject: subject,
                    body: body,
                    from: from
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to send message');
            }

            setSuccess('Message sent successfully! We will get back to you soon.');
            
            setEmail('');
            setSubject('');
            setBody('');
            setFrom('');

        } catch (err: any) {
            setError(err.message || 'Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.companyInfo}>
                    <h1 className={styles.companyName}>HoverShelf</h1>
                    <p className={styles.companyTagline}>Think Different</p>
                    <div className={styles.companyDetails}>
                    </div>
                </div>
            </div>

            <div className={styles.formSection}>
                <div className={styles.formCard}>
                    <h2 className={styles.formTitle}>Get in Touch</h2>
                    <p className={styles.formSubtitle}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Your Name</label>
                            <input
                                type="text"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                                required
                                className={styles.input}
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Your Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.input}
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Subject</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                className={styles.input}
                                placeholder="What is this regarding?"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Message</label>
                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                required
                                className={styles.textarea}
                                placeholder="Tell us more about your inquiry..."
                                rows={6}
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
                            className={`${styles.submitButton} ${loading ? styles.loading : ''}`}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}