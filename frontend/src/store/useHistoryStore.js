import {create} from 'zustand'

export const useHistoryStore = create((set)=>({
    isLoading:false,
    setIsLoading: (isLoading) => set({isLoading}),
    history:{},
    setHistory:(history) => set({history}),
}))