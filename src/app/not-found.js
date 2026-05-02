import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 text-white">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Page Not Found</h2>
        <p className="text-gray-400 mb-8 text-sm sm:text-base">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
