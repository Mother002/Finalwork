import { Star, Flag, MapPin, Truck, Shield, Heart } from "lucide-react";

const TexasPride = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Pattern - Texas Stars with Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-star-twinkle">
          <Star className="w-32 h-32 fill-current" />
        </div>
        <div className="absolute top-1/4 right-20 animate-star-twinkle delay-200">
          <Star className="w-24 h-24 fill-current" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-star-twinkle delay-400">
          <Star className="w-20 h-20 fill-current" />
        </div>
        <div className="absolute bottom-10 right-1/3 animate-star-twinkle delay-300">
          <Star className="w-28 h-28 fill-current" />
        </div>
        <div className="absolute top-1/2 left-1/2 animate-star-twinkle delay-500">
          <Star className="w-16 h-16 fill-current" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-primary fill-primary animate-pulse" />
              <span className="font-display text-lg text-primary">Born in the Lone Star State</span>
              <Flag className="w-6 h-6 text-primary" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground mb-6 leading-tight">
              Texas Pride.{" "}
              <span className="text-primary">American</span> Values.
            </h2>
            
            <p className="text-xl text-secondary-foreground/80 mb-4 leading-relaxed">
              From our headquarters in Seagraves, Texas, we bring West Texas grit and 
              American determination to every mile we travel. Our commitment to hard work, 
              honesty, and getting the job done right is as deep as the Permian Basin oil we transport.
            </p>
            
            {/* Texas Quote */}
            <div className="bg-texas-navy/30 rounded-xl p-4 mb-8 border-l-4 border-primary">
              <p className="text-secondary-foreground/90 italic">
                "Everything's bigger in Texas—including our commitment to service."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 stagger-children">
              <div className="flex items-start gap-4 animate-fade-in-up hover-lift p-4 rounded-xl bg-texas-navy/10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-secondary-foreground mb-1">Texas Roots</h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    Founded and headquartered in the heart of West Texas
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-fade-in-up hover-lift p-4 rounded-xl bg-texas-navy/10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-secondary-foreground mb-1">American Fleet</h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    Serving all 48 continental states with pride
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-fade-in-up hover-lift p-4 rounded-xl bg-texas-navy/10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-secondary-foreground mb-1">Texas Work Ethic</h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    Reliability and dedication in every haul
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-fade-in-up hover-lift p-4 rounded-xl bg-texas-navy/10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-secondary-foreground mb-1">American Values</h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    Integrity, honesty, and putting customers first
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texas/US Visual */}
          <div className="relative animate-slide-in-right">
            <div className="bg-texas-navy rounded-2xl p-8 relative overflow-hidden">
              {/* Large Texas Star Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Star className="w-64 h-64 fill-primary animate-spin-slow" />
              </div>
              
              <div className="relative z-10 text-center py-8">
                {/* Texas Star Badge */}
                <div className="w-24 h-24 rounded-full bg-gradient-sunrise flex items-center justify-center mx-auto mb-6 animate-float">
                  <Star className="w-14 h-14 text-primary-foreground fill-current" />
                </div>
                
                <h3 className="font-display text-3xl text-secondary-foreground mb-2">
                  Proudly Serving America
                </h3>
                <p className="text-secondary-foreground/70 mb-8">
                  From the Lone Star State
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 stagger-children">
                  <div className="bg-secondary/50 rounded-xl p-4 animate-fade-in-up hover-scale">
                    <p className="font-display text-3xl text-primary">48</p>
                    <p className="text-secondary-foreground/70 text-sm">States Served</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4 animate-fade-in-up hover-scale">
                    <p className="font-display text-3xl text-primary">12</p>
                    <p className="text-secondary-foreground/70 text-sm">Terminals</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4 animate-fade-in-up hover-scale">
                    <p className="font-display text-3xl text-primary">1</p>
                    <p className="text-secondary-foreground/70 text-sm">Texas HQ</p>
                  </div>
                </div>

                {/* American Flag Colors Bar */}
                <div className="flex mt-8 rounded-lg overflow-hidden">
                  <div className="h-2 flex-1 bg-[hsl(0,70%,45%)]"></div>
                  <div className="h-2 flex-1 bg-white"></div>
                  <div className="h-2 flex-1 bg-[hsl(215,70%,35%)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TexasPride;
