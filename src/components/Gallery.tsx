import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import all bird images from the assets directory
import bird1 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.24 (1).jpeg";
import bird2 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.24.jpeg";
import bird3 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.25 (1).jpeg";
import bird4 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.25.jpeg";
import bird5 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.26 (1).jpeg";
import bird6 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.26 (2).jpeg";
import bird7 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.26.jpeg";
import bird8 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.27 (1).jpeg";
import bird9 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.27 (2).jpeg";
import bird10 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.27 (3).jpeg";
import bird11 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.27.jpeg";
import bird12 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.28 (1).jpeg";
import bird13 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.28.jpeg";
import bird14 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.29.jpeg";
import bird15 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.30 (1).jpeg";
import bird16 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.30 (2).jpeg";
import bird17 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.30.jpeg";
import bird18 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.31 (1).jpeg";
import bird19 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.31 (2).jpeg";
import bird20 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.31.jpeg";
import bird21 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.32 (1).jpeg";
import bird22 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.32 (2).jpeg";
import bird23 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.32.jpeg";
import bird24 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.33 (1).jpeg";
import bird25 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.33 (2).jpeg";
import bird26 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.33.jpeg";
import bird27 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.34 (1).jpeg";
import bird28 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.34.jpeg";
import bird29 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.35 (1).jpeg";
import bird30 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.35 (2).jpeg";
import bird31 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.35.jpeg";
import bird32 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.36.jpeg";
import bird33 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.37 (1).jpeg";
import bird34 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.37 (2).jpeg";
import bird35 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.37.jpeg";
import bird36 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.38 (1).jpeg";
import bird37 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.38 (2).jpeg";
import bird38 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.38.jpeg";
import bird39 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.39 (1).jpeg";
import bird40 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.39.jpeg";
import bird41 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.40 (1).jpeg";
import bird42 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.40.jpeg";
import bird43 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.41 (1).jpeg";
import bird44 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.41.jpeg";
import bird45 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.42 (1).jpeg";
import bird46 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.42.jpeg";
import bird47 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.43 (1).jpeg";
import bird48 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.43.jpeg";
import bird49 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.44 (1).jpeg";
import bird50 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.44.jpeg";
import bird51 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.45 (1).jpeg";
import bird52 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.45.jpeg";
import bird53 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.46 (1).jpeg";
import bird54 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.46 (2).jpeg";
import bird55 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.46.jpeg";
import bird56 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.47 (1).jpeg";
import bird57 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.47.jpeg";
import bird58 from "@/assets/bird_collection/WhatsApp Image 2025-10-21 at 19.16.48.jpeg";

const Gallery = () => {
  // Array of all bird images
  const birdImages = [
    bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10,
    bird11, bird12, bird13, bird14, bird15, bird16, bird17, bird18, bird19, bird20,
    bird21, bird22, bird23, bird24, bird25, bird26, bird27, bird28, bird29, bird30,
    bird31, bird32, bird33, bird34, bird35, bird36, bird37, bird38, bird39, bird40,
    bird41, bird42, bird43, bird44, bird45, bird46, bird47, bird48, bird49, bird50,
    bird51, bird52, bird53, bird54, bird55, bird56, bird57, bird58
  ];

  // Create birds data with just images
  const birds = birdImages.map((image, index) => ({
    id: index + 1,
    image: image,
  }));

  return (
    <section id="gallery" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Exotic Pets Collection
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {birds.map((bird) => (
            <Dialog key={bird.id}>
              <DialogTrigger asChild>
                <div className="aspect-square overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <img 
                    src={bird.image} 
                    alt="Exotic Bird"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
                <div className="relative w-full h-full">
                  <img 
                    src={bird.image} 
                    alt="Exotic Bird - Full View"
                    className="w-full h-full object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
