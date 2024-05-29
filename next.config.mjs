/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: '/free-photo/**',
        },
        {
            protocol: 'https',
            hostname: 'perapalace.com',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
            port: '',
            pathname: '/*',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'www.peninsula.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'images.trvl-media.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'dynamic-media-cdn.tripadvisor.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'media.cntraveler.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'romecavalieri.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'images.adsttc.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'd20kc7ig5255k8.cloudfront.net',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'cf.bstatic.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'i2.wp.com',
            port: '',
            pathname: '/**',
          },
      ],
    },
  };
  
  export default nextConfig;
  