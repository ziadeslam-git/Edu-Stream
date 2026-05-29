import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";
import { motion } from "framer-motion";
import { useProgress } from "@/hooks/useProgress";
import { useUser } from "@clerk/react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShaderBackground } from "@/components/ShaderBackground";

export default function Modules() {
  const { getModuleProgress } = useProgress();
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <div className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ShaderBackground />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[4px] dark:bg-background/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            الموديولات التعليمية
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg mb-8"
          >
            مسار تعليمي متكامل لتعلم مهارات الإعلام الرقمي وتوظيف التلعيب في العملية التعليمية
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="secondary" asChild className="rounded-full font-semibold px-8">
              <Link href="/assessment">إعادة التقييم القبلي</Link>
            </Button>
          </motion.div>
        </div>
        {/* Realistic Torn Paper Edge Divider */}
        <div className="absolute bottom-[0px] left-0 w-full h-[60px] z-20 pointer-events-none translate-y-[2px]">
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="modules-torn-paper-edge" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="modules-torn-paper-edge-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>
          
          {/* Back layer for 3D depth/shadow effect of the tear */}
          <div 
            className="absolute bottom-[0px] left-[-2%] w-[104%] h-[40px] bg-black/20 dark:bg-white/10"
            style={{ filter: "url(#modules-torn-paper-edge-shadow)" }}
          />
          
          {/* Main paper color layer (matches section below) */}
          <div 
            className="absolute bottom-[0px] left-[-2%] w-[104%] h-[35px] bg-slate-50 dark:bg-slate-950"
            style={{ filter: "url(#modules-torn-paper-edge)" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-[-2rem] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <ModuleCard 
              key={module.id} 
              module={module} 
              index={index} 
              progress={getModuleProgress(module.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
