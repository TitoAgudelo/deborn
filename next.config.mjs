/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

function throwError(envVar) {
  throw new Error(`Abort: You need to define ${envVar} in the .env file.`);
}

// Check if essential environment variables are defined
if (!process.env.RESEND_API_KEY) {
  throwError("RESEND_API_KEY");
}
