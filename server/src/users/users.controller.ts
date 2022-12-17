import {Body, Controller, Get, Post, Req, UseGuards} from "@nestjs/common";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../tokens/jwt-auth.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {RolesGuard} from "../auth/roles-guard";
import {Roles} from "../auth/roles-auth-decorator";

@Controller("users")
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Roles("Admin")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Roles("Admin")
  @UseGuards(RolesGuard)
  @Post("/role")
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }
}
