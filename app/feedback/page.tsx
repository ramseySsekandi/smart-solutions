import SecondaryCarousel from '@/components/Secondary-Carousel'
import React from 'react'

const page = () => {
  return (
    <>
    <SecondaryCarousel id = 'ep' img = "https://plus.unsplash.com/premium_photo-1679089778076-f750c7d64ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt = 'Image' title = 'Feedbac & Customer Interaction'/>
        <section className='mt-[250px] bg-[#000818] text-white flex justify-center items-center'>
            <h1 className='text-4xl font-bold'>Welcome to Feedback and Customer Interaction Page</h1>
        </section>
        </>
  )
}

export default page