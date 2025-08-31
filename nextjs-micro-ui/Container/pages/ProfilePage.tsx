// pages/profile.tsx
import { useEffect, useState } from "react";
import { apiFetch } from "../lib/api";
import styles from "./ProfilePage.module.css";

interface UserProfile {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    firebaseUid: string;
}

export default function ProfilePage() {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await apiFetch<UserProfile>("/auth/me");
                setProfile(data);
            } catch (err) {
                console.error("Error fetching profile:", err);
            } finally {
                // Add a small delay to show the loading animation
                setTimeout(() => setIsLoading(false), 800);
            }
        };

        fetchProfile();
    }, []);

    if (isLoading) {
        return (
            <div className={styles.profileContainer}>
                <div className={styles.loadingSpinner}>
                    <div className={styles.spinner}>
                        <div className={styles.spinnerInner}></div>
                        <div className={styles.spinnerOuter}></div>
                    </div>
                    <p className={styles.loadingText}>Loading your profile...</p>
                </div>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className={styles.profileContainer}>
                <div className={styles.errorCard}>
                    <div className={styles.errorIcon}>⚠</div>
                    <h2 className={styles.errorTitle}>Unable to load profile</h2>
                    <p className={styles.errorMessage}>Please try refreshing the page</p>
                </div>
            </div>
        );
    }

    const getInitials = () => {
        if (profile.firstName && profile.lastName) {
            return `${profile.firstName[0]}${profile.lastName[0]}`.toUpperCase();
        }
        if (profile.firstName) {
            return profile.firstName[0].toUpperCase();
        }
        return profile.email[0].toUpperCase();
    };

    const getDisplayName = () => {
        if (profile.firstName && profile.lastName) {
            return `${profile.firstName} ${profile.lastName}`;
        }
        if (profile.firstName || profile.lastName) {
            return profile.firstName || profile.lastName;
        }
        return "User";
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.backgroundElements}>
                <div className={styles.floatingShape}></div>
                <div className={styles.floatingShape}></div>
                <div className={styles.floatingShape}></div>
            </div>

            <div className={styles.profileCard}>
                <div className={styles.profileHeader}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatar}>
                            <span className={styles.avatarText}>{getInitials()}</span>
                            <div className={styles.avatarGlow}></div>
                        </div>
                    </div>
                    <div className={styles.headerContent}>
                        <h1 className={styles.profileTitle}>Profile</h1>
                        <h2 className={styles.displayName}>{getDisplayName()}</h2>
                    </div>
                </div>
                
                <div className={styles.profileContent}>
                    <div className={styles.profileField}>
                        <label className={styles.fieldLabel}>User ID</label>
                        <div className={styles.fieldValue}>
                            <span className={styles.fieldText}>{profile.id}</span>
                            <div className={styles.fieldAccent}></div>
                        </div>
                    </div>
                    
                    <div className={styles.profileField}>
                        <label className={styles.fieldLabel}>Email Address</label>
                        <div className={styles.fieldValue}>
                            <span className={styles.fieldText}>{profile.email}</span>
                            <div className={styles.fieldAccent}></div>
                        </div>
                    </div>
                    
                    <div className={styles.profileField}>
                        <label className={styles.fieldLabel}>Display Name</label>
                        <div className={styles.fieldValue}>
                            <span className={styles.fieldText}>{getDisplayName()}</span>
                            <div className={styles.fieldAccent}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.profileFooter}>
                    <div className={styles.statusIndicator}>
                        <div className={styles.statusDot}></div>
                        <span className={styles.statusText}>Active</span>
                    </div>
                </div>
            </div>
        </div>
    );
}