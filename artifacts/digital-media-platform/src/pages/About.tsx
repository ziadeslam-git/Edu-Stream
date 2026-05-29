import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Info, User } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <div className="bg-primary text-primary-foreground py-16 relative">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            عن المنصة
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg"
          >
            تعرف على رؤية ورسالة منصة مهارات الإعلام الرقمي
          </motion.p>
        </div>
        
        {/* Realistic Torn Paper Edge Divider */}
        <div className="absolute bottom-[0px] left-0 w-full h-[60px] z-20 pointer-events-none translate-y-[2px]">
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="about-torn-paper-edge" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="about-torn-paper-edge-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>
          
          {/* Back layer for 3D depth/shadow effect of the tear */}
          <div 
            className="absolute bottom-[0px] left-[-2%] w-[104%] h-[40px] bg-black/20 dark:bg-white/10"
            style={{ filter: "url(#about-torn-paper-edge-shadow)" }}
          />
          
          {/* Main paper color layer (matches section below) */}
          <div 
            className="absolute bottom-[0px] left-[-2%] w-[104%] h-[35px] bg-slate-50 dark:bg-slate-950"
            style={{ filter: "url(#about-torn-paper-edge)" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-4xl space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-6 w-6 text-primary" />
                رسالة المنصة
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed text-lg">
              تهدف منصة "مهارات الإعلام الرقمي" إلى تزويد معلمي المرحلة الثانوية في مصر بأحدث المعارف والمهارات في مجال الإعلام الرقمي والتلعيب (Gamification). تم تصميم المحتوى بعناية ليواكب التطورات التكنولوجية الحديثة ويدعم دمج التقنية في العملية التعليمية لإنشاء بيئات تعلم تفاعلية وجاذبة.
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-6 w-6 text-primary" />
                  الجمهور المستهدف
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>معلمو المرحلة الثانوية في مختلف التخصصات</li>
                  <li>المشرفون التربويون ومديرو المدارس</li>
                  <li>المهتمون بتطوير التعليم عبر التقنية والوسائط المتعددة</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  المخرجات المتوقعة
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <ul className="list-disc list-inside space-y-2 pr-4">
                  <li>إتقان استخدام أدوات إنتاج المحتوى التفاعلي مثل Genially</li>
                  <li>القدرة على توظيف الذكاء الاصطناعي في التدريس بأمان</li>
                  <li>تصميم أنشطة تقييمية ومسابقات تعليمية محفزة للطلاب</li>
                  <li>تطبيق معايير الأمن السيبراني وحماية البيانات الشخصية</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}