import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import OnboardingScreen from "./components/OnboardingScreen";
import HomeScreen from "./components/HomeScreen";
import FavoritesScreen from "./components/FavoritesScreen";
import EventDetailsScreen from "./components/EventDetailsScreen";
import ItineraryScreen from "./components/ItineraryScreen";
import ProfileScreen from "./components/ProfileScreen";
import FilterScreen from "./components/FilterScreen";
import AuthCodeScreen from "./components/AuthCodeScreen";
import SettingsScreen from "./components/SettingsScreen";

export type Screen =
  | "splash"
  | "login"
  | "onboarding"
  | "home"
  | "favorites"
  | "event-details"
  | "itinerary"
  | "profile"
  | "filter"
  | "auth-code"
  | "settings";

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: string;
  isFavorite: boolean;
  isInItinerary: boolean;
}

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("splash");
  const [selectedEvent, setSelectedEvent] =
    useState<Event | null>(null);
  const [user, setUser] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [itinerary, setItinerary] = useState<string[]>([]);

  // Auto navigate from splash to login
  useEffect(() => {
    if (currentScreen === "splash") {
      const timer = setTimeout(() => {
        setCurrentScreen("login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const navigateToScreen = (screen: Screen, event?: Event) => {
    if (event) {
      setSelectedEvent(event);
    }
    setCurrentScreen(screen);
  };

  const toggleFavorite = (eventId: string) => {
    setFavorites((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId],
    );
  };

  const toggleItinerary = (eventId: string) => {
    setItinerary((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId],
    );
  };

  const login = (email: string, password: string) => {
    // Mock login
    setUser({ name: "João Silva", email });
    setCurrentScreen("onboarding");
  };

  const completeOnboarding = () => {
    setCurrentScreen("home");
  };

  const screenComponents = {
    splash: <SplashScreen />,
    login: (
      <LoginScreen
        onLogin={login}
        navigateToScreen={navigateToScreen}
      />
    ),
    onboarding: (
      <OnboardingScreen onComplete={completeOnboarding} />
    ),
    home: (
      <HomeScreen
        navigateToScreen={navigateToScreen}
        favorites={favorites}
        itinerary={itinerary}
        toggleFavorite={toggleFavorite}
        toggleItinerary={toggleItinerary}
      />
    ),
    favorites: (
      <FavoritesScreen
        navigateToScreen={navigateToScreen}
        favorites={favorites}
        itinerary={itinerary}
        toggleFavorite={toggleFavorite}
        toggleItinerary={toggleItinerary}
      />
    ),
    "event-details": (
      <EventDetailsScreen
        event={selectedEvent}
        navigateToScreen={navigateToScreen}
        favorites={favorites}
        itinerary={itinerary}
        toggleFavorite={toggleFavorite}
        toggleItinerary={toggleItinerary}
      />
    ),
    itinerary: (
      <ItineraryScreen
        navigateToScreen={navigateToScreen}
        itinerary={itinerary}
        toggleItinerary={toggleItinerary}
      />
    ),
    profile: (
      <ProfileScreen
        user={user}
        navigateToScreen={navigateToScreen}
        favorites={favorites}
        itinerary={itinerary}
      />
    ),
    filter: (
      <FilterScreen navigateToScreen={navigateToScreen} />
    ),
    "auth-code": (
  <AuthCodeScreen navigateToScreen={navigateToScreen} />
),
    settings: (
      <SettingsScreen
        user={user}
        navigateToScreen={navigateToScreen}
      />
    ),

  };

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-white overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          {screenComponents[currentScreen]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}