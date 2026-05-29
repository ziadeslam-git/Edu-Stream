import { Progress } from "@/components/ui/progress";

interface ProgressBadgeProps {
  value: number;
  label?: string;
}

export function ProgressBadge({ value, label }: ProgressBadgeProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{label}</span>
          <span>{Math.round(value)}%</span>
        </div>
      )}
      <Progress value={value} className="h-2" />
    </div>
  );
}