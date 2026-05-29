import { useState } from "react";
import { useLocation } from "wouter";
import { assessmentDimensions, likertLabels } from "@/data/assessment";
import { useProgress } from "@/hooks/useProgress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useUser } from "@clerk/react";
import { useToast } from "@/hooks/use-toast";

export default function Assessment() {
  const [currentDimensionIndex, setCurrentDimensionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const { saveAssessmentScore } = useProgress();
  const [, setLocation] = useLocation();
  const { user } = useUser();
  const { toast } = useToast();

  const currentDimension = assessmentDimensions[currentDimensionIndex];
  
  const handleNext = () => {
    const allAnswered = currentDimension.items.every(item => answers[item.id]);
    if (!allAnswered) {
      toast({
        title: "تنبيه",
        description: "الرجاء الإجابة على جميع الأسئلة قبل الانتقال",
        variant: "destructive",
      });
      return;
    }

    if (currentDimensionIndex < assessmentDimensions.length - 1) {
      setCurrentDimensionIndex(prev => prev + 1);
    } else {
      // Calculate total score
      const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
      
      // Calculate breakdown per dimension
      const breakdown: Record<string, number> = {};
      assessmentDimensions.forEach(dim => {
        let dimScore = 0;
        dim.items.forEach(item => {
          dimScore += answers[item.id] || 0;
        });
        breakdown[dim.id] = dimScore;
      });

      if (user) {
        localStorage.setItem(`assessment_breakdown_${user.id}`, JSON.stringify(breakdown));
        saveAssessmentScore(totalScore);
        setLocation("/assessment/result");
      }
    }
  };

  const handlePrev = () => {
    if (currentDimensionIndex > 0) {
      setCurrentDimensionIndex(prev => prev - 1);
    }
  };

  const progressPercentage = ((currentDimensionIndex + 1) / assessmentDimensions.length) * 100;

  return (
    <div className="min-h-screen bg-muted/10 py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-foreground">مقياس مهارات الإعلام الرقمي</h1>
            <span className="text-muted-foreground font-medium text-sm">
              {currentDimensionIndex + 1} من {assessmentDimensions.length}
            </span>
          </div>
          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <Card className="border-t-4 border-t-primary shadow-lg">
          <CardHeader className="bg-primary/5 pb-6">
            <CardTitle className="text-xl text-primary leading-relaxed">
              {currentDimension.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 bg-slate-50/50 dark:bg-slate-950/50">
            {currentDimension.items.map((item, idx) => (
              <div key={item.id} className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-5 hover:border-primary/20 dark:hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-lg leading-snug text-slate-800 dark:text-slate-100">
                  {idx + 1}. {item.text}
                </h3>
                <RadioGroup 
                  onValueChange={(val) => setAnswers(prev => ({ ...prev, [item.id]: Number(val) }))}
                  value={answers[item.id]?.toString()}
                  className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6"
                  dir="rtl"
                >
                  {likertLabels.map((label) => (
                    <div key={label.value} className="flex items-center gap-3">
                      <RadioGroupItem value={label.value.toString()} id={`${item.id}-${label.value}`} className="w-5 h-5" />
                      <Label htmlFor={`${item.id}-${label.value}`} className="cursor-pointer text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                        {label.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={handlePrev} 
            disabled={currentDimensionIndex === 0}
          >
            السابق
          </Button>
          <Button onClick={handleNext} className="min-w-[120px]">
            {currentDimensionIndex === assessmentDimensions.length - 1 ? "إنهاء التقييم" : "التالي"}
          </Button>
        </div>
      </div>
    </div>
  );
}
