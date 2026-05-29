import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";
import { BookOpen, GraduationCap, Users, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0" />
        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5 px-4 py-1.5 text-sm rounded-full">
              تطوير المعلمين في العصر الرقمي
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              منصة مهارات <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">الإعلام الرقمي</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              منصة تعليمية متطورة لمعلمي المرحلة الثانوية لاكتساب مهارات الإعلام الرقمي والتلعيب عبر 6 موديولات متكاملة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto text-lg px-8 h-14 rounded-full" data-testid="hero-start-learning">
                <Link href="/sign-in">ابدأ رحلة التعلم</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg px-8 h-14 rounded-full" data-testid="hero-about">
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
      <section className="py-24 bg-muted/30 border-t">
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
