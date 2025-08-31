import { motion } from 'motion/react';
import Logo from './Logo';

export default function SplashScreen() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#00A859] to-[#FFD500] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center"
      >
        <div className="text-white text-center mb-4">
          <div className="mb-6">
            <Logo size="large" showText={false} className="justify-center" />
          </div>
          <h2 className="text-3xl font-bold">
            <span style={{ color: '#FFFFFF' }}>Descubra</span>{' '}
            <span style={{ color: '#FFD500' }}>+Brasil</span>
          </h2>
          <p className="text-lg mt-2 opacity-90">
            Explore a cultura brasileira
          </p>
        </div>
      </motion.div>
    </div>
  );
}