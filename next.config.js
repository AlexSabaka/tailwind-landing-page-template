/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Define the paths to be statically generated
  async generateStaticPaths() {
    return {
      // Add paths as needed
      paths: ['/'],
    };
  },
};

module.exports = nextConfig;
