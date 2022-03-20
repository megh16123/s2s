/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URI:"mongodb+srv://developer:s2s123@cluster0.vzzcx.mongodb.net/s2s?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
