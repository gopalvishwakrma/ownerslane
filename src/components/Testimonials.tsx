const testimonials = [
  {
    quote: "I found my dream 2BHK in Powai within a week — directly from the owner. No broker fees, no hassle. OwnersLane made the entire process incredibly smooth.",
    name: "Ananya Sharma",
    role: "Tenant, Mumbai",
  },
  {
    quote: "As a property owner, I listed my flat and received 15 genuine inquiries in just 3 days. The Aadhaar verification gives tenants confidence and I got a great tenant fast.",
    name: "Rajiv Menon",
    role: "Property Owner, Bangalore",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
        Trusted By Real Owners & Home Seekers
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-10">
        From listing to deal closure, see how OwnersLane helped users connect safely and transparently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-8">
            <div className="text-5xl text-primary mb-4 font-serif">"</div>
            <p className="text-sm text-muted-foreground mb-4">{t.quote}</p>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
