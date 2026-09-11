/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
  // La página pública de confianza de cada negocio vive en negocio.soyblexi.com
  // (la sirve el CRM). El camino /n/<slug> se redirige para siempre: un QR
  // impreso o un mensaje compartido no puede dejar de valer.
  async redirects() {
    const base = (process.env.TRUST_PAGE_BASE_URL || "https://negocio.soyblexi.com").replace(/\/$/, "");
    return [{ source: "/n/:slug*", destination: `${base}/:slug*`, permanent: true }];
  },
};

export default nextConfig;
