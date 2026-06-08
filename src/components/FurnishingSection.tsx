import { ArrowRight } from "lucide-react";
import fullyFurnished from "@/assets/fully-furnished.jpg";
import semiFurnished from "@/assets/semi-furnished.jpg";
import unfurnished from "@/assets/unfurnished.jpg";

const types = [
  { name: "Fully Furnished", image: fullyFurnished, showButton: true },
  { name: "Semi Furnished", image: semiFurnished },
  { name: "Unfurnished", image: unfurnished },
];

const FurnishingSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Explore By Furnishing Type
          </h2>
          <p className="text-sm text-muted-foreground">
            Find Properties Based On Furnished, Semi-Furnished, Or Unfurnished Options.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-3 gap-4">
          {types.map((type) => (
            <div
              key={type.name}
              className="relative rounded-xl overflow-hidden min-h-[200px] md:min-h-[280px] group cursor-pointer"
            >
              <img
                src={type.image}
                alt={type.name}
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-primary-foreground font-semibold">{type.name}</h3>
                {type.showButton && (
                  <button className="mt-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 hover:bg-teal-dark transition-colors">
                    Explore <ArrowRight size={12} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnishingSection;
