const locations = [
  { name: "Andheri", count: 1240 },
  { name: "Panvel", count: 430 },
  { name: "Thane", count: 870 },
  { name: "Kalyan", count: 315 },
  { name: "Dadar", count: 560 },
  { name: "Kharghar", count: 290 },
  { name: "Dombivali", count: 210 },
  { name: "Sion", count: 185 },
];

const LocationBadge = ({ name, count }: { name: string; count: number }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:bg-muted p-2 rounded-lg transition-colors">
    <div className="w-14 h-14 rounded-full border-2 border-red-500 flex items-center justify-center bg-background">
      <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
        <span className="text-primary-foreground text-[8px] font-bold text-center leading-tight">
          {name}
        </span>
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-foreground text-sm">{name}</h4>
      <p className="text-xs text-muted-foreground">{count.toLocaleString()} Properties</p>
    </div>
  </div>
);

const LocationsSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
        Explore Properties By Location
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-10">
        Discover verified properties across Mumbai's most sought-after neighborhoods.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {locations.map((loc) => (
          <LocationBadge key={loc.name} name={loc.name} count={loc.count} />
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
