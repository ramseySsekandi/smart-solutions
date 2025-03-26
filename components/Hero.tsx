import React from 'react'
import HeroCarousel from '@/components/Hero-Carousel'
import { Target } from 'lucide-react'
import HeroCarouselTwo from './Hero-Carousel-Two'

const Hero = () => {
  return (
    <div className='w-full mt-5'>
        {/* Heading Hero */}
        <h1 className='text-center text-4xl font-bold text-[#0085CA]'>Our <span className='text-[#444444]'>Capabilities</span> and <span className='text-[#444444]'> Services</span></h1>
        {/* Carousel Hero */}
        
        <HeroCarousel />
        {/* Core values Hero */}
        <div className="bg-[#0085CA] text-white text-center py-10 px-6 space-y-10 lg:flex space-x-4 gap-8 lg:justify-between lg:px-20">
         <div className="space-y-8 space-x-4 lg:w-1/2 mx-auto flex flex-col items-center justify-center">
         <div className="flex justify-center text-center items-center gap-4 ">
          <h2 className='text-2xl font-bold'>Our Vision</h2>
          <Target size={48} />
          </div>
          <p className='text-center px-4'>Our vision is to be a leading global provider of innovative solutions,
             services, and support, empowering individuals, businesses, and communities to thrive and succeed.</p>
         </div>
         <div className="space-y-8 space-x-4 lg:w-1/2 mx-auto flex flex-col items-center justify-center">
         <div className="flex justify-center items-center gap-4 text-center">
          <h2 className='text-2xl font-bold'>Our Mission</h2>
          <Target size={48} />
          </div>
          <p className='text-center px-4'>Our mission is to deliver exceptional value to our clients,
             partners, and stakeholders through our diverse range of services, including technology, 
             consultancy, real estate, event management, transport and logistics, media communication
              and entertainment, tours and travel, publishing, and foundation services. We are committed
              to excellence, integrity, and sustainability in all our endeavors.</p>
         </div>
        </div>
        {/* Credibility */}
        <article className='bg-[#000818] text-white text-center space-y-8 px-6 py-5 gap-18 lg:flex lg:justify-center'>
         <div className="space-y-8 max-w-3xl">
         <div className="lg:flex lg:flex-col lg:justify-center lg:gap-4">
         <h1 className='text-2xl font-bold'>
          Why us? Our <span className='text-[#0085CA]'>Strenghts.</span>
          </h1>
         <div className="max-w-3xl mx-auto space-y-8">
         <div className="flex justify-center gap-2 text-left">
            <img src="/image (1).png" alt="Image Icon"className='w-10 h-10' />
            <p>We embrace innovation and stay ahead of the curve in terms of industry trends and best practices.</p>
          </div>
          <div className="flex justify-center gap-2 text-left">
            <img src="/image (1).png" alt="Image Icon"className='w-10 h-10' />
            <p>Our team comprises seasoned professionals with extensive expertise in their respective fields.
              We leverage this expertise to deliver high-quality services that exceed our clients' expectations.</p>
          </div>
          <div className="flex justify-center gap-2 text-left">
            <img src="/image (1).png" alt="Image Icon"className='w-10 h-10' />
            <p>We understand that every client is unique, with distinct needs and goals
              We provide personalized service, tailoring our solutions to meet each client's
              specific requirements.</p>
          </div>
          <div className="flex justify-center gap-2 text-left">
            <img src="/image (1).png" alt="Image Icon"className='w-10 h-10' />
            <p>We recognize our responsibility to give back to the community.
              Our foundation services support various social causes, demonstrating our commitment to social
              responsibility and sustainability.</p>
          </div>
          <div className="flex justify-center gap-2 text-left">
            <img src="/image (1).png" alt="Image Icon"className='w-10 h-10' />
            <p>We are dedicated to delivering exceptional quality in everything we do.
               Our commitment to excellence is reflected in our rigorous quality control
                processes and our passion for continuous improvement.</p>
          </div>
         </div>
         </div>
         </div>
        <div className="lg:w-7/12 lg:max-w-5xl">
          <img src="https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q1LGFdFoZQ0YRWTcHtSZpvfJ_DtgD86aMMuUYxPtz8s=" alt="failed to load img" className='rounded-lg w-full' />
        </div>
        </article>
        {/* Hero Carousel Two */}
        <HeroCarouselTwo />
        {/* Hero About */}
        <article className="lg:flex lg:px-20 space-y-8 py-5 h-max text-[#444444]">
          <div className="lg:w-7/12 w-screen">
            <img src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FyZWhvdXNlfGVufDB8fDB8fHww" alt="Hero about" className='w-full h-full' />
          </div>
          <div className="px-6 space-y-8 lg:w-5/12">
            <h2 className='text-3xl font-bold'>Smart Solutions Ltd expands its solutions to </h2>
            <p className=''>We are happy to announce that our company has been restructured
               and reengineered to include epiimtce – Engineering Design,
                Procurement/Supply Chain, Integration, Installation and Maintenance
                 of process facilities namely:
            </p>
            <p>
              flow station, Production- Platforms, Topside/Jackets, FPSO,
              Pipeline and Facilities, Power Plant, Gas Plant, Marine Tools/Vessels.
              Our epiimtce cuts across many industries - Oil & Gas (Onshore & Offshore),
              Power, Water & Process Technologies, Process Industries, and other industries.</p>
            <h5 className='font-bold'>We have re-positioned to serve you better and wider.</h5>
          </div>
        </article>
        {/* Hero Partners */}
        <article className='w-full flex flex-col items-center justify-center space-y-8'>
          <h1 className='text-center text-4xl font-bold text-[#444444]'>Our <span className='text-[#0085CA]'>Key</span> Customers</h1>
          <div className="grid grid-cols-3 grid-flow-dense lg:grid-flow-row lg:grid-cols-5 gap-4 w-full max-w-4xl p-6 rounded-lg">
            <img src="/shell.jpg" alt="partner1" className='lg:w-12 lg:h-10' />
            <img src="/daewoo.jpg" alt="partner2" className='lg:w-12 lg:h-10' />
            <img src="/image (6).png" alt="partner3" className='lg:w-12 lg:h-10' />
            <img src="/image (7).png" alt="partner4" className='lg:w-12 lg:h-10' />
            <img src="/image (8).png" alt="partner5" className='lg:w-12 lg:h-10' />
            <img src="/image (9).png" alt="partner6" className='lg:w-12 lg:h-10' />
            <img src="/image (10).png" alt="partner7" className='lg:w-12 lg:h-10' />
            <img src="/exxon.png" alt="partner8" className='lg:w-12 lg:h-10' />
            <img src="/img11.jpg" alt="partner9" className='lg:w-12 lg:h-10' />
            </div>
        </article>

    </div>
  )
}

export default Hero