import {
  Controller,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import {ImagesService} from "./images.service";

@UsePipes(new ValidationPipe())
@Controller("images")
export class ImagesController {
  constructor(private imagesService: ImagesService) {}
}
