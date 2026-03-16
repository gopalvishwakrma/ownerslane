import helpTeam from "@/assets/help-team.png";

const HelpBanner = () => {
  return (
    <section className="bg-primary mx-4 md:mx-12 rounded-2xl overflow-hidden mb-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-10">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            We're Here To Help At Every Step
          </h2>
          <p className="text-primary-foreground/80 text-sm mb-6">
            Talk To Our Property Experts And Get Personalized Assistance. We're Here To Help You Find Or Sell The Perfect Property.
          </p>
          <button className="bg-foreground text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Make Enquiery
          </button>
        </div>
        <div className="md:w-1/3 flex justify-end mt-6 md:mt-0">
          <img src={helpTeam} alt="Our team" className="h-48 md:h-64 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default HelpBanner;
