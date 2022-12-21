import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import * as cookieParser from "cookie-parser";

async function runtime() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: ["http://localhost:10880", "http://127.0.0.1:10880"],
    credentials: true,
  });
  await app.listen(666);
}

runtime();
