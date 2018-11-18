const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/B12',
  port: process.env.PORT || 8000,
  cookieKey: process.env.COOKIEKEY || 'mnniuhuhu',
};

export default config;
