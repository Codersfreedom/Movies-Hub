// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CirclePlay, Info } from 'lucide-react';

import {Link} from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Swiper-style.css';
import { ORIGINAL_IMAGE_PATH } from '../utils/constants';


export default ({sliderContent}) => {

// console.log(sliderContent)

  return (
    <Swiper className='mySwiper w-full h-full rounded-s-lg rounded-e-lg'
      modules={[Navigation, Autoplay, Pagination]}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      pagination={{ clickable: true }}
      spaceBetween={30}
    >
      {sliderContent && sliderContent?.map((content, index) => {
        return(
        <SwiperSlide className='relative w-full h-full' key={index} > 
        <img src={ORIGINAL_IMAGE_PATH + content?.poster_path} alt={content?.title || content.name} className='w-full h-full object-cover' />
        <div className='absolute w-full flex flex-col gap-3 p-4 bottom-0 left-0 justify-start items-start pl-4 text-white bg-black/50' aria-hidden='true'>
          <h1 className='text-4xl'>{content?.title || content?.name}</h1>
          <div className='flex justify-between items-center min-w-full  ' >

            <div className='text-balance text-start pr-4'>
              <p>{content?.overview}</p>
            </div>


            <div className='flex gap-3 justify-center items-center   mr-12'>
              <Link to={`/${content?.media_type}/${content?.id}`} className='w-32 h-12 cursor-pointer hover:bg-slate-500 transition-all rounded-2xl bg-slate-400 flex items-center justify-center gap-1' > <Info size={20} /> Details</Link>
              <Link to={`/${content?.media_type}/${content?.id}`} className='w-32 h-12 cursor-pointer  rounded-2xl hover:bg-slate-500 transition-all bg-slate-400 flex text-nowrap items-center justify-center gap-1'> <CirclePlay size={20} /> Watch now</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>)


      })}
      
    
      
    </Swiper>
  );
};
