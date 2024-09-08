import {create} from 'zustand';

export const useWatchListStore = create((set)=>({
    isLoading:false,
    setIsLoading:(isLoading) => set({isLoading}),
    wishList:{},
    setWishList:(wishList) =>set({wishList}),
}))