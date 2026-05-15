// src/app/robots.js
// Next.js automatically serves this at /robots.txt

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: "https://towfiq-mern-stack-developer.vercel.app/sitemap.xml",
    host: "https://towfiq-mern-stack-developer.vercel.app",
  };
}
