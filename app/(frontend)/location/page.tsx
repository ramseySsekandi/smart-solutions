import SecondaryCarousel from '@/components/Secondary-Carousel'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div className='relative'>
        <SecondaryCarousel id = 'ep' img = "https://plus.unsplash.com/premium_photo-1679089778076-f750c7d64ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt = 'Image' title = 'Our Location'/>
        <section className='mt-[250px'>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight">Our Locations</h1>
        </div>
      </header> */}

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12">
            <h2 className="text-2xl text-green-600 font-semibold mb-4">Head Office</h2>
            <p className="mb-2">123 Main Street, Business District</p>
            <p className="mb-2">City, State, ZIP Code</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@company.com</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-green-600 font-semibold mb-4">Branch Office</h2>
            <p className="mb-2">456 Elm Street, Industrial Area</p>
            <p className="mb-2">City, State, ZIP Code</p>
            <p className="mb-2">Phone: (987) 654-3210</p>
            <p>Email: branch@company.com</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-green-600 font-semibold mb-4">Map</h2>
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.419415484681!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>
          </section>
        </div>
      </main>

      {/* <footer className="bg-white dark:bg-gray-800 shadow mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </footer> */}
        </div>
        </section>
    </div>
  )
}

export default page