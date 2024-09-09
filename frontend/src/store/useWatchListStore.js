import {create} from 'zustand';

export const useWatchListStore = create((set)=>({
    isLoading:false,
    setIsLoading:(isLoading) => set({isLoading}),
    isSuccess:false,
    setIsSuccess:(isSuccess) =>set({isSuccess}),
    wishList:{},
    setWishList:(wishList) =>set({wishList}),
}))