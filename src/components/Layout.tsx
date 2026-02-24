import { motion, useScroll, useTransform } from 'motion/react';
import { Droplets, Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-cyan-400 selection:text-black bg-black text-white">
      {/* Navigation */}
      <motion.nav 
        style={{ opacity: isHome ? navOpacity : 1 }}
        className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 px-6 md:px-12 flex items-center justify-between"
      >
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Droplets className="w-5 h-5 text-black" />
          </div>
          <span className="font-serif italic text-xl tracking-tight">Azure Infinity</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-widest uppercase opacity-70">
          {navLinks.map((link) => (
            link.href.startsWith('#') || link.href.startsWith('/#') ? (
              <a key={link.name} href={link.href} className="hover:opacity-100 transition-opacity">{link.name}</a>
            ) : (
              <Link key={link.name} to={link.href} className="hover:opacity-100 transition-opacity">{link.name}</Link>
            )
          ))}
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {navLinks.map((link) => (
           link.href.startsWith('#') || link.href.startsWith('/#') ? (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif italic">{link.name}</a>
          ) : (
            <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif italic">{link.name}</Link>
          )
        ))}
      </motion.div>

      <main>{children}</main>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand Column */}
            <div className="space-y-8">
              <Link to="/" className="flex items-center gap-2">
                <Droplets className="w-8 h-8 text-cyan-400" />
                <span className="font-serif italic text-2xl tracking-tight">Azure Infinity</span>
              </Link>
              <p className="text-sm font-light opacity-40 leading-relaxed max-w-xs">
                The global standard in luxury pool maintenance and estate water management. Serving the world's most exclusive private residences since 1998.
              </p>
              <div className="flex gap-6 opacity-60">
                <Instagram className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors" />
                <Facebook className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors" />
              </div>
            </div>

            {/* Important Links */}
            <div className="space-y-8">
              <h5 className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400">Important Links</h5>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm font-light opacity-60 hover:opacity-100 hover:text-cyan-400 transition-all">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="space-y-8">
              <h5 className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400">Quick Contact</h5>
              <ul className="space-y-4 text-sm font-light opacity-60">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest opacity-40">Email</span>
                  <a href="mailto:concierge@azureinfinity.com" className="hover:text-cyan-400 transition-colors">concierge@azureinfinity.com</a>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest opacity-40">Phone</span>
                  <a href="tel:+18882987301" className="hover:text-cyan-400 transition-colors">+1 (888) AZURE-01</a>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest opacity-40">Emergency</span>
                  <span className="text-cyan-400/80">Available 24/7 for Members</span>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div className="space-y-8">
              <h5 className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400">Global Presence</h5>
              <ul className="space-y-4 text-sm font-light opacity-60">
                <li>The Hamptons, NY</li>
                <li>Beverly Hills, CA</li>
                <li>Monaco, FR</li>
                <li>Palm Beach, FL</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] opacity-20">
            <div className="flex gap-8">
              <span>© 2026 Azure Infinity Pools</span>
              <a href="#" className="hover:opacity-100">Privacy Policy</a>
              <a href="#" className="hover:opacity-100">Terms of Service</a>
            </div>
            <span>Crafted by Azure Group</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
