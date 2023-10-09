/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/**'
            },
        ],
    },
    env: {
        BASEURL: 'http://127.0.0.1:5000',
    },
}

module.exports = nextConfig
