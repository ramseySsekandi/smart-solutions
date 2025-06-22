import Image from 'next/image'
import React from 'react'

interface MyComponentProps {
    title: string;
    id: string;
    alt: string;
    img?: string | null; // Make img optional and allow null
}

const SecondaryCarousel = ({ title, id, alt, img }: MyComponentProps) => {
  // Default image as fallback
  const defaultImage = '/hero-about.jpeg';
  
  return (
    <div className='flex flex-col mb-[250px]'>
      <div className="w-full absolute top-0 left-0 right-0">
        <div className="relative w-full h-[250px]" id={id}>
          <Image
            src={img || defaultImage}
            className='object-cover'
            fill
            alt={alt}
          />
          {/* Overlay Content */}
          <div className="absolute h-250px inset-0 bg-black/40 flex items-end justify-center">
            <div className="w-6xl text-white mb-7 px-6">
              <div className="mb-16 md:mb-0">
                <h2 className="font-bold mb-2 text-gray-200 md:mb-4 drop-shadow-lg text-2xl md:text-4xl">
                  {title}
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