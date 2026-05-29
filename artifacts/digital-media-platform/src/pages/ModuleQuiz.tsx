import { useState } from "react";
import { useParams, Link } from "wouter";
import { quizzes } from "@/data/quizzes";
import { modules } from "@/data/modules";
import NotFound from "@/pages/not-found";
import { useProgress } from "@/hooks/useProgress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export default function ModuleQuiz() {
  const { id } = useParams();
  const { setModuleProgress } = useProgress();
  const { toast } = useToast();
  
  const moduleQuiz = quizzes.find(q => q.moduleId === id);
  const currentModule = modules.find(m => m.id === id);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!currentModule || !moduleQuiz) {
    return <NotFound />;
  }

  const questions = moduleQuiz.questions;

  const handleSubmit = () => {
    const allAnswered = questions.every(q => answers[q.id] !== undefined);
    if (!allAnswered) {
      toast({
        title: "تنبيه",
        description: "الرجاء الإجابة على جميع الأسئلة",
        variant: "destructive",
      });
      return;
    }

    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        correctCount++;
      }
    });

    const percentScore = Math.round((correctCount / questions.length) * 100);
    setScore(percentScore);
    setModuleProgress(id!, percentScore);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextModuleId = String(Number(id) + 1);
  const hasNextModule = modules.some(m => m.id === nextModuleId);

  return (
    <div className="min-h-screen bg-muted/10 py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">اختبار الموديول</h1>
            <p className="text-muted-foreground">اختبر معلوماتك في موديول: {currentModule.title}</p>
          </div>
          <Button variant="outline" asChild size="sm">
            <Link href={`/modules/${id}`}><ArrowRight className="ml-2 h-4 w-4" /> العودة للموديول</Link>
          </Button>
        </div>

        {isSubmitted && (
          <Card className="mb-8 border-t-4 border-t-green-500 shadow-md">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">اكتمل الاختبار!</h2>
              <p className="text-xl mb-6">
                أجبت صح على {Math.round((score / 100) * questions.length)} من {questions.length} أسئلة ({score}%)
              </p>
              
              {hasNextModule ? (
                <Button size="lg" asChild className="rounded-full px-8">
                  <Link href={`/modules/${nextModuleId}`}>
                    التالي: الموديول {nextModuleId} <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <Button size="lg" asChild className="rounded-full px-8">
                  <Link href="/modules">
                    العودة للموديولات <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          {questions.map((q, qIndex) => {
            const isCorrect = answers[q.id] === q.correct;
            const isAnswered = answers[q.id] !== undefined;

            return (
              <Card key={q.id} className={isSubmitted ? (isCorrect ? 'border-green-200 bg-green-50/30' : 'border-red-200 bg-red-50/30') : ''}>
                <CardHeader>
                  <CardTitle className="text-lg leading-relaxed font-medium">
                    {qIndex + 1}. {q.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    onValueChange={(val) => !isSubmitted && setAnswers(prev => ({ ...prev, [q.id]: Number(val) }))}
                    value={answers[q.id]?.toString()}
                    className="space-y-3"
                    dir="rtl"
                  >
                    {q.options.map((opt, optIndex) => {
                      const isSelected = answers[q.id] === optIndex;
                      const isActualCorrect = q.correct === optIndex;
                      
                      let labelClass = "cursor-pointer leading-relaxed ";
                      if (isSubmitted) {
                        if (isActualCorrect) labelClass += " text-green-700 font-bold";
                        else if (isSelected && !isActualCorrect) labelClass += " text-red-600 line-through";
                      }

                      return (
                        <div key={optIndex} className="flex items-center space-x-2 space-x-reverse bg-background p-3 rounded-lg border">
                          <RadioGroupItem 
                            value={optIndex.toString()} 
                            id={`${q.id}-${optIndex}`} 
                            disabled={isSubmitted}
                          />
                          <Label htmlFor={`${q.id}-${optIndex}`} className={labelClass}>
                            {opt}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {!isSubmitted && (
          <div className="mt-8 flex justify-end">
            <Button size="lg" onClick={handleSubmit} className="px-12 rounded-full h-12 text-lg">
              إنهاء الاختبار
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
