const residentialLocations = [
  "Andheri West", "Bandra East", "Powai", "Malad West", "Goregaon East",
  "Thane West", "Kharghar", "Panvel", "Dadar", "Worli",
  "Juhu", "Borivali West", "Kandivali East", "Chembur", "Vikhroli",
  "Mulund West", "Ghatkopar", "Sion", "Lower Parel", "Vashi",
];

const commercialLocations = [
  "BKC", "Andheri East", "Nariman Point", "Fort", "Lower Parel",
  "Airoli", "Goregaon East", "Worli", "Vikhroli", "Powai",
  "Navi Mumbai", "Thane", "Malad East", "Kalina", "Marol",
  "Chandivali", "Jogeshwari East", "Mahape", "Belapur", "Turbhe",
];

const PropertyLinks = () => {
  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto border-t border-border">
      {[
        { title: "Visit Residential Properties", locations: residentialLocations, prefix: "Flats for Rent in" },
        { title: "Visit Commercial Properties", locations: commercialLocations, prefix: "Office Space in" },
      ].map((section) => (
        <div key={section.title} className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{section.title}</h2>
          <p className="text-sm text-muted-foreground mb-6">
            {section.title.includes("Residential")
              ? "Visit Aadhaar-verified homes and explore properties that are physically checked for authenticity."
              : "Visit Offices, Shops, And Commercial Spaces That Are Verified And Ready For Business Use."}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {section.locations.map((loc) => (
              <a
                key={loc}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {section.prefix} {loc}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PropertyLinks;
