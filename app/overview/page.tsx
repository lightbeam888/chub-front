"use client"
import { FaAngleDown } from "react-icons/fa6";
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { BsThreeDots } from "react-icons/bs";
import Trading from '../components/overview/Trading';
import UsdGrap from '../components/overview/UsdGrap';
import Slider from "../components/Slider";
import Marquee from "../components/Marquee";
import { camera, setting, caret_down } from "../components/Icons";

type Props = {}

type card = {
  p: String,
  num: String,
  value: String,
  svg: JSX.Element,
  color1: String,
  color2: String,
  class: String,
}

export default function Overview({ }: Props) {
  const card: card[] = [
    {
      p: 'Market Cap',
      num: '$3,43M',
      value: '1.94% (1d)',
      svg: <GoTriangleUp />,
      color1: '#F48B0B',
      color2: '#F8D73D',
      class: '',
    },
    {
      p: 'Liquidity',
      num: '$333.4k',
      value: '1.94% (1d)',
      svg: <GoTriangleDown />,
      color1: '#FF1E4E',
      color2: '#FF839D',
      class: 'down',
    },
    {
      p: 'Volume (24h)',
      num: '$333.4k',
      value: '1.94% (1d)',
      svg: <GoTriangleUp />,
      color1: '#B3A3F8',
      color2: '#A415F0',
      class: '',
    },
    {
      p: 'Circulating supply',
      num: '340.23B',
      value: '1.94% (1d)',
      svg: <GoTriangleUp />,
      color1: '#30DD80',
      color2: '#139E8D',
      class: '',
    },
  ];
  const socialItem = [
    {
      logo: '/img/overview/social-logo-1.png',
      name: 'CoinmarketCap',
      to: '',
    },
    {
      logo: '/img/overview/social-logo-2.png',
      name: 'View Contract',
      to: '',
    },
    {
      logo: '/img/overview/social-logo-3.png',
      name: 'Coingecko',
      to: '',
    },
    {
      logo: '/img/overview/social-logo-4.png',
      name: 'Metamask',
      to: '',
    },
  ]
  const socialItem2 = [
    {
      logo: '/img/overview/social-logo-5.png',
      name: 'Website',
      to: '',
    },
    {
      logo: '/img/overview/social-logo-6.png',
      name: 'Email',
      to: '',
    },
    {
      logo: '/img/overview/social-logo-7.png',
      name: 'Telegram',
      to: '',
    },
    {
      logo: '/img/overview/social-logo-8.png',
      name: 'Discord',
      to: '',
    },
    {
      logo: '/img/overview/social-logo-9.png',
      name: 'Instagram',
      to: '',
    },
  ]
  const socialItem3 = [
    {
      logo: '/img/overview/social-logo-10.png',
      name: 'Github',
      to: '',
    },
    {
      logo: '/img/overview/social-logo-11.png',
      name: 'Bitbucket',
      to: '',
    },

  ]
  const reaction = [
    {
      value: 7.5,
      icon: '/img/overview/reaction-icon-1.png',
      color1: '#B3A3F8',
      color2: '#A415F0',
    },
    {
      value: 7.5,
      icon: '/img/overview/reaction-icon-2.png',
      color1: '#00E2E0',
      color2: '#00E2E0',
    },
    {
      value: 7.5,
      icon: '/img/overview/reaction-icon-3.png',
      color1: '#00AAF2',
      color2: '#01A9F3',
    },
    {
      value: 7.5,
      icon: '/img/overview/reaction-icon-4.png',
      color1: '#FF2121',
      color2: '#FF839D',
    },
  ]

  const TableList = [
    {
      profile: [
        {

          logo: '/img/overview/bitLogo.png',
          name: 'Bitcoin',
          with: "BTC",
        }

      ],
      pair: 'SOL',
      price: '$44,957.14',
      depth: '$4,335,652',
      confidence: "High",
      value: '$2,378,474,657',
      liquidity: '945',
    },
    {
      profile: [
        {

          logo: '/img/overview/tether.png',
          name: 'Tether',
          with: "USDT",
        }

      ],
      pair: 'SOL',
      price: '$44,957.14',
      depth: '$4,335,652',
      confidence: "Medium",
      value: '$2,378,474,657',
      liquidity: '945',
    },
    {
      profile: [
        {

          logo: '/img/overview/eth.png',
          name: 'Ethereum',
          with: "ETH  ",
        }

      ],
      pair: 'SOL',
      price: '$44,957.14',
      depth: '$4,335,652',
      confidence: "High",
      value: '$2,378,474,657',
      liquidity: '945',
    },
    {
      profile: [
        {

          logo: '/img/overview/lol.png',
          name: 'Solona',
          with: "SOL",
        }

      ],
      pair: 'SOL',
      price: '$44,957.14',
      depth: '$4,335,652',
      confidence: "Low",
      value: '$2,378,474,657',
      liquidity: '945',
    },
    {
      profile: [
        {

          logo: '/img/overview/husd.png',
          name: 'Husd',
          with: "husd",
        }

      ],
      pair: 'SOL',
      price: '$44,957.14',
      depth: '$4,335,652',
      confidence: "High",
      value: '$2,378,474,657',
      liquidity: '945',
    },
    {
      profile: [
        {

          logo: '/img/overview/lol.png',
          name: 'Solona',
          with: "SOL",
        }

      ],
      pair: 'SOL',
      price: '$44,957.14',
      depth: '$4,335,652',
      confidence: "Medium",
      value: '$2,378,474,657',
      liquidity: '945',
    },

  ]

  return (
    <div className="overview overflow-hidden">
      <div className="pairs-top mb-3 md:mb-4 lg:mb-5 flex items-center">
        <button className="flex items-center gap-2 border-0 p-0 bg-[#000000] min-w-max pr-3" ><img src='/img/pairs/fire.png' alt="" /> Chub Trending <FaAngleDown /></button>
        <Marquee />
      </div>
      <Slider />
      <div className="overview-inner flex gap-5">
        <div className="overview-left flex flex-col gap-5">
          <div className="overview-left-top grid grid-cols-2  3xl:grid-cols-2 4xl:grid-cols-4 items-center gap-3 flex-wrap">
            {card.map((item, index) => (
              <div className="single relative z-[1] flex items-center justify-between " key={index} >
                <div className="line absolute top-1/2 left-0 -translate-y-1/2 w-[2px] h-[43px] rounded-3xl" style={{ background: `linear-gradient(to bottom, ${item.color1}, ${item.color2})`, }}></div>
                <div className="text">
                  <div className="flex gap-[3px]  md:gap-[10px] mb-2">
                    <p className='text-[12px] font-lufga font-normal text-[#5C6679] leading-[100%] text-nowrap overflow-hidden text-ellipsis line-clamp-1 block -webkit-box -webkit-box-orient-vertical'>{item.p}</p>
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_496_2200)">
                        <path d="M5.9974 0.843262C4.94256 0.843262 3.91142 1.15606 3.03436 1.74209C2.15729 2.32812 1.47371 3.16108 1.07004 4.13562C0.666373 5.11016 0.560756 6.18251 0.766543 7.21708C0.972331 8.25164 1.48028 9.20195 2.22616 9.94783C2.97204 10.6937 3.92235 11.2017 4.95692 11.4074C5.99148 11.6132 7.06384 11.5076 8.03838 11.104C9.01292 10.7003 9.84587 10.0167 10.4319 9.13964C11.0179 8.26257 11.3307 7.23143 11.3307 6.17659C11.3307 4.76211 10.7688 3.40555 9.76863 2.40536C8.76844 1.40516 7.41189 0.843262 5.9974 0.843262ZM5.9974 10.8433C5.07442 10.8433 4.17217 10.5696 3.40474 10.0568C2.63731 9.54401 2.03917 8.81517 1.68596 7.96245C1.33275 7.10973 1.24034 6.17142 1.4204 5.26617C1.60046 4.36093 2.04492 3.52941 2.69757 2.87676C3.35021 2.22412 4.18173 1.77966 5.08698 1.5996C5.99222 1.41953 6.93053 1.51195 7.78325 1.86516C8.63598 2.21837 9.36481 2.8165 9.87759 3.58393C10.3904 4.35136 10.6641 5.25362 10.6641 6.17659C10.6641 7.41427 10.1724 8.60126 9.29723 9.47643C8.42206 10.3516 7.23507 10.8433 5.9974 10.8433Z" fill="#5C6679" />
                        <path d="M6.09927 3.14975C5.73805 3.14378 5.37996 3.21744 5.05042 3.3655C4.72089 3.51356 4.42801 3.73238 4.1926 4.00642C4.1599 4.03673 4.13361 4.07329 4.11529 4.11394C4.09696 4.15459 4.08698 4.19851 4.08594 4.24308C4.08592 4.28421 4.09417 4.32492 4.1102 4.3628C4.12623 4.40067 4.14972 4.43493 4.17926 4.46354C4.20881 4.49215 4.24381 4.51453 4.28217 4.52934C4.32054 4.54415 4.3615 4.55109 4.4026 4.54975C4.49066 4.54757 4.57486 4.51317 4.63927 4.45308C4.81743 4.24431 5.0387 4.07661 5.28786 3.96153C5.53701 3.84644 5.80815 3.7867 6.0826 3.78642C6.86927 3.78642 7.35927 4.29308 7.35927 4.92308V4.93975C7.35927 5.67642 6.7726 6.08642 5.84594 6.15642C5.80842 6.15787 5.77162 6.16722 5.73797 6.18387C5.70431 6.20053 5.67455 6.2241 5.65063 6.25305C5.62672 6.282 5.60919 6.31567 5.59919 6.35187C5.58919 6.38806 5.58694 6.42596 5.5926 6.46308C5.5926 6.46308 5.5926 7.23642 5.5926 7.37975C5.6009 7.46226 5.63964 7.53871 5.70128 7.59419C5.76292 7.64966 5.84302 7.68017 5.92594 7.67975H5.9626C6.04511 7.67146 6.12157 7.63271 6.17704 7.57108C6.23251 7.50944 6.26302 7.42934 6.2626 7.34642V6.65975C7.2626 6.51975 8.0726 5.99308 8.0726 4.89975V4.88308C8.0626 3.88308 7.2826 3.14975 6.09927 3.14975Z" fill="#5C6679" />
                        <path d="M5.92448 9.3265C6.1546 9.3265 6.34115 9.13995 6.34115 8.90983C6.34115 8.67971 6.1546 8.49316 5.92448 8.49316C5.69436 8.49316 5.50781 8.67971 5.50781 8.90983C5.50781 9.13995 5.69436 9.3265 5.92448 9.3265Z" fill="#5C6679" />
                      </g>
                      <defs>
                        <clipPath id="clip0_496_2200">
                          <rect width="12" height="12" fill="white" transform="translate(0 0.176514)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className='text-base md:text-[18px] font-lufga font-semibold text-[#E9E8EB] leading-normal'>{item.num}</h3>
                </div>
                <div className={`flex items-center gap-[2px] p-[8px_10px] updown ${item.class}`}>
                  {item.svg} {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className="trad rounded-[20px] bg-[#0F1013] w-full p-[18px_24px] overflow-auto">
            <div className="mb-6 md:mb-8 lg:mb-10 flex items-center">
              <div className="flex items-center gap-4">
                <p className="font-bold text-[#413E4D] text-sm">Time</p>
                <div className="flex items-center bg-white bg-opacity-[3%] rounded p-1 gap-3 md:gap-4">
                  {["15m", "1h", "8h", "1d"].map((item, index) => (
                    <button key={index} className={`text-xs rounded border-0 p-0 w-7 h-4 flex items-center justify-center hover:bg-[#262F44] hover:text-white ${index == 0 ? 'bg-[#262F44] text-white' : 'text-[#413E4D] bg-transparent'}`}>{item}</button>
                  ))}
                  <button className="p-0 border-0 bg-transparent mr-2" dangerouslySetInnerHTML={{ __html: caret_down }}></button>
                </div>
              </div>
              <div className="flex items-center gap-4 ml-20">
                <p className="font-bold text-[#413E4D] text-sm">Indicator</p>
                <div className="flex items-center bg-white bg-opacity-[3%] rounded p-1 gap-2">
                  {["", "", "",].map((item, index) => (
                    <button key={index} className={`text-xs rounded border-0 p-0 w-5 h-5 flex items-center justify-center hover:bg-[#262F44] hover:text-white ${index == 0 ? 'bg-[#262F44] text-white' : 'text-[#413E4D] bg-transparent'}`}>
                      <img src={`/img/chartType/${index + 1}.svg`} alt="" />
                    </button>
                  ))}
                  <button className="p-0 border-0 bg-transparent mr-2" dangerouslySetInnerHTML={{ __html: caret_down }}></button>
                </div>
              </div>
              <div className='ml-10 md:ml-auto flex items-center gap-3 md:gap-4 lg:gap-6'>
                <button className='bg-transparent p-0 border-0' dangerouslySetInnerHTML={{ __html: camera }}></button>
                <button className='bg-transparent p-0 border-0' dangerouslySetInnerHTML={{ __html: setting }}></button>
              </div>
            </div>
            <Trading />
            {/* <img className="w-full max-h-[390px]" src="/img/overview/trading-img.png" alt="" /> */}
          </div>
          <div className="overview-table w-full rounded-[20px] bg-[#0F1013] lg:min-h-[490px] p-[18px_24px]">
            <div className="flex justify-between gap-10 mb-5 overflow-auto [&::-webkit-scrollbar]:h-0">
              <div className="flex items-center gap-3">
                <img src="/img/overview/bit.png" className="max-w-[24px] md:max-w-[30px]" alt="" />
                <div className="flex items-center gap-[6px]" >
                  <h2 className='text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] font-lufga font-bold text-[#F9F9F9] leading-[173.333%]'>$43,607.55</h2>
                  <p className='text-[11px] font-lufga font-normal text-[var(--paragraph,#A6A6A6)] leading-[127.273%]'>BTC</p>
                </div>
              </div>
              <div className="flex items-center gap-[2px]">
                <button className="btn text-[14px] flex0auto font-lufga font-medium text-[#FFF] leading-[160.714%] p-[4px_12px] rounded-[8px] border-[#FF2121] hover:border-[#FF2121]">All</button>
                <button className="btn text-[14px] flex0auto font-lufga font-medium text-[#FFF] leading-[160.714%] p-[4px_12px] rounded-[8px] border-transparent hover:border-[#FF2121]">Scanners</button>
                <button className="btn text-[14px] flex0auto font-lufga font-medium text-[#FFF] leading-[160.714%] p-[4px_12px] rounded-[8px] border-transparent hover:border-[#FF2121]">Top Traders</button>
                <button className="btn text-[14px] flex0auto font-lufga font-medium text-[#FFF] leading-[160.714%] p-[4px_12px] rounded-[8px] border-transparent hover:border-[#FF2121]">Holders</button>
                <button className="btn text-[14px] flex0auto font-lufga font-medium text-[#FFF] leading-[160.714%] p-[4px_12px] rounded-[8px] border-transparent hover:border-[#FF2121] flex items-center gap-2">All pairs <FaAngleDown /></button>
              </div>
            </div>
            <div className="Table">
              <div className="overflow-auto">
                <div className="relative">
                  <div className="top-linear"></div>
                  <div className="tr header">
                    <div className="th"><span className="mr-3">#</span> Exchange</div>
                    <div className="th">Pair</div>
                    <div className="th">Price</div>
                    <div className="th flex items-center gap-1">+2% Depth <img src="/img/overview/exclamation.svg" alt="" /></div>
                    <div className="th flex items-center gap-1">Confidence <img src="/img/overview/exclamation.svg" alt="" /></div>
                    <div className="th flex items-center gap-1">Volume <img src="/img/overview/exclamation.svg" alt="" /></div>
                    <div className="th flex items-center gap-1 justify-end">Liquidity <img src="/img/overview/exclamation.svg" alt="" /></div>
                  </div>
                </div>
                <div className="Table-body">
                  {TableList.map((item, index) => (
                    <div className="tr" key={index}>
                      {item.profile.map((profileItem, profileIndex) => (
                        <div className="td !gap-4" key={profileIndex}>
                          <div className="count">{index + 1}</div>
                          <div className="flex items-center gap-2">
                            <div className="logo">
                              <img src={profileItem.logo} alt="User Logo" />
                            </div>
                            <div className="text">
                              <div className="flex items-center gap-[2px]">
                                <h4 className="font-lufga font-medium text-[#B4C6DA] leading-normal">{profileItem.name}</h4>
                                <span className="text-[11px] font-lufga font-light text-[#B4C6DA] leading-[1] flex items-center gap-[2px]">{profileItem.with}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="td !font-light">{item.pair} <img src="/img/overview/sol.svg" alt="" /></div>
                      <div className="td !font-light">{item.price} </div>
                      <div className="td !font-light">{item.depth} </div>
                      <div className="td"><span className={`p-[1px_10px] rounded-[32px]  font-light ${item.confidence === "High" ? "bg-[rgba(255,33,33,0.10)] text-[#FF2121]" : item.confidence === "Medium" ? "text-[#FFD305] bg-[rgba(255,211,5,0.10)]" : "bg-[rgba(130,197,65,0.10)] text-[#82C541]"}`}>{item.confidence} </span></div>
                      <div className="td">{item.value} </div>
                      <div className="td justify-end">{item.liquidity} </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overview-right">
          <div className="social rounded-[14px] bg-[#0F1013] p-[20px_16px]">
            <div className="flex items-center justify-between pb-[14px] border-b-[1px] border-[var(--stoke-color,#1D1F26)] mb-4">
              <h3 className='text-[14px] font-lufga font-medium text-[var(--text--color,#F5F3F5)] text-center leading-[20px]'>Socials</h3>
              <button className='!p-0 border-0 hover:scale-110'><BsThreeDots /></button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="social-single">
                <p className='text-[14px] font-lufga font-medium text-[#4F5F71] leading-[85.714%] mb-3'>Token</p>
                <div className="flex flex-col gap-[14px]">
                  {socialItem.map((item, index) => (
                    <div className="item flex items-center justify-between" key={index}>
                      <div className='flex items-center gap-2'>
                        <div className="logo">
                          <img src={item.logo} className='rounded-full w-[24px] h-[24px]' alt="" />
                        </div>
                        <h3>{item.name} </h3>
                      </div>
                      <button className="btn">Update</button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="social-single">
                <p className='text-[14px] font-lufga font-medium text-[#4F5F71] leading-[85.714%] mb-3'>Social Links</p>
                <div className="flex flex-col gap-[14px]">
                  {socialItem2.map((item, index) => (
                    <div className="item flex items-center justify-between" key={index}>
                      <div className='flex items-center gap-2'>
                        <div className="logo">
                          <img src={String(item.logo)} className='rounded-full w-[24px] h-[24px]' alt="" />
                        </div>
                        <h3>{item.name} </h3>
                      </div>
                      <button className="btn">Update</button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="social-single">
                <p className='text-[14px] font-lufga font-medium text-[#4F5F71] leading-[85.714%] mb-3'>Repositories</p>
                <div className="flex flex-col gap-[14px]">
                  {socialItem3.map((item, index) => (
                    <div className="item flex items-center justify-between" key={index}>
                      <div className='flex items-center gap-2'>
                        <div className="logo">
                          <img src={String(item.logo)} className='rounded-full w-[24px] h-[24px]' alt="" />
                        </div>
                        <h3>{item.name} </h3>
                      </div>
                      <button className="btn">Update</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[14px] bg-[#0F1013] p-[16px_20px] mt-5">
            <div className="flex justify-between mb-6">
              <div className="flex items-center gap-2">
                <img src="/img/overview/bitLogo.png" className='w-6 h-6 rounded-full' alt="" />
                <div className="text">
                  <div className="flex items-center gap-1">
                    <h3 className='text-[14px] font-lufga font-medium text-[var(--text--color,#F5F3F5)] text-center leading-[20px]'>
                      <div className="flex items-center gap-1">
                        Bitcoin
                        <img src="/img/overview/varifide.png" alt="" />
                        <img src="/img/overview/twitter.png" alt="" />
                      </div>
                    </h3>
                    <img src="/img/overview/verified.png" className='w-4 h-4' alt="" />
                  </div>
                  <p className='text-[10px] font-lufga font-normal text-[var(--paragraph,#A6A6A6)] leading-[150%] line-clamp-1'>Bitcoin is the first decentralized cryptocurrency.</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className='!p-0 w-4 h-4 flex items-center justify-center  hover:scale-110 rounded-full border-[0.571px] border-[var(--Main-color,#FF2121)]'>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_496_2805)">
                      <path d="M8.10547 4.16208H5.51504V1.57159C5.51504 1.39289 5.36995 1.2478 5.19119 1.2478C5.01249 1.2478 4.8674 1.39289 4.8674 1.57159V4.16208H2.27691C2.09821 4.16208 1.95312 4.30716 1.95312 4.48587C1.95312 4.66463 2.09821 4.80972 2.27691 4.80972H4.8674V7.40014C4.8674 7.57891 5.01249 7.72399 5.19119 7.72399C5.36995 7.72399 5.51504 7.57891 5.51504 7.40014V4.80972H8.10547C8.28423 4.80972 8.42932 4.66463 8.42932 4.48587C8.42932 4.30716 8.28423 4.16208 8.10547 4.16208Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_496_2805">
                        <rect width="6.85714" height="6.85714" fill="white" transform="translate(1.57031 1.2478)" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className='hover:border-[green] p-[4px_8px] rounded-[6px] border-[1px] border-[var(--Main-color,#FF2121)] text-[10px] font-lufga font-medium text-[#FFF] leading-[180%]'>Following</button>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_496_2810)">
                  <path d="M15.6747 1.27783L15.6531 1.26525C15.4261 1.13319 15.1351 1.21007 15.0031 1.43699L13.9805 3.1939C13.8484 3.42082 13.9253 3.71183 14.1522 3.8439L14.1739 3.85647C14.4008 3.98854 14.6918 3.91165 14.8239 3.68474L15.8464 1.92783C15.9785 1.70091 15.9016 1.4099 15.6747 1.27783Z" fill="white" />
                  <path d="M14.7814 9.41552C15.1731 10.1002 15.5779 10.8008 15.9959 11.5175C16.1383 11.762 16.2267 11.9521 16.2611 12.0878C16.5006 13.035 15.8545 13.9464 14.883 14.0202C14.7627 14.0293 14.6308 14.0281 14.4873 14.0167C14.3591 14.0065 14.2246 13.9965 14.0838 13.9866C13.5059 13.9468 12.9361 13.9095 12.3744 13.8749C10.9783 13.7886 9.59743 13.9085 8.32751 14.4999C8.32553 14.5008 8.32376 14.5021 8.32232 14.5037C8.32088 14.5053 8.31979 14.5073 8.31913 14.5094C8.31847 14.5115 8.31824 14.5137 8.31848 14.5159C8.31871 14.5181 8.31939 14.5202 8.32048 14.5222C8.84287 15.4235 9.3874 16.3668 9.95407 17.3522C10.7244 18.6913 9.62087 20.3472 8.08766 20.1347C7.64287 20.0732 7.26683 19.8768 6.95954 19.5456C6.8611 19.4396 6.73506 19.2526 6.58141 18.9847C6.04339 18.0477 5.53493 17.1656 5.05602 16.3386C5.0542 16.3353 5.05125 16.3328 5.04772 16.3316C5.04419 16.3304 5.04033 16.3305 5.03688 16.3319C3.95407 16.76 2.74782 16.6433 1.77751 16.0214C0.327898 15.0925 -0.237336 13.2823 0.400555 11.6886C0.705242 10.9271 1.2197 10.3371 1.94391 9.91864C2.72647 9.46656 3.49873 9.02086 4.26071 8.58153C4.9417 8.18882 5.53115 7.68974 6.02907 7.08427C7.00915 5.89208 7.60485 4.43583 8.26696 3.11942C8.36566 2.92307 8.46852 2.76708 8.57556 2.65145C9.16423 2.01552 10.1638 2.00731 10.7806 2.60145C10.883 2.69989 10.9991 2.86239 11.1291 3.08895C11.5611 3.84156 11.9726 4.55536 12.3634 5.23036C12.3733 5.24781 12.3873 5.25211 12.4052 5.24325C13.4791 4.72567 14.8099 5.10224 15.447 6.11044C15.7411 6.57528 15.8637 7.07398 15.815 7.60653C15.7481 8.34117 15.4056 8.93401 14.7877 9.38505C14.7765 9.39338 14.7744 9.40354 14.7814 9.41552ZM15.2888 12.7112C15.3696 12.5438 15.3519 12.3595 15.2357 12.1585C13.5474 9.23218 11.8644 6.31799 10.1865 3.41591C10.0209 3.12919 9.63063 3.05419 9.36501 3.2495C9.28714 3.30679 9.20889 3.41539 9.13024 3.57528C8.47282 4.91161 7.86266 6.34052 6.93337 7.52606C6.44196 8.15341 5.87269 8.68869 5.22555 9.13192C5.218 9.13687 5.21644 9.14325 5.22087 9.15106L7.81345 13.6358C7.81674 13.6416 7.82214 13.646 7.82854 13.6479C7.83493 13.6499 7.84183 13.6493 7.84782 13.6464C9.08923 13.0452 10.4662 12.8347 11.8302 12.8768C12.5357 12.8985 13.2571 12.9422 13.9943 13.0081C14.192 13.0261 14.3912 13.0261 14.5912 13.044C14.9127 13.0737 15.1451 13.0093 15.2888 12.7112ZM13.9888 6.10302C13.625 5.95041 13.2564 5.94768 12.883 6.09481C12.8809 6.09564 12.879 6.0969 12.8775 6.09851C12.8759 6.10013 12.8747 6.10205 12.874 6.10417C12.8733 6.10628 12.873 6.10852 12.8732 6.11075C12.8734 6.11298 12.8741 6.11514 12.8752 6.11708L14.2685 8.53036C14.2697 8.53245 14.2714 8.53425 14.2734 8.53564C14.2753 8.53703 14.2776 8.53798 14.28 8.53843C14.2823 8.53887 14.2848 8.5388 14.2871 8.53822C14.2894 8.53764 14.2916 8.53655 14.2935 8.53505C15.1361 7.86005 15.0052 6.52919 13.9888 6.10302ZM6.95798 14.1104L4.38806 9.65888C4.38471 9.65321 4.37927 9.64909 4.37291 9.6474C4.36655 9.64572 4.35978 9.64662 4.35407 9.64989L2.4322 10.7593C2.13421 10.9313 1.87268 11.1598 1.66254 11.4316C1.45241 11.7034 1.29779 12.0132 1.2075 12.3434C1.11722 12.6736 1.09304 13.0177 1.13635 13.356C1.17966 13.6943 1.28962 14.0202 1.45993 14.3151L1.46188 14.3183C1.80568 14.9138 2.37444 15.347 3.04304 15.5225C3.71165 15.6981 4.42534 15.6015 5.02712 15.2542L6.94899 14.1444C6.95466 14.1411 6.95878 14.1356 6.96047 14.1293C6.96215 14.1229 6.96125 14.1161 6.95798 14.1104ZM7.43454 14.9882L5.9322 15.8554C5.92605 15.859 5.92157 15.8648 5.91974 15.8717C5.91791 15.8786 5.91888 15.8859 5.92243 15.8921L7.55407 18.7179C7.67452 18.9266 7.87137 19.0798 8.10132 19.1438C8.33126 19.2078 8.57548 19.1774 8.78024 19.0593L8.78493 19.0565C8.88633 18.998 8.97498 18.9197 9.04583 18.826C9.11667 18.7324 9.16831 18.6253 9.1978 18.5108C9.22729 18.3963 9.23405 18.2767 9.2177 18.1588C9.20135 18.0409 9.16221 17.9271 9.10251 17.8237L7.47126 14.9979C7.46767 14.9918 7.46179 14.9873 7.45491 14.9855C7.44803 14.9837 7.44071 14.9846 7.43454 14.9882Z" fill="white" />
                  <path d="M18.0414 4.182L16.2394 5.22655C16.0123 5.35822 15.9349 5.6491 16.0665 5.87625L16.0787 5.8972C16.2104 6.12435 16.5012 6.20175 16.7284 6.07007L18.5303 5.02552C18.7575 4.89385 18.8349 4.60297 18.7032 4.37582L18.6911 4.35487C18.5594 4.12772 18.2685 4.05033 18.0414 4.182Z" fill="white" />
                  <path d="M19.3875 8.06078L17.3453 8.05722C17.0856 8.05676 16.8746 8.26696 16.8742 8.52671L16.8741 8.55874C16.8737 8.81849 17.0839 9.02942 17.3436 9.02987L19.3858 9.03344C19.6455 9.03389 19.8565 8.82369 19.8569 8.56395L19.857 8.53191C19.8574 8.27217 19.6472 8.06123 19.3875 8.06078Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_496_2810">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.676514)" />
                  </clipPath>
                </defs>
              </svg>
              <p className='text-[11px] font-lufga font-semibold text-[#FFF] text-right leading-[204.545%]'>Project’s announcements </p>
            </div>
            <div className="flex items-center rounded-[8px] border-[1px] border-[var(--stoke-color,#1D1F26)] mb-[18px]">
              <h2 className='text-[14px] font-lufga font-medium text-[var(--text--color,#F5F3F5)] text-center leading-[142.857%] p-[8px_12px] max-w-[77px] border-r border-[var(--stoke-color,#1D1F26)]'>Bitcoin Halving 2024</h2>
              <div className="flex flex-col gap-2 pl-3">
                <p className='text-[10px] font-lufga font-semibold text-[#A2B3C7] leading-[215%]'>Bitcoin Halving 2024</p>
                <p className='text-[8px] font-lufga font-semibold text-[#A2B3C7] leading-[215%]'>Use our Bitcoin halving countdown</p>
              </div>
            </div>
            <div className="flex reaction px-3 items-center justify-between mb-6">
              {reaction.map((item, index) => (
                <div className="single flex justify-between items-center flex-col bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${item.color1}, ${item.color2})` }} key={index}>
                  <h4 className='text-[10px] font-lufga font-semibold text-[#FFF] leading-[215%]'>{item.value}K</h4>
                  <button className="icon flex items-center justify-center !p-0 border-0">
                    <img src={item.icon} className='' alt="" />
                  </button>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-between mb-[14px]">
                <p className='text-[10px] font-lufga font-semibold text-[var(--paragraph,#A6A6A6)] leading-[165%]'>Apple Inc (USD)</p>
                <div className="flex items-center p-[3px] rounded-[6px] bg-gradient-to-b from-[rgba(26,26,64,0.40)] to-[rgba(35,34,74,0.40)]">
                  {["1d", "7d", "1m", "1y", "All"].map((item, index) => (
                    <button key={index} className={`rounded-[5px] uppercase border-[1px] ${index == 0 ? 'border-[rgba(112,98,204,0.30)]' : ''} bg-[rgba(74,56,186,0.10)] text-[10px] font-[Plus Jakarta Sans] font-medium text-[#FFF] leading-[175%] px-1 py-0`}>{item}</button>
                  ))}
                </div>
              </div>
              <div className="apexcharts-2">
                <UsdGrap />
              </div>
              {/* <img className="w-full" src="/img/overview/trading.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
