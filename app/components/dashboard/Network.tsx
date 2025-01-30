import React from 'react'
import { close, backslash, search } from '../Icons'
import Checkbox from '../Checkbox'

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

type networkItem = {
  icon: String,
  name: String,
}

export default function Network({ onClick }: Props) {
  const networkItem: networkItem[] = [
    {
      icon: '/img/network/1.png',
      name: 'Ethereum',
    },
    {
      icon: '/img/network/1.png',
      name: 'SOLONA',
    },
    {
      icon: '/img/network/1.png',
      name: 'tron',
    },
    {
      icon: '/img/network/1.png',
      name: 'bnb chain',
    },
    {
      icon: '/img/network/1.png',
      name: 'polygon',
    },
    {
      icon: '/img/network/1.png',
      name: 'bitpanda',
    },
    {
      icon: '/img/network/1.png',
      name: 'gxchain',
    },
    {
      icon: '/img/network/1.png',
      name: 'Phantasma',
    },
    {
      icon: '/img/network/1.png',
      name: 'Pluton',
    },
    {
      icon: '/img/network/1.png',
      name: 'Pundi X',
    },
    {
      icon: '/img/network/1.png',
      name: 'salt',
    },
    {
      icon: '/img/network/1.png',
      name: 'near',
    },
    {
      icon: '/img/network/1.png',
      name: 'Celsius',
    },
    {
      icon: '/img/network/1.png',
      name: 'Civic ',
    },
  ]
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-[#090808] bg-opacity-90 z-10 flex items-center justify-center py-6'>
      <div className="max-w-[410px] w-[calc(100%-24px)] bg-[#0F1013] rounded-[20px] p-4 md:p-6">
        <div className="flex items-center justify-between mb-5">
          <p className="text-base font-normal text-[#F5F3F5]">Select The Network</p>
          <button onClick={onClick} className='p-0 border-[#1D1F26] w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#DF1E1C] hover:scale-125 hover:text-white' dangerouslySetInnerHTML={{ __html: close }}></button>
        </div>
        <div className='hidden md:block search rounded-full w-full relative mb-5'>
          <div className="absolute top-1/2 -translate-y-1/2 left-3" dangerouslySetInnerHTML={{ __html: search }}></div>
          <input type="search" className='w-full px-10 rounded-full bg-transparent border border-solid border-[#1D1F26] placeholder:text-[#A6A6A6] text-sm font-normal placeholder:font-normal' placeholder='Search for coins' />
          <div className="absolute top-1/2 -translate-y-1/2 right-3" dangerouslySetInnerHTML={{ __html: backslash }}></div>
        </div>

        <div className="max-h-[calc(100vh-300px)] md:max-h-[calc(100vh-400px)] overflow-auto">
          {networkItem.map((item, index) => (
            <label htmlFor={`${index}`} className={`flex items-center cursor-pointer gap-5 lg:gap-6 ${index != networkItem.length - 1 ? 'mb-4 md:mb-5' : 'mb-0'}`} key={index}>
              <Checkbox id={index} name="checkbox" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img className='w-full h-full object-cover' src={`/img/network/${index + 1}.png`} alt="" />
                </div>
                <div className='text-[#F5F3F5] text-sm font-normal uppercase'>{item.name}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}