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
            Making the future of mobility <span className="text-glow-cyan text-energy-cyan italic font-light inline-block">reliable.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow"
          >
            Electric mobility will only scale if the infrastructure behind it can be trusted. At Uptimus, we are building the reliability layer behind EV charging, so the transition to cleaner transport is not just possible, but dependable.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="w-px h-24 bg-gradient-to-b from-energy-cyan to-transparent mx-auto mt-16"
          />
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-energy-cyan">Our Mission</h2>
              <p className="text-xl text-white font-medium mb-6">To make EV charging infrastructure truly dependable.</p>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                We believe the real bottleneck in electrification is not only deploying more chargers, but keeping them working in everyday life. When a charger fails, it is more than a technical issue; it breaks trust in the system.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-center"
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-energy-emerald">Our Vision</h2>
              <p className="text-xl text-white font-medium mb-6">To build the intelligence layer behind reliable electrified mobility.</p>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                We envision a future where EV charging infrastructure is managed proactively, repaired faster, and improved continuously through better data, better coordination, and smarter support in the field. A future where reliable charging is no longer a weak point in the transition, but one of its strongest foundations.
              </p>
            </motion.div>
          </div>

          {/* Why We Started (Side-by-side with photo) */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-40">
             <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
             >
               <h2 className="text-4xl font-display font-bold mb-8 text-white">Why We Started</h2>
               <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                 <p>Uptimus began with a simple realization: the transition to electric mobility is being held back by an invisible problem. Not the cars. Not the ambition. The infrastructure reliability behind it.</p>
                 <p>That insight also became personal. After buying a first EV at the end of 2024, the gap between promise and reality became impossible to ignore. Public charging too often felt uncertain, inconsistent, and harder to trust than it should be.</p>
                 <p>At the same time, we had seen the same problem from professional angles across EV charging, mobility, clean energy, and climate-tech investment. Again and again, the pattern was clear: more hardware was being deployed, but the operational layer needed to keep it reliable remained fragmented, reactive, and underbuilt.</p>
                 <p className="font-medium text-white italic pt-4">So we started Uptimus to help close that gap.</p>
               </div>
             </motion.div>
             <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full max-w-md lg:max-w-none mx-auto"
            >
               <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative group shadow-[0_0_40px_rgba(0,0,0,0.8)] bg-void border border-white/[0.05]">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 filter grayscale contrast-125 opacity-40 mix-blend-luminosity" />
                 <div className="absolute inset-0 z-10 bg-gradient-to-t from-void via-void/50 to-transparent pointer-events-none" />
                 <div className="absolute inset-[2px] z-10 bg-gradient-to-br from-energy-cyan/10 to-transparent pointer-events-none mix-blend-overlay" />

              </div>
            </motion.div>
          </div>

          {/* What We Believe & What We Are Building */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-20">
              <h2 className="text-4xl font-display font-bold mb-8 text-white text-center">What We Believe</h2>
              <p className="text-xl text-center text-gray-300 font-light mb-16 max-w-3xl mx-auto">We believe reliable charging is not a side issue. It is essential to EV adoption, public confidence, and the shift away from fossil fuels. <br/><br/>We also believe the future of infrastructure should be:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 border-t border-white/10 glass-panel bg-gradient-to-b from-white/[0.02] to-transparent rounded-b-3xl">
                  <h3 className="text-energy-cyan font-medium mb-4 text-2xl font-display">More Intelligent</h3>
                  <p className="text-gray-400 font-light leading-relaxed">With AI-assisted diagnostics and continuous learning.</p>
                </div>
                <div className="p-8 border-t border-white/10 glass-panel bg-gradient-to-b from-white/[0.02] to-transparent rounded-b-3xl">
                  <h3 className="text-energy-emerald font-medium mb-4 text-2xl font-display">More Responsive</h3>
                  <p className="text-gray-400 font-light leading-relaxed">With faster coordination and better field operations.</p>
                </div>
                <div className="p-8 border-t border-white/10 glass-panel bg-gradient-to-b from-white/[0.02] to-transparent rounded-b-3xl">
                  <h3 className="text-white font-medium mb-4 text-2xl font-display">More Inclusive</h3>
                  <p className="text-gray-400 font-light leading-relaxed">Creating flexible pathways into skilled green work for a broader technician workforce.</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 md:p-16 bg-charcoal/40 border border-white/10 rounded-[2.5rem] text-center backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <h2 className="text-4xl font-display font-bold mb-8 text-white">What We Are Building</h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                Uptimus brings together AI-assisted maintenance, better field coordination, and technician enablement into one reliability system for EV charging infrastructure.
              </p>
              <p className="text-2xl md:text-3xl text-white font-display italic font-light drop-shadow-md">
                &ldquo;Our goal is not just to fix chargers faster. It is to help build a world where people can trust the infrastructure the future depends on.&rdquo;
              </p>
              <div className="mt-12">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white px-10 py-4 text-lg" onClick={() => openModal('Partner')}>Partner with us</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center relative max-w-4xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 text-white drop-shadow-lg">Let&apos;s build the reliable grid together.</h2>
        <Button variant="primary" size="lg" className="px-12 py-5 text-lg" onClick={() => openModal('Contact Us')}>Contact Us</Button>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
