import SecondaryCarousel from '@/components/Secondary-Carousel';
import React from 'react';
import Link from "next/link";



const page = () => {
  return (
    <div className="relative">
      <SecondaryCarousel 
        id="whoWeAre" 
        img="https://media.istockphoto.com/id/1226864145/photo/server-room-with-server-racks-in-datacenter-banner-3d-illustration.jpg?s=612x612&w=0&k=20&c=J0I5ByWvebvd8gBoNQt5YEJgFXp4cwY4hRyVWl8_-Vw=" 
        alt="Cyber Technology" 
        title="Our Services"
      />
      {
        servicesData.map((service)=>(
          <section className="bg-white dark:bg-gray-900" key={service.id} id={service.id}>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img 
            className="w-full dark:hidden" 
            src={service.image}
            alt="dashboard image"
          />
          <img 
            className="w-full hidden dark:block" 
            src={service.darkImage}
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0 self-start">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-green-600 dark:text-white">
              {service.title}
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              {service.description}
            </p>
            <Link 
              href="/inquiries" 
              className="inline-flex items-center text-green-600 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Request Quotation
              <svg 
                className="ml-2 -mr-1 w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
        ))
      }
    </div>
  );
};

export default page;