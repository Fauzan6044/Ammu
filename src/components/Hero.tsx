import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  // Array of video files
  const videos = [
    "/1.mp4",
    "/2.mp4", 
    "/3.mp4",
    "/4.mp4",
    "/5.mp4",
    "/6.mp4",
    "/7.mp4"
  ];

  // Handle video end and move to next video
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <section className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          key={videos[currentVideoIndex]}
          onEnded={handleVideoEnd}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/70 to-background/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 sm:px-4 py-16 sm:py-12 md:py-20 text-center">
        {/* Mobile-optimized layout */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-2xl leading-tight">
            Ammu's Pets & Kennels
          </h1>
          
          {/* Slogan */}
          <div className="inline-block">
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 drop-shadow-lg font-medium italic border-l-4 border-primary-foreground/30 pl-4 py-2">
              "The House of Quality Pets"
            </p>
          </div>
          
          {/* Mobile subtitle with better spacing */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xl sm:text-xl md:text-2xl text-primary-foreground/95 drop-shadow-lg font-medium leading-relaxed">
              {/* <span className="block md:hidden">India's Leading Pet Store</span> */}
              <span className="hidden md:block">Your Trusted Destination for Exotic Pets | India's Leading Pet Store</span>
            </p>
            
            <p className="text-lg sm:text-lg md:text-xl text-primary-foreground/90 drop-shadow-md font-semibold">
              {/* <span className="block md:hidden">India's Leading Pet Store</span> */}
              {/* <span className="hidden md:block">15 Years of Excellence | 1 Lakh+ Happy Pets Sold</span> */}
            </p>
          </div>
          
          {/* Mobile stats - only show on mobile */}
          {/* <div className="block md:hidden">
            <p className="text-base text-primary-foreground/85 drop-shadow-md font-medium">
              15 Years of Excellence
            </p>
            <p className="text-sm text-primary-foreground/80 drop-shadow-md">
              1 Lakh+ Happy Pets Sold
            </p>
          </div> */}
        </div>
        
        {/* Mobile-optimized buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 md:gap-4 justify-center items-center mt-8 sm:mt-6 md:mt-8 px-2 sm:px-4">
          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToEnquiry}
            className="text-lg sm:text-base md:text-lg px-8 sm:px-6 md:px-8 py-5 sm:py-4 md:py-6 w-full sm:w-auto font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Enquire Now
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToGallery}
            className="text-lg sm:text-base md:text-lg px-8 sm:px-6 md:px-8 py-5 sm:py-4 md:py-6 w-full sm:w-auto font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            View Our Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
