import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardBody, CardFooter, Box, Flex, Avatar, Button, Text } from '@chakra-ui/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Card-swiper.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Share, Star, ThumbsUp } from 'lucide-react';
import { SMALL_IMAGE_PATH } from '../utils/constants';

const CardSwiper = ({ reviews }) => {
    const [swiperRef, setSwiperRef] = useState(null);




    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.length === 0 && (
                    <SwiperSlide className='h-full '>
                        <Card maxW='md' className='dark:bg-card-dark h-full w-full  dark:text-white rounded-lg'>
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='No reviews'  alt="image" />

                                        <Box>
                                            <h2 className='font-bold'>No reviews</h2>
                                        </Box>
                                    </Flex>

                                </Flex>
                            </CardHeader>
                            <CardBody className=' overflow-hidden  h-[126px]'>

                                <Text className='text-start '>
                                    No reviews available
                                </Text>
                            </CardBody>

                        </Card>
                    </SwiperSlide>
                )}

                {reviews.map((review, index) => {
                    return (
                        <SwiperSlide key={index} className='h-full '>
                            <Card maxW='md' className='dark:bg-card-dark h-full w-full  dark:text-white rounded-lg'>
                                <CardHeader>
                                    <Flex spacing='4'>
                                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                            <Avatar name={review.author} src={SMALL_IMAGE_PATH + review.author_details.avatar_path} alt="image" />

                                            <Box>
                                                <h2 className='font-bold'>{review?.author}</h2>
                                                <div className='flex items-center gap-2'>
                                                    <div className='flex items-center gap-1'>
                                                        <Star size={17} />
                                                        <p>{review.author_details.rating === null ? "0" : review.author_details.rating}</p>

                                                    </div>
                                                    <div>
                                                        <p>{review.created_at.split("-")[0]}</p>
                                                    </div>
                                                </div>
                                            </Box>
                                        </Flex>

                                    </Flex>
                                </CardHeader>
                                <CardBody className=' overflow-hidden  h-[126px]'>
                                    <Text className='text-start '>
                                        {review.content}
                                    </Text>
                                </CardBody>

                                <CardFooter

                                    justify='space-between'
                                    flexWrap='wrap'
                                    sx={{
                                        '& > button': {
                                            minW: '136px',
                                        },
                                    }}
                                >
                                    <Button className=' dark:hover:bg-gray-800 dark:text-white ' flex='1'  variant='ghost' leftIcon={<ThumbsUp />}>
                                        Like
                                    </Button>

                                    <Button className='dark:hover:bg-gray-800 dark:text-white' flex='1' variant='ghost' leftIcon={<Share />}>
                                        Share
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    )
                })}




            </Swiper>


        </>
    );
}

export default CardSwiper
