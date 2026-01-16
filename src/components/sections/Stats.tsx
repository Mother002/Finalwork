import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 7.7, suffix: "M+ m³", label: "Total Storage Capacity", decimals: 1 },
  { value: 1655, suffix: "+", label: "Storage Tanks", decimals: 0 },
  { value: 12, suffix: "", label: "Terminal Locations", decimals: 0 },
  { value: 48, suffix: "", label: "States Served", decimals: 0 },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts(
        stats.map((stat) => {
          const current = (stat.value * step) / steps;
          return Math.min(current, stat.value);
        })
      );
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatValue = (value: number, decimals: number) => {
    if (decimals > 0) {
      return value.toFixed(decimals);
    }
    return Math.floor(value).toString();
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            Our Network
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-primary-foreground">
            Industry-Leading Bulk Liquid Storage
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-2">
                {formatValue(counts[index], stat.decimals)}
                {stat.suffix}
              </div>
              <p className="text-secondary-foreground/80 text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;