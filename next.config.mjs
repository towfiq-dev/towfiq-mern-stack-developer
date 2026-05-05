/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Canonical domain — prevents duplicate content from www vs non-www
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
