import {InjectModel} from "@nestjs/sequelize";
import {Image} from "./images.model";

export class ImagesService {
  constructor(@InjectModel(Image) private imageRepository) {}
}
