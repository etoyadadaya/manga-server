import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UserCreationsAttrs {
  email: string;
  password: string;
}

@Table({tableName: "users", createdAt: false, updatedAt: false})
export class User extends Model<User, UserCreationsAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({type: DataType.STRING, unique: true})
  email: string;

  @Column({type: DataType.STRING})
  password: string;
}
