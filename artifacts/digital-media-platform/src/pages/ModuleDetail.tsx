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
        return <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{section.content}</p>;
      
      case "list":
        return (
          <ul className="space-y-3">
            {section.content.map((item: any, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 min-w-[24px]">
                  <CheckCircle2 className="h-5 w-5 text-primary" style={{ color: module.color }} />
                </div>
                <div>
                  {typeof item === "string" ? (
                    <span className="text-muted-foreground">{item}</span>
                  ) : (
                    <>
                      <span className="font-semibold text-foreground">{item.title}: </span>
                      <span className="text-muted-foreground">{item.desc}</span>
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
                  <div className="flex items-center gap-3">
                    <div 
                      className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: module.color }}
                    >
                      {i + 1}
                    </div>
                    <span>الخطوة {i + 1}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pr-9">
                  {step}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        );

      case "comparison":
        return (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {section.content.map((item: any, i: number) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-3 pr-4 font-semibold text-foreground w-1/3 bg-muted/50 rounded-r-lg">{item.title}</td>
                    <td className="py-3 px-4 text-muted-foreground w-2/3">{item.desc}</td>
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
    <div className="min-h-screen bg-muted/10 pb-24">
      {/* Hero Header */}
      <div 
        className="text-white py-16 relative overflow-hidden"
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {section.type === 'list' ? <List className="h-5 w-5 text-primary" style={{ color: module.color }} /> :
                     section.type === 'steps' ? <List className="h-5 w-5 text-primary" style={{ color: module.color }} /> :
                     section.type === 'comparison' ? <Columns className="h-5 w-5 text-primary" style={{ color: module.color }} /> :
                     <Target className="h-5 w-5 text-primary" style={{ color: module.color }} />}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
            <h3 className="text-xl font-semibold mb-4">هل أنت مستعد لاختبار ما تعلمته؟</h3>
            <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg text-white hover:opacity-90" style={{ backgroundColor: module.color }}>
              <Link href={`/modules/${module.id}/quiz`}>
                ابدأ الاختبار
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5" style={{ color: module.color }} />
                  الأهداف التعليمية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {module.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: module.color }} />
                      <span>{obj}</span>
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