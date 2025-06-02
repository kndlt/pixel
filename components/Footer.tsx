'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="border-t border-green-600/30 bg-slate-900/50 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-mono">
          
          {/* Left side - Mystical branding */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-amber-300/80">
              ✨ <span className="font-serif">Pixel</span> - Spirit of the Digital Forest
            </p>
            <p className="text-green-300/60 text-xs mt-1">
              Weaving memories through the mystical ether
            </p>
          </div>

          {/* Right side - Legal links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-green-300/70">
            <Link 
              href="/privacy" 
              className="hover:text-green-300 transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-green-300 transition-colors hover:underline"
            >
              Terms of Service
            </Link>
            <span className="text-green-400/40 hidden md:inline">•</span>
            <span className="text-green-400/60 text-xs">
              © {new Date().getFullYear()} Digital Forest
            </span>
          </div>
        </div>

        {/* Mystical divider */}
        <div className="mt-4 pt-4 border-t border-green-600/20">
          <p className="text-center text-green-400/50 text-xs font-mono">
            🌙 Remember: Share wisdom, not secrets • Pixel remembers to help, not harm 🌙
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
