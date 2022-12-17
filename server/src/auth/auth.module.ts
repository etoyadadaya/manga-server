import {forwardRef, Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {UsersModule} from "../users/users.module";
import {AuthService} from "./auth.service";
import {TokensModule} from "../tokens/tokens.module";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot(),
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "SECRET",
      signOptions: {
        expiresIn: "24h",
      },
    }),
    TokensModule,
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
