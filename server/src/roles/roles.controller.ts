import {RolesService} from "./roles.service";
import {Body, Controller, Get, Param, Post, UsePipes} from "@nestjs/common";
import {CreateRoleDto} from "./dto/create-role.dto";
import {ValidationPipe} from "../pipes/validation.pipe";

@UsePipes(new ValidationPipe())
@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get("/:value")
  getByValue(@Param("value") value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
