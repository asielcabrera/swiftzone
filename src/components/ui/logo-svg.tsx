import React from 'react';

interface LogoSvgProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "light" | "dark";
}

export function LogoSvg({ width = 80, height = 80, className = '', variant = "dark" }: LogoSvgProps) {
  // Usamos el logo verde para el modo oscuro, y el logo con fondo claro para el modo claro
  const logoSrc = variant === "dark"
    ? "/logo-2.svg"
    : "/logo-1.svg";

  // En lugar de usar next/image, usaremos un elemento img normal con suppressHydrationWarning
  return (
    <img
      src={logoSrc}
      alt="SwiftZone Logo"
      width={width}
      height={height}
      className={className}
      style={{ maxWidth: '100%' }}
      suppressHydrationWarning
    />
  );
}
