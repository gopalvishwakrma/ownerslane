import { ArrowRight } from "lucide-react";
import apartmentFlats from "@/assets/apartment-flats.jpg";
import builderFloor from "@/assets/builder-floor.jpg";
import officeSpace from "@/assets/office-space.jpg";
import studioHouse from "@/assets/studio-house.jpg";
import techPark from "@/assets/tech-park.jpg";
import villas from "@/assets/villas.jpg";

const categories = [
  { name: "Apartment / Flats", image: apartmentFlats, large: true },
  { name: "Builder Floor", image: builderFloor },
  { name: "Office Space", image: officeSpace },
  { name: "Studio House", image: studioHouse },
  { name: "IT / Tech Park Office", image: techPark },
  { name: "Villas", image: villas },
];

const PremiumSolutions = () => {
  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
        Premium Property Solutions
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-10">
        End-to-end property services that handle verification, visibility, and deal closure for you.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <div
            key={cat.name}
            className={`relative rounded-xl overflow-hidden group cursor-pointer ${
              i === 0 ? "row-span-2 min-h-[300px] md:min-h-[400px]" : "min-h-[180px]"
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-primary-foreground font-semibold text-lg">{cat.name}</h3>
              {i === 0 && (
                <button className="mt-2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 hover:bg-teal-dark transition-colors">
                  Explore <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumSolutions;
