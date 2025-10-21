import { Award, Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

// ✅ Move stats outside component so useEffect doesn't re-run unnecessarily
const statsData = [
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    target: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: <Heart className="w-12 h-12 text-secondary" />,
    target: 100000,
    suffix: "+",
    label: "Pets Sold",
  },
  {
    icon: <Star className="w-12 h-12 text-accent" />,
    target: 8000,
    suffix: "+",
    label: "5-Star Reviews",
  },
];

const Stats = () => {
  const [countedValues, setCountedValues] = useState(
    new Array(statsData.length).fill(0)
  );

  useEffect(() => {
    const duration = 2000; // total animation time (ms)
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1

      setCountedValues(
        statsData.map((stat) =>
          Math.floor(stat.target * progress)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // ensure final exact values
        setCountedValues(statsData.map((stat) => stat.target));
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2 text-foreground">
                {countedValues[index].toLocaleString()}
                {stat.suffix}
              </h3>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
