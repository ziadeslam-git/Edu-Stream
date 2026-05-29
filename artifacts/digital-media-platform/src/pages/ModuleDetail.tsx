import { useParams, Link } from "wouter";
import { modules } from "@/data/modules";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { ChevronRight, Play, CheckCircle2, List, Columns, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function ModuleDetail() {
  const params = useParams();
  const module = modules.find(m => m.id === params.id);

  if (!module) {
    return <NotFound />;
  }

  const renderSectionContent = (section: any) => {
    switch (section.type) {
      case "text":
        return <p className="text-foreground/90 text-base md:text-lg whitespace-pre-wrap leading-loose">{section.content}</p>;
      
      case "list":
        return (
          <ul className="space-y-4">
            {section.content.map((item: any, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 min-w-[24px]">
                  <CheckCircle2 className="h-6 w-6 text-primary" style={{ color: module.color }} />
                </div>
                <div>
                  {typeof item === "string" ? (
                    <span className="text-foreground/90 text-base md:text-lg leading-relaxed">{item}</span>
                  ) : (
                    <>
                      <span className="font-bold text-foreground text-base md:text-lg">{item.title}: </span>
                      <span className="text-foreground/80 text-base md:text-lg leading-relaxed">{item.desc}</span>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        );
      
      case "steps":
        return (
          <Accordion type="single" collapsible className="w-full">
            {section.content.map((step: string, i: number) => (
              <AccordionItem key={i} value={`step-${i}`}>
                <AccordionTrigger className="text-right hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white shadow-sm"
                      style={{ backgroundColor: module.color }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-foreground font-semibold text-base md:text-lg">الخطوة {i + 1}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base md:text-lg pr-12 leading-relaxed">
                  {step}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        );

      case "comparison":
        return (
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full border-collapse">
              <tbody>
                {section.content.map((item: any, i: number) => (
                  <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="py-4 pr-6 font-bold text-foreground w-1/3 bg-muted/30 text-base md:text-lg">{item.title}</td>
                    <td className="py-4 px-6 text-foreground/90 w-2/3 text-base md:text-lg leading-relaxed">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      {/* Hero Header */}
      <div 
        className="text-white pt-16 pb-24 relative overflow-hidden"
        style={{ backgroundColor: module.color }}
      >
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb className="mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link href="/" className="text-white hover:text-white/80">الرئيسية</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link href="/modules" className="text-white hover:text-white/80">الموديولات</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-semibold">موديول {module.id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="text-6xl mb-4 opacity-90">{module.icon}</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{module.title}</h1>
          </motion.div>
        </div>

        {/* Realistic Torn Paper Edge Divider */}
        <div className="absolute bottom-[0px] left-0 w-full h-[60px] z-20 pointer-events-none translate-y-[2px]">
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="torn-paper-edge" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="torn-paper-edge-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>
          
          {/* Back layer for 3D depth/shadow effect of the tear */}
          <div 
            className="absolute top-[20px] left-[-2%] w-[104%] h-[60px] bg-black/20 dark:bg-white/10"
            style={{ filter: "url(#torn-paper-edge-shadow)" }}
          />
          
          {/* Main paper color layer */}
          <div 
            className="absolute top-[25px] left-[-2%] w-[104%] h-[60px] bg-slate-50 dark:bg-slate-950"
            style={{ filter: "url(#torn-paper-edge)" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          {module.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-sm border-border/60 hover:shadow-md transition-shadow">
                <CardHeader className="bg-muted/10 border-b border-border/40 pb-4">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    {section.type === 'list' ? <List className="h-6 w-6 text-primary" style={{ color: module.color }} /> :
                     section.type === 'steps' ? <List className="h-6 w-6 text-primary" style={{ color: module.color }} /> :
                     section.type === 'comparison' ? <Columns className="h-6 w-6 text-primary" style={{ color: module.color }} /> :
                     <Target className="h-6 w-6 text-primary" style={{ color: module.color }} />}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  {renderSectionContent(section)}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: module.sections.length * 0.1 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">هل أنت مستعد لاختبار ما تعلمته؟</h3>
            <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" style={{ backgroundColor: module.color }}>
              <Link href={`/modules/${module.id}/quiz`}>
                ابدأ الاختبار الآن
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            
            {module.generalObjective && (
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="bg-muted/10 border-b border-border/40 pb-4">
                  <CardTitle className="text-xl flex items-center gap-2 text-foreground">
                    <Target className="h-5 w-5" style={{ color: module.color }} />
                    الهدف العام
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-foreground/90 text-base md:text-lg leading-relaxed font-medium">
                    {module.generalObjective}
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="border-border/60 shadow-sm">
              <CardHeader className="bg-muted/10 border-b border-border/40 pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-foreground">
                  <Target className="h-5 w-5" style={{ color: module.color }} />
                  الأهداف الخاصة الإجرائية
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {module.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 mt-1 shrink-0" style={{ color: module.color }} />
                      <span className="text-foreground/90 text-base md:text-lg leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {module.videos && module.videos.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Play className="h-5 w-5" style={{ color: module.color }} />
                    فيديوهات تعليمية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {module.videos.map((video, i) => (
                    <Button 
                      key={i} 
                      variant="outline" 
                      className="w-full justify-start h-auto py-3 px-4 whitespace-normal text-right group"
                      asChild
                    >
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4 ml-2 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span>{video.title}</span>
                      </a>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}