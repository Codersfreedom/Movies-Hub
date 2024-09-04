import { create } from "zustand";

export const useContentStore = create((set) => ({
  trendingContent: {},
  setTrendingContent: (data) => set({ trendingContent: data }),
  categoryContent: {},
  setCategoryContent: (data) => set({ categoryContent: data }),
  contentDetails: {},
  setContentDetails: (data) => set({ contentDetails: data }),
  movieGenres: {},
  setMovieGenres: (data) => set({ movieGenres: data }),
  tvGenres: {},
  setTvGenres: (data) => set({ tvGenres: data }),
}));
