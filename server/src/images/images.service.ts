import {InjectModel} from "@nestjs/sequelize";
import {Image} from "./images.model";

export class ImagesService {
  constructor(@InjectModel(Image) private imageRepository) {}

  async getByID(id: number, episodeId: number) {
    return this.imageRepository.findOne({
      where: {
        manga_id: id,
        episode: episodeId,
      },
      attributes: {
        exclude: ["id", "mangaID"],
      },
    });
  }
}
