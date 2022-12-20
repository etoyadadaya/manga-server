import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function runtime() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  });
  await app.listen(666);
}

runtime();
