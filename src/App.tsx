import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import WhatWeDo from "./pages/WhatWeDo.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import ForBuyers from "./pages/ForBuyers.tsx";
import ForTenants from "./pages/ForTenants.tsx";
import ForOwners from "./pages/ForOwners.tsx";
import Pricing from "./pages/Pricing.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/for-buyers" element={<ForBuyers />} />
          <Route path="/for-tenants" element={<ForTenants />} />
          <Route path="/for-owners" element={<ForOwners />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
