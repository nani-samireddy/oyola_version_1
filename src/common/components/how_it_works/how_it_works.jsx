import React from 'react'
import img1 from '../../../assets/work-pic-1@2x.png'
import img2 from '../../../assets/work-pic-2@2x.png'
import img3 from '../../../assets/work-pic-3@2x.png'
export default function HowItWorks() {
    const data = [
        {
            title: 'Find a place you like',
            description: 'we provide you the best place to stay in your budget.',
            icon: img1
        },
        {
            title: 'Book it & relax',
            description: 'Just book the place and relax. We will take care of everything.',
            icon: img2
        },
        {
            title: 'Enjoy your stay',
            description: 'Enjoy your stay and make it memorable. We are always here for you.',
            icon: img3
        },
    ];
  return (
    <div className='w-full h-max '>
      <div>
        <h2 className="text-5xl font-bold font-dm_sans text-gray-700 my-5 text-center">
       How It Works
      </h2>
      <h2 className="text-2xl font-light font-dm_sans text-gray-400  text-center">
            Keep calm & travel on
      </h2>
      </div>
      <div className='flex flex-col md:flex-row  items-center justify-evenly gap-10 md:gap-20'>
            {data.map((item, index) => {
                return (
                    <div key={index} className='w-64 flex   flex-col items-center justify-stretch my-10 gap-3'>
                        <img className=' w-full h-auto object-cover' src={item.icon} alt="" />
                        <h2 className='text-xl font-bold font-dm_sans text-gray-700  text-center'>
                            {item.title}
                        </h2>
                        <p className='text-md font-light font-dm_sans text-gray-400   text-center'>
                            {item.description}
                        </p>
                        </div>
                )
            })}


      </div>
    </div>
  )
}
