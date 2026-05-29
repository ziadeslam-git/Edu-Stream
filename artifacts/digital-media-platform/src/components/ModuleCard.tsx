import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Module } from "@/data/modules";
import { ProgressBadge } from "@/components/ProgressBadge";

interface ModuleCardProps {
  module: Module;
  index: number;
}

export function ModuleCard({ module, index }: ModuleCardProps) {
  // Mock progress based on index for demonstration
  const mockProgress = Math.min(100, Math.max(0, 100 - index * 20));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group">
        <div 
          className="h-2 w-full transition-all duration-300 group-hover:h-3"
          style={{ backgroundColor: module.color }}
        />
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${module.color}15`, color: module.color }}
            >
              {module.icon}
            </div>
            <Badge variant="outline" className="bg-background border-primary/20 text-primary">
              موديول {index + 1}
            </Badge>
          </div>
          <CardTitle className="line-clamp-2 text-xl leading-tight">
            {module.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span>{module.objectives.length} أهداف تعليمية</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{module.sections.length} أقسام رئيسية</span>
            </div>
          </div>
          <ProgressBadge value={mockProgress} label="نسبة الإنجاز" />
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full group/btn text-white hover:opacity-90" style={{ backgroundColor: module.color }}>
            <Link href={`/modules/${module.id}`} className="flex items-center justify-center gap-2">
              ابدأ التعلم
              <ArrowLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}