import SecondaryCarousel from '@/components/Secondary-Carousel';
import React from 'react';
import Link from "next/link";
import { servicesData } from '@/lib/utils';
import { ArrowRight, Clock, Users, Globe, Zap } from 'lucide-react';
import Image from 'next/image';

const ServiceHighlights = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 -mt-8 mb-12 relative z-10">
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <Clock className="w-6 h-6 text-green-600 mb-2" />
      <h3 className="font-semibold">Quick Response</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">24/7 Support</p>
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <Users className="w-6 h-6 text-green-600 mb-2" />
      <h3 className="font-semibold">Expert Team</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">Skilled Professionals</p>
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <Globe className="w-6 h-6 text-green-600 mb-2" />
      <h3 className="font-semibold">Global Reach</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">Worldwide Service</p>
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <Zap className="w-6 h-6 text-green-600 mb-2" />
      <h3 className="font-semibold">Fast Delivery</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">Quick Turnaround</p>
    </div>
  </div>
);

const page = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      <SecondaryCarousel 
        id="whoWeAre" 
        img="https://media.istockphoto.com/id/1226864145/photo/server-room-with-server-racks-in-datacenter-banner-3d-illustration.jpg?s=612x612&w=0&k=20&c=J0I5ByWvebvd8gBoNQt5YEJgFXp4cwY4hRyVWl8_-Vw=" 
        alt="Cyber Technology" 
        title="Our Services"
      />

      <ServiceHighlights />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              id={service.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative w-full h-[240px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link 
                    href="/inquiries"
                    className="text-sm px-4 py-2 rounded-lg border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;