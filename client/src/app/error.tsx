"use client";
import Link from "next/link";
import React from "react";

interface IProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: IProps) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-3xl shadow-lg flex flex-col items-center">
        {/* Error Icon */}
        <div className="mb-8 p-6 bg-gray-200 dark:bg-gray-700 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-gray-800 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Text */}
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Oops!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Something went wrong. Please try again later.
        </p>
        <p className="text-sm text-red-500 dark:text-red-400">{error?.message}</p>

        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="px-6 py-3 mt-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition-all"
        >
          Retry
        </button>

        {/* Go Home Button */}
        <Link href="/">
          <button className="px-6 py-3 mt-3 bg-gray-700 dark:bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-all">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
