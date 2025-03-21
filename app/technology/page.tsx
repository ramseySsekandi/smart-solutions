
import AboutCarousel from '@/components/About-Carousel'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SecondaryCarousel from '@/components/Secondary-Carousel'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const boardLink = ["/about/gmd.jpg",
                    "/about/iyenemi.png",
                     "/about/lawrence.jpg"]
  const managementLink = ["/about/daisy.png", "/about/nneka.png", "/about/elena.jpg", "/about/emuesiri.png"]
  const policiesLink = ["/about/cashes.png", "/about/ncd.png", "/about/quality.png"]
  const remainder = managementLink.length % 3;
  return (
    <div className="relative">
      <SecondaryCarousel id = 'whoWeAre' img = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXIlMjB0ZWNofGVufDB8fDB8fHww" alt = 'Cyber Technology: ' title = 'Cyber Technology'/>
      <section className='mt-[250px]  bg-gray-100 text-[#444444]'>
      {/* Hero One */}
      <div className="text-center max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className='text-lg font-bold'>Innovative solutions for a digital world. Our technology services provide cutting-edge solutions for businesses and individuals</h2>
        <p text-lg>Powered by Our Life Cycle Model: Engineering Procurement, Integration, Installation and Maintenance Models,</p>
      </div>
      </section>
      <section className='text-[#444444] max-w-5xl px-4 mx-auto py-8 lg:flex lg:flex-col lg:items-center lg:px-5 space-y-4 lg:space-y-12' id="ourPrinciples">
      <h1 className='text-4xl text-center font-bold'>Our Bow Tie<span className='text-[#0085CA]'> Principles.</span>
          </h1>
          <div className='mx-auto w-full h-40 md:h-48 lg:h-60 lg:w-2/3 relative'>
          <Image src="/about/bow-tie.png" alt='bow-tie' className='object-center w-full' fill/>
        </div>
        <div className="flex gap-8 text-sm sm:text-base font-sans leading-snug justify-between lg:gap-10 lg:p-3">
          <p className='w-1/2 lg:px-6 py-3'>We believe that to enhance our brand as a major oil & gas solutions company,
             it is vital that we not only have world-class resources and expertise but that we are also honest,
            dedicated and transparent in everything we do.
          </p>
          <p className='w-1/2 lg:px-6 py-3'>Our commitment to excellence is evident in our ability to deliver on our promises.
          We are intent on adhering to the deadlines while focusing our attention to the minor detail of any of our projects.
          Our persistence in constant training and capacity building of our personnel has allowed us to win the trust of our 
          clients and establish strong partnerships with all our customers. This entrepreneurial attitude has also helped us
          foster closer working relationships, which we have seen consistently lead to enhanced levels of services and a more
          effective engineering outcome.
          </p>
        </div>
      </section>
      {/* Hero Two */}
      {/* Our Leadership */}
      <section className='text-[#444444] max-w-5xl px-4 mx-auto py-8 lg:flex lg:flex-col lg:items-center lg:px-5 space-y-4 lg:space-y-12' id="ourLeadership">
      <h1 className='text-4xl text-center font-bold'>Our<span className='text-[#0085CA]'> Leadership.</span></h1>
      <div className="py-4 w-full">
        <h2 className='text-3xl font-bold'>Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mx-auto px-4 py-8">
        {boardLink.map((link, index) => (
            <div className="relative w-full h-80" key={index}>
                <Image
               src={link}
               className='relative object-cover md:object-contain shadow-lg'
               fill
               alt="Image 1"
             />
            </div>
               
          ))}
        
        </div>
      </div>
      <div className="py-4 w-full">
        <h2 className='text-3xl font-bold'>Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto px-4 py-8">
        {managementLink.map((link, index) => {
          const isSingleInLastRow = remainder === 1 && index === managementLink.length - 1;
          return (

            <div key={index} className={`relative w-full h-80 ${isSingleInLastRow ? 'md:col-start-2' : ''}`}>
                <Image
               src={link}
               className='relative object-cover md:object-contain shadow-lg'
               fill
               alt="Image 1"
             />
            </div>
          )       
          })}
        
        </div>
      </div>
      {/* Our History */}
       <section id='ourHistory'>
       <h1 className='text-4xl text-center font-bold'>Our<span className='text-[#0085CA] mb-5'> History.</span></h1>
       <AboutCarousel />
       </section>
       {/* Our Policies */}
       <section id='ourPolicies'>
        </section>
        <h1 className='text-4xl text-center font-bold'>Our<span className='text-[#0085CA] mb-5'> Policies.</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:w-full gap-4 mx-auto px-4 py-8">
        {policiesLink.map((link, index) => (
            <div className="relative w-full h-80" key={index}>
                <Image
               src={link}
               className='relative object-cover md:object-contain '
               fill
               alt="Image 1"
             />
            </div>
               
          ))}
        
        </div>
      </section>
      </div>
  )
}

export default page