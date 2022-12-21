import {forwardRef, Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {UsersModule} from "../users/users.module";
import {AuthService} from "./auth.service";
import {ConfigModule} from "@nestjs/config";
import {TokensModule} from "../tokens/tokens.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    forwardRef(() => UsersModule),
    TokensModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
