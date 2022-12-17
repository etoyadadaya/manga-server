import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import helmet from "helmet";
import {ValidationPipe} from "./pipes/validation.pipe";

async function runtime() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(666);
}

runtime();
