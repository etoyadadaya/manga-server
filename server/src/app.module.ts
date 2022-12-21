import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users/users.model";
import {AuthModule} from "./auth/auth.module";
import {UsersModule} from "./users/users.module";
import {ImagesModule} from "./images/images.module";
import {Image} from "./images/images.model";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "path";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Image],
      autoLoadModels: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),
    AuthModule,
    UsersModule,
    ImagesModule,
  ],
})
export class AppModule {}
