import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old or guessed addresses that people (and the client) have tried. Send them somewhere real.
  async redirects() {
    return [
      { source: "/units", destination: "/models", permanent: true },
      { source: "/units/:slug", destination: "/models/:slug", permanent: true },
      { source: "/work", destination: "/#work", permanent: true },
    ];
  },
};

export default nextConfig;
