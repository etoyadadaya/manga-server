import {Controller, UseGuards} from "@nestjs/common";
import {FavoritesService} from "./favorites.service";
import {JwtAuthGuard} from "../guards/jwt-auth.guard";

@Controller("favorite")
@UseGuards(JwtAuthGuard)
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}
}
