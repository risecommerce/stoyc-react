import React from "react";
// import Swiper core and required modules
import { Navigation, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {

    return (
        <>
            <Swiper
                modules={[Navigation, Autoplay, A11y]}
                navigation
                autoplay
                spaceBetween={50}
                slidesPerView={1}
                //onSlideChange={() => console.log('slide change')}
                //onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="testimonial-block"> <p>
                    I would highly recommend Rafi to others and plan to continue working with him. He is
                    a
                    great communicators and is always available as needed.
                </p>
                </SwiperSlide>
                <SwiperSlide className="testimonial-block"> <p>
                    Rafi and his team were great with content creation. They whipped up videos that were
                    spot-on for my audience. You could
                    really tell they did their homework. We are seeing way more
                    likes, shares, and follows to our social pages, as well as people coming into my
                    store
                    complementing our social media.
                </p></SwiperSlide>
                <SwiperSlide className="testimonial-block"> <p>
                    <span className="text-uppercase">Stoyc</span> was a huge help in implementing our booking
                    site, Facebook page, and ensuring
                    the
                    strongest visibility for my business. Appointments immediately increased and were
                    easy
                    for my
                    team to keep track of
                </p></SwiperSlide>

            </Swiper>
        </>
    );
};

export default Testimonial;