import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Screen } from '../App';
import Logo from './Logo';

interface LoginScreenProps {
  onLogin: (email: string, password: string) => void;
  navigateToScreen: (screen: Screen) => void;
}

export default function LoginScreen({ onLogin, navigateToScreen }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simular delay de autenticação
    setTimeout(() => {
      const userEmail = email || 'usuario@exemplo.com';
      const userPassword = password || '123456';
      onLogin(userEmail, userPassword);

      // 🟢 NOVA LINHA: Ir para a tela de autenticação após login
      navigateToScreen("auth-code");

      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="h-full w-full bg-[#F5F5F5] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-sm"
      >
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="mb-4">
            <Logo size="large" showText={false} className="justify-center" />
          </div>
          <h1 className="text-3xl">
            <span style={{ color: '#00A859' }}>Descubra</span>{' '}
            <span style={{ color: '#FFD500' }}>+Brasil</span>
          </h1>
        </div>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-gray-600">
            Sua jornada cultural pelo Brasil
          </p>
        </motion.div>

        {/* Campos de login */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full space-y-5"
        >
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 rounded-lg border border-gray-300 px-4"
          />
          
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 rounded-lg border border-gray-300 px-4"
          />

          <Button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full h-12 rounded-lg text-white transition-all duration-200"
            style={{ 
              backgroundColor: isLoading ? '#B0B0B0' : '#00A859',
              opacity: isLoading ? 0.7 : 1 
            }}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full space-y-4 mt-6"
        >
          <div className="flex justify-between">
            <button 
              className="text-sm"
              style={{ color: '#FFD500' }}
            >
              Esqueci a senha
            </button>
            <button 
              className="text-sm"
              style={{ color: '#00A859' }}
            >
              Sou novo
            </button>
          </div>
          
        </motion.div>
      </motion.div>
    </div>
  );
}
