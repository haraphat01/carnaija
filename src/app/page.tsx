// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Truck, Clock, PhoneCall } from 'lucide-react';
import Testimonials from './components/Testimonials';
import Hero from './components/Hero';
import Process from './components/Process';
import Features from './components/Features';
import CTA from './components/CTA';
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Process Section */}
      <Process />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
     <CTA />


    </main>
  );
}