import axios from 'axios';
import {create} from 'zustand'

export const useAuthStore = create((set)=>({
    authUser: null,
    isCheckingAuth:false,
    setAuthUser:(authUser) => set({authUser}),
    isLoading:false,
    setIsLoading:(isLoading) => set({isLoading}),
    authCheck: async () => {
		set({ isCheckingAuth: true });
		try {
			const response = await axios.get("/api/v1/auth/authCheck");

			set({ authUser: response.data.user, isCheckingAuth: false });
		} catch (error) {
			set({ isCheckingAuth: false, authUser: null });
			// toast.error(error.response.data.message || "An error occurred");
		}
	},
}))