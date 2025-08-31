import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    id: 1,
    title: "Descubra o Brasil",
    description: "Explore os melhores destinos e eventos culturais do nosso país",
    emoji: "🏛️"
  },
  {
    id: 2,
    title: "Planeje sua Viagem",
    description: "Crie itinerários personalizados e organize seus passeios favoritos",
    emoji: "🗺️"
  },
  {
    id: 3,
    title: "Viva Experiências Únicas",
    description: "Participe de eventos locais e descubra a riqueza cultural brasileira",
    emoji: "🎭"
  }
];

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const skipOnboarding = () => {
    onComplete();
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="h-full w-full bg-white flex flex-col">
      {/* Skip button */}
      <div className="flex justify-end p-4">
        <button 
          onClick={skipOnboarding}
          className="text-gray-500 px-4 py-2"
        >
          Pular
        </button>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center w-full max-w-sm"
          >
            {/* Icon */}
            <div className="mb-8 w-48 h-48 rounded-full bg-gradient-to-br from-[#00A859]/10 to-[#FFD500]/10 flex items-center justify-center">
              <span className="text-8xl">
                {slides[currentSlide].emoji}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl mb-4" style={{ color: '#00A859' }}>
              {slides[currentSlide].title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-center leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom section */}
      <div className="p-6 space-y-6">
        {/* Progress bar */}
        <div className="w-full">
          <Progress value={progress} className="h-1 rounded-full" />
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#00A859]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <Button
          onClick={nextSlide}
          className="w-full h-12 rounded-lg text-white"
          style={{ backgroundColor: '#00A859' }}
        >
          {currentSlide === slides.length - 1 ? 'Começar' : 'Próximo'}
        </Button>
      </div>
    </div>
  );
}