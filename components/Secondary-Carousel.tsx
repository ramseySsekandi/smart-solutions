import Image from 'next/image'
import React from 'react'

interface MyComponentProps {
    title: string;
    id: string;
    alt: string;
    img:string;
  }

const SecondaryCarousel = (props:MyComponentProps) => {
  return (
    <div className='flex flex-col'>
           <div className="w-full absolute top-0 left-0 right-0">
          <div className="relative w-full h-[250px]" id={props.id}>
            <Image
              src={props.img} className='object-cover' fill alt={props.alt}/>
                {/* Overlay Content */}
                <div className="absolute h-250px inset-0 bg-black/40 flex items-end justify-center">
                  <div className="w-6xl text-white mb-7 px-6">
                    <div className="mb-16 md:mb-0">
                      <h2 className="font-bold mb-2 md:mb-4 drop-shadow-lg text-2xl md:text-4xl">
                        {props.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
  )
}

export default SecondaryCarousel