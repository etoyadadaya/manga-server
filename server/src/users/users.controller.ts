import {Body, Controller, Get, Post, Req, UseGuards, UsePipes} from "@nestjs/common";
import {UsersService} from "./users.service";
import {AddRoleDto} from "./dto/add-role.dto";
import {RolesGuard} from "../guards/roles.guard";
import {Roles} from "../auth/roles-auth-decorator";
import {ValidationPipe} from "../pipes/validation.pipe";
import {JwtAuthGuard} from "../guards/jwt-auth.guard";

@UsePipes(new ValidationPipe())
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseGuards(RolesGuard)
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get("/@me")
  @UseGuards(new JwtAuthGuard())
  getMe(@Req() req) {
    return this.usersService.getUserById(req.user.id);
  }

  @Post("/role")
  @Roles("Admin")
  @UseGuards(RolesGuard)
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }
}
