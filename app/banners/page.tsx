"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Slider from '../components/Slider';
import Plan from '../components/plan';

type Props = {}

export default function Banners({ }: Props) {
  const [showModal, setShowModal] = useState(false)
  const [showPlane, setShowPlane] = useState(false);

  const bannerCard = [
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard1.png",
      bg: "/img/bannermbg1.png",
      color: "#15C4A9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg2.png",
      color: "#8732C9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard3.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard4.png",
      bg: "/img/bannermbg4.png",
      color: "#E5DC44",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard1.png",
      bg: "/img/bannermbg1.png",
      color: "#15C4A9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg2.png",
      color: "#8732C9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard3.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard4.png",
      bg: "/img/bannermbg4.png",
      color: "#E5DC44",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard1.png",
      bg: "/img/bannermbg1.png",
      color: "#15C4A9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg2.png",
      color: "#8732C9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard3.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard4.png",
      bg: "/img/bannermbg4.png",
      color: "#E5DC44",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard1.png",
      bg: "/img/bannermbg1.png",
      color: "#15C4A9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg2.png",
      color: "#8732C9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard3.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard4.png",
      bg: "/img/bannermbg4.png",
      color: "#E5DC44",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard1.png",
      bg: "/img/bannermbg1.png",
      color: "#15C4A9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg2.png",
      color: "#8732C9",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard3.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard4.png",
      bg: "/img/bannermbg4.png",
      color: "#E5DC44",
      url: "/"
    },
    {
      title: "Metawin",
      des: "$799k + in Race Prizes to Be Won! join",
      img: "/img/bannermcard2.png",
      bg: "/img/bannermbg3.png",
      color: "#97C7E0",
      url: "/"
    },
  ]

  return (
    <>
      {showPlane && <Plan Click={() => setShowModal(!showModal)} onClick={() => setShowPlane(!showPlane)} />}
      <div className='banner overflow-hidden'>
        <div className='flex items-center gap-1 lg:gap-[10px] mb-3 lg:mb-4'>
          <Image src="/img/banner-iocn.png" alt="logo" width={22} height={30} className='flexauto' />
          <p className='text-[#F6F6F6] font-medium text-lg lg:text-[22px] !leading-normal'>Trending Banners</p>
        </div>
        <Slider />
        <div className="banner-body mt-14 lg:mt-8 xl:mt-10">
          <div className='flex flex-col md:flex-row overflow-auto gap-2 md:gap-7 items-center justify-between mb-4 lg:mb-5'>
            <h5 className='text-[#F6F6F6] font-medium text-lg lg:text-[22px] !leading-normal block md:hidden'>All Banners</h5>
            <div className="flex items-center  md:justify-between md:w-full gap-3">
              <div className='flex-[0_0_auto] flex items-center gap-4 lg:gap-5 md:mb-0 '>
                <h5 className='text-[#F6F6F6] font-medium text-lg lg:text-[22px] !leading-normal hidden md:block'>All Banners</h5>
                <button onClick={() => setShowPlane(!showPlane)} className='btn text-xs lg:text-sm font-medium text-white capitalize py-[10px] lg:py-[10px] px-[25px] lg:px-5 border border-[#FF2021] rounded-[50px] hover:bg-[#FF2021]'>purchase an ad spot</button>
              </div>
              {/* <button  className='flex-[0_0_auto] text-xs lg:text-sm font-medium text-white capitalize cursor-pointer inline-block  py-3 px-4 lg:px-5 border border-[#1D1F26] rounded-[40px] lg:rounded-[50px]'>Upload your Banner</button> */}
            </div>
          </div>
          <div className="card-area grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2 lg:gap-[13px] ">
            {bannerCard.map((item, idx) => (
              <div className="banner-main-card p-1 lg:p-[6px]  relative z-[1]" key={idx} style={{ backgroundImage: `url(${item.bg})` }}>
                <Image src={item.img} alt="logo" width={227} height={80} className='md:w-full object-contain rounded-lg lg:rounded-[10px]' />
                <p className='font-medium text-xs !leading-normal text-black mt-[6px]'>{item.title}</p>
                <p className={`${item.color == "#E5DC44" ? "text-black" : "text-black md:text-[#F5F3F5]"} text-xs lg:text-sm font-medium !leading-[120%]  mt-1 mb-2 lg:mb-3  maindes`}>{item.des}</p>
                <a href="#" className={`py-[6px] md:py-2 px-[18px] rounded-[20px] lg:rounded-[40px] xl:rounded-[60px]  capitalize inline-block border-black border border-solid !text-sm text-black hover:bg-[#FF2021] hover:border-[#FF2021] hover:border-none hover:!text-white `}>Buy Now</a>
                <a href='#' className='cardbtn w-8 md:w-9 lg:w-[38px] h-8 md:h-9 lg:h-[38px] bg-black border rounded-full p-2 lg:p-3 flex items-center justify-center absolute z-10' style={{ borderColor: item.color }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.53721 2.15603C3.492 1.49606 3.99037 0.924406 4.65034 0.879203L14.3488 0.214924C14.6942 0.19127 15.0329 0.318178 15.2776 0.562946C15.5224 0.807714 15.6493 1.1464 15.6256 1.49175L14.9614 11.1902C14.9162 11.8502 14.3445 12.3486 13.6845 12.3034C13.0246 12.2582 12.5262 11.6865 12.5714 11.0265L13.0173 4.51723L2.85559 14.6789C2.38783 15.1467 1.62944 15.1467 1.16168 14.6789C0.693919 14.2111 0.693919 13.4527 1.16168 12.985L11.3233 2.82332L4.81403 3.26916C4.15406 3.31436 3.58241 2.816 3.53721 2.15603Z" fill={`${item.color}`} />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
        {showModal &&
          <div className={`mainModal flex items-center justify-center w-full h-full  absolute left-0 top-0 z-10 bg-black bg-opacity-90`}>
            <div className="modal-body w-full md:w-[550px] max-h-[calc(100vh-40px)] overflow-auto lg:w-[705px] rounded-[15px] lg:rounded-[24px] bg-[#0F1013] py-5 lg:py-7 xl:py-8 px-6 lg:px-8 xl:px-10">
              <div className='flex justify-between mb-8 lg:mb-11 xl:mb-[50px]'>
                <div>
                  <p className='text-base lg:text-lg 2xl:text-2xl text-[#F5F3F5] font-semibold !leading-normal mb-3 lg:mb-4'>Upload Files</p>
                  <p className='text-sm lg:text-base !leading-normal'>Add your documents here. you can add up to 10 files.</p>
                </div>
                <button onClick={() => setShowModal(!showModal)} className='flex items-center justify-center  border rounded-full w-8 lg:w-10 h-8 lg:h-10 p-0 hover:bg-[#FF2021] hover:text-white'>
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.58646 2.22623C1.13591 1.90681 0.511736 2.01312 0.192324 2.46367C-0.127087 2.91422 -0.0207778 3.5384 0.429772 3.85781L6.60649 8.23671L2.22759 14.4134C1.90818 14.864 2.01449 15.4881 2.46504 15.8076C2.91559 16.127 3.53976 16.0207 3.85917 15.5701L8.23807 9.3934L14.4148 13.7723C14.8653 14.0917 15.4895 13.9854 15.8089 13.5348C16.1283 13.0843 16.022 12.4601 15.5715 12.1407L9.39476 7.76181L13.7737 1.5851C14.0931 1.13455 13.9868 0.510372 13.5362 0.19096C13.0857 -0.128451 12.4615 -0.0221413 12.1421 0.428408L7.76318 6.60512L1.58646 2.22623Z" fill="#F5F3F5" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className='rounded-[15px] lg:rounded-[24px] px-6 lg:px-0 py-10 lg:py-[60px] xl:py-[70px] text-center border border-[#2A2D37] border-dashed bg-[#0F1013] mb-5 lg:mb-6 xl:mb-8' >
                <label htmlFor="drop" className='cursor-pointer'>
                  <div className='rounded-full w-12 lg:w-[60px] h-12 lg:h-[60px] p-3 lg:p-[15px] bg-[#1B1D22] mx-auto  mb-5 lg:mb-6 flex items-center justify-center'>
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.30029 13.8001C7.30029 10.4065 7.30029 8.7085 8.35509 7.6549C9.40869 6.6001 11.1067 6.6001 14.5003 6.6001H18.1003C21.4939 6.6001 23.1919 6.6001 24.2455 7.6549C25.3003 8.7085 25.3003 10.4065 25.3003 13.8001V19.8001C25.3003 23.1937 25.3003 24.8917 24.2455 25.9453C23.1919 27.0001 21.4939 27.0001 18.1003 27.0001H14.5003C11.1067 27.0001 9.40869 27.0001 8.35509 25.9453C7.30029 24.8917 7.30029 23.1937 7.30029 19.8001V13.8001Z" stroke="#F5F3F5" strokeWidth="1.5" />
                      <path opacity="0.5" d="M7.3002 23.4C6.34542 23.4 5.42974 23.0207 4.75461 22.3456C4.07948 21.6705 3.7002 20.7548 3.7002 19.8V12.6C3.7002 8.0748 3.7002 5.8116 5.1066 4.4064C6.513 3.0012 8.775 3 13.3002 3H18.1002C19.055 3 19.9706 3.37928 20.6458 4.05442C21.3209 4.72955 21.7002 5.64522 21.7002 6.6" stroke="#F5F3F5" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className='text-sm lg:text-base xl:text-lg font-medium !leading-nromal text-[#F5F3F5] mb-1 lg:mb-2'>chose a file or drag & drop it here</p>
                  <p className='text-xs lg:text-sm xl:text-sm font-medium !leading-normal text-[#898989]'>Your File will be private until you publish your profile.</p>
                </label>
                <input type="file" className='hidden' name="drop" id="drop" />
              </div>
              <div className="input-area">
                <div className='mb-5 lg:mb-6'>
                  <label htmlFor="name" className='block mb-2 lg:mb-3 text-xs lg:text-sm !leading-normal text-[#F5F3F5]'>File Name</label>
                  <input className=' py-3 lg:py-4 px-[14px] lg:px-[18px] border rounded-lg lg:rounded-[10px] bg-[#0F1013] text-xs lg:text-sm !leading-normal text-[#F5F3F5] placeholder:text-[#F5F3F5] w-full' placeholder='Read Our Article here!' type="text" name="name" id="name" />
                </div>
                <div className='mb-8 lg:mb-10 xl:mb-[50px]'>
                  <label htmlFor="des" className='block mb-2 lg:mb-3 text-xs lg:text-sm !leading-normal text-[#F5F3F5]'>Description</label>
                  <textarea name="des" id="des" className='pt-3 lg:pt-4 pr-5 lg:pr-20 2xl:pr-[110px] pb-8 lg:pb-10 xl:pb-[46px] pl-[14px] lg:pl-[18px] w-full rounded-lg  lg:rounded-[10px] border border-[#1D1F26] bg-[#0F1013] text-xs lg:text-sm !leading-[160%] text-[#F5F3F5]' defaultValue="MetaWin you can win huge crypto prizes. 'Beznik' won a massive $1 Million USDC. Will you be our next big winner?"></textarea>
                </div>
              </div>
              <div className='flex items-center gap-3 lg:gap-4'>
                <button className='text-sm lg:text-base text-[#F5F3F5] font-semibold !leading-normal rounded-lg py-2 lg:py-3 px-4 lg:px-5 bg-[#FF2121]'>Confirm</button>
                <button onClick={() => setShowModal(!showModal)} className='text-sm lg:text-base text-[#F5F3F5] font-semibold !leading-normal rounded-lg py-2 lg:py-3 px-4 lg:px-5 bg-[#1B1C22]'>Cancel</button>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}