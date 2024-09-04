import { create } from "zustand";

export const useContentStore = create((set) => ({
  isLoading:false,
  setIsLoading:(data) => set({isLoading:data}),
  trendingContent: {},
  setTrendingContent: (data) => set({ trendingContent: data }),
  categoryContent: {},
  setCategoryContent: (data) => set({ categoryContent: data }),
  contentDetails: {},
  setContentDetails: (data) => set({ contentDetails: data }),
 
}));
