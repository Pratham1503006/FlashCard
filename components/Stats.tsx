import { cn } from "@/lib/utils";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface StatsProps {
  total: number;
  known: number;
  unknown: number;
  className?: string;
}

export function Stats({ total, known, unknown, className }: StatsProps) {
  const remaining = total - (known + unknown);
  
  // Format data for the chart
  const data = [
    { name: "Mastered", value: known, color: "hsl(var(--success))" },
    { name: "Reviewing", value: unknown, color: "hsl(var(--destructive))" },
    { name: "Remaining", value: remaining, color: "hsl(var(--muted))" },
  ].filter(item => item.value > 0);
  
  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          label="Total Cards" 
          value={total} 
          description="Total flashcards in this deck"
        />
        <StatCard 
          label="Mastered" 
          value={known} 
          description="Cards you've marked as known"
          valueClassName="text-success"
        />
        <StatCard 
          label="Reviewing" 
          value={unknown} 
          description="Cards you're still learning"
          valueClassName="text-destructive"
        />
      </div>
      
      <div className="h-72 mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={60}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: number;
  description: string;
  valueClassName?: string;
}

function StatCard({ label, value, description, valueClassName }: StatCardProps) {
  return (
    <div className="bg-card p-4 rounded-lg border border-border">
      <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
      <p className={cn("text-3xl font-bold mt-1", valueClassName)}>{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
  );
}