import {forwardRef, Module} from "@nestjs/common";
import {UsersService} from "./users.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {AuthModule} from "../auth/auth.module";
import {UsersController} from "./users.controller";
import {RolesModule} from "../roles/roles.module";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    forwardRef(() => AuthModule)
  ],
  exports: [UsersService]
})
export class UsersModule {}
