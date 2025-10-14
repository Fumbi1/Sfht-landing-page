import Features from "@/components/features/features";
import CTAAndFooter from "@/components/footer/cta-footer";
import Hero from "@/components/hero/hero";
import HowItWorks from "@/components/how-it-works/how-it-works";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <CTAAndFooter />
    </div>
  );
}
