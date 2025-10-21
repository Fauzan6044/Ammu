import { Card } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

const BusinessHours = () => {
  const hours = [
    { day: "Monday", time: "10:00 AM - 10:00 PM" },
    { day: "Tuesday", time: "10:00 AM - 10:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { day: "Thursday", time: "10:00 AM - 10:00 PM" },
    { day: "Friday", time: "10:00 AM - 10:00 PM" },
    { day: "Saturday", time: "10:00 AM - 10:00 PM" },
    { day: "Sunday", time: "10:00 AM - 10:00 PM" },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className="p-8 shadow-[var(--shadow-card)] bg-card">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
            </div>
            <div className="space-y-3">
              {hours.map((hour) => (
                <div key={hour.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="font-medium text-foreground">{hour.day}</span>
                  <span className="text-muted-foreground">{hour.time}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-accent font-semibold">We're currently open!</p>
          </Card>

          <Card className="p-8 shadow-[var(--shadow-card)] bg-card">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Visit Us</h3>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Come visit our store to see our beautiful collection of exotic birds in person!
              </p>
              <a
                href="https://maps.google.com/maps/search/AMMUS%20PETS%20AND%20KENNELS/@17.424800872802734,78.44850158691406,17z?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-primary/80 font-medium underline"
              >
                View on Google Maps
              </a>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Quick Contact:</p>
                <a 
                  href="tel:9700400309"
                  className="text-lg font-semibold text-foreground hover:text-primary"
                >
                  +91 9700400309
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
