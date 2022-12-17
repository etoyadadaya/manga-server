import {AuthService} from "./auth.service";
import {Body, Controller, Post, Req, Res, UsePipes} from "@nestjs/common";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {Response} from "express";
import {ValidationPipe} from "../pipes/validation.pipe";

@UsePipes(new ValidationPipe())
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  async login(@Body() userDto: CreateUserDto, @Res() res: Response) {
    const tokens = await this.authService.login(userDto);
    res.cookie("token", tokens.refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.send(tokens);
  }

  @Post("/registration")
  async registration(@Body() userDto: CreateUserDto, @Res() res: Response) {
    const tokens = await this.authService.registration(userDto);
    res.cookie("token", tokens.refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.send(tokens);
  }

  @Post("/refresh")
  async refresh(@Req() req: Request, @Res() res: Response) {
    //@ts-ignore
    const tokens = await this.authService.refresh(req.cookies["token"]);
    res.cookie("token", tokens.refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.send(tokens);
  }
}
