import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardBody, CardFooter, Box, Flex, Avatar, Button, Text } from '@chakra-ui/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Card-swiper.css';

// import required modules
import {  Navigation } from 'swiper/modules';
import { Share, ThumbsUp } from 'lucide-react';

const CardSwiper = () => {
    const [swiperRef, setSwiperRef] = useState(null);




    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                navigation={true}
                modules={[ Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card maxW='md' className='dark:bg-card-dark dark:text-white rounded-lg'>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Segun Adebayo' src='' alt="image" />

                                    <Box>
                                        <h2 className='font-bold'>Segun Adebayo</h2>
                                        <Text className='text-start'>Rating, date</Text>
                                    </Box>
                                </Flex>

                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text className='text-start'>
                                With Chakra UI, I wanted to sync the speed of development with the speed
                                of design. I wanted the developer to be just as excited as the designer to
                                create a screen.
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
                            <Button className=' dark:text-white' flex='1' variant='ghost' leftIcon={<ThumbsUp />}>
                                Like
                            </Button>

                            <Button className='dark:text-white' flex='1' variant='ghost' leftIcon={<Share />}>
                                Share
                            </Button>
                        </CardFooter>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card maxW='md' className='dark:bg-card-dark dark:text-white'>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Segun Adebayo' src='' alt="image" />

                                    <Box>
                                        <h2 className='font-bold'>Segun Adebayo</h2>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>

                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                With Chakra UI, I wanted to sync the speed of development with the speed
                                of design. I wanted the developer to be just as excited as the designer to
                                create a screen.
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
                            <Button className=' dark:text-white' flex='1' variant='ghost' leftIcon={<ThumbsUp />}>
                                Like
                            </Button>

                            <Button className='dark:text-white' flex='1' variant='ghost' leftIcon={<Share />}>
                                Share
                            </Button>
                        </CardFooter>
                    </Card>
                </SwiperSlide>

            </Swiper>


        </>
    );
}

export default CardSwiper
