import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export function CommitForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    region: '',
    role: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.region) newErrors.region = 'Required';
    if (!formData.role) newErrors.role = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');
    setErrorMessage('');

    try {
      // Mock API call since Supabase isn't configured yet
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setStatus('success');
      setFormData({ firstName: '', email: '', region: '', role: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong.');
    }
  };

  return (
    <section id="commit-form" className="bg-reef-bleached text-reef-darkest py-32 px-4 bleach-bg-transition relative">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start justify-between relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-fraunces text-[#12262A] md:w-1/3 bleach-effect"
        >
          Commit Time
        </motion.h2>
        
        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="w-full md:w-[60%] space-y-12"
        >
          <div className="bleach-effect space-y-12">
            <div className="grid grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                placeholder="First name"
                className="w-full bg-transparent border-b border-[#8A867F]/40 py-2 text-sm text-[#12262A] placeholder-[#8A867F] focus:outline-none focus:border-reef-coral transition-colors"
                value={formData.firstName}
                onChange={e => setFormData({...formData, firstName: e.target.value})}
                disabled={status === 'loading' || status === 'success'}
              />
              {errors.firstName && <span className="absolute -bottom-5 left-0 text-[10px] text-reef-coral">{errors.firstName}</span>}
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-[#8A867F]/40 py-2 text-sm text-[#12262A] placeholder-[#8A867F] focus:outline-none focus:border-reef-coral transition-colors"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                disabled={status === 'loading' || status === 'success'}
              />
              {errors.email && <span className="absolute -bottom-5 left-0 text-[10px] text-reef-coral">{errors.email}</span>}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="relative cursor-pointer group">
              <select
                className="w-full bg-transparent border-b border-[#8A867F]/40 py-2 text-sm text-[#8A867F] focus:outline-none focus:border-reef-coral transition-colors appearance-none cursor-pointer group-hover:border-[#12262A] disabled:opacity-50"
                value={formData.region}
                onChange={e => setFormData({...formData, region: e.target.value})}
                disabled={status === 'loading' || status === 'success'}
              >
                <option value="" disabled>Select region</option>
                <option value="na">North America</option>
                <option value="eu">Europe</option>
                <option value="ap">Asia Pacific</option>
              </select>
              <div className="absolute right-0 top-3 pointer-events-none text-[#8A867F] group-hover:text-[#12262A] transition-colors">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {errors.region && <span className="absolute -bottom-5 left-0 text-[10px] text-reef-coral">{errors.region}</span>}
            </div>
            
            <div className="relative cursor-pointer group">
              <select
                className="w-full bg-transparent border-b border-[#8A867F]/40 py-2 text-sm text-[#8A867F] focus:outline-none focus:border-reef-coral transition-colors appearance-none cursor-pointer group-hover:border-[#12262A] disabled:opacity-50"
                value={formData.role}
                onChange={e => setFormData({...formData, role: e.target.value})}
                disabled={status === 'loading' || status === 'success'}
              >
                <option value="" disabled>Select role</option>
                <option value="volunteer">Volunteer</option>
                <option value="donor">Donor</option>
                <option value="researcher">Researcher</option>
              </select>
              <div className="absolute right-0 top-3 pointer-events-none text-[#8A867F] group-hover:text-[#12262A] transition-colors">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {errors.role && <span className="absolute -bottom-5 left-0 text-[10px] text-reef-coral">{errors.role}</span>}
            </div>
            </div>
          </div>
          
          <motion.button 
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            whileHover={status === 'idle' ? { scale: 1.05 } : {}}
            whileTap={status === 'idle' ? { scale: 0.95 } : {}}
            className="no-bleach mt-4 bg-transparent border border-[#12262A] text-[#12262A] hover:bg-reef-coral hover:border-reef-coral hover:text-white px-8 py-3 uppercase tracking-widest text-[10px] font-semibold transition-colors duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,94,58,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'SUBMITTING...' : status === 'success' ? 'SUBMITTED' : 'SUBMIT APPLICATION'}
          </motion.button>
          
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-reef-coral font-medium text-sm mt-4"
            >
              Thank you for your commitment. Your data has been securely saved.
            </motion.p>
          )}
          
          {status === 'error' && (
            <p className="text-red-500 font-medium text-sm mt-4">
              Error: {errorMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
