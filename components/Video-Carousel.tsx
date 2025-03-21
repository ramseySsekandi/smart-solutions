"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  videoUrl: string;
  title?: string;
  buttonAction?: () => void;
}

const VideoCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoProgress, setVideoProgress] = useState<number[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slides: Slide[] = [
    {
      videoUrl: './videos/high-tech.mp4',
      title: "Our Smart Solutions",
      buttonAction: () => alert("Get Started clicked!")
    },
    {
      videoUrl: './videos/smart-city.mp4',
      title: "Explore our Micro Fin-Tech System for financial inclusion",
      buttonAction: () => alert("Learn More clicked!")
    },

    {
      videoUrl: './videos/hightech-4k.mp4',
      title: "Visit Our Business Technology",
      buttonAction: () => alert("Explore More clicked!")
    }
  ];

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Handle video progress tracking
  const handleTimeUpdate = (index: number, event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    const progress = (video.currentTime / video.duration) * 100;
    
    // Update progress for this specific video
    const newProgress = [...videoProgress];
    newProgress[index] = progress;
    setVideoProgress(newProgress);

    // Auto-advance if video has completed
    if (progress >= 99.9) {
      nextSlide();
    }
  };

  // Reset video progress when slide changes
  useEffect(() => {
    // Reset progress for all videos
    setVideoProgress(new Array(slides.length).fill(0));

    // Pause all videos and play current video
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play current video
    if (videoRefs.current[currentSlide]) {
      videoRefs.current[currentSlide]?.play();
    }
  }, [currentSlide]);

  return (
    <div className="w-full absolute top-0 left-0 right-0">
      {/* Carousel Container */}
      <div className="relative w-full h-[400px]">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`
              absolute inset-0 transition-opacity duration-500 ease-in-out
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {/* Video Background with Progress Bar */}
            <div className="relative w-screen h-[400px]">
              <video
               ref={(el) => {
                if (videoRefs.current) {
                  videoRefs.current[index] = el;
                }
              }}
                src={slide.videoUrl}
                className="w-full h-full object-fill absolute top-0 left-0 right-0"
                autoPlay={index === currentSlide}
                controls={false}
                muted
                loop={false}
                playsInline
                onTimeUpdate={(e) => handleTimeUpdate(index, e)}
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute h-400px inset-0 bg-black/55 flex items-end justify-center">
              <div className="w-6xl text-white mb-7 px-6">
                <div className="mb-16 md:mb-0">
                {slide.title && (
                  <h2 className="font-bold mb-2 md:mb-4 drop-shadow-lg text-3xl md:text-5xl">
                    {slide.title}
                  </h2>
                )}
                  <button 
                    onClick={slide.buttonAction}
                    className="
                      bg-white text-black 
                      px-4 py-2.5
                      md:px-8 md:py-5 rounded-sm
                      text-sm font-bold
                      hover:bg-gray-200 
                      transition duration-300
                      transform hover:scale-105
                      shadow-lg hover:shadow-xl
                      mt-6
                    "
                  >
                    Learn More
                  </button>
                </div>

                {/* Rectangular Tabs */}
                <div className="flex justify-center space-x-2 pt-8">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`
                        w-7 h-[2px]
                        md:w-10 md:h-1 cursor-pointer transition-all duration-300
                        ${currentSlide === index 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'}
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          className="
            absolute left-0 md:left-15 top-1/2
            p-2 rounded-full 
            z-30
          "
        >
          <ChevronLeft size={36} className="text-white/50 hidden md:block" />
        </button>
        
        <button 
          onClick={nextSlide} 
          className="
            absolute right-0 md:right-15 top-1/2 p-2 rounded-full 
            z-30
          "
        >
          <ChevronRight size={36} className="text-white/50 hidden md:block" />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;