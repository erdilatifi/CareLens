// components/ClerkLoader.tsx
"use client";

import { useAuth } from "@clerk/nextjs";

export default function ClerkLoader({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center text-gray-600">
        <div className="w-10 h-10 border-4 border-violet-600 border-t-transparent rounded-full animate-spin" />
        <span className="mt-4 text-sm">Loading...</span>
      </div>
    );
  }

  return <>{children}</>;
}
