import {create} from 'zustand';

export const useSearchStore = create((set)=>({
    isTyping:false,
    setIsTyping: (isTyping) =>set({isTyping}),
    isLoading:false,
    setIsLoading: (isLoading) => set({isLoading}),
    searchContent:{},
    setSearchContent: (searchContent) => set({searchContent}),

}))