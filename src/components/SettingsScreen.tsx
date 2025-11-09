import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Screen } from "../App";
import { ArrowLeft, User, Mail, Lock, Image, FileText } from "lucide-react";

interface SettingsScreenProps {
  user: { name: string; email: string } | null;
  navigateToScreen: (screen: Screen) => void;
}

export default function SettingsScreen({ user, navigateToScreen }: SettingsScreenProps) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const validatePassword = (pwd: string) => {
    const hasUpper = /[A-Z]/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    return hasUpper && hasSpecial;
  };

  const handleSave = () => {
    if (password && !validatePassword(password)) {
      setMessage("A senha deve conter pelo menos 1 letra maiúscula e 1 caractere especial.");
      return;
    }

    setMessage("As alterações foram salvas com sucesso!");

    if (email !== user?.email) {
      alert(
        `Uma confirmação foi enviada para ${user?.email} solicitando permissão para alterar o e-mail para ${email}.`
      );
    }

    setTimeout(() => {
      navigateToScreen("profile");
    }, 1200);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-full w-full bg-[#F5F5F5] flex flex-col items-center px-6 pt-10 relative overflow-y-auto">
      {/* Botão voltar */}
    <div className="w-full max-w-md flex items-center mb-4">
    <button
        onClick={() => navigateToScreen("profile")}
        className="flex items-center gap-2 bg-white border border-gray-200 
                shadow-sm px-4 py-2 rounded-full text-gray-700 
                hover:bg-[#00A859] hover:text-white transition-all duration-300"
    >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Voltar</span>
    </button>
    </div>


      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
        >
        <h1 className="text-2xl font-semibold text-[#00A859] mb-6 text-center">
            Configurações do Perfil
        </h1>

        {/* Foto de perfil */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#00A859] bg-gray-200">
            {photo ? (
              <img src={photo} alt="Foto de perfil" className="object-cover w-full h-full" />
            ) : (
              <User className="w-full h-full p-6 text-gray-400" />
            )}
          </div>
          <label
            htmlFor="photo-upload"
            className="mt-3 text-sm text-[#00A859] cursor-pointer hover:underline flex items-center gap-1"
          >
            <Image size={16} /> Alterar foto
          </label>
          <input id="photo-upload" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
        </div>

        {/* Campo nome */}
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-medium flex items-center gap-1 mb-1">
            <User size={16} /> Nome
          </label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-11 rounded-lg border border-gray-300 px-3"
            placeholder="Seu nome"
          />
        </div>

        {/* Campo e-mail */}
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-medium flex items-center gap-1 mb-1">
            <Mail size={16} /> E-mail
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 rounded-lg border border-gray-300 px-3"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        {/* Campo senha */}
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-medium flex items-center gap-1 mb-1">
            <Lock size={16} /> Nova senha
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-11 rounded-lg border border-gray-300 px-3"
            placeholder="••••••••"
          />
          <p className="text-xs text-gray-500 mt-1">
            (Mínimo: 1 letra maiúscula e 1 caractere especial)
          </p>
        </div>

        {/* Campo biografia */}
        <div className="mb-6">
          <label className="text-gray-700 text-sm font-medium flex items-center gap-1 mb-1">
            <FileText size={16} /> Biografia
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value.slice(0, 450))}
            className="w-full h-28 rounded-lg border border-gray-300 px-3 py-2 text-sm resize-none"
            placeholder="Fale um pouco sobre você..."
          />
          <p className="text-xs text-gray-500 text-right">{bio.length}/450</p>
        </div>

        {/* Mensagem de erro ou sucesso */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-4 text-sm"
            style={{
              color: message.includes("sucesso") ? "#00A859" : "#E63946",
            }}
          >
            {message}
          </motion.p>
        )}

        {/* Botão salvar */}
        <Button
          onClick={handleSave}
          className="w-full h-12 rounded-lg text-white font-semibold transition-all duration-200"
          style={{
            backgroundColor: "#00A859",
          }}
        >
          Salvar Alterações
        </Button>
      </motion.div>
    </div>
  );
}
