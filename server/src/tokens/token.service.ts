import {Injectable} from "@nestjs/common";
import {decode, sign, verify} from "jsonwebtoken";
import {RefreshDto} from "../auth/dto/refresh.dto";

@Injectable()
export class TokensService {
  generateKeys(id: number) {
    return {
      access_token: this.generateAccessKey(id),
      refresh_token: this.generateRefreshKey(id),
    };
  }

  validate(tokens: RefreshDto) {
    try {
      verify(tokens.refresh_token, process.env.REFRESH_KEY);

      const access = decode(tokens.access_token) as {id: number};
      const refresh = decode(tokens.refresh_token) as {id: number};

      if (access.id !== refresh.id) {
        return;
      }
      return this.generateKeys(access.id);
    } catch (err) {
      return;
    }
  }

  private generateAccessKey(id: number): string {
    return sign(
      {
        id: id,
      },
      process.env.ACCESS_KEY,
      {
        expiresIn: "5m",
      }
    );
  }

  private generateRefreshKey(id: number): string {
    return sign(
      {
        id: id,
      },
      process.env.REFRESH_KEY,
      {
        expiresIn: "60d",
      }
    );
  }
}