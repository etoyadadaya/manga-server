import {IsString} from "class-validator";

export class RefreshDto {
  @IsString({message: "Should be a string"})
  readonly access_token: string;

  @IsString({message: "Should be a string"})
  readonly refresh_token: string;
}
