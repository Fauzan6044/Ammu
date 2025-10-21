import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import EnquiryForm from "@/components/EnquiryForm";
import BusinessHours from "@/components/BusinessHours";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Gallery />
      <Reviews />
      <EnquiryForm />
      <BusinessHours />
      <Footer />
    </div>
  );
};

export default Index;
