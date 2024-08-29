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


export default () => {



  return (
    <Swiper className='mySwiper rounded-s-lg rounded-e-lg'
      modules={[Navigation, Autoplay, Pagination]}
      navigation={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      centeredSlides={true}
      pagination={{ clickable: true }}
      spaceBetween={30}
    >
      <SwiperSlide className='relative'> <img src="wallpaperflare.jpg" alt="" srcset="" />
        <div className='absolute flex flex-col gap-3 bottom-5 left-3 justify-start items-start pl-4 text-white'>
          <h1 className='text-4xl'>Movie name</h1>
          <div className='flex justify-between  ' >

            <div className='text-balance text-start w-fit'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem, possimus similique qui tempore obcaecati ducimus in ratione. Quasi, vel.</p>
            </div>


            <div className='flex gap-3 justify-center items-center   mr-12'>
              <Link to="/" className='w-32 h-12 cursor-pointer hover:bg-slate-500 transition-all rounded-2xl bg-slate-400 flex items-center justify-center gap-1' > <Info size={20} /> Details</Link>
              <Link to="/" className='w-32 h-12 cursor-pointer  rounded-2xl hover:bg-slate-500 transition-all bg-slate-400 flex text-nowrap items-center justify-center gap-1'> <CirclePlay size={20} /> Watch now</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><img src="wallhaven.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="wallpaper1.png" alt="" /></SwiperSlide>
      {/* <SwiperSlide>Slide 4</SwiperSlide> */}
      
    </Swiper>
  );
};
