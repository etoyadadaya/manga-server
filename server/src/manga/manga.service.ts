import {InjectModel} from "@nestjs/sequelize";
import {Manga} from "./manga.model";

export class MangaService {
  constructor(@InjectModel(Manga) private mangaRepository) {}

  getByName = (name: string) => {
    return this.mangaRepository.findOne({
      where: {
        name: name,
      },
      attributes: {
        exclude: [],
      },
    });
  };

  getAll = () => {
    return this.mangaRepository.findAll();
  };
}
