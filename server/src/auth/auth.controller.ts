import {AuthService} from "./auth.service";
import {Body, Controller, Post, Req, Res} from "@nestjs/common";
import {CreateUserDto} from "../users/dto/create-user.dto";
import { Request, Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  async login(@Body() userDto: CreateUserDto, @Res({passthrough: true }) res: Response) {
    const tokens = await this.authService.login(userDto);
    res.cookie('token', tokens.refresh_token, { httpOnly: true, secure: true, maxAge: 60*60*24*60*1000});
    return res.send(tokens);
  }

  @Post("/registration")
  async registration(@Body() userDto: CreateUserDto, @Res({passthrough: true }) res: Response) {
    const tokens = await this.authService.registration(userDto);
    res.cookie('token', tokens.refresh_token, { httpOnly: true, secure: true, maxAge: 60*60*24*60*1000});
    return res.send(tokens);
  }

  @Post("/refresh")
  refresh(@Req() req: Request, @Res({passthrough: true }) res: Response) {
    const tokens = this.authService.refresh(req.cookies["token"]);
    res.cookie('token', tokens.refresh_token, { httpOnly: true, secure: true, maxAge: 60*60*24*60*1000});
    return res.send(tokens);
  }
}
