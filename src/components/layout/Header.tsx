'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-t-0 border-x-0 rounded-none bg-void/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-white hover:text-energy-cyan transition-colors">
          UPTIMUS<span className="text-energy-cyan">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/operators" className="text-sm font-medium hover:text-white transition-colors">For Operators</Link>
          <Link href="/technicians" className="text-sm font-medium hover:text-white transition-colors">For Technicians</Link>
          <Link href="/about" className="text-sm font-medium hover:text-white transition-colors">About</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link 
            href="/contact" 
            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-energy-cyan text-sm font-medium text-white hover:text-glow-cyan hover:shadow-neon-cyan transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
