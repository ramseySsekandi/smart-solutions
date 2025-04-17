"use client";
import React from "react";
import Slider from "react-slick";
import { Card, CardContent } from "./ui/card";

const items = [
  {
    title: "Real Estate and Construction",
    description: "Using biodegradable waste to create organic fertilizer for sustainable agriculture.",
   image: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Corporate Clients",
    description: "Exploring the latest trends in software development and AI-driven solution.",
    image: "https://plus.unsplash.com/premium_photo-1661764123108-ff1f7385f696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29ycG9yYXRlJTIwQ2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Finance and Banking",
    description: "Analyzing Uganda’s political landscape with expert opinions and discussions.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmluYW5jZSUyMGFuZCUyMEJhbmtpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Entertainment and Media",
    description: "Building modern, scalable applications with cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVudGVydGFpbm1lbnQlMjBhbmQlMjBNZWRpYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Technology Innovation",
    description: "Tips and strategies for launching and growing a successful business.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmluYW5jZSUyMGFuZCUyMEJhbmtpbmd8ZW58MHx8MHx8fDA%3D"
  }
];

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container mx-auto max-w-4xl p-4">
      <h1 className='text-center text-4xl mb-8 font-bold text-[#444444]'>Our Market <span className='text-green-600'>Focus</span></h1>
      <Slider {...settings}>
      {items.map((item, i) => (
       <div className="pl-2 md:pl-3 sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
         <Card key={i} className="rounded-xs overflow-hidden pt-0 h-full">
          <CardContent className="px-0 pt-0">
            <div className="relative mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 lg:h-32 object-cover"
              />
            </div>
            <h3 className="px-6 text-center text-[#444444] font-bold mb-2 line-clamp-2">
              {item.title}
            </h3>
            <div className="space-y-5  text-[#444444] text-center px-4">
              <p>{item.description}</p>
            </div>
          </CardContent>
        </Card>
       </div>
      ))}
      </Slider>
    </div>
  );
}