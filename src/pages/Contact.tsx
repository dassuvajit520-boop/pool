import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="pt-40 pb-32 px-6 md:px-12 min-h-screen bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="inline-block mb-6 text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
              Inquiry — Private Estate Services
            </span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-tight">
              Begin your journey to<br />flawless clarity.
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-24">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-12"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest opacity-40">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-cyan-400 outline-none transition-colors font-light"
                      placeholder="Alexander Vance"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest opacity-40">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-cyan-400 outline-none transition-colors font-light"
                      placeholder="alex@vanceestates.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest opacity-40">Estate Location</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-cyan-400 outline-none transition-colors font-light"
                    placeholder="East Hampton, NY"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest opacity-40">Service Interest</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-4 focus:border-cyan-400 outline-none transition-colors font-light appearance-none cursor-pointer">
                    <option className="bg-black">Weekly Curation</option>
                    <option className="bg-black">System Optimization</option>
                    <option className="bg-black">Estate Management</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest opacity-40">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-cyan-400 outline-none transition-colors font-light resize-none"
                    placeholder="Tell us about your sanctuary..."
                  />
                </div>

                <button className="group inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-cyan-400 transition-colors">
                  Send Inquiry
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-16"
            >
              <div className="space-y-8">
                <h3 className="text-2xl font-serif italic">Global Concierge</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-1">Email</p>
                      <p className="text-lg font-light">concierge@azureinfinity.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-1">Phone</p>
                      <p className="text-lg font-light">+1 (888) AZURE-01</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-1">Offices</p>
                      <p className="text-lg font-light">Hamptons • Beverly Hills • Monaco</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-white/5 rounded-2xl border border-white/5 space-y-6">
                <h4 className="text-xl font-serif italic">24/7 Priority Support</h4>
                <p className="text-sm font-light opacity-60 leading-relaxed">
                  Existing clients have access to our direct emergency line. If you are an active member, please use your dedicated contact code for immediate dispatch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
