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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-background/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-primary-foreground drop-shadow-lg leading-tight">
          Ammu's Pets & Kennels
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-primary-foreground/95 drop-shadow-md max-w-3xl mx-auto px-4">
          Your Trusted Destination for Exotic Birds
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-primary-foreground/90 drop-shadow-md px-4">
          15 Years of Excellence | 1 Lakh+ Happy Pets Sold
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToEnquiry}
            className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
          >
            Enquire Now
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToGallery}
            className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
          >
            View Our Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
