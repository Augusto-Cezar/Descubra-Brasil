
interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'medium', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-8 w-8',
    large: 'h-16 w-16'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} rounded-lg overflow-hidden from-[#00A859] to-[#FFD500] flex items-center justify-center`}>
        <img
          src="./images/Logo.png"
          alt="Descubra +Brasil Logo"
          className="w-full h-full object-cover"
        />
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-medium`}>
  <span style={{ color: '#00A859' }}>Descubra </span>
  <span style={{ color: '#FFD500' }}>+Brasil</span>
</span>
      )}
    </div>
  );
}