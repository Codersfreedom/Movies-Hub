import {create} from 'zustand';

export const useSearchStore = create((set)=>({
    isTyping:false,
    setIsTyping: (isTyping) =>set({isTyping}),

}))