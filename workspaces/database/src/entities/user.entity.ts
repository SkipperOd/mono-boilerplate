import { IUser } from 'models';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export abstract class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 512, nullable: true, name: 'firstName' })
  firstName: string;
}
