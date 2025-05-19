"use client";

import React from "react";
import { FlashcardApp } from "@/components/FlashcardApp";
import LandingPage from "@/components/LandingPage";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  const [started, setStarted] = React.useState(false);

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gradient-to-b from-background to-muted relative overflow-hidden">
        {/* Background particles effect */}
        <div className="particles-container absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particles"></div>
        </div>
        
        <div className="container mx-auto px-4 py-8 relative z-10 min-h-screen flex items-center justify-center">
          {started ? (
            <FlashcardApp onReset={() => setStarted(false)} />
          ) : (
            <LandingPage onStart={() => setStarted(true)} />
          )}
        </div>
      </main>
    </ThemeProvider>
  );
}