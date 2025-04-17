import React from 'react'
import HeroCarousel from '@/components/Hero-Carousel'
import { CircleCheckBig, Target } from 'lucide-react'
import HeroCarouselTwo from './Hero-Carousel-Two'
import SampleCarousel from './SampleCarousel'
import SimpleSlider from './Hero-Carousel-Two'

const Hero = () => {
  return (
    <div className='w-full mt-5'>
        {/* Heading Hero */}
        <h1 className='text-center text-4xl font-bold text-green-600'>Our <span className='text-[#444444]'>Capabilities</span> and <span className='text-[#444444]'> Services</span></h1>
        {/* Carousel Hero */}
        
        {/* <HeroCarousel /> */}
        <SampleCarousel />
        {/* Core values Hero */}
        <div className="bg-green-700 text-gray-300 text-center grid grid-cols-1 md:grid-cols-2 lg:py-20 py-10 px-6 space-y-10 gap-8 items-stretch">
         <div className="space-y-8 p-3 border-2 border-gray-300 h-full rounded-xl space-x-4 mx-auto flex flex-col items-center justify-center">
         <div className="flex justify-center text-center items-center gap-4 ">
          <h2 className='text-2xl font-bold'>Our Vision</h2>
          <Target size={48} />
          </div>
          <p className='text-center px-4'>Our vision is to be a leading global provider of innovative solutions,
             services, and support, empowering individuals, businesses, and communities to thrive and succeed.</p>
         </div>
         <div className="space-y-8 p-3 border-2 rounded-xl border-gray-300 space-x-4 mx-auto flex flex-col items-center justify-center">
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
        <article className='bg-gray-800 text-gray-300 text-center space-y-8 px-6 h-full py-5 gap-12 lg:gap-16 lg:flex lg:justify-center'>
         <div className="space-y-8">
         <h1 className='text-2xl font-bold'>
          Why us? Our <span className='text-green-300'>Strengths.</span>
          </h1>
         <div className="max-w-3xl mx-auto space-y-8 ">
         <div className="text-left flex gap-4 lg:items-center">
         <div className=""><CircleCheckBig size={32} className='text-green-300' /></div>
          <div className="">
          <p>We embrace innovation and stay ahead of the curve in terms of industry trends and best practices.</p>
          </div>
          </div>
          <div className="text-left flex gap-4 lg:items-center">
          <div className=""><CircleCheckBig size={32} className='text-green-300' /></div>
            <div className="">
            <p>Our team comprises seasoned professionals with extensive expertise in their respective fields.
            We leverage this expertise to deliver high-quality services that exceed our clients' expectations.</p>
            </div>
          </div>
          <div className="text-left flex gap-4 lg:items-center">
          <div className=""><CircleCheckBig size={32} className='text-green-300' /></div>
           <div className="">
           <p>We understand that every client is unique, with distinct needs and goals
              We provide personalized service, tailoring our solutions to meet each client's
              specific requirements.</p>
           </div>
          </div>
          <div className="text-left flex gap-4 lg:items-center">
          <div className=""><CircleCheckBig size={32} className='text-green-300' /></div>
            <div className="">
            <p>We recognize our responsibility to give back to the community.
              Our foundation services support various social causes, demonstrating our commitment to social
              responsibility and sustainability.</p>
            </div>
          </div>
          <div className="text-left flex gap-4 lg:items-center">
          <div className=""><CircleCheckBig size={32} className='text-green-300' /></div>
        <div className="">
        <p>We are dedicated to delivering exceptional quality in everything we do.
               Our commitment to excellence is reflected in our rigorous quality control
                processes and our passion for continuous improvement.</p>
        </div>
          </div>
         </div>
         
         </div>
        <div className="lg:flex lg:justify-center lg:items-center">
          <img src="https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q1LGFdFoZQ0YRWTcHtSZpvfJ_DtgD86aMMuUYxPtz8s=" alt="failed to load img" className='rounded-lg w-full h-fit' />
        </div>
        </article>
        {/* Hero Carousel Two */}
        <SimpleSlider />
        {/* Hero About */}
        
        {/* Hero Partners */}
        <article className='w-full py-5 flex flex-col items-center justify-center space-y-8'>
          <h1 className='text-center text-4xl font-bold text-[#444444]'>Our <span className='text-green-600'>Key</span> Customers</h1>
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