"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Star } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";



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

export default function HeroCarouselTwo() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => { 
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-8 text-[#444444] lg:max-w-5xl">
     
     <h1 className='text-center text-4xl mb-8 font-bold text-[#444444]'>Our Market <span className='text-[#0085CA]'>Focus</span></h1>
      <Carousel setApi={setApi} className="relative text-[#444444]">
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, i) => (
            <CarouselItem
              key={i}
              className="pl-2 md:pl-3 sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="border rounded-xs overflow-hidden pt-0">
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

                  {/* <div className="space-y-5  text-[#444444] text-center px-4">
                   <p>{item.description}</p>
                   <button className="py-2 px-4 rounded-xl text-blue-600 border border-blue-600 text-sm">Read More</button>
                  </div> */}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block left-0 -translate-x-1/2" />
        <CarouselNext className="right-0 hidden md:block translate-x-1/2" />
      </Carousel>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index + 1 === current ? "bg-blue-600 w-6" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
