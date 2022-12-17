import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
  @IsString({
    message: "Should be a string"
  })
  @IsEmail({}, {
    message: "Invalid email"
  })
  readonly email: string;

  @IsString({
    message: "Should be a string"
  })
  @Length(4, 50, {
    message: "Invalid password length"
  })
  readonly password: string;
}
