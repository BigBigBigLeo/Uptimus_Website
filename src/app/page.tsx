'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-void selection:bg-energy-cyan/30 overflow-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Full-bleed Dynamic Background Architecture */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity outline-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80')" }}
        />
        {/* Layered Gradient Overlays to preserve extreme text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/30 z-0" />

        {/* Dynamic Animated Background Elements */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-energy-cyan/15 rounded-full blur-[120px] pointer-events-none z-0" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-energy-emerald/15 rounded-full blur-[100px] pointer-events-none z-0" 
        />
      </div>
      
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center">
          
          <div className="text-left space-y-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-display font-bold leading-[1.05] tracking-tight text-white drop-shadow-md">
                Reliable EV charging demands <span className="text-glow-emerald text-energy-emerald inline-block">continuous uptime.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed drop-shadow"
            >
              Uptimus helps charger operators reduce downtime through AI-assisted diagnostics and an on-demand technician network, while opening new pathways into flexible technical work.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <Link href="/operators" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center border-white/20 hover:border-energy-cyan hover:text-energy-cyan bg-void/50 backdrop-blur-md">
                  For Operators
                </Button>
              </Link>
              <Link href="/technicians" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center border-white/20 hover:border-energy-emerald hover:text-energy-emerald bg-void/50 backdrop-blur-md">
                  For Technicians
                </Button>
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-charcoal/20 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              The invisible barrier to the clean mobility transition.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              We are building the electric future at unprecedented speed, yet we are forgetting one fundamental truth: the energy transition is only as strong as the infrastructure people can trust. Right now, EV charging reliability is a systemic failure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard delay={0.1} hoverEffect className="py-12">
              <h3 className="text-2xl font-display font-light text-white mb-4">The Trust Deficit</h3>
              <p className="text-gray-300 text-base leading-relaxed font-light">High reported uptime masks the reality of failed charging sessions and stranded drivers. It is a fracture in public confidence.</p>
            </GlassCard>
            <GlassCard delay={0.2} hoverEffect className="py-12 bg-white/[0.02] border-none">
              <h3 className="text-2xl font-display font-light text-white mb-4">The Reactive Trap</h3>
              <p className="text-gray-300 text-base leading-relaxed font-light">Current repair workflows are agonizingly slow, fragmented, and fundamentally unscalable for the demands of the future.</p>
            </GlassCard>
            <GlassCard delay={0.3} hoverEffect className="py-12 bg-white/[0.02] border-none">
              <h3 className="text-2xl font-display font-light text-white mb-4">The Workforce Bottleneck</h3>
              <p className="text-gray-300 text-base leading-relaxed font-light">The hardware exists, but the skilled workforce required to maintain this critical infrastructure is scarce and disconnected.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-40 relative overflow-hidden">
        {/* Abstract subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              A smarter way to keep <br className="hidden md:block" />
              <span className="text-glow-cyan text-energy-cyan">chargers working.</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
              Uptimus combines AI-assisted diagnostics, intelligent dispatch, and workforce enablement into one frictionless platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="h-full glass-panel p-10 hover:bg-white/[0.06] transition-all duration-500 group shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] bg-gradient-to-br from-void/50 to-void/10 backdrop-blur-3xl">
              <span className="text-energy-cyan font-mono text-sm tracking-widest mb-8 block uppercase opacity-60 group-hover:opacity-100 transition-opacity">01 // Diagnostics</span>
              <h4 className="text-3xl font-display font-light text-white mb-6">AI-Assisted Triage</h4>
              <p className="text-gray-300 leading-relaxed font-light">Guide troubleshooting, standardize field work, and capture useful repair data before the technician even arrives on site.</p>
            </div>
            <div className="h-full glass-panel p-10 hover:bg-white/[0.06] transition-all duration-500 group shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] bg-gradient-to-br from-void/50 to-void/10 backdrop-blur-3xl md:mt-12">
              <span className="text-energy-emerald font-mono text-sm tracking-widest mb-8 block uppercase opacity-60 group-hover:opacity-100 transition-opacity">02 // Dispatch</span>
              <h4 className="text-3xl font-display font-light text-white mb-6">Intelligent Routing</h4>
              <p className="text-gray-300 leading-relaxed font-light">Match the right technician to the right task faster, radically reducing Mean Time To Repair (MTTR) across your network.</p>
            </div>
            <div className="h-full glass-panel p-10 hover:bg-white/[0.06] transition-all duration-500 group shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] bg-gradient-to-br from-void/50 to-void/10 backdrop-blur-3xl md:mt-24">
              <span className="text-white font-mono text-sm tracking-widest mb-8 block uppercase opacity-60 group-hover:opacity-100 transition-opacity">03 // Enablement</span>
              <h4 className="text-3xl font-display font-light text-white mb-6">Workforce Growth</h4>
              <p className="text-gray-300 leading-relaxed font-light">Train and support a broader technician network with flexible, well-paid work opportunities to eliminate operational bottlenecks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Split */}
      <section className="py-32 bg-void relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Built for both sides of the uptime equation.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard hoverEffect delay={0.1} className="border-none bg-gradient-to-br from-energy-cyan/10 via-white/[0.02] to-transparent shadow-[0_15px_50px_-12px_rgba(0,229,255,0.15)]">
              <h3 className="text-4xl font-display font-light text-white mb-6">For Operators</h3>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed font-light">Reduce downtime, improve visibility, and coordinate maintenance with absolute precision and scale.</p>
              <Link href="/operators" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-energy-cyan/30 text-energy-cyan hover:bg-energy-cyan/10 hover:border-energy-cyan">
                  Explore Operator Hub
                </Button>
              </Link>
            </GlassCard>

            <GlassCard hoverEffect delay={0.2} className="border-none bg-gradient-to-br from-energy-emerald/10 via-white/[0.02] to-transparent shadow-[0_15px_50px_-12px_rgba(0,255,136,0.15)]">
              <h3 className="text-4xl font-display font-light text-white mb-6">For Technicians</h3>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed font-light">Access flexible, highly-paid work. Get AI-supported field guidance, and grow your career in the green economy.</p>
              <Link href="/technicians" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-energy-emerald/30 text-energy-emerald hover:bg-energy-emerald/10 hover:border-energy-emerald">
                  Explore Tech Pathway
                </Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
