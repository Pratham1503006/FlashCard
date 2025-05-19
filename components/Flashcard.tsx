"use client";

import { MouseEvent } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FlashcardType } from "@/types/flashcard";

interface FlashcardProps {
  card: FlashcardType;
  isFlipped: boolean;
  onFlip: () => void;
}

export function Flashcard({ card, isFlipped, onFlip }: FlashcardProps) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // Prevent propagation to avoid triggering multiple flips
    e.stopPropagation();
    onFlip();
  };

  return (
    <div 
      className={cn(
        "flashcard w-full aspect-[3/2] cursor-pointer",
        isFlipped && "flipped"
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={isFlipped ? "Show question" : "Show answer"}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onFlip();
        }
      }}
    >
      <div className="flashcard-inner w-full h-full relative">
        <Card 
          className={cn(
            "flashcard-front p-8 flex items-center justify-center text-center bg-card/80 backdrop-blur-sm",
            "border-2 border-primary/40 shadow-lg neon-glow"
          )}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              {card.category && (
                <span className="text-xs font-normal text-primary block mb-2 uppercase tracking-wider">
                  {card.category}
                </span>
              )}
              {card.question}
            </h3>
            <p className="text-sm text-muted-foreground mt-4">
              Click to reveal answer
            </p>
          </div>
        </Card>
        
        <Card 
          className={cn(
            "flashcard-back p-8 flex items-center justify-center text-center bg-card/80 backdrop-blur-sm",
            "border-2 border-secondary/40 shadow-lg neon-glow"
          )}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {card.answer}
            </h3>
            {card.explanation && (
              <p className="text-sm text-muted-foreground mt-4 border-t border-border pt-4">
                {card.explanation}
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}