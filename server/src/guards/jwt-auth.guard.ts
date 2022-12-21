import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from "@nestjs/common";
import {Observable} from "rxjs";
import {TokenExpiredError, verify} from "jsonwebtoken";

export class JwtAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(" ")[0];
      const token = authHeader.split(" ")[1];
      if (bearer !== "Bearer" || !token) {
        throw new UnauthorizedException({
          message: "Unauthorized",
        });
      }
      try {
        req.user = verify(token, process.env.ACCESS_KEY);
      } catch (err) {
        if (err === TokenExpiredError) {
          throw new ForbiddenException({
            message: "token expired",
          });
        }
        return false;
      }
      return true;
    } catch (err) {
      throw new UnauthorizedException({
        message: "Unauthorized",
      });
    }
  }
}