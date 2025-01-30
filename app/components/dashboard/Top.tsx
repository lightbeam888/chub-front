"use client"

import { useRef, useEffect, useState } from 'react'
import { arrow_down, backslash, gridView, notifications, search, setting } from '../Icons'
import Link from 'next/link';
import Network from './Network';
import Login from './Login';

type Props = {}

export default function Top({ }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  const mobileMenu = () => {
    const menu = document.querySelector('.layout-left');
    if (menu?.classList.contains('show-menu')) {
      menu.classList.remove('show-menu')
    } else {
      menu?.classList.add('show-menu')
    }
  }

  const [isNetwork, setIsNetwork] = useState(false)
  const networkHandle = () => {
    setIsNetwork(!isNetwork);
  };

  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      {isNetwork && <Network onClick={networkHandle} />}
      {loginModal && <Login onClick={() => setLoginModal(false)} />}

      <div className='bg-[#0F1013] lg:bg-transparent border-b border-solid border-[#1D1F26] px-6 xl:px-8 2xl:px-10 flex items-center justify-between min-h-[var(--top-height)]'>
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" className='lg:hidden flex-[0_0_auto]'><img src="/img/logo.png" alt="" /></Link>
          <button onClick={() => networkHandle()} className='py-[10px] px-4 border border-[#FF2021] bg-transparent group hover:bg-[#FF2021] rounded-full hidden md:flex gap-2 items-center justify-between'>
            <span className='group-hover:text-white text-[#EDF0F4]' dangerouslySetInnerHTML={{ __html: gridView }}></span>
            <span className='group-hover:text-white text-[#F5F3F5]'>All</span>
            <span className='group-hover:text-white text-[#A6A6A6]' dangerouslySetInnerHTML={{ __html: arrow_down }}></span>
          </button>
          <p className='hidden xl:flex items-center gap-[10px]'>
            <span>ETH: $2,345.34</span>
            <span><span className='text-[#FFD877]'>+0.4$</span> 24h</span>
            <span className='flex items-center gap-1'>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8123 3.9375L10.4998 5.25H9.33317M11.8123 10.0625L10.4998 8.75H9.33317M11.8123 7H6.99984M5.5415 11.0833H5.54675M11.3748 3.9375C11.3748 4.05353 11.4209 4.16481 11.503 4.24686C11.585 4.32891 11.6963 4.375 11.8123 4.375C11.9284 4.375 12.0397 4.32891 12.1217 4.24686C12.2037 4.16481 12.2498 4.05353 12.2498 3.9375C12.2498 3.82147 12.2037 3.71019 12.1217 3.62814C12.0397 3.54609 11.9284 3.5 11.8123 3.5C11.6963 3.5 11.585 3.54609 11.503 3.62814C11.4209 3.71019 11.3748 3.82147 11.3748 3.9375ZM11.3748 10.0625C11.3748 9.94647 11.4209 9.83519 11.503 9.75314C11.585 9.67109 11.6963 9.625 11.8123 9.625C11.9284 9.625 12.0397 9.67109 12.1217 9.75314C12.2037 9.83519 12.2498 9.94647 12.2498 10.0625C12.2498 10.1785 12.2037 10.2898 12.1217 10.3719C12.0397 10.4539 11.9284 10.5 11.8123 10.5C11.6963 10.5 11.585 10.4539 11.503 10.3719C11.4209 10.2898 11.3748 10.1785 11.3748 10.0625ZM11.3748 7C11.3748 7.11603 11.4209 7.22731 11.503 7.30936C11.585 7.39141 11.6963 7.4375 11.8123 7.4375C11.9284 7.4375 12.0397 7.39141 12.1217 7.30936C12.2037 7.22731 12.2498 7.11603 12.2498 7C12.2498 6.88397 12.2037 6.77269 12.1217 6.69064C12.0397 6.60859 11.9284 6.5625 11.8123 6.5625C11.6963 6.5625 11.585 6.60859 11.503 6.69064C11.4209 6.77269 11.3748 6.88397 11.3748 7Z" stroke="#A6A6A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.33333 3.49996C9.28667 2.67163 9.15717 2.14488 8.80308 1.76454C8.246 1.16663 7.34883 1.16663 5.55508 1.16663C3.76133 1.16663 2.86475 1.16663 2.30708 1.76454C1.74942 2.36246 1.75 3.32496 1.75 5.24996V8.74996C1.75 10.675 1.75 11.6375 2.30708 12.2354C2.86475 12.8333 3.76133 12.8333 5.55508 12.8333C7.34883 12.8333 8.246 12.8333 8.80308 12.2354C9.15717 11.855 9.28608 11.3277 9.33333 10.5" stroke="#A6A6A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              16.14
            </span>
          </p>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className='hidden md:block search rounded-full w-[260px] lg:w-[330px] relative'>
            <div className="absolute -mt-[2px] top-1/2 -translate-y-1/2 left-3" dangerouslySetInnerHTML={{ __html: search }}></div>
            <input ref={inputRef} type="search" className='w-full px-10 rounded-full bg-transparent border border-solid border-[#1D1F26] placeholder:text-[#A6A6A6] text-base font-normal placeholder:font-normal' placeholder='Search for coins' />
            <div className="absolute top-1/2 -translate-y-1/2 right-3" dangerouslySetInnerHTML={{ __html: backslash }}></div>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <button className='p-0 border-0 hover:text-[#FF2021]'>
              <span dangerouslySetInnerHTML={{ __html: setting }}></span>
            </button>
            <button className='p-0 border-0 hover:text-[#FF2021] relative'>
              <span className='w-[7px] h-[7px] rounded-full bg-[#A6A6A6] absolute top-0 right-0 mt-[3px] mr-[3px]'></span>
              <span dangerouslySetInnerHTML={{ __html: notifications }}></span>
            </button>
            <div className="profile flex items-center flex-[0_0_auto]" onClick={() => setLoginModal(!loginModal)}>
              <button className='w-10 h-10 lg:w-12 lg:h-12 border-0 p-0 rounded-full relative overflow-hidden'>
                <img src="/img/profile.png" className='absolute top-0 left-0 w-full h-auto min-h-full object-cover' alt="" />
              </button>
            </div>
          </div>
          <button onClick={() => mobileMenu()} className='lg:hidden bg-transparent border-0 p-0'>
            <svg width="24" className='w-6 h-6 md:h-8 md:w-8' height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.25 12.8571C3.25 12.4429 3.58579 12.1071 4 12.1071L19.9996 12.1071C20.4138 12.1071 20.7496 12.4429 20.7496 12.8571C20.7496 13.2713 20.4138 13.6071 19.9996 13.6071H4C3.58579 13.6071 3.25 13.2713 3.25 12.8571ZM6.53307 19.8571C6.53307 19.4429 6.86886 19.1071 7.28307 19.1071L20 19.1071C20.4142 19.1071 20.75 19.4429 20.75 19.8571C20.75 20.2713 20.4142 20.6071 20 20.6071L7.28307 20.6071C6.86886 20.6071 6.53307 20.2713 6.53307 19.8571ZM12.2219 5.85712C12.2219 5.4429 12.5577 5.10712 12.9719 5.10712L20 5.10712C20.4142 5.10712 20.75 5.4429 20.75 5.85712C20.75 6.27133 20.4142 6.60712 20 6.60712L12.9719 6.60712C12.5577 6.60712 12.2219 6.27133 12.2219 5.85712Z" fill="#A6A6A6" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}