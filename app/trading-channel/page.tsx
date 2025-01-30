"use client"
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Marquee from 'react-fast-marquee';
import {FaAngleDown} from "react-icons/fa6";
import Slider from '../components/Slider';
import axios from 'axios';

type Props = {}

interface Token {
    position: number;
    address: string;
    extra: any;
    network: string;
}

const TRENDINGSOURCES: any = {
    "trendguru": {
        "name": "Trend Guru",
        "source": "https://t.me/TrendGuru_SOL/4?embed=1",
        "original": "https://t.me/TrendGuru_SOL/4",
        "network": "SOL",
        "telegram": "https://t.me/TrendGuru_SOL",
        "frequency": 60, // seconds
    },
    "trendgurueth": {
        "name": "ETH Trend Guru",
        "source": "https://t.me/ETH_TrendGuru/9277?embed=1",
        "original": "https://t.me/ETH_TrendGuru/9277",
        "network": "ETH",
        "telegram": "https://t.me/ETH_TrendGuru",
        "frequency": 60, // seconds
    },
    "trendingeth": {
        "name": "Trending",
        "source": "https://t.me/trending/2?embed=1",
        "original": "https://t.me/trending/2",
        "network": "ETH",
        "telegram": "https://t.me/trending",
        "frequency": 60, // seconds
    },
    "trendingsol": {
        "name": "Trending",
        "source": "https://t.me/trending/16?embed=1",
        "original": "https://t.me/trending/16",
        "network": "SOL",
        "telegram": "https://t.me/trending",
        "frequency": 60, // seconds
    },
    "ethtrending": {
        "name": "ETHTRENDING",
        "source": "https://t.me/ETHTRENDING/8179026?embed=1",
        "original": "https://t.me/ETHTRENDING/8179026",
        "network": "ETH",
        "telegram": "https://t.me/ETHTRENDING",
        "frequency": 60, // seconds
    },
    "cherrytrendingsol": {
        "name": "Cherry Trading",
        "source": "https://t.me/cherrytrending/8?embed=1",
        "original": "https://t.me/cherrytrending/8",
        "network": "SOL",
        "telegram": "https://t.me/cherrytrending/",
        "frequency": 60, // seconds
    },
    "cherrytrendingtron": {
        "name": "Cherry Trading",
        "source": "https://t.me/cherrytrending/8?embed=1",
        "original": "https://t.me/cherrytrending/8",
        "network": "TRON",
        "telegram": "https://t.me/cherrytrending/",
        "frequency": 60, // seconds
    },
    "cherrytrendingeth": {
        "name": "Cherry Trading",
        "source": "https://t.me/cherrytrending/14?embed=1",
        "original": "https://t.me/cherrytrending/14",
        "network": "ETH",
        "telegram": "https://t.me/cherrytrending/",
        "frequency": 60, // seconds
    },
    "cherrytrendingbase": {
        "name": "Cherry Trading",
        "source": "https://t.me/cherrytrending/14?embed=1",
        "original": "https://t.me/cherrytrending/14",
        "network": "BASE",
        "telegram": "https://t.me/cherrytrending/",
        "frequency": 60, // seconds
    },
    "cherrytrendingbsc": {
        "name": "Cherry Trading",
        "source": "https://t.me/cherrytrending/14?embed=1",
        "original": "https://t.me/cherrytrending/14",
        "network": "BSC",
        "telegram": "https://t.me/cherrytrending/",
        "frequency": 60, // seconds
    },
    "trendingssol": {
        "name": "SOL Trending",
        "source": "https://t.me/trendingssol/4939452?embed=1",
        "original": "https://t.me/trendingssol/4939452",
        "network": "SOL",
        "telegram": "https://t.me/trendingssol",
        "frequency": 60, // seconds
    },
    "spydefitron": {
        "name": "SpyDefi Trending",
        "source": "https://t.me/spydefi/12?embed=1",
        "original": "https://t.me/spydefi/12",
        "network": "TRON",
        "telegram": "https://t.me/spydefi",
        "frequency": 60, // seconds
    },
    "spydefisol": {
        "name": "SpyDefi Trending",
        "source": "https://t.me/spydefi/12?embed=1",
        "original": "https://t.me/spydefi/12",
        "network": "SOL",
        "telegram": "https://t.me/spydefi",
        "frequency": 60, // seconds
    },
    "spydefieth": {
        "name": "SpyDefi Trending",
        "source": "https://t.me/spydefi/12?embed=1",
        "original": "https://t.me/spydefi/12",
        "network": "ETH",
        "telegram": "https://t.me/spydefi",
        "frequency": 60, // seconds
    },
    "spydefibsc": {
        "name": "SpyDefi Trending",
        "source": "https://t.me/spydefi/12?embed=1",
        "original": "https://t.me/spydefi/12",
        "network": "BSC",
        "telegram": "https://t.me/spydefi",
        "frequency": 60, // seconds
    },
    "findertrending": {
        "name": "Finder Trending",
        "source": "https://t.me/findertrending/8?embed=1",
        "original": "https://t.me/findertrending/8",
        "network": "SOL",
        "telegram": "https://t.me/findertrending",
        "frequency": 60, // seconds
    },
    "basetrending": {
        "name": "BASE TRENDING (LIVE)",
        "source": "https://t.me/BASETRENDINGLIVE/2765891?embed=1",
        "original": "https://t.me/BASETRENDINGLIVE/2765891",
        "network": "BASE",
        "telegram": "https://t.me/BASETRENDINGLIVE",
        "frequency": 60, // seconds
    },
    "soltrending": {
        "name": "SOL TRENDING",
        "source": "https://t.me/SOLTRENDING/4221757?embed=1",
        "original": "https://t.me/SOLTRENDING/4221757",
        "network": "SOL",
        "telegram": "https://t.me/SOLTRENDING",
        "frequency": 60, // seconds,
    },
    "moontrendingeth": {
        "name": "MoonTrending ETH",
        "source": "https://t.me/trendingcrypto/87?embed=1",
        "original": "https://t.me/trendingcrypto/87",
        "network": "ETH",
        "telegram": "https://t.me/trendingcrypto/",
        "frequency": 60, // seconds,
    },
    "moontrendingsol": {
        "name": "MoonTrending SOL",
        "source": "https://t.me/trendingcrypto/87?embed=1",
        "original": "https://t.me/trendingcrypto/87",
        "network": "SOL",
        "telegram": "https://t.me/trendingcrypto/",
        "frequency": 60, // seconds,
    },
    "moontrendingtron": {
        "name": "MoonTrending TRON",
        "source": "https://t.me/trendingcrypto/87?embed=1",
        "original": "https://t.me/trendingcrypto/87",
        "network": "TRON",
        "telegram": "https://t.me/trendingcrypto/",
        "frequency": 60, // seconds,
    },
    "moontrendingbase": {
        "name": "MoonTrending BASE",
        "source": "https://t.me/trendingcrypto/87?embed=1",
        "original": "https://t.me/trendingcrypto/87",
        "network": "BASE",
        "telegram": "https://t.me/trendingcrypto/",
        "frequency": 60, // seconds,
    },
    "moontrendingbsc": {
        "name": "MoonTrending BSC",
        "source": "https://t.me/trendingcrypto/87?embed=1",
        "original": "https://t.me/trendingcrypto/87",
        "network": "BSC",
        "telegram": "https://t.me/trendingcrypto/",
        "frequency": 60, // seconds,
    },
}


