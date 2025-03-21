import VideoCarousel from '@/components/Video-Carousel'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div className="relative">
      <div className='flex flex-col'>
      <VideoCarousel  />
      <section className='mt-[400px]'>
      <Hero />
      </section>
    </div>
    {/* <Video src={getStarted} autoplay muted controls={false} loop className='-z-50 object-cover'/> */}
    </div>
  )
}

export default page