import { Heart } from "lucide-react";

interface PropertyCardProps {
  image: string;
  verified?: boolean;
  title: string;
  location: string;
  owner: string;
  price: string;
  deposit: string;
  area: string;
  type: string;
  furnishing: string;
  amenities: string[];
  contactName: string;
  badge?: string;
}

const PropertyCard = ({
  image,
  verified = true,
  title,
  location,
  owner,
  price,
  deposit,
  area,
  type,
  furnishing,
  amenities,
  contactName,
  badge = "Apartment",
}: PropertyCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
          {badge}
        </span>
        <button className="absolute top-3 right-3 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background">
          <Heart size={16} className="text-muted-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {verified && (
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-green-500 text-sm">✅</span>
            <span className="text-xs text-foreground border border-border rounded-full px-2 py-0.5">
              Aadhar Verified Owner
            </span>
          </div>
        )}
        <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground mb-3">
          {location}
          <br />
          {owner}
        </p>

        {/* Details grid */}
        <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
          <div>
            <span className="font-bold text-foreground">{price}</span>
            <span className="text-muted-foreground">/Month</span>
            <br />
            <span className="text-muted-foreground">{deposit}</span>
          </div>
          <div>
            <span className="font-bold text-foreground">{area}</span>
            <br />
            <span className="text-muted-foreground">Built-up Area</span>
          </div>
          <div>
            <span className="font-bold text-foreground">{type}</span>
            <br />
            <span className="text-muted-foreground">{furnishing}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {amenities.map((a) => (
            <span key={a} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button className="w-full bg-primary text-primary-foreground py-3 text-sm font-semibold hover:bg-teal-dark transition-colors">
        Connect with {contactName}
      </button>
    </div>
  );
};

export default PropertyCard;
