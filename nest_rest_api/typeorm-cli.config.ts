import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavour } from 'src/coffees/entities/flavour.entity';
import { CoffeeRefactor1657823495013 } from 'src/migrations/1657823495013-CoffeeRefactor';
import { CoffeeSchemaUpdate1657825231097 } from 'src/migrations/1657825231097-CoffeeSchemaUpdate';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavour],
  migrations: [CoffeeRefactor1657823495013, CoffeeSchemaUpdate1657825231097],
});
