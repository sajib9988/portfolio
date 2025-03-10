import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-cyan-600">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
        Oops! Page not found.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
