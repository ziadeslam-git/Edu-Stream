import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";
import { motion } from "framer-motion";

export default function Modules() {
  return (
    <div className="min-h-screen bg-muted/10 pb-24">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
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
            className="text-primary-foreground/80 text-lg"
          >
            مسار تعليمي متكامل لتعلم مهارات الإعلام الرقمي وتوظيف التلعيب في العملية التعليمية
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-[-2rem] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}