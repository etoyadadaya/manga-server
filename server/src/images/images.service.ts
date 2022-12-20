import {InjectModel} from "@nestjs/sequelize";
import {Image} from "./images.model";

export class ImagesService {
  constructor(@InjectModel(Image) private imageRepository) {}

  getImage(name: string, episode: number) {
    return this.imageRepository.findOne({
      where: {
        name: name,
        episode: episode,
      },
      attributes: {
        exclude: ["name", "id", "episode"],
      },
    });
  }

  getCount(name: string) {
    return this.imageRepository.count({
      where: {
        name: name,
      },
    });
  }
}
