import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {TokensService} from "./token.service";

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [TokensService],
  exports: [TokensService],
})
export class TokensModule {}
