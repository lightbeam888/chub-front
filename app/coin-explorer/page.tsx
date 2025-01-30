import React from 'react'

type Props = {}

export default function page({ }: Props) {
  return (
    <div className='flex items-center justify-center flex-col gap-5 h-full w-full text-center'>
      <h3 className='text-4xl xl:text-[40px]'>Coming Soon</h3>
      <p className='font-lufga text-[#898989] text-sm font-normal'>We're working hard to bring you something amazing. Stay tuned!</p>
    </div>
  )
}