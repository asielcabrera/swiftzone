/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true, // Desactivar optimización para todas las imágenes
  },
  // Desactivar la validación de ESLint en producción
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Permitir que la aplicación siga compilando incluso con errores de tipo
  typescript: {
    ignoreBuildErrors: true,
  },
  // Suprimir el registro de advertencias durante la compilación
  output: 'standalone',
  // Configuración para el manejo de SVG
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
};

export default nextConfig;
