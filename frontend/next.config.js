/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: '/api/draft',
  //       headers: [
  //         {
  //           key: 'x-custom-header',
  //           value: 'my custom header value',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Origin',
  //           value: '*',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET, POST',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
