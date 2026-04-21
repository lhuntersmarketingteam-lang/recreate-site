import { Nav } from '@/components/ui/Nav';
import { Hero } from '@/components/sections/Hero';
import { Immersion } from '@/components/sections/Immersion';
import { Essence } from '@/components/sections/Essence';
import { Emotions } from '@/components/sections/Emotions';
import { Activities } from '@/components/sections/Activities';
import { Chamonix } from '@/components/sections/Chamonix';
import { Environment } from '@/components/sections/Environment';
import { ForWhom } from '@/components/sections/ForWhom';
import { Program } from '@/components/sections/Program';
import { Team } from '@/components/sections/Team';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Immersion />
        <Essence />
        <Emotions />
        <Activities />
        <Chamonix />
        <Environment />
        <ForWhom />
        <Program />
        <Team />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
