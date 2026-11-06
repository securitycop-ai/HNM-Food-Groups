import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import OurProduct from "./pages/OurProduct";
import WhyHNM from "./pages/WhyHNM";
import OurStory from "./pages/OurStory";
import OurJourney from "./pages/OurJourney";
import PreOrder from "./pages/PreOrder";
import Contact from "./pages/Contact";
import FoundersLetter from "./pages/FoundersLetter";
import RespectToMum from "./pages/RespectToMum";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-product" element={<OurProduct />} />
            <Route path="/why-hnm" element={<WhyHNM />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-story/founders-letter" element={<FoundersLetter />} />
            <Route path="/our-story/respect-to-mum" element={<RespectToMum />} />
            <Route path="/our-journey" element={<OurJourney />} />
            <Route path="/pre-order" element={<PreOrder />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirects from old URLs */}
            <Route path="/products" element={<Navigate to="/our-product" replace />} />
            <Route path="/why-us" element={<Navigate to="/why-hnm" replace />} />
            <Route path="/about" element={<Navigate to="/our-story" replace />} />
            <Route path="/blog" element={<Navigate to="/our-journey" replace />} />
            <Route path="/blog/:slug" element={<Navigate to="/our-journey" replace />} />
            <Route path="/media" element={<Navigate to="/our-journey" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
