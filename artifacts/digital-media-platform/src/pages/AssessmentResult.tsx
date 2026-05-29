import { useLocation, Redirect } from "wouter";
import { useProgress } from "@/hooks/useProgress";
import { assessmentDimensions, maxScore } from "@/data/assessment";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PartyPopper } from "lucide-react";
import { useUser } from "@clerk/react";

export default function AssessmentResult() {
  const [, setLocation] = useLocation();
  const { getAssessmentScore } = useProgress();
  const { user } = useUser();
  const score = getAssessmentScore();

  if (score === null) {
    return <Redirect to="/assessment" />;
  }

  let interpretation = "";
  if (score >= 120) {
    interpretation = "ممتاز — لديك قاعدة قوية في مهارات الإعلام الرقمي";
  } else if (score >= 90) {
    interpretation = "جيد جداً — ستستفيد كثيراً من هذا البرنامج";
  } else if (score >= 60) {
    interpretation = "جيد — البرنامج سيساعدك على تطوير مهاراتك بشكل كبير";
  } else {
    interpretation = "هذا البرنامج مصمم خصيصاً لك — ستتعلم مهارات جديدة قيّمة";
  }

  const percentage = Math.round((score / maxScore) * 100);
  
  let breakdown: Record<string, number> = {};
  if (user) {
    try {
      breakdown = JSON.parse(localStorage.getItem(`assessment_breakdown_${user.id}`) || "{}");
    } catch {}
  }

  return (
    <div className="min-h-screen bg-muted/10 py-12 flex flex-col items-center">
      <div className="container max-w-2xl mx-auto px-4 text-center">
        <PartyPopper className="w-20 h-20 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-foreground mb-4">أهلاً بك في رحلة التعلم!</h1>
        
        <Card className="mt-8 mb-10 overflow-hidden">
          <CardContent className="p-8">
            <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" className="text-muted/30" strokeWidth="10" />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-primary" 
                  strokeWidth="10" 
                  strokeDasharray={`${percentage * 2.827} 282.7`} 
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-primary">{score}</span>
                <span className="text-muted-foreground text-sm">من {maxScore}</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-2">{interpretation}</h2>
            <p className="text-muted-foreground mb-8">
              قمنا بتحليل مهاراتك الحالية لتقديم تجربة تعلم أفضل لك.
            </p>

            <div className="space-y-4 text-right">
              <h3 className="font-semibold text-lg border-b pb-2 mb-4">تفاصيل النتيجة:</h3>
              {assessmentDimensions.map(dim => {
                const dimScore = breakdown[dim.id] || 0;
                const maxDimScore = dim.items.length * 5;
                const dimPercent = (dimScore / maxDimScore) * 100;
                return (
                  <div key={dim.id} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{dim.title}</span>
                      <span className="text-muted-foreground">{dimScore} / {maxDimScore}</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full transition-all"
                        style={{ width: `${dimPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </CardContent>
        </Card>

        <Button size="lg" className="w-full sm:w-auto text-lg px-12 h-14 rounded-full" onClick={() => setLocation("/modules")}>
          ابدأ رحلة التعلم
        </Button>
      </div>
    </div>
  );
}
