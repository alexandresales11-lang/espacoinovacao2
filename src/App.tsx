import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyFeatures } from './components/KeyFeatures';
import { Gallery } from './components/Gallery';
import { HostSection } from './components/HostSection';
import { ReservationForm } from './components/ReservationForm';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#071711] text-neutral-100 flex flex-col font-sans selection:bg-[#c5a059] selection:text-neutral-950">
      <Header />
      <main className="flex-1">
        <Hero />
        <KeyFeatures />
        <Gallery />
        <HostSection />
        <ReservationForm />
        <LocationSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
}
