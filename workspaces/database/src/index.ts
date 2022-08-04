import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { Entities } from './entities';

export const connectDataBase = async () => {
  const AppDataSource = new DataSource({
    type: 'mysql',
    host: '192.168.18.39', // IP address of your local
    port: 3306,
    username: 'development',
    password: 'pwdevelopment',
    database: 'application',
    entities: Entities,
    synchronize: true,
    logging: true,
  });

  // to initialize initial connection with the database, register all entities
  // and "synchronize" database schema, call "initialize()" method of a newly created database
  // once in your application bootstrap
  const database = await AppDataSource.initialize();
  return database;
};

console.log(connectDataBase());
