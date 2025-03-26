"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Star } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";



const items = [
  {
    title: "Technology/ IT Services",
    description: "Innovative solutions for a digital world. Our technology services provide cutting-edge solutions for businesses and individuals",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Event Management",
    description: "Memorable events and experiences. Our event management services provide expert planning and coordination for events and functions.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww"
  },
  {
    title: "Property Management",
    description: "Efficient and reliable property management. Our property management services provide comprehensive support for property owners and tenants.",
    image: "https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.webp?a=1&b=1&s=612x612&w=0&k=20&c=zYNV4ydq_T7ldqR4v3aIwOshCZqBuEopq4AcFObrBf8="
  },
  {
    title: "Charity Foundation",
    description: "Supporting social causes and community development. Our foundation services provide resources and assistance to charitable organizations.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eSUyMGZvdW5kYXRpb258ZW58MHx8MHx8fDA%3D"
  },
    {
      title: "Consultancy",
      description: "Expert guidance for business success. Our consultancy services provide strategic advice and support for businesses and organizations.",
     image: "https://media.istockphoto.com/id/1502896527/photo/office-meeting-and-documents-of-business-people-clients-or-team-for-taxes-audit-or-revenue.webp?a=1&b=1&s=612x612&w=0&k=20&c=k4-TacdiVfmnFcjt_Y3Y7YKnOqXV4WY0sdwV8bjokIE="
    },
  ];

export default function HeroCarousel() {
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

                  <div className="space-y-5  text-[#444444] text-center px-4">
                   <p>{item.description}</p>
                   <button className="py-2 px-4 rounded-xl text-blue-600 border border-blue-600 text-sm">Read More</button>
                  </div>
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
