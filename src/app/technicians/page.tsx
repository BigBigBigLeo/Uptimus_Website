'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import ContactModal, { InquiryType } from '@/components/ui/ContactModal';
import { useState } from 'react';

export default function TechniciansPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('Apply');

  const openModal = (type: InquiryType) => {
    setInquiryType(type);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-void selection:bg-energy-emerald/30 overflow-hidden relative font-sans">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultInquiryType={inquiryType} />
      
      {/* Global Fixed Background (Technician / Green tech style) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity outline-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-void via-void/90 to-void/40" />
        
        {/* Animated Background Blob */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-energy-emerald/10 rounded-full blur-[150px]" 
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full">
          <div className="flex-1 text-left space-y-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-energy-emerald/20 bg-energy-emerald/5 text-energy-emerald text-xs font-semibold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(0,255,136,0.1)] backdrop-blur-md">
                For Technicians
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight text-white drop-shadow-md">
                Power the future. <br/> <span className="text-glow-emerald text-energy-emerald">On your terms.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-xl drop-shadow"
            >
              Join the largest on-demand network of EV charger technicians. Access high-paying, flexible work with AI-assisted guidance directly in your pocket.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-4"
            >
              <Button variant="outline" size="lg" className="border-energy-emerald text-energy-emerald hover:bg-energy-emerald/10 text-lg px-10 shadow-[0_0_30px_rgba(0,255,136,0.1)] bg-void/50 backdrop-blur-sm" onClick={() => openModal('Join Network')}>
                Join the Network
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
            className="flex-1 max-w-sm lg:max-w-md relative perspective-1000"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative rounded-[2.5rem] p-4 glass-panel border border-white/[0.05] shadow-[0_30px_60px_-12px_rgba(0,255,136,0.2)] bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-3xl"
            >
               <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/[0.05] bg-void">
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-110 filter grayscale-[80%] contrast-125 brightness-75 hover:grayscale-[50%] opacity-80 mix-blend-luminosity" 
                   style={{ backgroundImage: "url('/images/technician_photo.jpg')" }} 
                 />
                 <div className="absolute inset-0 z-10 bg-gradient-to-t from-void via-void/50 to-transparent pointer-events-none" />
                 <div className="absolute inset-0 z-10 bg-gradient-to-br from-energy-emerald/20 to-transparent pointer-events-none mix-blend-overlay" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="w-2 h-2 rounded-full bg-energy-emerald animate-pulse" />
                       <span className="text-xs font-mono text-energy-emerald uppercase tracking-widest">Active Dispatch</span>
                    </div>
                    <p className="text-white font-display font-light text-xl">High-Voltage Maintenance</p>
                 </div>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Value Prop Cards */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <GlassCard delay={0.1} hoverEffect className="p-10 border-none bg-gradient-to-br from-energy-emerald/10 via-white/[0.02] to-transparent backdrop-blur-3xl shadow-[0_15px_50px_-12px_rgba(0,255,136,0.15)] text-left">
              <h3 className="text-2xl font-light text-energy-emerald mb-4 font-display">Maximize Earnings</h3>
              <div className="space-y-3">
                <p className="text-gray-300 font-light leading-relaxed"><strong className="text-white font-medium">The Problem:</strong> Traditional contractor work involves rigid schedules, endless bidding, and chasing invoices for months.</p>
                <p className="text-gray-300 font-light leading-relaxed"><strong className="text-white font-medium">What we offer:</strong> A direct pipeline to high-value EV repair jobs. You set your own hours, accept jobs through the app, and get paid automatically upon resolution.</p>
                <div className="pt-3 mt-3 border-t border-white/10">
                  <p className="text-energy-cyan text-sm tracking-wide font-medium">Benefit: Financial freedom and instant payouts.</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard delay={0.2} hoverEffect className="p-10 border-none bg-gradient-to-br from-energy-cyan/10 via-white/[0.02] to-transparent backdrop-blur-3xl shadow-[0_15px_50px_-12px_rgba(0,229,255,0.15)] text-left">
              <h3 className="text-2xl font-light text-energy-cyan mb-4 font-display">AI-Guided Work</h3>
              <div className="space-y-3">
                <p className="text-gray-300 font-light leading-relaxed"><strong className="text-white font-medium">The Problem:</strong> Every charger brand is different, requiring massive manuals and confusing, proprietary diagnostic software.</p>
                <p className="text-gray-300 font-light leading-relaxed"><strong className="text-white font-medium">What we offer:</strong> You never go in blind. The Uptimus app provides pre-diagnosed faults and generates step-by-step, AI-assisted repair manuals for the specific hardware you face.</p>
                <div className="pt-3 mt-3 border-t border-white/10">
                  <p className="text-energy-emerald text-sm tracking-wide font-medium">Benefit: Zero guesswork and guaranteed first-time fixes.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.3} hoverEffect className="p-10 border-none bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent backdrop-blur-3xl shadow-[0_15px_50px_-12px_rgba(255,255,255,0.05)] text-left">
              <h3 className="text-2xl font-light text-white mb-4 font-display">Build a Career</h3>
              <div className="space-y-3">
                <p className="text-gray-300 font-light leading-relaxed"><strong className="text-white font-medium">The Problem:</strong> The demand for skilled green infrastructure workers is exploding, but clear pathways to specialize are non-existent.</p>
                <p className="text-gray-300 font-light leading-relaxed"><strong className="text-white font-medium">What we offer:</strong> A gamified career progression. Complete jobs successfully to unlock access to higher-tier hardware, specialized certifications, and progressively bigger payouts.</p>
                <div className="pt-3 mt-3 border-t border-white/10">
                  <p className="text-gray-400 text-sm tracking-wide font-medium">Benefit: Continuous skill growth and extreme value.</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative text-center z-10">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight text-white drop-shadow-lg">The green economy needs you.</h2>
          <Button variant="primary" size="lg" className="px-12 py-5 text-lg bg-energy-emerald text-void hover:bg-energy-emerald/90 border-transparent shadow-[0_0_20px_rgba(0,255,136,0.3)]" onClick={() => openModal('Apply')}>Apply Now</Button>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
