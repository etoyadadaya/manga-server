import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {AddRoleDto} from "./dto/add-role.dto";
import {HttpException, HttpStatus} from "@nestjs/common";
import {RolesService} from "../roles/roles.service";

export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("User");
    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }

  async getAllUsers() {
    return await this.userRepository.findAll({
      include: {
        all: true,
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

  getUserById(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
      include: {
        all: true,
      },
      attributes: {
        exclude: ["password"],
      },
    });
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$add("role", role.id);
      return dto;
    }
    throw new HttpException("user or role is not found", HttpStatus.NOT_FOUND);
  }
}
