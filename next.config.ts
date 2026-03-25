// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    // Auto-import variables into every SCSS module
    // No need to @use variables in every file
    additionalData: `@use "@/styles/variables" as *;`,
  },
};

export default nextConfig;
