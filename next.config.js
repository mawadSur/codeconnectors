/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: './',
    images: {
        unoptimized: true, 
        assetPrefix: './',
    },
}

module.exports = nextConfig
