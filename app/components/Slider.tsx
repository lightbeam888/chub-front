import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'; 

type Props = {}

type bannerheading = {
    title: String,
    des: String,
    img: String,
    bg: String,
    colors: String,
    url: String,
    active: Boolean;
}

export default function Slider({ }: Props) {
    const bannerheading: bannerheading[] = [
        {
            title: "Read Our Article Here!",
            des: "DEXT Token Deflationary Model",
            img: "/img/bannercard1.png",
            bg: "/img/banner-heading-bg.png",
            colors: "#15C4A9",
            url: "/",
            active: true,
        },
        {
            title: "Follow Us On Instagram!!",
            des: "Official DEXTools Account",
            img: "/img/bannercard2.png",
            bg: "/img/banner-heading-bg2.png",
            colors: "#E5DC44",
            url: "/",
            active: false,
        },
        {
            title: "Track Smart Money and Early buyers",
            des: "Top Traders",
            img: "/img/bannercard3.png",
            bg: "/img/banner-heading-bg3.png",
            colors: "#8732C9",
            url: "/",
            active: false,
        },
        {
            title: "Read Our Article Here!",
            des: "DEXT Token Deflationary Model",
            img: "/img/bannercard1.png",
            bg: "/img/banner-heading-bg.png",
            colors: "#15C4A9",
            url: "/",
            active: true,
        },
        {
            title: "Follow Us On Instagram!!",
            des: "Official DEXTools Account",
            img: "/img/bannercard2.png",
            bg: "/img/banner-heading-bg2.png",
            colors: "#E5DC44",
            url: "/",
            active: false,
        },
        {
            title: "Track Smart Money and Early buyers",
            des: "Top Traders",
            img: "/img/bannercard3.png",
            bg: "/img/banner-heading-bg3.png",
            colors: "#8732C9",
            url: "/",
            active: false,
        },
    ]
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.1,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 1.8,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 2.2,
                        spaceBetween: 40,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper">
                {bannerheading.map((item, idx) => (
                    <SwiperSlide className='banner-heading  ' key={idx}>
                        <div className="banner-heading-card flex items-center gap-2 lg:gap-3  p-1 lg:p-[6px] relative z-[1] "
                            style={{ backgroundImage: `url(${item.bg})` }} >
                            <Image src={String(item.img)} alt="logo" width={143} height={109} className=' heading-img rounded-[10px] lg:rounded-[14px] object-cover md:object-contain' />
                            <div className=''>
                                <p className={`headingtitle text-xs lg:text-sm !leading-normal  mb-2 lg:mb-[10px] ${idx === 2 ? "text-[#A6A6A6]" : "text-black"}`}>{item.title}</p>
                                <p className={`headingdes text-sm lg:text-base font-medium !leading-[120%]  ${idx === 1 ? "text-black" : "text-[#F5F3F5]"} `}>{item.des}</p>
                            </div>
                            <a href='#' className='hbtn w-10 md: 2xl:w-12 h-10 2xl:h-12 bg-black border  rounded-full p-2 lg:p-3 flex items-center justify-center absolute z-10 right-0 top-0'
                                style={{ borderColor: String(item.colors) }} >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.53721 2.15603C3.492 1.49606 3.99037 0.924406 4.65034 0.879203L14.3488 0.214924C14.6942 0.19127 15.0329 0.318178 15.2776 0.562946C15.5224 0.807714 15.6493 1.1464 15.6256 1.49175L14.9614 11.1902C14.9162 11.8502 14.3445 12.3486 13.6845 12.3034C13.0246 12.2582 12.5262 11.6865 12.5714 11.0265L13.0173 4.51723L2.85559 14.6789C2.38783 15.1467 1.62944 15.1467 1.16168 14.6789C0.693919 14.2111 0.693919 13.4527 1.16168 12.985L11.3233 2.82332L4.81403 3.26916C4.15406 3.31436 3.58241 2.816 3.53721 2.15603Z" fill={`${item.colors}`} />
                                </svg>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}