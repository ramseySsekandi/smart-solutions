import SecondaryCarousel from '@/components/Secondary-Carousel'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='relative'>
        <SecondaryCarousel id = 'ep' img = "https://images.unsplash.com/photo-1573167582108-000d05b2faad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnN1bHRhbmN5fGVufDB8fDB8fHww" alt = 'Image' title = 'Our Epiimtce Model'/>
        <section className='mt-[250px] bg-[#000818] text-white'>
            <div className="max-w-5xl mx-auto py-12 px-6 space-y-4 lg:flex">
                <div className="mx-auto px-4 py-8 relative w-full h-60 lg:w-1/2">
                    <Image src="https://media.istockphoto.com/id/1502896527/photo/office-meeting-and-documents-of-business-people-clients-or-team-for-taxes-audit-or-revenue.webp?a=1&b=1&s=612x612&w=0&k=20&c=k4-TacdiVfmnFcjt_Y3Y7YKnOqXV4WY0sdwV8bjokIE=" alt="Image" className='object-top' fill />
                </div>
                <article className="w-full lg:w-1/2 space-y-4 px-10">
                    <h3 className='text-4xl font-bold'>Our Consultancy Model</h3>
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