import { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';

interface BrandImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackVariant?: 'logo-dark' | 'logo-light' | 'avatar' | 'project';
  fallbackLabel?: string;
}

export function SplashLogo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const isLight = variant === 'light';
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-display font-extrabold tracking-tight text-[19px] leading-none whitespace-nowrap ${
        isLight ? 'text-[#F8FAFC]' : 'text-[#14161D]'
      }`}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-8 h-8 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="9" fill="#2F5BFF" />
        <path
          d="M20.5 10.5C18.5 9.2 15.2 9.4 13.4 11.1C11.9 12.5 12.1 14.5 14.2 15.3L17.9 16.7C20.2 17.6 20.5 20.1 18.7 21.6C16.7 23.2 13.2 23.3 11 21.8"
          stroke="#FFFFFF"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      <span>Splash Studio</span>
    </span>
  );
}

export function BrandImage({
  src,
  alt,
  className = '',
  fallbackVariant = 'project',
  fallbackLabel,
}: BrandImageProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    if (fallbackVariant === 'logo-dark' || fallbackVariant === 'logo-light') {
      return <SplashLogo variant={fallbackVariant === 'logo-light' ? 'light' : 'dark'} />;
    }

    if (fallbackVariant === 'avatar') {
      return (
        <span
          aria-label={alt}
          className={`${className} bg-[#2F5BFF] text-white font-display font-bold text-xs inline-flex items-center justify-center shrink-0`}
        >
          M
        </span>
      );
    }

    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-[#EEF2FF] via-[#F4F4EF] to-[#E4E4DD] flex flex-col items-center justify-center gap-3 p-6 text-center"
      >
        <div className="w-12 h-12 rounded-xl bg-white border border-[#DFDFD7] flex items-center justify-center text-[#2F5BFF] shadow-sm">
          <Layers className="w-6 h-6" aria-hidden="true" />
        </div>
        <span className="font-headline font-bold text-base text-[#14161D]">
          {fallbackLabel ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
