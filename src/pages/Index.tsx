
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HeroSlideshow from '@/components/HeroSlideshow';
import ServicesShowcase from '@/components/ServicesShowcase';
import Testimonials from '@/components/Testimonials';
import MediaBanners from '@/components/MediaBanners';
import ImageGallery from '@/components/ImageGallery';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <Navigation />
        
        {/* Hero Slideshow Section */}
        <section className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSlideshow />
          </div>
        </section>
        
        <Hero />
        <ServicesShowcase />
        <Testimonials />
        <MediaBanners />
        <ImageGallery />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