export default function TradingChannel({}: Props) {
    const [loading, setLoading] = useState(true);
    const [trendingData, setTrendingData] = useState<{ [key: string]: Token[] }>({});

    // Fetch data for each source and network pair
    const fetchData = () => {
        console.log("Fetching data...");
        setLoading(true);

        const fetchPromises = Object.keys(TRENDINGSOURCES).map((key) => {
            const source: any = key;
            const network: any = TRENDINGSOURCES[key].network;

            return axios
                .get(`//apichub.0xlabs.dev/trending?source=${source}&network=${network}`)
                .then(response => ({
                    key,
                    data: response.data
                }))
                .catch(error => {
                    console.log(`Error fetching data for ${key}:`, error);
                    return null; // Return null for failed requests
                });
        });

        Promise.allSettled(fetchPromises).then((results) => {
            console.log("Results:", results);

            const newTrendingData: { [key: string]: Token[] } = {};

            results.forEach((result: any) => {
                if (result.status === "fulfilled" && result.value) {
                    newTrendingData[result.value.key] = result.value.data;
                }
            });

            setTrendingData(newTrendingData); // Update with successful responses only
            setLoading(false);
        });
    };


    const getChartLink = (token: string, network: string) => {
        if (network === "SOL") {
            return 'https://dexscreener.com/solana/' + token;
        } else if (network === "ETH") {
            return 'https://dexscreener.com/ethereum/' + token;
        }
    };

    useEffect(() => {
        fetchData(); // Initial fetch
        const interval = setInterval(fetchData, 60000); // Fetch every 1 minute

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const tcard1 = [
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "Trump Cam..",
            img: "/img/tgrap.png"
        },
        {
            title: "eliza ai1.",
            img: "/img/tgrap.png"
        },
        {
            title: "Fred the",
            img: "/img/tgrap.png"
        },
        {
            title: "SmoLanO",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },

    ]
    const tcard2 = [
        {
            title: "Department Of Govern",
            img: "/img/tgrap.png"
        },
        {
            title: "47th President of th",
            img: "/img/tgrap.png"
        },
        {
            title: "47th President of th",
            img: "/img/tgrap.png"
        },
        {
            title: "Mao",
            img: "/img/tgrap.png"
        },
        {
            title: "MAGA",
            img: "/img/tgrap.png"
        },
        {
            title: "Trump Vs Harris",
            img: "/img/tgrap.png"
        },
        {
            title: "SPX6900",
            img: "/img/tgrap.png"
        },
        {
            title: "Peanut",
            img: "/img/tgrap.png"
        },
        {
            title: "Victory America",
            img: "/img/tgrap.png"
        },
        {
            title: "RedWave ETH",
            img: "/img/tgrap.png"
        },
        {
            title: "RIGGED",
            img: "/img/tgrap.png"
        },
        {
            title: "AMERICAN PEPE",
            img: "/img/tgrap.png"
        },
        {
            title: "MSTR2100",
            img: "/img/tgrap.png"
        },
        {
            title: "Communist Party of t",
            img: "/img/tgrap.png"
        },

    ]
    const tcard3 = [
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "Trump Cam..",
            img: "/img/tgrap.png"
        },
        {
            title: "eliza ai1.",
            img: "/img/tgrap.png"
        },
        {
            title: "Fred the",
            img: "/img/tgrap.png"
        },
        {
            title: "SmoLanO",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },
        {
            title: "NOTPOTUS",
            img: "/img/tgrap.png"
        },

    ]
    const tcard4 = [
        {
            title: " Peanut the Squirrel",
            img: "/img/tgrap.png"
        },
        {
            title: "The Comeback Kid",
            img: "/img/tgrap.png"
        },
        {
            title: "Trump or Kamala",
            img: "/img/tgrap.png"
        },
        {
            title: "Pew Pew",
            img: "/img/tgrap.png"
        },
        {
            title: "TRUMPELON69",
            img: "/img/tgrap.png"
        },
        {
            title: "Super President Kama",
            img: "/img/tgrap.png"
        },
        {
            title: "Peanut the Squirrel",
            img: "/img/tgrap.png"
        },
        {
            title: "Super President Trum",
            img: "/img/tgrap.png"
        },
        {
            title: "TRUMPE",
            img: "/img/tgrap.png"
        },
        {
            title: "FIRST LADY",
            img: "/img/tgrap.png"
        },
        {
            title: "Bullish Trump Coin",
            img: "/img/tgrap.png"
        },
        {
            title: "President Wojak",
            img: "/img/tgrap.png"
        },
        {
            title: "MAGA DOG",
            img: "/img/tgrap.png"
        },
        {
            title: "mimi",
            img: "/img/tgrap.png"
        },

    ]
    const parpage = [
        "1", "2", "3", "...", "8", "9", "10"
    ]
    const marqueeList = [
        {
            logo: '/img/pairs/pairs-marquee-logo-1.png',
            name: 'DOGE',
            num: +43.23,
            per: '%',
            text: '',
        },
        {
            logo: '/img/pairs/pairs-marquee-logo-2.png',
            name: 'DOGE',
            num: +3.23,
            per: '%',
            text: 'DEXT',
        },
        {
            logo: '/img/pairs/pairs-marquee-logo-3.png',
            name: 'DOGE',
            num: -399314,
            per: '',
            text: '',
        },
        {
            logo: '/img/pairs/pairs-marquee-logo-4.png',
            name: 'DOGE',
            num: 1311615,
            per: '',
            text: 'DEXT',
        },
        {
            logo: '/img/pairs/pairs-marquee-logo-5.png',
            name: 'DOGE',
            num: 1311615,
            per: '',
            text: 'DEXT',
        },
    ]
    return (
        <div className='trading overflow-hidden'>
            <div className="pairs-top mb-3 md:mb-4 lg:mb-5 flex items-center">
                <button className="flex items-center gap-2 border-0 p-0 bg-[#000000] min-w-max pr-3"><img
                    src='/img/pairs/fire.png' alt=""/> Chub Trending <FaAngleDown/></button>
                <Marquee autoFill={true} speed={60} className="marquee flex items-center gap-5 overflow-auto">
                    {marqueeList.map((item, index) => (
                        <div className="single flex items-center gap-[6px] mr-2 md:mr-4 lg:mr-5" key={index}>
                            <div
                                className="count py-[1px] px-[4px] bg-[#282B33] rounded-[4px] text-[12px] font-lufga font-normal text-[var(--text--color,#F5F3F5)] text-center leading-normal"># {index + 1}</div>
                            <img src={item.logo} className="w-[20px] h-[20px]" alt=""/>
                            <h5 className="text-[14px] font-lufga font-normal text-[var(--paragraph,#A6A6A6)] text-center leading-normal">{item.name} </h5>
                            <p style={{color: item.num >= 0 ? '#14D215' : '#FF2121'}}
                               className="text-[14px] font-normal">{item.num} {item.per} {item.text} </p>
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className='mb-14'>
                <Slider/>
            </div>

            <div className='md:flex items-center justify-between mb-4 lg:mb-5 mt-5 lg:mt-6  '>
                <div className='mb-6 md:mb-0 text-center md:text-start'>
                    <p className='text-lg lg:text-[22px] font-medium text-[#F6F6F6] !leading-normal mb-1 lg:mb-2'>Trending
                        Channel List</p>
                    <p className='text-xs font-medium !leading-normal text-[#A6A6A6] px-10 md:px-0'>List of currently
                        trending and popular channels online.</p>
                </div>
                <div className="search-area  relative w-full md:max-w-max">
          <span className='absolute z-10  inline-block left-0 top-1/2 translate-y-[-50%] ml-3'>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M2.8335 9.75958C2.8335 5.75552 6.07943 2.50958 10.0835 2.50958C14.0876 2.50958 17.3335 5.75552 17.3335 9.75958C17.3335 13.7636 14.0876 17.0096 10.0835 17.0096C6.07943 17.0096 2.8335 13.7636 2.8335 9.75958ZM10.0835 0.509583C4.97486 0.509583 0.833496 4.65095 0.833496 9.75958C0.833496 14.8682 4.97486 19.0096 10.0835 19.0096C12.0198 19.0096 13.8172 18.4146 15.3027 17.3975C15.53 17.242 15.6436 17.1642 15.7472 17.1448C15.8438 17.1268 15.9281 17.1346 16.0197 17.1701C16.118 17.2082 16.2076 17.2979 16.3869 17.4771L18.8768 19.967C19.2673 20.3575 19.9004 20.3575 20.291 19.967C20.6815 19.5765 20.6815 18.9433 20.291 18.5528L17.8011 16.0629C17.6218 15.8836 17.5322 15.794 17.4941 15.6957C17.4586 15.6041 17.4508 15.5198 17.4688 15.4232C17.4882 15.3196 17.5659 15.206 17.7215 14.9788C18.7386 13.4932 19.3335 11.6959 19.3335 9.75958C19.3335 4.65095 15.1921 0.509583 10.0835 0.509583Z"
                    fill="#A6A6A6"/>
            </svg>
          </span>
                    <input
                        className=' w-full md:w-auto pl-[38px] py-[14px] input placeholder:text-[#A6A6A6] placeholder:font-normal bg-transparent rounded-[20px] lg:rounded-[40px] xl:rounded-[60px] text-sm lg:text-base !leading-[120%] text-[#A6A6A6] '
                        type="text" placeholder='Search...'/>
                    <span className='absolute z-10  inline-block right-0 top-1/2 translate-y-[-50%] mr-3'><svg
                        width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="1.17627" width="23" height="23" rx="3.5" stroke="#A6A6A6"/>
            <path d="M10.6963 19.6763L13.5075 6.55812" stroke="#A6A6A6" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          </span>
                </div>
            </div>
            <div className="trading-body bg-[#0F1013] rounded-lg lg:rounded-[10px] p-4 lg:p-[23px] ">
                <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4  gap-3 lg:gap-[18px]'>
                    {Object.keys(TRENDINGSOURCES).map((key: any) => (
                        trendingData?.[key] ? (
                            <div  key={key} className='card-list '>
                                <div className='flex items-center gap-3 lg:gap-[14px] mb-[10px] lg:mb-[14px]'>
                                    <h5 className='text-base lg:text-lg font-semibold !leading-normal text-[#F6F6F6] capitalize'>{key} </h5>
                                    <div
                                        className=' text-xs w-6 h-6 !leading-normal text-[#F5F3F5] py-[5px] px-[6px] border-[0.5px] border-[#1D1F26] rounded-full flex items-center justify-center'>{trendingData[key].length}
                                    </div>
                                </div>
                                <div
                                    className="list-heading py-3 lg:py-4 px-[10px] lg:px-[14px] flex items-center gap-2 justify-between bg-[#1B1D22] border-b border-[#1D1F26]">
                                    <Image src="/img/tlogo1.png" height={22} width={22} alt='img'/>
                                    <p className='text-xs lg:text-sm font-medium !leading-normal capitalize text-[#F6F6F6]'>{trendingData[key][0].network.toUpperCase()} </p>
                                    <a href={TRENDINGSOURCES[key].original}><Image src="/img/tlogo2.png" height={24} width={24} alt='img'/></a>
                                </div>
                                {/*{tcard1.map((item, idx) => (*/}
                                {trendingData[key].map((item: any, idx: number) => (
                                    <div
                                        className="flex items-center justify-between lg:py-[10px] px-3 lg:px-[14px] border-b border-l border-r border-[#1D1F26] last:rounded-b-lg"
                                        key={idx}>
                                        <div className='flex items-center gap-2 py-2 '>
                                            <div
                                                className='border border-[#1D1F26] rounded-[4px] !py-[2px] px-2 flex items-center justify-center text-[#F5F3F5] text-sm !leading-normal '>#{idx + 1}</div>
                                            <p className='text-xs lg:text-sm !leading-normal text-[#A6A6A6]'><a href={getChartLink(item.address, item.network)} target={"_blank"}>{item.extra.tokenName}</a></p>
                                        </div>
                                        <Image src={item.img} height={24} width={24} alt='img'/>
                                    </div>
                                ))}
                            </div>
                    ) : null
                        ))}
                    {/*<div className='card-list '>*/}
                    {/*    <div className='flex items-center gap-3 lg:gap-[14px] mb-[10px] lg:mb-[14px]'>*/}
                    {/*        <h5 className='text-base lg:text-lg font-semibold !leading-normal text-[#F6F6F6] capitalize'>Trending </h5>*/}
                    {/*        <div*/}
                    {/*            className=' text-xs w-6 h-6 !leading-normal text-[#F5F3F5] py-[5px] px-[6px] border-[0.5px] border-[#1D1F26] rounded-full flex items-center justify-center'>10*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="list-heading py-3 lg:py-4 px-[10px] lg:px-[14px] flex items-center gap-2 justify-between bg-[#1B1D22] border-b border-[#1D1F26]">*/}
                    {/*        <Image src="/img/tlogo1.png" height={22} width={22} alt='img'/>*/}
                    {/*        <p className='text-xs lg:text-sm font-medium !leading-normal capitalize text-[#F6F6F6]'>trendguru*/}
                    {/*            SOL trendgurueth </p>*/}
                    {/*        <Image src="/img/tlogo2.png" height={24} width={24} alt='img'/>*/}
                    {/*    </div>*/}
                    {/*    {tcard1.map((item, idx) => (*/}
                    {/*        <div*/}
                    {/*            className="flex items-center justify-between lg:py-[10px] px-3 lg:px-[14px] border-b border-l border-r border-[#1D1F26] last:rounded-b-lg"*/}
                    {/*            key={idx}>*/}
                    {/*            <div className='flex items-center gap-2 py-2 '>*/}
                    {/*                <div*/}
                    {/*                    className='border border-[#1D1F26] rounded-[4px] !py-[2px] px-2 flex items-center justify-center text-[#F5F3F5] text-sm !leading-normal '>#{idx + 1}</div>*/}
                    {/*                <p className='text-xs lg:text-sm !leading-normal text-[#A6A6A6]'>{item.title}</p>*/}
                    {/*            </div>*/}
                    {/*            <Image src={item.img} height={24} width={24} alt='img'/>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    {/*<div className='card-list '>*/}
                    {/*    <div className='flex items-center gap-3 lg:gap-[14px] mb-[10px] lg:mb-[14px]'>*/}
                    {/*        <h5 className='text-base lg:text-lg font-semibold !leading-normal text-[#F6F6F6] capitalize'>trendingeth </h5>*/}
                    {/*        <div*/}
                    {/*            className=' text-xs w-6 h-6 !leading-normal text-[#F5F3F5] py-[5px] px-[6px] border-[0.5px] border-[#1D1F26] rounded-full flex items-center justify-center'>15*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="list-heading py-3 lg:py-4 px-[10px] lg:px-[14px] flex items-center gap-2 justify-between bg-[#1B1D22] border-b border-[#1D1F26]">*/}
                    {/*        <Image src="/img/tlogo3.png" height={22} width={22} alt='img'/>*/}
                    {/*        <p className='text-xs lg:text-sm font-medium !leading-normal capitalize text-[#F6F6F6]'>ETH*/}
                    {/*            trendingeth ETH</p>*/}
                    {/*        <Image src="/img/tlogo2.png" height={24} width={24} alt='img'/>*/}
                    {/*    </div>*/}
                    {/*    {tcard2.map((item, idx) => (*/}
                    {/*        <div*/}
                    {/*            className="flex items-center justify-between lg:py-[10px] px-3 lg:px-[14px] border-b border-l border-r border-[#1D1F26] last:rounded-b-lg"*/}
                    {/*            key={idx}>*/}
                    {/*            <div className='flex items-center gap-2 py-2 '>*/}
                    {/*                <div*/}
                    {/*                    className='border border-[#1D1F26] rounded-[4px] !py-[2px] px-2 flex items-center justify-center text-[#F5F3F5] text-sm !leading-normal '>#{idx + 1}</div>*/}
                    {/*                <p className='text-xs lg:text-sm !leading-normal text-[#A6A6A6]'>{item.title}</p>*/}
                    {/*            </div>*/}
                    {/*            <Image src={item.img} height={24} width={24} alt='img'/>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    {/*<div className='card-list '>*/}
                    {/*    <div className='flex items-center gap-3 lg:gap-[14px] mb-[10px] lg:mb-[14px]'>*/}
                    {/*        <h5 className='text-base lg:text-lg font-semibold !leading-normal text-[#F6F6F6] capitalize'>Trending </h5>*/}
                    {/*        <div*/}
                    {/*            className=' text-xs w-6 h-6 !leading-normal text-[#F5F3F5] py-[5px] px-[6px] border-[0.5px] border-[#1D1F26] rounded-full flex items-center justify-center'>10*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="list-heading py-3 lg:py-4 px-[10px] lg:px-[14px] flex items-center gap-2 justify-between bg-[#1B1D22] border-b border-[#1D1F26]">*/}
                    {/*        <Image src="/img/tlogo1.png" height={22} width={22} alt='img'/>*/}
                    {/*        <p className='text-xs lg:text-sm font-medium !leading-normal capitalize text-[#F6F6F6]'>trendguru*/}
                    {/*            SOL trendgurueth </p>*/}
                    {/*        <Image src="/img/tlogo2.png" height={24} width={24} alt='img'/>*/}
                    {/*    </div>*/}
                    {/*    {tcard3.map((item, idx) => (*/}
                    {/*        <div*/}
                    {/*            className="flex items-center justify-between lg:py-[10px] px-3 lg:px-[14px] border-b border-l border-r border-[#1D1F26] last:rounded-b-lg"*/}
                    {/*            key={idx}>*/}
                    {/*            <div className='flex items-center gap-2 py-2 '>*/}
                    {/*                <div*/}
                    {/*                    className='border border-[#1D1F26] rounded-[4px] !py-[2px] px-2 flex items-center justify-center text-[#F5F3F5] text-sm !leading-normal '>#{idx + 1}</div>*/}
                    {/*                <p className='text-xs lg:text-sm !leading-normal text-[#A6A6A6]'>{item.title}</p>*/}
                    {/*            </div>*/}
                    {/*            <Image src={item.img} height={24} width={24} alt='img'/>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    {/*<div className='card-list '>*/}
                    {/*    <div className='flex items-center gap-3 lg:gap-[14px] mb-[10px] lg:mb-[14px]'>*/}
                    {/*        <h5 className='text-base lg:text-lg font-semibold !leading-normal text-[#F6F6F6] capitalize'>Trending*/}
                    {/*            SOL </h5>*/}
                    {/*        <div*/}
                    {/*            className=' text-xs w-6 h-6 !leading-normal text-[#F5F3F5] py-[5px] px-[6px] border-[0.5px] border-[#1D1F26] rounded-full flex items-center justify-center'>15*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="list-heading py-3 lg:py-4 px-[10px] lg:px-[14px] flex items-center gap-2 justify-between bg-[#1B1D22] border-b border-[#1D1F26]">*/}
                    {/*        <Image src="/img/tlogo4.png" height={22} width={22} alt='img'/>*/}
                    {/*        <p className='text-xs lg:text-sm font-medium !leading-normal capitalize text-[#F6F6F6]'>trendguru*/}
                    {/*            SOL trendgurueth </p>*/}
                    {/*        <Image src="/img/tlogo2.png" height={24} width={24} alt='img'/>*/}
                    {/*    </div>*/}
                    {/*    {tcard4.map((item, idx) => (*/}
                    {/*        <div*/}
                    {/*            className="flex items-center justify-between lg:py-[10px] px-3 lg:px-[14px] border-b border-l border-r border-[#1D1F26] last:rounded-b-lg"*/}
                    {/*            key={idx}>*/}
                    {/*            <div className='flex items-center gap-2 py-2 '>*/}
                    {/*                <div*/}
                    {/*                    className='border border-[#1D1F26] rounded-[4px] !py-[2px] px-2 flex items-center justify-center text-[#F5F3F5] text-sm !leading-normal '>#{idx + 1}</div>*/}
                    {/*                <p className='text-xs lg:text-sm !leading-normal text-[#A6A6A6]'>{item.title}</p>*/}
                    {/*            </div>*/}
                    {/*            <Image src={item.img} height={24} width={24} alt='img'/>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
                <div className='flex items-center justify-center text-center'>
                    <div className="page mt-5 lg:mt-6 xl:mt-[30px] ">
                        <div className='flex items-center gap-2 lg:gap-3'>{parpage.map((item, idx) => <button
                            className={`${idx === 0 ? "active" : ""} hover:rounded-[6px] hover:bg-[#1B1D22] parpage text-sm lg:text-base font-medium text-white  !leading-normal  border-none py-[6px] px-3 lg:px-4  `}
                            key={idx}>{item}</button>)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}