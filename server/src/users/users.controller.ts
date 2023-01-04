import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../guards/jwt-auth.guard";

@Controller("users")
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("/@me")
  getMe(@Req() req) {
    return this.usersService.getUserById(req.user.id);
  }

  @Post("/favorite/:id")
  addFavorite(@Req() req, @Param("id", ParseIntPipe) mangaID: number) {
    return this.usersService.addFavorite(req.user.id, mangaID);
  }

  @Delete("/favorite/:id")
  deleteFavorite(@Req() req, @Param("id", ParseIntPipe) mangaID: number) {
    return this.usersService.deleteFavorite(req.user.id, mangaID);
  }
}
