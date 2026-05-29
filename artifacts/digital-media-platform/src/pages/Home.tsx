import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";
import { BookOpen, GraduationCap, Users, PlayCircle } from "lucide-react";
import { ShaderBackground } from "@/components/ShaderBackground";
import { useUser } from "@clerk/react";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <ShaderBackground />
          {/* Transparent overlay for readability */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>
        {/* Realistic Torn Paper Edge Divider */}
        <div className="absolute bottom-[0px] left-0 w-full h-[60px] z-20 pointer-events-none translate-y-[2px]">
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="home-torn-paper-edge" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="home-torn-paper-edge-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>
          
          {/* Back layer for 3D depth/shadow effect of the tear */}
          <div 
            className="absolute top-[20px] left-[-2%] w-[104%] h-[60px] bg-black/20 dark:bg-white/10"
            style={{ filter: "url(#home-torn-paper-edge-shadow)" }}
          />
          
          {/* Main paper color layer (matches the next section's background) */}
          <div 
            className="absolute top-[25px] left-[-2%] w-[104%] h-[60px] bg-slate-50 dark:bg-slate-950"
            style={{ filter: "url(#home-torn-paper-edge)" }}
          />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 border-white/20 text-white bg-white/10 px-4 py-1.5 text-sm rounded-full backdrop-blur-sm">
              تطوير المعلمين في العصر الرقمي
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
              منصة مهارات <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">الإعلام الرقمي</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
              منصة تعليمية متطورة لمعلمي المرحلة الثانوية لاكتساب مهارات الإعلام الرقمي والتلعيب عبر 6 موديولات متكاملة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {user ? (
                <Button size="lg" asChild className="w-full sm:w-auto text-lg px-8 h-14 rounded-full" data-testid="hero-start-learning">
                  <Link href="/modules">متابعة التعلم</Link>
                </Button>
              ) : (
                <Button size="lg" asChild className="w-full sm:w-auto text-lg px-8 h-14 rounded-full" data-testid="hero-start-learning">
                  <Link href="/sign-in">ابدأ رحلة التعلم</Link>
                </Button>
              )}
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg px-8 h-14 rounded-full bg-background/50 backdrop-blur-sm" data-testid="hero-about">
                <Link href="/about">عن المنصة</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: BookOpen, label: "موديولات متكاملة", value: "6" },
              { icon: GraduationCap, label: "مهارة رقمية", value: "40+" },
              { icon: PlayCircle, label: "فيديو تعليمي", value: "15+" },
              { icon: Users, label: "للمعلمين", value: "100%" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">الموديولات التعليمية</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              تغطي المنصة ستة محاور رئيسية مصممة خصيصاً لتطوير مهارات المعلمين في استخدام أدوات الإعلام الرقمي والتلعيب.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.slice(0, 3).map((module, index) => (
              <ModuleCard key={module.id} module={module} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild data-testid="home-view-all-modules">
              <Link href="/modules">عرض جميع الموديولات</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
