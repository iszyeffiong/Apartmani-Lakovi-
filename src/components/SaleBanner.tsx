import React, { useState, useEffect } from "react";
import { X, Flame, Zap, ArrowRight, Mail, Instagram, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/context/BookingContext";

const SaleBanner = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [percentage, setPercentage] = useState(80);
  
  const { openBooking } = useBooking();

  // 🌍 Global Sync Configuration
  // REFERENCE_DATE: Fixed point in time (UTC) to anchor the calculation
  const REFERENCE_DATE = new Date("2026-04-06T14:43:00Z").getTime();
  const CYCLE_DURATION = 4 * 60 * 60 * 1000; // 4 hours cycle
  const START_PERCENTAGE = 80;
  const REDUCTION_PER_CYCLE = 3;

  useEffect(() => {
    // Reveal banner almost immediately but with a nice entrance
    const revealTimer = setTimeout(() => setIsVisible(true), 100);

    const updateStats = () => {
      const now = Date.now();
      const timePassed = now - REFERENCE_DATE;
      const adjustedTimePassed = Math.max(0, timePassed);
      
      const completedCycles = Math.floor(adjustedTimePassed / CYCLE_DURATION);
      const currentPct = Math.max(5, START_PERCENTAGE - (completedCycles * REDUCTION_PER_CYCLE));
      setPercentage(currentPct);

      const timeIntoCycle = adjustedTimePassed % CYCLE_DURATION;
      const msLeft = CYCLE_DURATION - timeIntoCycle;
      
      const hours = Math.floor(msLeft / (60 * 60 * 1000)).toString().padStart(2, '0');
      const minutes = Math.floor((msLeft % (60 * 60 * 1000)) / (60 * 1000)).toString().padStart(2, '0');
      const seconds = Math.floor((msLeft % (60 * 1000)) / 1000).toString().padStart(2, '0');
      
      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    };

    updateStats();
    const interval = setInterval(updateStats, 1000);

    return () => { 
      clearTimeout(revealTimer); 
      clearInterval(interval); 
    };
  }, []);

  const toggleBanner = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] pointer-events-none p-4 md:p-6 flex justify-center overflow-visible">
      <motion.div
        animate={isCollapsed ? { y: "85%" } : { y: "0%" }}
        initial={{ y: "150%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="w-full max-w-5xl pointer-events-auto relative"
      >
        {/* Folding Tab (Floating above when semi-collapsed) */}
        {isCollapsed && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleBanner}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-t-2xl shadow-xl flex items-center gap-2 font-bold text-sm cursor-pointer hover:bg-primary/90 transition-colors z-20 pointer-events-auto"
          >
            <Flame className="w-4 h-4 text-orange-200 animate-pulse" />
            <span>SAVE {percentage}% NOW!</span>
            <div className="h-3 w-px bg-white/30 mx-1" />
            <span className="font-mono text-xs">{timeLeft}</span>
          </motion.button>
        )}

        {/* Main Banner Body */}
        <div 
          className={`relative overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-3xl shadow-[0_32px_80px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 ${
            isCollapsed ? "opacity-0 invisible scale-95" : "opacity-100 visible scale-100"
          }`}
        >
          {/* Progress Intensity Bar (Background) */}
          <div className="absolute bottom-0 left-0 h-1.5 bg-primary/20 w-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-orange-500 to-primary"
              animate={{ width: `${(percentage/80) * 100}%` }}
              transition={{ duration: 1 }}
            />
          </div>

          <div className="p-4 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 relative z-10 w-full lg:w-auto">
              {/* Badge Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-orange-500 to-red-600 flex items-center justify-center shadow-xl transform -rotate-6">
                  <Flame className="text-white w-9 h-9" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 rounded-full px-2 py-0.5 border border-primary/20 shadow-lg">
                  <span className="text-[10px] font-black text-primary">{percentage}%</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    <Clock className="w-3 h-3" /> {timeLeft} LEFT
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-red-500 animate-pulse">HURRY! LIMITED TIME</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  Exclusive Deal: <span className="text-primary italic">{percentage}% OFF</span> Your Stay!
                </h3>
                <div className="hidden sm:flex items-center gap-4 mt-1">
                  <a href="mailto:buildwithwackky@gmail.com" className="text-[11px] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> buildwithwackky@gmail.com
                  </a>
                  <a 
                    href="https://www.instagram.com/youkehhenry?igsh=MTdvcTF1ZXdwdzNvdA%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <Instagram className="w-3.5 h-3.5" /> @youkehhenry
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto z-20">
              <Button 
                onClick={() => {
                  openBooking();
                  // Optional: collapse after click?
                }} 
                size="lg" 
                className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-white font-black text-base px-10 rounded-2xl h-14"
              >
                CLAIM {percentage}% DISCOUNT <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <button 
                onClick={toggleBanner} 
                className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-2xl transition-all group/close"
              >
                <X className="w-6 h-6 text-muted-foreground group-hover/close:text-primary transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SaleBanner;
