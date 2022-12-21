import {Controller, Get, Req, UseGuards} from "@nestjs/common";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../guards/jwt-auth.guard";

@Controller("users")
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("/@me")
  get(@Req() req) {
    return this.usersService.getUserById(req.user.id);
  }
}
