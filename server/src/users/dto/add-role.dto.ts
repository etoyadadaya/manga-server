import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
  @IsString({
    message: "should be a string"
    }
  )
  readonly value: string;

  @IsNumber({}, {
      message: "should be a number"
    }
  )
  readonly userId: number;
}