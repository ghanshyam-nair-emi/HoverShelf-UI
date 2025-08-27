// pages/profile.tsx

import { useEffect, useState } from "react";

import { apiFetch } from "../lib/api";

interface UserProfile {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    firebaseUid: string;
}

export default function ProfilePage() {
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        apiFetch("/auth/me")
            .then(setProfile)
            .catch((err) => console.error("Error fetching profile:", err));
    }, []);

    if (!profile) return <p>Loading...</p>;

    return (
        <div>
            <h1>Profile</h1>
            <p><strong>ID:</strong> {profile.id}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
        </div>
    );
}
