import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const LotusIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Central Petal */}
    <path
      d="M50 8 C47 25 43 45 50 62 C57 45 53 25 50 8 Z"
      stroke="url(#lotus-gold)"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#lotus-gold-soft)"
    />
    {/* Inner Left Petal */}
    <path
      d="M48 20 C36 32 30 48 45 62 C33 46 38 28 48 20 Z"
      stroke="url(#lotus-gold)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#lotus-gold-soft)"
    />
    {/* Inner Right Petal */}
    <path
      d="M52 20 C64 32 70 48 55 62 C67 46 62 28 52 20 Z"
      stroke="url(#lotus-gold)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#lotus-gold-soft)"
    />
    {/* Outer Left Petal */}
    <path
      d="M44 32 C25 42 16 56 38 65 C22 52 28 38 44 32 Z"
      stroke="url(#lotus-gold)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#lotus-gold-soft)"
    />
    {/* Outer Right Petal */}
    <path
      d="M56 32 C75 42 84 56 62 65 C78 52 72 38 56 32 Z"
      stroke="url(#lotus-gold)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#lotus-gold-soft)"
    />
    {/* Base gentle arc */}
    <path
      d="M32 66 C42 70 58 70 68 66"
      stroke="url(#lotus-gold)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="lotus-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcedc7" />
        <stop offset="50%" stopColor="#c5a059" />
        <stop offset="100%" stopColor="#dfbe6f" />
      </linearGradient>
      <linearGradient id="lotus-gold-soft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c5a059" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#dfbe6f" stopOpacity="0.04" />
      </linearGradient>
    </defs>
  </svg>
);

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LotusIcon
        className={isSm ? 'w-7 h-7' : isLg ? 'w-11 h-11' : 'w-9 h-9'}
      />
      <div className="flex flex-col text-left">
        <span
          className={`font-serif uppercase tracking-[0.22em] text-[#c5a059] leading-none ${
            isSm ? 'text-[9px]' : isLg ? 'text-[13px]' : 'text-[10px]'
          }`}
        >
          Espaço
        </span>
        <span
          className={`font-serif font-bold uppercase tracking-[0.14em] text-neutral-100 leading-tight ${
            isSm ? 'text-base' : isLg ? 'text-2xl' : 'text-lg'
          }`}
        >
          Inovação
        </span>
        {showSubtitle && (
          <span
            className={`font-sans uppercase tracking-[0.28em] text-neutral-400 font-medium ${
              isSm ? 'text-[7px]' : isLg ? 'text-[9px]' : 'text-[8px]'
            }`}
          >
            Espaço para Eventos
          </span>
        )}
      </div>
    </div>
  );
};
