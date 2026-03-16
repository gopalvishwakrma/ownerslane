import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";

const residentialProperties = [
  {
    image: property1,
    verified: true,
    title: "1BHK Apartment for Rent",
    location: "Andheri West, Mumbai",
    owner: "Professional | 26 Yrs Old | Male",
    price: "₹45K",
    deposit: "+1.8L Deposit",
    area: "720 sq ft",
    type: "1BHK",
    furnishing: "Semi Furnished",
    amenities: ["1 Bath", "East Facing", "1 Open Parking", "Floor 12/22"],
    contactName: "Suraj",
    badge: "Apartment",
  },
  {
    image: property2,
    verified: true,
    title: "2BHK Flat in Gated Society",
    location: "Powai, Mumbai",
    owner: "Family | 34 Yrs Old | Female",
    price: "₹62K",
    deposit: "+2.5L Deposit",
    area: "1050 sq ft",
    type: "2BHK",
    furnishing: "Fully Furnished",
    amenities: ["2 Bath", "West Facing", "1 Covered Parking", "Floor 8/18"],
    contactName: "Meera",
    badge: "Flat",
  },
  {
    image: property1,
    verified: true,
    title: "3BHK Villa with Garden",
    location: "Bandra East, Mumbai",
    owner: "Business Owner | 45 Yrs Old | Male",
    price: "₹1.2L",
    deposit: "+5L Deposit",
    area: "2200 sq ft",
    type: "3BHK",
    furnishing: "Fully Furnished",
    amenities: ["3 Bath", "South Facing", "2 Covered Parking", "Ground Floor"],
    contactName: "Rajesh",
    badge: "Villa",
  },
  {
    image: property2,
    verified: true,
    title: "Studio Apartment Near Metro",
    location: "Malad West, Mumbai",
    owner: "Working Professional | 29 Yrs Old | Female",
    price: "₹28K",
    deposit: "+1L Deposit",
    area: "450 sq ft",
    type: "1RK",
    furnishing: "Furnished",
    amenities: ["1 Bath", "North Facing", "No Parking", "Floor 5/15"],
    contactName: "Priya",
    badge: "Studio",
  },
];

const commercialProperties = [
  {
    image: property2,
    verified: true,
    title: "Office Space in Business Hub",
    location: "BKC, Mumbai",
    owner: "Realty Group | Est. 2010",
    price: "₹1.8L",
    deposit: "+6L Deposit",
    area: "1800 sq ft",
    type: "Office",
    furnishing: "Fully Furnished",
    amenities: ["AC", "24/7 Access", "4 Cabins", "Floor 14/28"],
    contactName: "Vikram",
    badge: "Office",
  },
  {
    image: property1,
    verified: true,
    title: "Retail Shop on Main Road",
    location: "Dadar, Mumbai",
    owner: "Property Owner | 52 Yrs Old | Male",
    price: "₹95K",
    deposit: "+3L Deposit",
    area: "600 sq ft",
    type: "Shop",
    furnishing: "Unfurnished",
    amenities: ["Ground Floor", "High Footfall", "Road Facing", "Washroom"],
    contactName: "Amit",
    badge: "Retail",
  },
  {
    image: property2,
    verified: true,
    title: "Co-working Desk in Tech Park",
    location: "Airoli, Navi Mumbai",
    owner: "Workspace Solutions Pvt. Ltd.",
    price: "₹12K",
    deposit: "+50K Deposit",
    area: "120 sq ft",
    type: "Desk",
    furnishing: "Fully Furnished",
    amenities: ["WiFi", "Meeting Room", "Pantry", "Floor 3/8"],
    contactName: "Sneha",
    badge: "Co-working",
  },
  {
    image: property1,
    verified: true,
    title: "Warehouse for Lease",
    location: "Bhiwandi, Thane",
    owner: "Industrial Realty Corp.",
    price: "₹2.5L",
    deposit: "+10L Deposit",
    area: "5000 sq ft",
    type: "Warehouse",
    furnishing: "Unfurnished",
    amenities: ["Loading Dock", "24/7 Security", "Power Backup", "Ground Floor"],
    contactName: "Rakesh",
    badge: "Warehouse",
  },
];

interface PropertiesSectionProps {
  title: string;
  subtitle: string;
}

const PropertiesSection = ({ title, subtitle }: PropertiesSectionProps) => {
  const isCommercial = title.toLowerCase().includes("commercial");
  const properties = isCommercial ? commercialProperties : residentialProperties;

  return (
    <section className="py-12 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground mb-8">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((prop, i) => (
          <PropertyCard key={i} {...prop} />
        ))}
      </div>
    </section>
  );
};

export default PropertiesSection;
