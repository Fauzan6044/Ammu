import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Pet data structure
const petData = {
  "🐶 Dogs": {
    "Common Breeds": [
      "Labrador Retriever", "Golden Retriever", "German Shepherd", "Beagle", "Pug",
      "Shih Tzu", "Cocker Spaniel", "Boxer", "Dalmatian", "Dachshund"
    ],
    "Exotic / Premium Breeds": [
      "Siberian Husky", "Alaskan Malamute", "Samoyed", "Saint Bernard", "Chow Chow",
      "Rottweiler", "Doberman Pinscher", "Great Dane", "Akita Inu", "Border Collie", "Rottweiler", "Poodle", "Maltipoo", "Cockapoo", "Maltese", "Bichon Frise", "Yorkshire Terrier", "French Bulldog"
    ],
    "Indian Breeds": [
      "Indian Pariah Dog", "Rajapalayam", "Kombai", "Mudhol Hound", "Gaddi Kutta", "Chippiparai"
    ]
  },
  "🐱 Cats": {
    "Common Domestic Breeds": [
      "Persian Cat", "Siamese Cat", "Himalayan Cat", "British Shorthair", "Turkish Angora"
    ],
    "Exotic / Premium Breeds": [
      "Maine Coon", "Bengal Cat", "Scottish Fold", "Ragdoll", "Sphynx (Hairless Cat)", "American Curl"
    ],
    "Indian Breeds": [
      "Indian Billi (common domestic cat)", "Bengal Cats"
    ]
  },
  "🐦 Birds": {
    "Common Pet Birds": [
      "Budgerigar (Budgie)", "Lovebird", "Cockatiel", "Finch", "Canary"
    ],
    "Exotic / High-End Pet Birds": [
      "African Grey Parrot", "Macaw (Blue & Gold, Scarlet, Hyacinth)", "Cockatoo (Sulphur-crested, Umbrella, etc.)",
      "Conure (Sun, Green-cheeked)", "Eclectus Parrot", "Amazon Parrot", "Lorikeet", "Quaker Parrot (Monk Parakeet)"
    ]
  }
};

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255).optional().or(z.literal("")),
  petType: z.string().min(1, "Please select a pet type"),
  breed: z.string().min(1, "Please select a breed"),
  customBreed: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
}).refine((data) => {
  // If custom breed is selected, customBreed must be provided
  if (data.breed === "custom") {
    return data.customBreed && data.customBreed.trim().length > 0;
  }
  return true;
}, {
  message: "Custom breed is required when 'Custom Breed' is selected",
  path: ["customBreed"],
});

const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    petType: "",
    breed: "",
    customBreed: "",
    message: "",
  });

  // Helper function to get all breeds for a pet type
  const getBreedsForPetType = (petType: string) => {
    if (!petType || !petData[petType as keyof typeof petData]) return [];
    
    const petTypeData = petData[petType as keyof typeof petData];
    
    // If it's an array (like Small Mammals, Reptiles, etc.)
    if (Array.isArray(petTypeData)) {
      return petTypeData;
    }
    
    // If it's an object with categories (like Dogs, Cats, Birds, Fish)
    const allBreeds: string[] = [];
    Object.values(petTypeData).forEach(category => {
      if (Array.isArray(category)) {
        allBreeds.push(...category);
      }
    });
    return allBreeds;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = enquirySchema.parse(formData);
      
      const whatsappNumber = "919700400309";
      
      // Build the message with optional fields
      let message = `Hello! I'm interested in your pets.%0A%0AName: ${encodeURIComponent(validated.name)}%0APhone: ${encodeURIComponent(validated.phone)}`;
      
      if (validated.email) {
        message += `%0AEmail: ${encodeURIComponent(validated.email)}`;
      }
      
      message += `%0APet Type: ${encodeURIComponent(validated.petType)}`;
      
      // Use custom breed if provided, otherwise use selected breed
      const breedToUse = validated.customBreed || validated.breed;
      message += `%0ABreed: ${encodeURIComponent(breedToUse)}`;
      
      if (validated.message) {
        message += `%0A%0AMessage: ${encodeURIComponent(validated.message)}`;
      }
      
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
      
      toast({
        title: "Redirecting to WhatsApp",
        description: "Opening WhatsApp to complete your enquiry",
      });

      setFormData({ name: "", phone: "", email: "", petType: "", breed: "", customBreed: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="enquiry" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Interested in our pets? Fill the form and we'll get back to you on WhatsApp!
          </p>
        </div>

        <Card className="p-4 sm:p-6 md:p-8 shadow-[var(--shadow-card)] bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground">Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                required
                maxLength={100}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Your contact number"
                required
                maxLength={15}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">Email (Optional)</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                maxLength={255}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="petType" className="text-foreground">Pet Type *</Label>
              <Select
                value={formData.petType}
                onValueChange={(value) => setFormData({ ...formData, petType: value, breed: "" })}
                required
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a pet type" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(petData).map((petType) => (
                    <SelectItem key={petType} value={petType}>
                      {petType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {formData.petType && (
              <div>
                <Label htmlFor="breed" className="text-foreground">Breed *</Label>
                <Select
                  value={formData.breed}
                  onValueChange={(value) => setFormData({ ...formData, breed: value, customBreed: "" })}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a breed" />
                  </SelectTrigger>
                  <SelectContent>
                    {getBreedsForPetType(formData.petType).map((breed) => (
                      <SelectItem key={breed} value={breed}>
                        {breed}
                      </SelectItem>
                    ))}
                    <SelectItem value="custom">Custom Breed (Type your own)</SelectItem>
                  </SelectContent>
                </Select>
                
                {formData.breed === "custom" && (
                  <div className="mt-3">
                    <Label htmlFor="customBreed" className="text-foreground">Custom Breed *</Label>
                    <Input
                      id="customBreed"
                      type="text"
                      value={formData.customBreed}
                      onChange={(e) => setFormData({ ...formData, customBreed: e.target.value })}
                      placeholder="Enter your custom breed"
                      maxLength={100}
                      className="mt-2"
                    />
                  </div>
                )}
              </div>
            )}

            <div>
              <Label htmlFor="message" className="text-foreground">Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your requirements..."
                maxLength={1000}
                rows={5}
                className="mt-2"
              />
            </div>

            <Button type="submit" size="lg" variant="hero" className="w-full">
              Send Enquiry via WhatsApp
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default EnquiryForm;
