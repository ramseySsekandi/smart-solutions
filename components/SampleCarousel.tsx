"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { servicesData } from "@/lib/utils";

export default function SampleCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", speed: 5, skipSnaps: true, dragFree: true} as any,
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const raf = useRef<number | null>(null);

  const animate = () => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
    emblaApi.reInit();
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-8 text-[#444444]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {servicesData.map((item, i) => (
            <div
              key={i}
              className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-2"
            >
              <Card className="shadow-lg rounded-xs overflow-hidden h-full pt-0">
                <CardContent className="px-0 pt-0">
                  <div className="relative mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 lg:h-32 object-cover"
                    />
                  </div>
                  <h3 className="px-6 text-center font-bold mb-2 line-clamp-2 text-gray-800">
                    {item.title}
                  </h3>
                  <div className="space-y-5 text-center px-4 text-gray-700">
                    <p className="line-clamp-4">{item.description}</p>
                    <Link 
                      href={`/services/${item.id}`}
                      className="inline-block py-2 px-4 rounded-xl text-green-600 border border-green-600 text-sm hover:bg-green-50 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {servicesData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-700 ease-in-out delay-75 ${
              index === selectedIndex ? "bg-green-500 w-6" : "bg-gray-300"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
