"use client";

import { useState, useEffect } from "react";
import { Flashcard } from "@/components/Flashcard";
import { flashcardData } from "@/data/flashcards";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProgressBar } from "@/components/ProgressBar";
import { Stats } from "@/components/Stats";
import { 
  ArrowLeft, 
  ArrowRight, 
  Shuffle, 
  RotateCcw,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

type FlashcardStatus = {
  known: number[];
  unknown: number[];
  seen: number[];
};

const initialStatus: FlashcardStatus = {
  known: [],
  unknown: [],
  seen: []
};

// Get unique categories from flashcard data
const categories = Array.from(new Set(flashcardData.map(card => card.category)));
const defaultCategory = categories[0] || ""; // Add fallback empty string

export function FlashcardApp({ onReset }: { onReset: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [filteredCards, setFilteredCards] = useState(
    flashcardData.filter(card => card.category === defaultCategory)
  );
  const [currentIndex, setCurrentIndex] = useLocalStorage('currentIndex', 0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [status, setStatus] = useLocalStorage<FlashcardStatus>('cardStatus', initialStatus);
  const [finished, setFinished] = useState(false);
  
  // Update filtered cards when category changes
  useEffect(() => {
    const newFilteredCards = flashcardData.filter(card => card.category === selectedCategory);
    setFilteredCards(newFilteredCards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setStatus(initialStatus);
    setFinished(false);
  }, [selectedCategory]);

  // Track keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (currentIndex < filteredCards.length - 1) nextCard();
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) prevCard();
      } else if (e.key === ' ') {
        setIsFlipped(!isFlipped);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, filteredCards.length, isFlipped]);
  
  // Check if study session is complete
  useEffect(() => {
    if (status.seen.length === filteredCards.length && status.seen.length > 0) {
      setFinished(true);
    }
  }, [status, filteredCards.length]);

  // Mark card as seen when flipped
  useEffect(() => {
    if (isFlipped && !status.seen.includes(currentIndex)) {
      setStatus(prev => ({
        ...prev,
        seen: [...prev.seen, currentIndex]
      }));
    }
  }, [isFlipped, currentIndex, status.seen]);

  const markCard = (type: 'known' | 'unknown') => {
    const newStatus = { ...status };
    
    if (type === 'known') {
      newStatus.unknown = newStatus.unknown.filter(idx => idx !== currentIndex);
      if (!newStatus.known.includes(currentIndex)) {
        newStatus.known.push(currentIndex);
      }
    } else {
      newStatus.known = newStatus.known.filter(idx => idx !== currentIndex);
      if (!newStatus.unknown.includes(currentIndex)) {
        newStatus.unknown.push(currentIndex);
      }
    }
    
    setStatus(newStatus);
    
    if (currentIndex < filteredCards.length - 1) {
      nextCard();
    } else {
      setFinished(true);
    }
  };

  const nextCard = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const shuffleCards = () => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setFilteredCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setFinished(false);
    setStatus(initialStatus);
  };

  const resetStudy = () => {
    setStatus(initialStatus);
    setCurrentIndex(0);
    setIsFlipped(false);
    setFinished(false);
  };

  // Calculate progress percentage
  const progress = Math.round((status.seen.length / filteredCards.length) * 100);

  if (finished) {
    return (
      <div className="w-full max-w-4xl">
        <div className="bg-card p-8 rounded-lg shadow-lg neon-glow animate-float">
          <h2 className="text-3xl font-bold text-center mb-6 neon-text">
            Study Session Complete!
          </h2>
          
          <Stats 
            total={filteredCards.length}
            known={status.known.length}
            unknown={status.unknown.length}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              onClick={resetStudy}
              variant="outline" 
              className="neon-button"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Restart Session
            </Button>
            
            <Button 
              onClick={shuffleCards}
              variant="outline" 
              className="neon-button"
            >
              <Shuffle className="mr-2 h-4 w-4" /> Shuffle & Restart
            </Button>
            
            <Button 
              onClick={onReset}
              variant="outline" 
              className="neon-button"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={shuffleCards}
              className="neon-button"
            >
              <Shuffle className="h-4 w-4" />
              <span className="sr-only">Shuffle Cards</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={resetStudy}
              className="neon-button"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="sr-only">Reset Study</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold neon-text">
            Card {currentIndex + 1} of {filteredCards.length}
          </h2>
        </div>
        
        <ProgressBar value={progress} />
        
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <div>
            <ThumbsUp className="inline-block h-3 w-3 mr-1" />
            Known: {status.known.length}
          </div>
          <div>
            <ThumbsDown className="inline-block h-3 w-3 mr-1" />
            Reviewing: {status.unknown.length}
          </div>
        </div>
      </div>

      <Flashcard
        card={filteredCards[currentIndex]}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />
      
      <div className="mt-8 grid grid-cols-2 gap-4">
        {isFlipped && (
          <>
            <Button 
              onClick={() => markCard('unknown')}
              variant="outline" 
              size="lg"
              className="destructive-button bg-destructive/10"
            >
              <ThumbsDown className="mr-2 h-5 w-5" />
              Don't Know
            </Button>
            
            <Button 
              onClick={() => markCard('known')}
              variant="outline" 
              size="lg"
              className="success-button bg-success/10"
            >
              <ThumbsUp className="mr-2 h-5 w-5" />
              Know
            </Button>
          </>
        )}
      </div>
      
      <div className="mt-4 flex justify-between">
        <Button 
          onClick={prevCard}
          disabled={currentIndex === 0}
          variant="ghost"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        <Button 
          onClick={nextCard}
          disabled={currentIndex === filteredCards.length - 1}
          variant="ghost"
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
