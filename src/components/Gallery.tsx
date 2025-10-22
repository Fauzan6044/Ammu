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
import bird59 from "@/assets/new/1.jpg";
import bird60 from "@/assets/new/2.jpg";
import bird61 from "@/assets/new/3.jpg";
import bird62 from "@/assets/new/4.jpg";
import bird63 from "@/assets/new/5.jpg";
import bird64 from "@/assets/new/6.jpg";
import bird65 from "@/assets/new/7.jpg";
import bird66 from "@/assets/new/8.jpg";
import bird67 from "@/assets/new/9.jpg";
import bird68 from "@/assets/new/10.jpg";
import bird69 from "@/assets/new/11.jpg";
import bird70 from "@/assets/new/12.jpg";
import bird71 from "@/assets/new/13.jpg";
import bird72 from "@/assets/new/14.jpg";
import bird73 from "@/assets/new/15.jpg";
import bird74 from "@/assets/new/16.jpg";
import bird75 from "@/assets/new/17.jpg";
import bird76 from "@/assets/new/18.jpg";
import bird77 from "@/assets/new/19.jpg";
import bird78 from "@/assets/new/20.jpg";
import bird79 from "@/assets/new/21.jpg";
import bird80 from "@/assets/new/22.jpg";
import bird81 from "@/assets/new/23.jpg";
import bird82 from "@/assets/new/24.jpg";
import bird83 from "@/assets/new/25.jpg";
import bird84 from "@/assets/new/26.jpg";
import bird85 from "@/assets/new/27.jpg";
import bird86 from "@/assets/new/28.jpg";
import bird87 from "@/assets/new/29.jpg";
import bird88 from "@/assets/new/30.jpg";
import bird89 from "@/assets/new/31.jpg";
import bird90 from "@/assets/new/32.jpg";
import bird91 from "@/assets/new/33.jpg";
import bird92 from "@/assets/new/34.jpg";
import bird93 from "@/assets/new/35.jpg";
import bird94 from "@/assets/new/36.jpg";
import bird95 from "@/assets/new/37.jpg";
import bird96 from "@/assets/new/38.jpg";
import bird97 from "@/assets/new/39.jpg";
import bird98 from "@/assets/new/40.jpg";
import bird99 from "@/assets/new/41.jpg";
import bird100 from "@/assets/new/42.jpg";
import bird101 from "@/assets/new/43.jpg";
import bird102 from "@/assets/new/44.jpg";
import bird103 from "@/assets/new/45.jpg";
import bird104 from "@/assets/new/46.jpg";
import bird105 from "@/assets/new/47.jpg";
import bird106 from "@/assets/new/48.jpg";
import bird107 from "@/assets/new/49.jpg";
import bird108 from "@/assets/new/50.jpg";
import bird109 from "@/assets/new/51.jpg";
import bird110 from "@/assets/new/52.jpg";
import bird111 from "@/assets/new/53.jpg";
import bird112 from "@/assets/new/54.jpg";
import bird113 from "@/assets/new/55.jpg";
import bird114 from "@/assets/new/56.jpg";
import bird115 from "@/assets/new/57.jpg";
import bird116 from "@/assets/new/58.jpg";

const Gallery = () => {
  // Array of all bird images
  const birdImages = [
    bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10,
    bird11, bird12, bird13, bird14, bird15, bird16, bird17, bird18, bird19, bird20,
    bird21, bird22, bird23, bird24, bird25, bird26, bird27, bird28, bird29, bird30,
    bird31, bird32, bird33, bird34, bird35, bird36, bird37, bird38, bird39, bird40,
    bird41, bird42, bird43, bird44, bird45, bird46, bird47, bird48, bird49, bird50,
    bird51, bird52, bird53, bird54, bird55, bird56, bird57, bird58, bird59, bird60, bird61, bird62, bird63, bird64, bird65, bird66, bird67, bird68, bird69, bird70, bird71, bird72, bird73, bird74, bird75, bird76, bird77, bird78, bird79, bird80, bird81, bird82, bird83, bird84, bird85, bird86, bird87, bird88, bird89, bird90, bird91, bird92, bird93, bird94, bird95, bird96, bird97, bird98, bird99, bird100, bird101, bird102, bird103, bird104, bird105, bird106, bird107, bird108, bird109, bird110, bird111, bird112, bird113, bird114, bird115, bird116
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
