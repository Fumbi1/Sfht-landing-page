import Features from "@/components/features/features";
import CTAAndFooter from "@/components/footer/cta-footer";
import Hero from "@/components/hero/hero";
import HowItWorks from "@/components/how-it-works/how-it-works";
import Waitlist from "@/components/waitlist/waitlist";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Waitlist />
      <CTAAndFooter />
    </div>
  );
}
