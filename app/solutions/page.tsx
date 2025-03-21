import SecondaryCarousel from '@/components/Secondary-Carousel'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='relative'>
        <SecondaryCarousel id = 'ep' img = "/solutions/epiimtce.jpg" alt = 'Image' title = 'Our Epiimtce Model'/>
        <section className='mt-[250px] bg-[#000818] text-white'>
            <div className="max-w-5xl mx-auto py-12 px-6 space-y-4 lg:flex">
                <div className="mx-auto px-4 py-8 relative w-full h-60 lg:w-1/2">
                    <Image src={"/eye.png"} alt="Image" className='object-top' fill />
                </div>
                <article className="w-full lg:w-1/2 space-y-4 px-10">
                    <h3 className='text-4xl font-bold'>Our <img src='/epiimtce_white.png' alt='EPiiMtce' className='inline w-20 h-full object-cover' ></img>Model</h3>
                    <p>
                    Our unique propositions lie on our epiimtce Model; Engineering, Procurement, Integration,
                    Installation and Maintenance which drive our growth. We position our business for longevity
                    by offering a broader alternative solution to compete with major EPC companies in the country.
                    </p>
                    <p>
                    The essence of our value-added services goes beyond those provided by classical engineering,
                    fabrication and construction companies domiciled in the country. In fact, the epiimtce model
                    incentivize our customers to rely on our expertise to embark on life cycle projects from inception
                    to long term turnaround maintenance.
                    </p>
                </article>
            </div>
        </section>
    </div>
  )
}

export default page