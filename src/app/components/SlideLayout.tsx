import { ReactNode, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from './Navigation';

interface SlideLayoutProps {
  children: ReactNode;
  currentIndex: number;
  totalSlides: number;
  slides: Array<{
    path: string;
    title: string;
    section: number | null;
  }>;
}

export default function SlideLayout({ children, currentIndex, totalSlides, slides }: SlideLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentIndex / (totalSlides - 1)) * 100);
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const goToNext = () => {
    if (currentIndex < totalSlides - 1) {
      navigate(slides[currentIndex + 1].path);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      navigate(slides[currentIndex - 1].path);
    }
  };

  const goToSlide = (index: number) => {
    navigate(slides[index].path);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-white text-foreground flex flex-col">
      <Navigation
        slides={slides}
        currentPath={location.pathname}
        onNavigate={goToSlide}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center px-8 pt-8 pb-28">
          {children}
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-white/95 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg flex items-center gap-4">
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="p-2 hover:bg-muted rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Slide trước (←)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-black w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                title={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={currentIndex === totalSlides - 1}
            className="p-2 hover:bg-muted rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Slide tiếp (→ hoặc Space)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
