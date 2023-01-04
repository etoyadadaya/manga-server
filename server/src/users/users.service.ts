import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {Manga} from "../manga/manga.model";
import {HttpException, HttpStatus} from "@nestjs/common";

export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    @InjectModel(Manga) private mangaRepository: typeof Manga
  ) {}

  createUser(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  getUserById(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
      include: {
        all: true,
      },
      attributes: {
        exclude: ["id", "password"],
      },
    });
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOne({
      where: {
        email,
      },
      include: {
        all: true,
      },
    });
  }

  async addFavorite(userID: number, mangaID: number) {
    const user = await this.userRepository.findByPk(userID);
    const manga = await this.mangaRepository.findByPk(mangaID);
    if (user && manga) {
      await user.$add("favorite", manga.id);
      return this.userRepository.findByPk(user.id, {include: {all: true}});
    }
    throw new HttpException("user or manga not found", HttpStatus.NOT_FOUND);
  }

  async deleteFavorite(userID: number, mangaID: number) {
    const user = await this.userRepository.findByPk(userID);
    const manga = await this.mangaRepository.findByPk(mangaID);
    if (user && manga) {
      await user.$remove("favorite", manga.id);
      return this.userRepository.findByPk(user.id, {include: {all: true}});
    }
    throw new HttpException("user or manga not found", HttpStatus.NOT_FOUND);
  }
}
