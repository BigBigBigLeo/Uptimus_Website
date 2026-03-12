'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ContactModal, { InquiryType } from '@/components/ui/ContactModal';

export default function OperatorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('Request a Pilot');

  const openModal = (type: InquiryType) => {
    setInquiryType(type);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-void selection:bg-energy-cyan/30 overflow-hidden relative font-sans">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultInquiryType={inquiryType} />
      
      {/* Global Fixed Background (Business / Fleet style) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity outline-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80')" }} 
        />
        {/* Layered Gradient Overlays to preserve extreme text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/30" />
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-energy-cyan/15 rounded-full blur-[150px]" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 md:pt-56 md:pb-32 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-energy-cyan/20 bg-energy-cyan/10 text-energy-cyan text-xs font-semibold tracking-widest uppercase mb-10 shadow-[0_0_15px_rgba(0,229,255,0.1)] backdrop-blur-md">
              For CPOs &amp; Fleets
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight text-white mb-8 drop-shadow-md">
              Keep chargers working, <br/> <span className="text-glow-cyan text-energy-cyan inline-block mt-2">at scale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto font-light drop-shadow">
              From fragmented service contractors to continuous uptime control. Uptimus gives you the visibility and on-demand intervention to achieve {">"}99% availability.
            </p>
            <div className="flex justify-center flex-col sm:flex-row gap-6">
              <Button variant="primary" size="lg" className="text-lg px-10" onClick={() => openModal('Request a Pilot')}>Request a Pilot</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet / Elpitronic Charging Stations Photo Reveal */}
      <section className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,229,255,0.4)] border border-white/10 group cursor-pointer"
        >
           <div className="w-full aspect-[16/9] lg:aspect-[21/9] bg-void relative overflow-hidden flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80" 
                style={{ backgroundImage: "url('/images/operator_photo.png')" }} 
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-void via-transparent to-void pointer-events-none opacity-90" />
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-void via-transparent to-void pointer-events-none opacity-90" />
           </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-md">The operating layer for charging reliability.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group glass-panel p-10 hover:bg-white/[0.06] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] bg-gradient-to-br from-void/50 to-void/10 backdrop-blur-3xl border border-white/[0.05]">
              <h3 className="text-3xl font-display font-light text-energy-cyan mb-6">Immediate AI Triage</h3>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed font-light"><strong className="text-white font-medium">The Problem:</strong> Broken chargers sit idle for days waiting for help desk ticketing, manual diagnosis, and parts procurement.</p>
                <p className="text-gray-300 text-lg leading-relaxed font-light"><strong className="text-white font-medium">What we offer:</strong> Uptimus bypasses manual review. Our AI ingests telemetry immediately, diagnoses the root cause seconds after failure, and formulates a repair mandate.</p>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="text-energy-emerald text-base font-medium tracking-wide">Benefit: Near-zero downtime waiting for diagnostics.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group glass-panel p-10 hover:bg-white/[0.06] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] bg-gradient-to-br from-void/50 to-void/10 backdrop-blur-3xl border border-white/[0.05]">
              <h3 className="text-3xl font-display font-light text-energy-cyan mb-6">Absolute Orchestration</h3>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed font-light"><strong className="text-white font-medium">The Problem:</strong> CPOs lack real-time visibility into what is actually happening in the field once a ticket is created.</p>
                <p className="text-gray-300 text-lg leading-relaxed font-light"><strong className="text-white font-medium">What we offer:</strong> A singular, unified dashboard that tracks network health, technician dispatch status, and live job progress across your entire grid.</p>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="text-energy-emerald text-base font-medium tracking-wide">Benefit: Complete control and predictability of repair timelines.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group glass-panel p-10 hover:bg-white/[0.06] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] bg-gradient-to-br from-void/50 to-void/10 backdrop-blur-3xl border border-white/[0.05]">
              <h3 className="text-3xl font-display font-light text-energy-cyan mb-6">On-Demand Technicians</h3>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed font-light"><strong className="text-white font-medium">The Problem:</strong> Service Level Agreements (SLAs) are frequently broken due to severe shortages and bottlenecks in available electrical contractors.</p>
                <p className="text-gray-300 text-lg leading-relaxed font-light"><strong className="text-white font-medium">What we offer:</strong> Direct integration with the Uptimus on-demand technician network. We intelligently match the right certified technician to the fault locally, in real-time.</p>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="text-energy-emerald text-base font-medium tracking-wide">Benefit: Unparalleled scale without the fixed overhead.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="group glass-panel p-10 hover:bg-white/[0.06] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] bg-gradient-to-br from-void/50 to-void/10 backdrop-blur-3xl border border-white/[0.05]">
              <h3 className="text-3xl font-display font-light text-energy-cyan mb-6">Predictive Analytics</h3>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed font-light"><strong className="text-white font-medium">The Problem:</strong> Repair data exists in silos, preventing operators from anticipating future failures before they negatively impact drivers.</p>
                <p className="text-gray-300 text-lg leading-relaxed font-light"><strong className="text-white font-medium">What we offer:</strong> We continually capture structured, high-fidelity field data from every intervention to feed predictive health models back into your operations.</p>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="text-energy-emerald text-base font-medium tracking-wide">Benefit: Prevent downtime before it even happens.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 relative z-10 border-y border-white/5 bg-charcoal/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-24 tracking-tight text-white drop-shadow-md">Continuous Uptime Engineering.</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 relative">
            <div className="hidden md:block absolute top-10 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-energy-cyan/30 to-transparent" />
            
            {[ 
              { step: '01', title: 'Detect Issue' },
              { step: '02', title: 'AI Triage' },
              { step: '03', title: 'Intelligent Dispatch' },
              { step: '04', title: 'Field Resolution' },
              { step: '05', title: 'Uptime Restored' }
            ].map((item, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col items-center group relative z-10 bg-transparent px-4 py-2"
              >
                  <div className="w-20 h-20 rounded-full bg-white/[0.03] backdrop-blur-2xl flex items-center justify-center font-mono font-light text-xl text-energy-cyan group-hover:bg-energy-cyan/10 group-hover:scale-110 transition-all duration-500 shadow-[0_15px_30px_0_rgba(0,0,0,0.4)] border border-white/[0.05]">
                    {item.step}
                  </div>
                  <div className="mt-8 text-white font-light tracking-wide">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative text-center overflow-hidden z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 bg-energy-cyan blur-[150px] rounded-full w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tight leading-[1.1] text-white drop-shadow-lg">Stop reacting to downtime.<br/>Start managing reliability.</h2>
          <div className="flex justify-center mt-16">
            <Button variant="primary" size="lg" className="px-12 py-5 text-lg shadow-[0_0_40px_rgba(0,229,255,0.3)]" onClick={() => openModal('Contact Sales')}>Contact Sales</Button>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
