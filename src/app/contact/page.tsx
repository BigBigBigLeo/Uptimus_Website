'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlassCard from '@/components/ui/GlassCard';
import ContactModal, { InquiryType } from '@/components/ui/ContactModal';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('Contact Us');

  const openModal = (type: InquiryType) => {
    setInquiryType(type);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-void selection:bg-energy-cyan/30 flex flex-col font-sans overflow-hidden relative">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultInquiryType={inquiryType} />
      
      {/* Global Fixed Background (Abstract networking / connections style) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity outline-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void/50" />
        
        {/* Dynamic Background */}
        <motion.div 
          animate={{ x: [0, 40, -40, 0], y: [0, -40, 40, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-energy-cyan/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-energy-emerald/10 rounded-full blur-[120px]" 
        />
      </div>

      <Header />

      <section className="flex-grow flex items-center justify-center relative pt-40 pb-20 z-10">
        <div className="max-w-4xl mx-auto px-6 relative w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.05] tracking-tight text-white mb-6 drop-shadow-md">
              Connect.
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
              Select the path that best describes your interest in the Uptimus platform.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-2xl mx-auto text-left">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <button className="w-full text-left focus:outline-none" onClick={() => openModal('Partner')}>
                <GlassCard hoverEffect className="p-8 md:p-10 group border-l-2 border-l-energy-cyan relative overflow-hidden transition-all duration-500 bg-white/[0.04] backdrop-blur-3xl shadow-[0_10px_40px_-10px_rgba(0,229,255,0.1)] border-t border-r border-b border-t-white/[0.02] border-r-transparent border-b-transparent">
                  <div className="absolute inset-0 bg-energy-cyan/0 group-hover:bg-energy-cyan/[0.04] transition-colors duration-500" />
                  <div className="flex items-center gap-8 relative z-10">
                    <div>
                      <h3 className="text-2xl font-light text-white font-display tracking-wide mb-2">Partner with us</h3>
                      <p className="text-base text-gray-300 font-light">For CPOs, fleets, and infrastructure owners.</p>
                    </div>
                  </div>
                </GlassCard>
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <button className="w-full text-left focus:outline-none" onClick={() => openModal('Join Network')}>
                <GlassCard hoverEffect className="p-8 md:p-10 group border-l-2 border-l-energy-emerald relative overflow-hidden transition-all duration-500 bg-white/[0.04] backdrop-blur-3xl shadow-[0_10px_40px_-10px_rgba(0,255,136,0.1)] border-t border-r border-b border-t-white/[0.02] border-r-transparent border-b-transparent">
                  <div className="absolute inset-0 bg-energy-emerald/0 group-hover:bg-energy-emerald/[0.04] transition-colors duration-500" />
                  <div className="flex items-center gap-8 relative z-10">
                    <div>
                      <h3 className="text-2xl font-light text-white font-display tracking-wide mb-2">Join the network</h3>
                      <p className="text-base text-gray-300 font-light">For technicians and electrical contractors.</p>
                    </div>
                  </div>
                </GlassCard>
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <button className="w-full text-left focus:outline-none" onClick={() => openModal('General Inquiry')}>
                <GlassCard hoverEffect className="p-8 md:p-10 group border-l-2 border-l-white/20 relative overflow-hidden transition-all duration-500 bg-white/[0.04] backdrop-blur-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border-t border-r border-b border-t-white/[0.02] border-r-transparent border-b-transparent">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-500" />
                  <div className="flex items-center gap-8 relative z-10">
                    <div>
                      <h3 className="text-2xl font-light text-white font-display tracking-wide mb-2">General Inquiries</h3>
                      <p className="text-base text-gray-300 font-light">For media, policy, and general questions.</p>
                    </div>
                  </div>
                </GlassCard>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
