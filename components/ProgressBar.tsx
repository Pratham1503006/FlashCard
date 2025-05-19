import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

export function ProgressBar({ value, max = 100, className }: ProgressBarProps) {
  const percentage = Math.min(Math.max(0, value), max);
  
  return (
    <div className={cn("progress-bar w-full", className)}>
      <div 
        className="progress-value" 
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
}