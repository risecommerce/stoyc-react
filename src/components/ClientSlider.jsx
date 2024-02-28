import React from "react";
import { Navigation, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Anker from '../assets/images/client-logo/Anker_logo.jpg';
import Baxter from '../assets/images/client-logo/Baxter.png';
import Pathwater from '../assets/images/client-logo/Pathwater_Logo.jpg';
import bacano from '../assets/images/client-logo/bacano.png';
import Cre from '../assets/images/client-logo/city-real-estate.png';
import Descroissantsparis from '../assets/images/client-logo/descroissantsparis.webp';
import GeneralWax from '../assets/images/client-logo/general-wax.png';
import Mantle from '../assets/images/client-logo/mantle.png';
import Nw from '../assets/images/client-logo/nw.png';
import Oo from '../assets/images/client-logo/o.jpg';
import RealBrows from '../assets/images/client-logo/real-brows.png';
import Saints from '../assets/images/client-logo/saints.png';
import Ths from '../assets/images/client-logo/ths.png';
import Banro from '../assets/images/client-logo/benro.png'
import Kiss from '../assets/images/client-logo/kiss.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const ClintSlider = () => {

    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Autoplay, A11y]}
                spaceBetween={5}
                slidesPerView={2}
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1250: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 8,
                        spaceBetween: 50,
                    },
                }}

            >
                <SwiperSlide className="client-box">
                    <img src={Anker} className="h-40px mb-5" alt="Anker" data-aos="fade-in" />
                </SwiperSlide>
                <SwiperSlide className="client-box">
                    <img src={Banro} className="h-40px mb-5" alt="Anker" data-aos="fade-in" />
                </SwiperSlide>
                <SwiperSlide className="client-box"><img src={Pathwater} className="h-40px mb-5" alt="Anker" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={Baxter} className="h-40px mb-5" alt="Anker" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={Cre} className="h-40px mb-5" alt="Anker" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={Oo} className="h-40px mb-5" alt="Oo" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={bacano} className="h-40px mb-5" alt="bacano" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={Descroissantsparis} className="h-40px mb-5" alt="Anker" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={GeneralWax} className="h-40px mb-5" alt="GeneralWax" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={Kiss} className="h-40px mb-5" alt="Kiss" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={Mantle} className="h-40px mb-5" alt="Mantle" data-aos="fade-in" /></SwiperSlide>

                <SwiperSlide className="client-box"><img src={Nw} className="h-40px mb-5" alt="Anker" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={RealBrows} className="h-40px mb-5" alt="Anker" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={Saints} className="h-40px mb-5" alt="Anker" data-aos="fade-in" /></SwiperSlide>
                <SwiperSlide className="client-box"><img src={Ths} className="h-40px mb-5" alt="Anker" data-aos="fade-in" /></SwiperSlide>

            </Swiper>
        </>
    );
};

export default ClintSlider;