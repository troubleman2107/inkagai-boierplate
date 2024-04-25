import create from 'zustand';

import { Json } from './supabase/types';

interface User {
    avatar_url: string | null
    billing_address: Json | null
    full_name: string | null
    id: string
    payment_method: Json | null
    credit: number | null
}

type State = {
    userInfo: User | null; // Add the userInfo property to the State type
    setUser: (userInfo: User | null) => void;
};

export const useUserInfo = create<State>((set) => ({
    userInfo: null,
    setUser: (userInfo: User | null) => set({ userInfo }), // Fix the setUser function to correctly update the state
}));