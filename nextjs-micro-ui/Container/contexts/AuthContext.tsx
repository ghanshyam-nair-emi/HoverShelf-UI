import React, { createContext, useContext, useEffect, useState } from 'react';

import { apiFetch } from '../lib/api';
import { useRouter } from 'next/router';

type User = {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (jwt: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Load user from localStorage JWT
    useEffect(() => {
        const init = async () => {
            const token = localStorage.getItem('jwt');
            if (token) {
                try {
                    const me = await apiFetch<User>('/auth/me');
                    setUser(me);
                } catch (err) {
                    console.error('JWT invalid, clearing...');
                    localStorage.removeItem('jwt');
                    setUser(null);
                }
            }
            setLoading(false);
        };
        init();
    }, []);

    const login = (jwt: string) => {
        localStorage.setItem('jwt', jwt);
        apiFetch<User>('/auth/me')
            .then(setUser)
            .catch(() => logout());
    };

    const logout = () => {
        localStorage.removeItem('jwt');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
};
