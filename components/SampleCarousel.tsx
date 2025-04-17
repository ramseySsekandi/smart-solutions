"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { speed } from "jquery";

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
      {
        title: "Real Estate",
        description: "Premier properties and services. Our real estate services provide expert guidance and support for buying, selling, and managing properties",
       image: "https://media.istockphoto.com/id/1488438637/photo/row-of-homes.jpg?s=612x612&w=0&k=20&c=kVsYFuVKHD8FOb9jxPgC134M8Q8yJ61cmsSRtqJPkIM="
      },
      {
        title: "Tours & Travel",
        description: "Explore the world with us. Our tours and travel services provide unforgettable experiences and adventures.",
       image: "https://media.istockphoto.com/id/1992243286/photo/two-young-female-friends-embracing-on-the-street-in-dubrovnik.jpg?s=612x612&w=0&k=20&c=I-6jkpo7nTuEUHvOcdPTHdBNxl1A58r4NBZaP0CHcBA="
      },
      {
        title: "Transport & Logistics",
        description: "Efficient and reliable transport and logistics services. Our transport and logistics services provide comprehensive support for businesses and organizations.",
       image: "https://media.istockphoto.com/id/2157040201/photo/truck-carrying-forty-foot-container-leaving-port-terminal-with-ship-and-quay-crane-on-the.jpg?s=612x612&w=0&k=20&c=D4UJJ09jrr-lkrP_6FvIAj6-2PosXIzg-iQ_HcxD0iQ="
      },
      {
        title: "Publishing",
        description: "Quality content and publishing services. Our publishing services provide expert guidance and support for authors and publishers.",
       image: "https://media.istockphoto.com/id/1407890983/vector/newspaper-realistic-vector-illustration-background-of-the-page-headline-and-cover-of-old.jpg?s=612x612&w=0&k=20&c=uyB-_t4SbgkZxpc2CPk8_ELgNcnHTuUBPenHTIiRZIc="
      },
      {
        title: "Media Comm & Entertainment",
        description: "Engaging media and entertainment services. Our media communication and entertainment services provide expert guidance and support for businesses and organizations.",
       image: "https://media.istockphoto.com/id/1300532725/photo/professional-cameraman-covering-on-event-with-a-video-cameraman-silhouette-on-live-studio.jpg?s=612x612&w=0&k=20&c=4Q3OJQE7qXrWiA7A8B8u2Bba1w5Dum8Q7ABlTl8_Pbw="
      },
    ];

export default function SampleCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", speed: 5, skipSnaps: true, dragFree: true} as any,
    [Autoplay({ delay: 3000, stopOnInteraction: false })]// delay in ms
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const raf = useRef<number | null>(null);

  const animate = () => {
    if (!emblaApi) return; // Ensure emblaApi is defined
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
    emblaApi.reInit(); // Reinitialize to eliminate shaky wave effect
    raf.current = requestAnimationFrame(animate);
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
          {items.map((item, i) => (
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
                    <button className="py-2 px-4 rounded-xl text-green-600 border border-green-600 text-sm">
                      Read More
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
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
      {/* New feature: Add a button to scroll to the next item */}
      <button
        className="mt-4 py-2 px-4 bg-green-300 text-gray-700 rounded"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next slide"
      >
        Next
      </button>
    </div>
  );
}
