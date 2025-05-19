"use client";

import { Button } from "@/components/ui/button";
import { BrainCircuit } from 'lucide-react';

export default function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="w-full max-w-4xl text-center">
      <div className="inline-block p-6 rounded-full bg-primary/10 mb-8 animate-float">
        <BrainCircuit size={72} className="text-primary animate-pulse-glow" />
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 neon-text">
        Neon Flashcards
      </h1>
      
      <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
        Boost your learning with interactive flashcards. Flip, learn, and track your progress.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <Button 
          onClick={onStart} 
          size="lg" 
          className="text-lg py-6 px-8 neon-button"
        >
          Start Studying
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <FeatureCard 
          title="Interactive Learning" 
          description="Flip cards, mark your knowledge, and track progress in real-time."
        />
        <FeatureCard 
          title="Spaced Repetition" 
          description="Focus on the cards you find challenging to optimize your learning."
        />
        <FeatureCard 
          title="Progress Tracking" 
          description="See your improvement with visual progress indicators and statistics."
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card/50 border border-border/50 rounded-lg p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}