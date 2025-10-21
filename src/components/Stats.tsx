import { Award, Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      value: "15+",
      label: "Years of Experience",
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary" />,
      value: "1 Lakh+",
      label: "Pets Sold",
    },
    {
      icon: <Star className="w-12 h-12 text-accent" />,
      value: "8000+",
      label: "5-Star Reviews",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-foreground">
                {stat.value}
              </h3>
              <p className="text-muted-foreground text-lg">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
