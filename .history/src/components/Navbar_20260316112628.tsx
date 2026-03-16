import { Phone, Heart, User, Download, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      label: "For Buyers",
      href: "/for-buyers",
      dropdown: [
        { label: "Residential Properties", href: "/for-buyers" },
        { label: "Commercial Properties", href: "/for-buyers" },
        { label: "New Projects", href: "/for-buyers" },
      ],
    },
    {
      label: "For Tenants",
      href: "/for-tenants",
      dropdown: [
        { label: "Rental Homes", href: "/for-tenants" },
        { label: "Furnished Rentals", href: "/for-tenants" },
        { label: "PG / Shared", href: "/for-tenants" },
      ],
    },
    {
      label: "For Owners",
      href: "/for-owners",
      dropdown: [
        { label: "List Property", href: "/for-owners" },
        { label: "Premium Plans", href: "/pricing" },
        { label: "Owner Dashboard", href: "/for-owners" },
      ],
    },
    { label: "Pricings", href: "/pricing" },
    { label: "About Us", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header>
      {/* Top bar */}
      <div className="bg-primary px-4 py-2 flex items-center justify-between">
<Link to="/" className="flex items-center gap-3">
  <img
    src="https://raw.githubusercontent.com/gopalvishwakrma/heartsync/main/ownerslane-logo.png"
    alt="OwnersLane Logo"
    className="w-9 h-9 object-contain rounded-md"
  />

  <div className="flex flex-col leading-tight gap-1"> {/* vertical layout */}
    <span className="text-primary-foreground font-semibold text-sm">
      OwnersLane
    </span>

    <span className="text-primary-foreground/80 text-xs">
      "Own Your Lane"
    </span>

    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-[10px]">★</span>
      ))}
      <span className="text-primary-foreground text-[10px]">(5.0)</span>
    </div>
  </div>
</Link>
        <button className="border border-primary-foreground text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-primary-foreground hover:text-primary transition-colors">
          Download App <Download size={16} />
        </button>
      </div>

      {/* Main nav */}
      <nav className="bg-background px-6 lg:px-12 py-3 flex items-center justify-between border-b border-border relative" ref={dropdownRef}>
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-foreground">OwnersLane</Link>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-xl shadow-lg py-2 min-w-[200px] z-50">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+91 9920818110" className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone size={16} /> +91 99208 18110
          </a>
          <Heart size={20} className="text-foreground cursor-pointer hover:text-primary" />
          <Link
            to="/for-owners"
            className="hidden sm:inline-flex border-2 border-primary text-primary px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Post Property <span className="ml-1 text-xs">₹999</span>
          </Link>
          <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center cursor-pointer hover:bg-muted">
            <User size={18} className="text-foreground" />
          </div>
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} className="text-foreground" /> : <Menu size={22} className="text-foreground" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50 lg:hidden">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="w-full text-left text-sm font-medium text-foreground hover:text-primary py-2.5 flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              onClick={() => { setOpenDropdown(null); setMobileMenuOpen(false); }}
                              className="block text-sm text-muted-foreground hover:text-primary py-2"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-medium text-foreground hover:text-primary py-2.5"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

