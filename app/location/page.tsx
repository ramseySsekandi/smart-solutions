import SecondaryCarousel from '@/components/Secondary-Carousel'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='relative'>
        <SecondaryCarousel id = 'ep' img = "https://plus.unsplash.com/premium_photo-1679089778076-f750c7d64ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt = 'Image' title = 'Our Location'/>
        <section className='mt-[250px] bg-[#000818] text-white'>
            <div className="max-w-5xl mx-auto py-12 px-6 space-y-4 lg:flex">
                <div className="mx-auto px-4 py-8 relative w-full h-60 lg:w-1/2">
                    <Image src="https://images.unsplash.com/photo-1511068797325-6083f0f872b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvY2F0aW9ufGVufDB8fDB8fHww" alt="Image" className='object-top' fill />
                </div>
                <article className="w-full lg:w-1/2 space-y-4 px-10">
                    <h3 className='text-4xl font-bold'>Pay Us a Visit </h3>
                    <p>
                    Our unique propositions lie on our consultancy Model; Engineering, Procurement, Integration,
                    Installation and Maintenance which drive our growth. We position our business for longevity
                    by offering a broader alternative solution to compete with major EPC companies in the country.
                    </p>
                    <p>
                    The essence of our value-added services goes beyond those provided by classical engineering,
                    fabrication and construction companies domiciled in the country. In fact, the consultancy model
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