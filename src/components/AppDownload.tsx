import appBg from "@/assets/app-bg.jpg";

const AppDownload = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 mx-4 md:mx-12 rounded-2xl overflow-hidden my-16"
      style={{ backgroundImage: `url(${appBg})` }}
    >
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Buy, Sell & Rent Verified Properties,
            <br />
            Download The <span className="text-primary">OwnersLane</span> App
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              "Browse Aadhaar-Verified Properties Listed By Real Owners",
              "Rent Or Buy Homes Verified By On-Ground Field Managers",
              "Post Your Property Easily And Choose Self-Listing Or Managed Service",
              "Get Priority Visibility For All Listings",
              "Smart Alerts And Search Help You Find Properties That Match Your Budget",
            ].map((item) => (
              <li key={item} className="text-primary-foreground text-sm flex items-start gap-2">
                <span>•</span> {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-background rounded-lg flex items-center justify-center">
              <span className="text-xs text-foreground text-center">QR Code</span>
            </div>
            <div>
              <p className="text-primary-foreground text-xs mb-2">Scan QR code for download App</p>
              <div className="flex gap-3">
                <button className="bg-foreground text-primary-foreground px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
                  ▶ Google Play
                </button>
                <button className="bg-foreground text-primary-foreground px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
                   App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
