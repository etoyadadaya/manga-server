import {CreateUserDto} from "../users/dto/create-user.dto";
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {compare, hash} from "bcryptjs";
import {TokensService} from "../tokens/token.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private tokenService: TokensService
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);

    return this.tokenService.generateKeys(user.id);
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException("email is taken", HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await hash(userDto.password, 10);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });

    return this.tokenService.generateKeys(user.id);
  }

  async refresh(refresh: string) {
    const tokens = this.tokenService.validate(refresh);

    if (!tokens) {
      throw new UnauthorizedException({
        message: "invalid tokens",
      });
    }

    return tokens;
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await compare(userDto.password, user.password);

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({
      message: "Invalid email and password",
    });
  }
}
