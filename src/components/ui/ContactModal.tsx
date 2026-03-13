'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Button from './Button';
import GlassCard from './GlassCard';

export type InquiryType = 'Request a Pilot' | 'Contact Sales' | 'Join Network' | 'Apply' | 'Contact Us' | 'Partner' | 'General Inquiry';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInquiryType?: InquiryType;
}

export default function ContactModal({ isOpen, onClose, defaultInquiryType = 'Contact Us' }: ContactModalProps) {
  const [inquiryType, setInquiryType] = useState<InquiryType>(defaultInquiryType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Update default type when modal opens
  useEffect(() => {
    if (isOpen && defaultInquiryType) {
      setInquiryType(defaultInquiryType);
      setSuccess(false);
      setError('');
      setFormData({ name: '', email: '', company: '', message: '' });
    }
  }, [isOpen, defaultInquiryType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('inquiries')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            company: formData.company, 
            inquiry_type: inquiryType, 
            message: formData.message 
          }
        ]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      // Wait a bit, then close
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-void/80 backdrop-blur-xl"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl z-50"
          >
            <GlassCard className="p-8 md:p-10 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-gradient-to-br from-white/[0.08] to-void relative overflow-hidden">
              {/* Accent glows based on inquiry type */}
              <div 
                className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none ${
                    inquiryType.includes('Network') || inquiryType.includes('Apply') ? 'bg-energy-emerald' : 'bg-energy-cyan'
                }`}
              />
              
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <X size={24} />
              </button>

              {success ? (
                <div className="text-center py-12">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="w-20 h-20 mx-auto rounded-full bg-energy-cyan/20 border border-energy-cyan/50 flex items-center justify-center mb-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-energy-cyan animate-pulse shadow-[0_0_20px_rgba(0,229,255,0.8)]" />
                  </motion.div>
                  <h3 className="text-3xl font-display text-white mb-2">Message Received</h3>
                  <p className="text-gray-400 font-light">Our team will be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-display font-light text-white mb-8">
                    {inquiryType}
                  </h2>
                  
                  {error && (
                    <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-light">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs tracking-widest uppercase text-gray-400 font-semibold px-1">Name</label>
                        <input 
                          required
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-void/50 border border-white/10 rounded-xl px-5 py-3 text-white font-light focus:outline-none focus:border-energy-cyan/50 transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs tracking-widest uppercase text-gray-400 font-semibold px-1">Email</label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-void/50 border border-white/10 rounded-xl px-5 py-3 text-white font-light focus:outline-none focus:border-energy-cyan/50 transition-colors"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs tracking-widest uppercase text-gray-400 font-semibold px-1">Company (Optional)</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-void/50 border border-white/10 rounded-xl px-5 py-3 text-white font-light focus:outline-none focus:border-energy-cyan/50 transition-colors"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-widest uppercase text-gray-400 font-semibold px-1">Message</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-void/50 border border-white/10 rounded-xl px-5 py-3 text-white font-light focus:outline-none focus:border-energy-cyan/50 transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        variant={inquiryType.includes('Network') || inquiryType.includes('Apply') ? 'primary' : 'primary'}
                        className={`w-full py-4 text-lg justify-center shadow-[0_0_20px_-5px_rgba(0,229,255,0.4)] ${inquiryType.includes('Network') || inquiryType.includes('Apply') ? '!bg-energy-emerald !text-void shadow-[0_0_20px_-5px_rgba(0,255,136,0.4)] hover:!bg-energy-emerald/90' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
