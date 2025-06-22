"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface HistoryItem {
  _id: string;
  year: number;
  title: string;
  description: string;
  image?: string;
}

interface AboutCarouselProps {
  historyData?: HistoryItem[];
}

const AboutCarousel = ({ historyData = [] }: AboutCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  // Helper function to get image URL with proper error handling
  const getImageUrl = (item: HistoryItem) => {
    return item?.image ? item.image : '/hero-about.jpeg';
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {historyData.map((item) => (
          <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-gray-50 shadow-md">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={getImageUrl(item)}
                      alt={item.title || 'Historical event'}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <span className="text-2xl font-bold mb-2">{item.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="text-sm text-center prose-sm">
                    <p>{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default AboutCarousel;
