import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import helmet from "helmet";

async function runtime() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  await app.listen(666);
}

runtime();
