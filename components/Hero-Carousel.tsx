"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Star } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";



const items = [
    {
      title: "Eco-Friendly Farmings",
      description: "Using biodegradable wast to create organic fertilizer for sustainable agriculture.",
     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx0ZWNobm9sb2d5fGVufDB8fHx8MTY4MjcyNjQyMA&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      title: "Tech Innovations",
      description: "Exploring the latest trends in software development and AI-driven solution.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx0ZWNobm9sb2d5fGVufDB8fHx8MTY4MjcyNjQyMA&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      title: "Political Insights",
      description: "Analyzing Uganda’s political landscape with expert opinions and discussions.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx0ZWNobm9sb2d5fGVufDB8fHx8MTY4MjcyNjQyMA&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      title: "Web Development",
      description: "Building modern, scalaable applications with cutting-edge technologies.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx0ZWNobm9sb2d5fGVufDB8fHx8MTY4MjcyNjQyMA&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      title: "Entrepreneursip",
      description: "Tips and strategies for launching and growing a successful business.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx0ZWNobm9sb2d5fGVufDB8fHx8MTY4MjcyNjQyMA&ixlib=rb-1.2.1&q=80&w=400"
    }
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
