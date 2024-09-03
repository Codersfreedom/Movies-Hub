import {create} from 'zustand';

export const useContentStore = create((set)=>({
    sliderData:{},
    setSliderData: (data) => set({sliderData:data}),
    categoryContent:{},
    setCategoryContent: (data) =>set({categoryContent:data}),
    contentDetails:{},
    setContentDetails: (data) =>set({contentDetails:data}),
    
}))