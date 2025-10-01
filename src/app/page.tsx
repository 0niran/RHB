"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to October 11, 2025
    const launchDate = new Date('2025-10-11T00:00:00');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    // Update immediately
    updateCountdown();

    // Then update every second
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle vertical line */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-gray-100 opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gray-50 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Minimal Header */}
        <motion.header 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20"
        >
          <div className="w-1 h-8 bg-black"></div>
        </motion.header>

        {/* Main Content - Perfectly Centered */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-8">
          <div className="max-w-2xl mx-auto text-center w-full">
            
            {/* Church Logo - Minimal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 sm:mb-16"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto relative">
                <Image
                  src="/logos/RCCG Restoration House Brantford-Black.svg"
                  alt="RCCG Restoration House Brantford"
                  fill
                  className="object-contain opacity-80"
                  priority
                />
              </div>
            </motion.div>

            {/* Main Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 sm:space-y-8 mb-12 sm:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-black leading-[0.9]">
                A Home
                <br />
                <span className="font-normal">for You,</span>
                <br />
                <span className="font-extralight italic">Coming Soon</span>
              </h1>
              <div className="w-12 h-px bg-black mx-auto"></div>
              <p className="text-base sm:text-lg md:text-xl font-light text-gray-600 max-w-lg mx-auto leading-relaxed px-4 sm:px-0">
                A vibrant community restoring lives, building relationships, and renewing hope through God&apos;s transforming love.<br />
                <span className="text-base text-gray-500">RCCG Restoration House Brantford</span>
              </p>
            </motion.div>

            {/* Minimalist Countdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 sm:mb-16"
            >
              <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                  >
                    <div className="text-xl sm:text-2xl md:text-4xl font-light text-black mb-1 tabular-nums">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-xs md:text-sm font-light text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Email Subscription - Ultra Clean */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-sm mx-auto px-4 sm:px-0"
            >
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-0 py-3 sm:py-4 text-center text-base sm:text-lg font-light bg-transparent border-0 border-b border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="group relative w-full py-3 sm:py-4 text-base sm:text-lg font-light text-black hover:text-white transition-colors duration-500 overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={{ x: "-100%" }}
                      animate={{ x: isHovered ? "0%" : "-100%" }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="relative flex items-center justify-center space-x-2">
                      <span>Notify Me</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="py-6 sm:py-8 text-center"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-4 text-green-600">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg font-light text-gray-600">
                    Thank you.<br />
                    <span className="text-sm text-gray-400">We&apos;ll be in touch.</span>
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </main>

        {/* Minimal Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.2 }}
          className="pb-6 sm:pb-8 px-4 sm:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-xs font-light text-gray-400">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Mail className="w-3 h-3" />
                <span className="text-center sm:text-left">hello@rccgbrantford.com</span>
              </div>
              <div className="text-center sm:text-right">
                © 2025 RCCG Restoration House Brantford
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
