"use client"

import Marquee from "../components/Marquee";
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Slider from "../components/Slider";

type Props = {}

type Option = string;


type profile = {
  logo: String,
  token: String,
  with: String,
  withTwo: String,
  id: String,
}

type tableList = {
  profile: profile[],
  price: String,
  txns: String,
  value: String,
  m5: Number,
  h1: Number,
  h6: Number,
  h24: Number,
  liquidity: String,
  fdy: String,
}

export default function LiveNewPairs({ }: Props) {
  const TableList: tableList[] = [
    {
      profile: [
        {

          logo: '/img/pairs/pairs-logo-1.png',
          token: 'USDC',
          with: " WETH USDC",
          withTwo: '',
          id: '0x11c...f22b',
        }

      ],
      price: '$587.58',
      txns: '54,124',
      value: '$34.3M  ',
      m5: -0.40,
      h1: -0.33,
      h6: -0.37,
      h24: -0.40,
      liquidity: '$4.3M',
      fdy: '$788.3B',
    },
    {
      profile: [
        {

          logo: '/img/pairs/pairs-logo-1.png',
          token: 'WBNB',
          with: " USDT",
          id: '0x11c...f22b',
          withTwo: 'Wrapped BNB',
        }

      ],
      price: '$0.995739',
      txns: '54,124',
      value: '$34.3M  ',
      m5: -0.40,
      h1: 0.08,
      h6: -0.37,
      h24: 0.52,
      liquidity: '$1.3M',
      fdy: '$1.4B',
    },
    {
      profile: [
        {

          logo: '/img/pairs/pairs-logo-2.png',
          token: 'USDC',
          with: "WETH",
          id: '0x11c...f22b',
          withTwo: 'USD Coin',
        }

      ],
      price: '$0.995739',
      txns: '54,124',
      value: '$34.3M  ',
      m5: -0.40,
      h1: -0.33,
      h6: -0.37,
      h24: -0.40,
      liquidity: '$1.3M',
      fdy: '$1.4B',
    },
    {
      profile: [
        {

          logo: '/img/pairs/pairs-logo-3.png',
          token: 'WETH',
          with: "USDC",
          id: '0x11c...f22b',
          withTwo: 'Wrapped ETH',
        }

      ],
      price: '$0.995739',
      txns: '54,124',
      value: '$34.3M  ',
      m5: -0.40,
      h1: 0.33,
      h6: 0.37,
      h24: 0.40,
      liquidity: '$1.3M',
      fdy: '$1.4B',
    },
    {
      profile: [
        {

          logo: '/img/pairs/pairs-logo-1.png',
          token: 'WETH',
          with: "USDC",
          id: '0x11c...f22b',
          withTwo: 'Wrapped ETH',
        }

      ],
      price: '$0.995739',
      txns: '54,124',
      value: '$34.3M  ',
      m5: -0.40,
      h1: 0.33,
      h6: 0.37,
      h24: 0.40,
      liquidity: '$1.3M',
      fdy: '$1.4B',
    },
    {
      profile: [
        {

          logo: '/img/pairs/pairs-logo-4.png',
          token: 'Bop',
          with: "WBNB",
          id: '0x11c...f22b',
          withTwo: 'Bopcat',
        }

      ],
      price: '$0.995739',
      txns: '54,124',
      value: '$34.3M  ',
      m5: 0.40,
      h1: -0.33,
      h6: -0.37,
      h24: 0.40,
      liquidity: '$1.3M',
      fdy: '$1.4B',
    },
    {
      profile: [
        {

          logo: '/img/pairs/pairs-logo-5.png',
          token: 'WETH',
          with: "USDT",
          id: '0x11c...f22b',
          withTwo: 'Wrapped ETH',
        }

      ],
      price: '$0.995739',
      txns: '54,124',
      value: '$34.3M  ',
      m5: -0.40,
      h1: 0.33,
      h6: 0.37,
      h24: 0.40,
      liquidity: '$1.3M',
      fdy: '$1.4B',
    },
    {
      profile: [
        {

          logo: '/img/pairs/pairs-logo-1.png',
          token: 'Bop',
          with: "WBNB",
          id: '0x11c...f22b',
          withTwo: 'Bopcat',
        }

      ],
      price: '$0.995739',
      txns: '54,124',
      value: '$34.3M  ',
      m5: -0.40,
      h1: 0.33,
      h6: 0.37,
      h24: 0.40,
      liquidity: '$1.3M',
      fdy: '$1.4B',
    },
  ]

  const [dropdown, setDropdown] = useState(false);
  const dropdowns: Option[] = ['All pairss', 'option 2', 'option 3'];

  const [selectGen, setSelectGen] = useState<Option>(dropdowns[0]);

  const changeDropdown = (selected: Option): void => {
    setSelectGen(selected);
    setDropdown(false);
  };

  return (
    <>
      <div className='pairs overflow-hidden'>
        <div className="pairs-top mb-3 md:mb-4 lg:mb-5 flex items-center">
          <div className="relative">
            <button className="flex items-center gap-2 border-0 p-0 bg-[#000000] min-w-max pr-3" >
              <img src='/img/pairs/fire.png' alt="" /> Chub Trending <FaAngleDown />
            </button>
          </div>
          <Marquee />
        </div>
        <Slider />
        <div className="pairs-header flex  items-center justify-between gap-14 mb-5 md:mb-6 [&::-webkit-scrollbar]:h-0">
          <div className="text max-w-[45%]  md:max-w-[281px] flex0auto">
            <h4 className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-lufga font-semibold text-[#F6F6F6] leading-normal mb-2">New Pairs</h4>
            <p className="text-[12px] font-lufga font-semibold text-[var(--paragraph,#A6A6A6)] leading-normal">New token pairs updated live in the last 24 hours.</p>
          </div>
          <div>
            <div className="relative z-10">
              <button className="min-w-[118px] md:min-w-[102px] flex0auto capitalize flex justify-center items-center gap-2 rounded-lg text-[14px] font-lufga font-medium text-[#FFF] leading-[160.714%] p-[11px_12px]" type="button" onClick={() => setDropdown(!dropdown)}>
                <span>{selectGen}</span>
                {!dropdown ? <FaAngleDown /> : <FaAngleUp />}
              </button>
              {dropdown && (
                <ul className="absolute w-full mt-1 bg-[#1E1E1E] rounded-md shadow-lg z-20 border border-[#115A13]">
                  {dropdowns.map((item, index) => (
                    <li key={index} className="px-4 py-2 text-[14px] capitalize hover:bg-[#1B1D22] cursor-pointer" onClick={() => changeDropdown(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="Table">
          <div className="overflow-auto ">
            <div className="relative">
              <div className="top-linear"></div>
              <div className="tr header">
                {["Token", "Price", "Txns", "Volume", "5M", "1H", "6H", "24H", "Liquidity", "Fdy"].map((item, index) => (
                  <div className="th" key={index}>{item}</div>
                ))}
              </div>
            </div>
            <div className="Table-body">
              {TableList.map((item, index) => (
                <div className="tr" key={index}>
                  {item.profile.map((profileItem, profileIndex) => (
                    <div className="td" key={profileIndex}>
                      <div className="count">#{index + 1}</div>
                      <div className="logo">
                        <img src={String(profileItem.logo)} alt="User Logo" />
                      </div>
                      <div className="text">
                        <div className="flex items-center mb-1 gap-[2px]">
                          <h4 className="text-[14px] font-lufga font-medium text-[var(--text--color,#F5F3F5)] leading-normal">{profileItem.token}</h4>
                          /
                          <span className="text-[12px] font-lufga font-normal text-[var(--paragraph,#A6A6A6)] leading-normal flex items-center gap-[2px]">{profileItem.with}
                            <p className="text-[var(--paragraph,#F5F3F5)]">{profileItem.withTwo} </p>
                          </span>
                        </div>
                        <span className="text-[12px] font-lufga font-normal text-[var(--paragraph,#A6A6A6)] leading-normal">{profileItem.id} </span>
                      </div>
                    </div>
                  ))}
                  <div className="td">{item.price} </div>
                  <div className="td">{item.txns} </div>
                  <div className="td">{item.value} </div>
                  <div className="td" style={{ color: Number(item.m5) >= 0 ? '#14D215' : '#FF2121' }}>{Number(item.m5)}%</div>
                  <div className="td" style={{ color: Number(item.h1) >= 0 ? '#14D215' : '#FF2121' }}>{Number(item.h1)}%</div>
                  <div className="td" style={{ color: Number(item.h6) >= 0 ? '#14D215' : '#FF2121' }}>{Number(item.h6)}%</div>
                  <div className="td" style={{ color: Number() >= 0 ? '#14D215' : '#FF2121' }}>{Number(item.h24)}%</div>
                  <div className="td">{item.liquidity} </div>
                  <div className="td">{item.fdy} </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >

    </>
  )
}