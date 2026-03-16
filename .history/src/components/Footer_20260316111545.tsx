import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

const Footer = () => {
  const columns = [
    {
      title: "About Us",
      links: [
        { label: "About OwnersLane", href: "/about" },
        { label: "How It Works", href: "/what-we-do" },
        { label: "Broker-Free Promise", href: "/about" },
        { label: "Verification Process", href: "/what-we-do" },
        { label: "Careers", href: "/contact" },
      ],
    },
    {
      title: "Properties",
      links: [
        { label: "Residential Rentals", href: "/for-tenants" },
        { label: "Properties for Sale", href: "/for-buyers" },
        { label: "Commercial Spaces", href: "/for-buyers" },
        { label: "PG & Shared Living", href: "/for-tenants" },
        { label: "New Projects", href: "/for-buyers" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Mumbai Properties", href: "/" },
        { label: "Delhi NCR Properties", href: "/" },
        { label: "Bangalore Properties", href: "/" },
        { label: "Pune Properties", href: "/" },
        { label: "Hyderabad Properties", href: "/" },
      ],
    },
    {
      title: "For Property Owners",
      links: [
        { label: "List Your Property", href: "/for-owners" },
        { label: "Self Listing Plans", href: "/pricing" },
        { label: "Managed Services", href: "/for-owners" },
        { label: "Pricing & Plans", href: "/pricing" },
        { label: "Post Property Free", href: "/for-owners" },
      ],
    },
    {
      title: "Help & Legal",
      links: [
        { label: "FAQs", href: "/contact" },
        { label: "Privacy Policy", href: "/about" },
        { label: "Terms & Conditions", href: "/about" },
        { label: "Refund Policy", href: "/pricing" },
        { label: "Anti-Broker Policy", href: "/about" },
      ],
    },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">OwnersLane</h3>
            <p className="text-xs text-primary-foreground/60 mb-1">Address</p>
            <p className="text-sm font-semibold mb-4">
              GOKUL ARCADE,'A' WING GROUND FLOOR OFFICE NUMBER 36 GARWARE CHOWK,SAHAR ROAD,VILE PARLE EAST MUMBAI - 400057
            </p>
            <p className="text-xs text-primary-foreground/60 mb-1">Customer Support</p>
            <p className="text-sm font-semibold mb-4">+91 99208 18110</p>
            <p className="text-xs text-primary-foreground/60 mb-1">Email Us</p>
            <p className="text-sm font-semibold">hello@ownerslane.com</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
  
  <p className="text-xs text-primary-foreground/60">
    © 2026 OwnersLane Pvt. Ltd. – All rights reserved
  </p>

  <div className="flex items-center gap-4 mt-4 md:mt-0">
    <span className="text-sm text-primary-foreground/60">Follow Us</span>

    <a
      href="https://www.instagram.com/ownerslane?igsh=MTRyc2dqbDczaXFrYw=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-foreground/60 hover:text-primary-foreground text-lg"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.facebook.com/share/1CKztVpqMx/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-foreground/60 hover:text-primary-foreground text-lg"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://x.com/OwnersLane"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-foreground/60 hover:text-primary-foreground text-lg"
    >
      <FaXTwitter />
    </a>

    <a
      href="https://www.threads.com/@ownerslane"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-foreground/60 hover:text-primary-foreground text-lg"
    >
      <FaThreads />
    </a>

    <a
      href="https://youtube.com/@ownerslane?si=YfuQHIDpw-Hfnci_"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-foreground/60 hover:text-primary-foreground text-lg"
    >
      <FaYoutube />
    </a>

  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
