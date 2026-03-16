import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Reach out to our team anytime.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+91 685 88666" },
                { icon: Mail, label: "Email", value: "support@ownerslane.com" },
                { icon: MapPin, label: "Address", value: "Bangalore, Karnataka, India" },
                { icon: Clock, label: "Working Hours", value: "Mon - Sat, 9 AM - 7 PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    <p className="font-medium text-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-muted rounded-2xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold hover:bg-teal-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
