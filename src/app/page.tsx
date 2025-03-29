'use client';

import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioGallery from '../components/PortfolioGallery';
import TrainersTeam from '../components/TrainersTeam';
import FacilitiesFeatures from '../components/FacilitiesFeatures';
import MembershipPlans from '../components/MembershipPlans';
import LocationMap from '../components/LocationMap';
import ContactForm from '../components/ContactForm';
import FooterSection from '../components/FooterSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This will be replaced when components are added
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-48 bg-gray-200 rounded"></div>
          <div className="h-4 w-64 bg-gray-200 rounded"></div>
          <div className="h-4 w-56 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full">
        <HeroSection />
      </section>

      {/* About Section */}
      <section className="w-full bg-gray-50 py-16">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section className="w-full py-16">
        <ServicesSection />
      </section>

      {/* Portfolio Gallery */}
      <section className="w-full bg-gray-50 py-16">
        <PortfolioGallery />
      </section>

      {/* Trainers Team */}
      <section className="w-full py-16">
        <TrainersTeam />
      </section>

      {/* Facilities Features */}
      <section className="w-full bg-gray-50 py-16">
        <FacilitiesFeatures />
      </section>

      {/* Membership Plans */}
      <section className="w-full py-16">
        <MembershipPlans />
      </section>

      {/* Location Map */}
      {/* <section className="w-full bg-gray-50 py-16">
        <LocationMap gymName="Gym Name" address="123 Main St, Anytown, USA" coordinates={{ lat: 37.7749, lng: -122.4194 }} operatingHours="Mon - Fri: 6:00 AM - 10:00 PM" transportationInfo="Public transportation available" />
      </section> */}

      {/* Contact Form */}
      <section className="w-full py-16">
        <ContactForm />
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
}