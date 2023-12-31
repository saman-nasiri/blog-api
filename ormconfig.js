module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Saman@1993',
  database: 'blog-api',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
