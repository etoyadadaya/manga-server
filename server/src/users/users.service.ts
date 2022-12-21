import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";

export class UsersService {
  constructor(@InjectModel(User) private repository: typeof User) {}

  createUser(dto: CreateUserDto) {
    return this.repository.create(dto);
  }

  getUserById(id: number) {
    return this.repository.findOne({
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
    return this.repository.findOne({
      where: {
        email,
      },
      include: {
        all: true,
      },
    });
  }
}
