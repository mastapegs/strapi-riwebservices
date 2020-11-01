module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST'),
        port: env('DATABASE_PORT'),
        database: 'strapi',
        username: env('DATABASE_USER'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {},
    },
  },
});
