import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    allowedDevOrigins: ["192.168.29.30"],
    devIndicators: false,
    images: {
        domains: ["headsupfortails.com"],
    },
}

export default nextConfig
