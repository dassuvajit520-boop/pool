import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Sparkles, Clock, ArrowRight, Quote, Calendar, User } from 'lucide-react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function Home() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury infinity pool at dusk"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block mb-6 text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
              Est. 1998 — Private Estate Management
            </span>
            <h1 className="text-5xl md:text-8xl font-serif italic leading-[1.1] mb-8 tracking-tighter">
              Crystal clarity is not a service.<br />It is a standard.
            </h1>
            <p className="text-lg md:text-xl font-light opacity-60 max-w-2xl mx-auto mb-12 leading-relaxed">
              We provide meticulous maintenance for the world's most prestigious pools, ensuring your sanctuary remains flawless, day and night.
            </p>
            
            {/* Primary and Secondary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact"
                className="bg-white text-black px-10 py-5 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-cyan-400 transition-colors shadow-2xl flex items-center gap-3 group w-full sm:w-auto justify-center"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="border border-white/20 text-white px-10 py-5 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-white/10 transition-colors w-full sm:w-auto justify-center text-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
        </motion.div>
      </section>

      {/* 2. Offers Section */}
      <section className="py-32 px-6 md:px-12 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-4 block">Exclusive Offers</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Bespoke Solutions</h2>
            <p className="text-sm opacity-50 font-light leading-relaxed mx-auto">
              Tailored care packages designed for infinity edges, salt-water systems, and high-tech automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              {
                title: "Weekly Curation",
                desc: "Full-spectrum chemical balancing, debris removal, and surface polishing.",
                icon: <Sparkles className="w-6 h-6" />,
                price: "From $499/mo"
              },
              {
                title: "System Optimization",
                desc: "Preventative maintenance for pumps, heaters, and lighting arrays.",
                icon: <Shield className="w-6 h-6" />,
                price: "From $299/visit"
              },
              {
                title: "Emergency Response",
                desc: "24/7 priority support for unexpected equipment failures.",
                icon: <Clock className="w-6 h-6" />,
                price: "Priority Access"
              }
            ].map((service, i) => (
              <div key={i} className="p-12 bg-black hover:bg-[#111] transition-colors group">
                <div className="mb-8 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif italic mb-2">{service.title}</h3>
                <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">{service.price}</p>
                <p className="text-sm font-light opacity-50 leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 hover:gap-4 transition-all">
                  Inquire <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
              The Art of Invisible Maintenance.
            </h2>
            <p className="text-lg font-light opacity-60 leading-relaxed">
              Our technicians operate with the precision of a Swiss watch. We don't just clean; we preserve the integrity of your investment using advanced chemical balancing and robotic filtration systems.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <h4 className="font-mono text-cyan-400 text-xs uppercase tracking-widest">Purity</h4>
                <p className="text-sm opacity-50">99.9% bacteria-free water standards.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-mono text-cyan-400 text-xs uppercase tracking-widest">Discretion</h4>
                <p className="text-sm opacity-50">Silent operation, zero footprint.</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-4 text-sm font-mono uppercase tracking-widest border-b border-cyan-400/30 pb-2 hover:border-cyan-400 transition-colors">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" 
              alt="Pool technician working"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-32 px-6 md:px-12 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-serif italic">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                text: "Azure Infinity has transformed our estate management. Their attention to detail is unparalleled, and the water quality is consistently perfect.",
                author: "Julian Thorne",
                title: "Estate Owner, East Hampton"
              },
              {
                text: "The most discreet and professional service I've ever encountered. They truly understand the needs of high-profile residents.",
                author: "Elena Rossi",
                title: "Property Manager, Beverly Hills"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 bg-black border border-white/5 rounded-3xl relative"
              >
                <Quote className="w-12 h-12 text-cyan-400/10 absolute top-8 right-8" />
                <p className="text-xl font-light italic opacity-80 leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="text-lg font-serif italic">{testimonial.author}</h4>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-40">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Blog Posts Section */}
      <section className="py-32 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-4 block">Journal</span>
              <h2 className="text-4xl md:text-6xl font-serif italic">Insights & Inspiration</h2>
            </div>
            <Link to="/gallery" className="text-sm font-mono uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
              View All Posts
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "The Future of Sustainable Pool Filtration",
                date: "Oct 12, 2026",
                author: "Marcus Vane",
                img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Designing the Perfect Infinity Edge",
                date: "Sep 28, 2026",
                author: "Sarah Chen",
                img: "https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Winter Care for Coastal Estates",
                date: "Sep 15, 2026",
                author: "Julian Thorne",
                img: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((post, i) => (
              <motion.div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={post.img} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest opacity-40 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-serif italic group-hover:text-cyan-400 transition-colors leading-tight">
                  {post.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link 
          to="/contact"
          className="bg-white text-black px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-cyan-400 transition-colors shadow-2xl flex items-center gap-3 group"
        >
          Request a Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </Layout>
  );
}
