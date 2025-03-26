import SecondaryCarousel from '@/components/Secondary-Carousel'
import React from 'react'

const page = () => {
  return (
        <>
    <SecondaryCarousel id = 'ep' img = "https://image.shutterstock.com/image-photo/diverse-group-people-socializing-casual-260nw-2541238159.jpg" alt = 'Image' title = 'Inquiries & Quotation'/>
        <section className='mt-[250px] bg-[#000818] text-white flex justify-center items-center'>
            <h1 className='text-4xl font-bold'>Welcome to Inquiries and Quotation page</h1>
        </section>
        </>
  )
}

export default page