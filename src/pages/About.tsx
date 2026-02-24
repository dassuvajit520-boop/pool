import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { Shield, Droplets, Sparkles } from 'lucide-react';

export default function About() {
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
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-tight">
              Defining the standard of<br />aquatic excellence.
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-24 mb-32">
            <div className="space-y-8">
              <p className="text-2xl font-light opacity-80 leading-relaxed">
                Founded in 1998, Azure Infinity was born from a simple observation: the world's most beautiful pools were often maintained with mediocre standards.
              </p>
              <p className="text-lg font-light opacity-50 leading-relaxed">
                We set out to change that by combining advanced chemical engineering with a concierge-level service approach. Today, we manage some of the most complex aquatic systems on the planet, from high-altitude infinity edges to subterranean salt-water sanctuaries.
              </p>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden grayscale">
              <img 
                src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury pool detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Uncompromising Quality",
                desc: "We never settle for 'clean enough'. Our standards are set by the most demanding estate managers in the world.",
                icon: <Shield className="w-8 h-8 text-cyan-400" />
              },
              {
                title: "Scientific Precision",
                desc: "Water chemistry is a science. We use laboratory-grade testing to ensure perfect balance and safety.",
                icon: <Droplets className="w-8 h-8 text-cyan-400" />
              },
              {
                title: "Absolute Discretion",
                desc: "Our team is trained to operate silently and efficiently, respecting the privacy of your sanctuary.",
                icon: <Sparkles className="w-8 h-8 text-cyan-400" />
              }
            ].map((item, i) => (
              <div key={i} className="p-12 bg-white/5 rounded-3xl border border-white/5">
                <div className="mb-8">{item.icon}</div>
                <h3 className="text-2xl font-serif italic mb-4">{item.title}</h3>
                <p className="text-sm font-light opacity-50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
