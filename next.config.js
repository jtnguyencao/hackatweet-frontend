/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Obligatoire
  trailingSlash: true, // Important pour S3
  images: {
    unoptimized: true // Désactive l'optimisation d'image (nécessaire pour static)
  },
  // Ajoutez ceci si vous utilisez des liens dynamiques
  experimental: {
    appDir: false // Désactive le nouveau système de routing si non utilisé
  }
};

module.exports = nextConfig;
