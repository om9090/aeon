import React from 'react'
import logo from '../../assets/logo1.png'
import { Icon } from '@iconify/react'
import data from '../../data'

const Footer = () => {
  return (
    <div className="bg-gray-50 bottom-0">
      <div className='container py-16 !px-16 bg-gray-50 w-full grid grid-cols-7'>
        <div className='col-span-2 flex flex-col text-left'>
          <img src={logo} alt='logo' className='h-20 w-20 ' />
          <p className='pr-32 font-medium'>Dribble is the world's leading community for creatives to share, grow and get hired </p>
          <div className="flex flex-row gap-3 items-center mt-6
        ">
            <Icon icon="icon-park-outline:dribble" className="text-gray-800 " />
            <Icon icon="akar-icons:instagram-fill" className="text-gray-800 " />
            <Icon icon="akar-icons:twitter-fill" className="text-gray-800" />
            <Icon icon="akar-icons:facebook-fill" className="text-gray-800" />
            <Icon icon="mdi:pinterest" className="text-gray-800 text-xl" />
          </div>
        </div>
        <div className='col-span-5 grid grid-cols-5 gap-4'>
          {data.map((item, index) => (
            <div key={index} className='flex flex-col text-left gap-3'>
              <h1 className='font-bold text-gray-800'>{item.title}</h1>
              {item.subGroup.map((subItem, index) => (
                <a key={index} href={subItem.link} className='text-gray-500 text-sm font-medium'>{subItem.name}</a>
              ))}
              {item.subTitle && <h1 className='text-gray-800 font-bold mt-2'>{item.subTitle}</h1>}
              {item.subTitleGroup && item.subTitleGroup.map((subItem, index) => (
                <a key={index} href={subItem.link} className='text-gray-500 text-sm font-medium'>{subItem.name}</a>
              ))}
            </div>
          ))}
        </div>
        <hr className='col-span-7 mt-12 border-t border-gray-200' />
        <div className='col-span-7 flex flex-row justify-between mt-12 text-gray-500 text-sm'>
          <p className='font-medium'>© 2021 Dribble. All rights reserved.</p>
          <p className='font-medium flex flex-row items-center gap-2'><span className='font-bold text-gray-800'>20,501,863</span> shots dribbled <Icon icon="icon-park-outline:dribble" className="text-pink-600 w-5 h-5" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer