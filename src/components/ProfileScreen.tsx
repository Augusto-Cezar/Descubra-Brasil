import { useState, useEffect } from "react";
import { Settings, Heart, Calendar, MapPin, Edit, LogOut, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import BottomNavigation from "./BottomNavigation";
import { Screen } from "../App";
import Logo from "./Logo";
import LogoutConfirmDialog from "./LogoutConfirmDialog";
import { LevelBadge } from "./LevelBadge";

interface ProfileScreenProps {
  user: { name: string; email: string } | null;
  navigateToScreen: (screen: Screen) => void;
  favorites: string[];
  itinerary: string[];
}

export default function ProfileScreen({
  user,
  navigateToScreen,
  favorites,
  itinerary,
}: ProfileScreenProps) {
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showHelp, setShowHelp] = useState(false);


  // Define cor e gradiente do nível
  const getLevelStyle = (level: number) => {
    if (level < 5)
      return { color: "#22C55E", gradient: "bg-gradient-to-r from-green-400 to-green-600" };
    if (level < 10)
      return { color: "#3B82F6", gradient: "bg-gradient-to-r from-blue-400 to-blue-600" };
    return { color: "#EAB308", gradient: "bg-gradient-to-r from-yellow-400 to-yellow-500" };
  };

  const levelStyle = getLevelStyle(level);

  // Simula ganho de XP e nível
  useEffect(() => {
    const interval = setInterval(() => {
      setXp((prev) => {
        if (prev >= 100) {
          handleLevelUp();
          return 0;
        }
        return prev + 5;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [level]);

  const handleLevelUp = () => {
    if (level < 15) {
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 1500);
      setLevel((prev) => prev + 1);
      setXp(0);
    }
  };

  // Animação de Level Up
  useEffect(() => {
    const styles = `
    /* Animação de texto de Level Up */
    @keyframes fadeInOut {
      0%, 100% { opacity: 0; transform: translateY(-10px) scale(0.9); }
      20%, 80% { opacity: 1; transform: translateY(0) scale(1); }
    }
    .animate-fadeInOut {
      animation: fadeInOut 1.2s ease-in-out;
    }

    /* Novas animações para o modal de XP */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fadeIn { animation: fadeIn 0.3s ease forwards; }
    .animate-scaleIn { animation: scaleIn 0.25s ease forwards; }
  `;

    if (!document.head.querySelector("#levelup-style")) {
      const styleTag = document.createElement("style");
      styleTag.id = "levelup-style";
      styleTag.innerHTML = styles;
      document.head.appendChild(styleTag);
    }
  }, []);


  const stats = [
    { label: "Eventos Visitados", value: "12", icon: MapPin, color: "#00A859" },
    { label: "Favoritos", value: favorites.length.toString(), icon: Heart, color: "#00A859" },
    { label: "No Itinerário", value: itinerary.length.toString(), icon: Calendar, color: "#FFD500" },
  ];

  const menuItems = [
    { label: "Configurações", icon: Settings, action: () => navigateToScreen("settings") },
    { label: "Notificações", icon: Bell, action: () => { } },
    { label: "Editar Perfil", icon: Edit, action: () => { } },
    {
      label: "Sair",
      icon: LogOut,
      action: () => navigateToScreen("login"),
      danger: true,
    },
  ];

  return (
    <div className="h-full w-full bg-[#F5F5F5] flex flex-col relative">

      {/* Botão secreto para testes */}
      <button
        onClick={handleLevelUp}
        className="absolute top-2 right-3 text-xs text-gray-400 hover:text-gray-800 transition-colors"
      >
        ↑ LVL UP
      </button>

      {/* Header */}
      <div className="bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <Logo size="small" showText={false} />
          <h1 className="text-lg font-bold text-[#00A859]">Perfil</h1>
          <div className="w-8" />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        <Card className="p-6 mb-6 bg-white rounded-xl shadow-sm relative overflow-hidden">
          <div className="relative">

            {/* Texto de Level Up */}
            {showLevelUp && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                <p
                  className="text-lg font-extrabold text-center animate-fadeInOut"
                  style={{
                    color: levelStyle.color,
                    textShadow: `0 0 8px ${levelStyle.color}aa`,
                  }}
                >
                  ✨ LEVEL UP! ✨
                </p>
              </div>
            )}

            {/* Avatar com Badge */}
            <div className="relative mb-8 flex justify-center">
              {/* Avatar */}
              <div
                className={`w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-4 shadow-md transition-all duration-500 ${level >= 10 ? "border-yellow-400" : "border-[#00A859]"
                  }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1624224416603-c908080780b1?crop=entropy&fit=max&fm=jpg&q=80&w=1080"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge no canto inferior direito (menor e ajustada) */}
              <div className="absolute bottom-0 right-[calc(50%-3rem)] translate-x-[36px] translate-y-[6px]">
                <div className="w-9 h-10 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]">
                  <LevelBadge level={level} />
                </div>
              </div>
            </div>


            {/* Barra de XP com botão de ajuda */}
            <div className="flex flex-col items-center w-3/4 mx-auto mb-6 relative">
              <div className="flex items-center justify-center w-full gap-2">
                {/* Barra */}
                <div className="w-full h-5 rounded-full overflow-hidden border border-gray-300 bg-gray-200">
                  <div
                    className="h-full transition-all duration-700 ease-out rounded-full"
                    style={{
                      width: level >= 15 ? "100%" : `${xp}%`,
                      background:
                        level < 5
                          ? "linear-gradient(to right, #22C55E, #16A34A)" // verde
                          : level < 10
                            ? "linear-gradient(to right, #3B82F6, #2563EB)" // azul
                            : "linear-gradient(to right, #EAB308, #CA8A04)", // amarelo
                    }}
                  />
                </div>

                {/* Ícone de ajuda */}
                <button
                  onClick={() => setShowHelp(true)}
                  className="ml-2 flex items-center justify-center w-5 h-5 rounded-full bg-gray-300 text-white font-bold text-xs hover:bg-gray-400 transition"
                  title="Como funciona o XP?"
                >
                  ?
                </button>
              </div>

              {level >= 15 ? (
                <span className="text-sm mt-1 font-semibold text-yellow-600 flex items-center gap-1">
                  🏆 Nível Máximo
                </span>
              ) : (
                <span className="text-sm text-gray-600 mt-1 font-medium">{xp}% XP</span>
              )}

              {/* Modal de ajuda do sistema de XP */}
              {showHelp && (
                <div
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
                  onClick={() => setShowHelp(false)}
                >
                  <div
                    className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6 text-left relative animate-scaleIn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-lg font-semibold mb-4 text-[#00A859] flex items-center justify-center gap-2">
                      🧩 Sistema de Experiência (XP)
                    </h3>

                    <ul className="space-y-2 text-gray-700 text-sm leading-snug mb-5">
                      <li>⭐ Cada evento <b>favoritado</b> dá <b>+10 XP</b> (máx. 5/mês)</li>
                      <li>💬 Cada evento <b>comentado</b> dá <b>+15 XP</b> (máx. 5/mês)</li>
                      <li>📍 Cada <b>check-in</b> em evento dá <b>+50 XP</b> (máx. 2 por semana)</li>
                      <li>🗺️ Cada <b>itinerário completo</b> (mín. 4 eventos) dá <b>+100 XP</b> (sem limite)</li>
                    </ul>

                    {/* Botão centralizado */}
                    <div className="flex justify-center pt-2">
                      <button
                        onClick={() => setShowHelp(false)}
                        className="px-8 py-2.5 bg-[#00A859] text-white text-sm font-medium rounded-lg shadow hover:bg-green-600 transition-all duration-200"
                      >
                        Entendido
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>


            {/* Nome e e-mail */}
            <h2 className="text-xl mb-1 text-[#00A859]">{user?.name || "Usuário"}</h2>
            <p className="text-gray-600 text-sm mb-4">{user?.email || "usuario@exemplo.com"}</p>

            {/* Botão Editar */}
            <Button
              variant="outline"
              className="px-6 py-2 rounded-lg border-2 border-[#00A859] text-[#00A859] 
              hover:bg-[#00A859] hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Edit size={16} className="mr-2" />
              Editar Perfil
            </Button>
          </div>
        </Card>

        {/* Estatísticas */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 bg-white rounded-xl shadow-sm text-center">
              <div className="flex justify-center mb-2">
                <stat.icon size={24} color={stat.color} />
              </div>
              <p className="text-2xl mb-1" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-xs text-gray-600 leading-tight">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Atividade Recente */}
        <Card className="p-4 mb-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg mb-3 text-[#00A859] font-semibold">Atividade Recente</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#00A859] rounded-full"></div>
              <span className="text-sm text-gray-600">
                Adicionou "Carnaval de Salvador" aos favoritos
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#FFD500] rounded-full"></div>
              <span className="text-sm text-gray-600">Criou um novo itinerário</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#00A859] rounded-full"></div>
              <span className="text-sm text-gray-600">Visitou "Festival de Inverno"</span>
            </div>
          </div>
        </Card>

        {/* Menu */}
        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          {menuItems.map((item, index) =>
            item.label === "Sair" ? (
              <LogoutConfirmDialog key={index} onConfirm={() => navigateToScreen("login")} />
            ) : (
              <button
                key={index}
                onClick={item.action}
                className={`w-full p-4 flex items-center space-x-3 text-left hover:bg-gray-50 transition-colors ${index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
                  }`}
              >
                <item.icon size={20} color={item.danger ? "#d4183d" : "#666"} />
                <span className={item.danger ? "text-red-600" : "text-gray-700"}>
                  {item.label}
                </span>
              </button>
            )
          )}
        </Card>
      </div>

      {/* Navegação Inferior */}
      <BottomNavigation currentScreen="profile" navigateToScreen={navigateToScreen} />
    </div>
  );
}
