import {Injectable} from "@nestjs/common";
import {decode, sign, verify} from "jsonwebtoken";

@Injectable()
export class TokensService {
  generateKeys(id: number) {
    return {
      access_token: this.generateAccessKey(id),
      refresh_token: this.generateRefreshKey(id),
    };
  }

  validate(token: string) {
    try {
      verify(token, process.env.REFRESH_KEY);

      const refresh = decode(token) as {
        id: number
      };

      return this.generateKeys(refresh.id);
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
