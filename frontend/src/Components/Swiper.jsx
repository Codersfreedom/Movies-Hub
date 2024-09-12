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
    <Swiper className='mySwiper w-full h-full  rounded-s-lg rounded-e-lg'
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
        <SwiperSlide className='relative w-full h-full ' key={index} > 
        <img src={ORIGINAL_IMAGE_PATH + content?.backdrop_path} alt={content?.title || content.name} className='w-full h-full object-cover' title={content.title || content.name} />
        <div className='absolute w-full  flex flex-col gap-3 p-4 bottom-0 left-0 justify-start items-start pl-4 text-white bg-black/50' aria-hidden='true'>
          <h1 className='text-4xl max-sm:text-2xl'>{content?.title || content?.name}</h1>
          <div className='flex justify-between items-center min-w-full px-2  ' >

            <div className='text-balance overflow-y-clip text-start w-3/4 max-sm:w-11/12  h-20'>
              <p className='max-sm:text-sm'>{content?.overview}</p>
            </div>


            <div className='flex gap-3 justify-center items-end h-20 w-52 max-sm:flex-col max-sm:items-end  pr-2'>
              <Link to={`/${content?.media_type}/${content?.id}`} className='w-fit h-10 px-2 max-sm:text-sm cursor-pointer hover:bg-slate-500 duration-300 ease-in-out rounded-xl max-sm:rounded-full bg-slate-400 flex items-center justify-center gap-1' > <Info size={20} /> Details</Link>
              {/* <Link to={`/${content?.media_type}/${content?.id}`} className='w-fit h-12 px-2 max-sm:text-sm cursor-pointer  rounded-2xl hover:bg-slate-500 transition-all bg-slate-400 flex text-nowrap items-center justify-center gap-1'> <CirclePlay size={20} /> Watch now</Link> */}
            </div>
          </div>
        </div>
      </SwiperSlide>)


      })}
      
    
      
    </Swiper>
  );
};
