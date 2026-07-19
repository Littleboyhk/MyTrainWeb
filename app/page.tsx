import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Privacy } from "@/components/sections/privacy";
import { WaitlistCta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Privacy />
        <WaitlistCta />
      </main>
      <Footer />
    </>
  );
}
