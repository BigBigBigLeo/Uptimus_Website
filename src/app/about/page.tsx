'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ContactModal, { InquiryType } from '@/components/ui/ContactModal';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('Contact Us');

  const openModal = (type: InquiryType) => {
    setInquiryType(type);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-void selection:bg-white/30 overflow-hidden font-sans relative">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultInquiryType={inquiryType} />
      
      {/* Global Fixed Background (Visionary / Abstract style) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617789304675-da6364fb8670?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-15 mix-blend-luminosity outline-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/70 to-void/30" />
        
        {/* Dynamic Animated Background Elements */}
        <motion.div 
          animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-energy-cyan/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-energy-emerald/10 rounded-full blur-[150px]" 
        />
      </div>

      <Header />

      {/* Hero / Vision Section */}
      <section className="relative z-10 pt-48 pb-32 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight text-white mb-10 drop-shadow-lg"
          >
            The infrastructure of the future is broken <span className="text-glow-cyan text-energy-cyan italic font-light inline-block">today.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="w-px h-24 bg-gradient-to-b from-energy-cyan to-transparent mx-auto"
          />
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-whtie font-light font-display italic mb-16 drop-shadow-md"
          >
            "We aren't just deploying chargers; we are building the lifeblood of the 21st-century mobility grid. When a charger goes down, it's not a hardware glitch. It's a broken promise to the driver."
          </motion.p>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-gray-300 font-sans tracking-wide leading-loose text-lg text-left drop-shadow"
          >
             <p className="mb-8">
               Our mission is to permanently solve the EV charging reliability crisis. We recognized that the bottleneck wasn't hardware manufacturing, but the fragmented, reactive layer of operational maintenance that sits on top of it.
             </p>
             <p>
               By introducing intelligent orchestration and empowering a massive network of independent technicians, we are shifting the ecosystem from reactive repair to continuous, proactive uptime.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Founder-Market Fit Section */}
      <section className="py-40 relative z-10 border-y border-white/5 bg-charcoal/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
             <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative group shadow-[0_0_40px_rgba(0,0,0,0.8)] bg-void border border-white/[0.05]">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 filter grayscale contrast-125 opacity-40 mix-blend-luminosity" />
               <div className="absolute inset-0 z-10 bg-gradient-to-t from-void via-void/50 to-transparent pointer-events-none" />
               <div className="absolute inset-[2px] z-10 bg-gradient-to-br from-energy-cyan/10 to-transparent pointer-events-none mix-blend-overlay" />
               <div className="absolute bottom-12 left-12 pointer-events-none z-20">
                  <h3 className="text-3xl font-display font-light text-white mb-3 tracking-wide drop-shadow-lg">The Team</h3>
                  <p className="text-energy-cyan font-mono tracking-widest text-sm uppercase drop-shadow flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-energy-cyan animate-pulse"/>
                    EV scaling &amp; AI Experts
                  </p>
               </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-4xl font-display font-bold mb-8 text-white drop-shadow-md">Built by those who felt the pain.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light drop-shadow">
              Uptimus is led by seasoned venture builders, former private equity partners, and operational leaders who have spent over 15 years scaling advanced manufacturing, EV networks, and AI companies across Europe, China, and the US.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-light mb-10 drop-shadow">
              We've experienced firsthand the catastrophic friction of disconnected field forces and opaque hardware diagnostics. We are leveraging successful operational experiences and proven tactics from other high-stakes industries and elite field-service platforms to completely disrupt this traditionally overlooked sector.
            </p>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white" onClick={() => openModal('Partner')}>Partner with us</Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center relative max-w-4xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 text-white drop-shadow-lg">Let's build the reliable grid together.</h2>
        <Button variant="primary" size="lg" className="px-12 py-5 text-lg" onClick={() => openModal('Contact Us')}>Contact Us</Button>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
