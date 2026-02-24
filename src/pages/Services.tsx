import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { Sparkles, Shield, Clock, Droplets, Settings, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Weekly Curation",
      desc: "The gold standard in pool care. Includes full-spectrum chemical balancing, debris removal, surface polishing, and equipment health checks.",
      icon: <Sparkles className="w-6 h-6" />,
      features: ["Bi-weekly visits", "Premium chemicals", "Robotic scrubbing", "Filter cleaning"]
    },
    {
      title: "System Optimization",
      desc: "Technical maintenance for high-end pool systems. We ensure your pumps, heaters, and automation systems are running at peak efficiency.",
      icon: <Settings className="w-6 h-6" />,
      features: ["Pump calibration", "Heater efficiency", "Automation setup", "Leak detection"]
    },
    {
      title: "Water Engineering",
      desc: "Advanced chemical management for sensitive skin and high-usage environments. We specialize in salt-water and ozone conversion.",
      icon: <Droplets className="w-6 h-6" />,
      features: ["Ozone systems", "Salt-water conversion", "Mineral balancing", "UV sterilization"]
    },
    {
      title: "Emergency Response",
      desc: "24/7 priority support for unexpected equipment failures. Our rapid-response team is always on standby for our members.",
      icon: <Zap className="w-6 h-6" />,
      features: ["2-hour response", "Parts inventory", "Expert technicians", "Priority dispatch"]
    }
  ];

  return (
    <Layout>
      <section className="pt-40 pb-32 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-6 block">Our Expertise</span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-tight">
              Bespoke care for<br />extraordinary pools.
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {services.map((service, i) => (
              <div key={i} className="p-16 bg-black hover:bg-[#080808] transition-colors group">
                <div className="mb-8 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-serif italic mb-6">{service.title}</h3>
                <p className="text-lg font-light opacity-50 leading-relaxed mb-10">
                  {service.desc}
                </p>
                <ul className="grid grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-xs font-mono uppercase tracking-widest opacity-30 flex items-center gap-2">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-400/20 pb-2 hover:border-cyan-400 transition-all">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
