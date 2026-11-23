import { useState } from 'react';
import { Layers } from 'lucide-react';

interface BrandImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackVariant?: 'logo-dark' | 'logo-light' | 'avatar' | 'project';
  fallbackLabel?: string;
}

export function BrandImage({
  src,
  alt,
  className = '',
  fallbackVariant = 'project',
  fallbackLabel,
}: BrandImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (fallbackVariant === 'logo-dark' || fallbackVariant === 'logo-light') {
      const isLight = fallbackVariant === 'logo-light';
      return (
        <span
          className={`inline-flex items-center gap-2.5 font-display font-extrabold tracking-tight text-lg whitespace-nowrap ${
            isLight ? 'text-[#F8FAFC]' : 'text-[#14161D]'
          }`}
        >
          <span className="w-7 h-7 rounded-lg bg-[#2F5BFF] text-white inline-flex items-center justify-center text-sm font-bold">
            S
          </span>
          <span>Splash Studio</span>
        </span>
      );
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
