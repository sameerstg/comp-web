import React from "react";

export default function NotFound() {
  return (
    <div className="flex md:min-h-[calc(100vh-70px)]  items-center justify-center flex-col flex-1">
      <h1 className="text-6xl font-extrabold">404</h1>
      <h2 className="text-4xl">Page Not Found</h2>
      <p className="text-md mt-5">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
