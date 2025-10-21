import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      review: "Excellent service! Got my beautiful cockatiel from here. The staff is very knowledgeable and caring. My bird is healthy and happy.",
      date: "2 weeks ago",
      location: "Hyderabad"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      review: "Amazing collection of exotic birds. The owner is very experienced and provides great advice on bird care. Highly recommended!",
      date: "1 month ago",
      location: "Secunderabad"
    },
    {
      id: 3,
      name: "Sunita Reddy",
      rating: 5,
      review: "Best pet store in Hyderabad! Got my African Grey parrot from here. The bird is healthy, well-trained, and absolutely beautiful.",
      date: "3 weeks ago",
      location: "Hyderabad"
    },
    {
      id: 4,
      name: "Vikram Singh",
      rating: 5,
      review: "Outstanding service and quality birds. The staff helped me choose the perfect bird for my family. Very satisfied with my purchase.",
      date: "1 week ago",
      location: "Hyderabad"
    },
    {
      id: 5,
      name: "Anita Patel",
      rating: 5,
      review: "Great experience! The birds are well-cared for and healthy. The owner provides excellent guidance on bird care and feeding.",
      date: "2 months ago",
      location: "Hyderabad"
    },
    {
      id: 6,
      name: "Suresh Rao",
      rating: 5,
      review: "Excellent quality birds and professional service. My macaw is doing great and is very friendly. Thank you for the wonderful experience!",
      date: "1 month ago",
      location: "Hyderabad"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Customer Reviews
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our happy customers say about their experience with Ammu's Pets & Kennels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="p-6 shadow-[var(--shadow-card)] bg-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-muted-foreground mb-4 italic">
                "{review.review}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">8000+ Reviews</span>
          </div>
          
          <p className="mt-4 text-muted-foreground">
            Join thousands of satisfied customers who trust Ammu's Pets & Kennels
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
