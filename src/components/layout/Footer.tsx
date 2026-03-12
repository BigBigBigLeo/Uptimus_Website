import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-32 py-16 bg-void relative overflow-hidden">
      {/* Subtle glow effect in the footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-energy-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-white">
              UPTIMUS<span className="text-energy-cyan">.</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm text-sm leading-relaxed">
              Making EV charging infrastructure truly dependable. The operational nervous system guaranteeing uptime through AI and an on-demand workforce.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/operators" className="text-sm text-gray-400 hover:text-energy-cyan transition-colors">For Operators</Link></li>
              <li><Link href="/technicians" className="text-sm text-gray-400 hover:text-energy-cyan transition-colors">For Technicians</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-energy-cyan transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-energy-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 Uptimus. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
