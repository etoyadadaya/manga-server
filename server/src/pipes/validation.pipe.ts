import {PipeTransform, ArgumentMetadata} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {ValidationException} from "../exceptions/validation.exceptions";

export class ValidationPipe implements PipeTransform {
  async transform(value: never, metadata: ArgumentMetadata): Promise<never> {
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);
    if (errors.length) {
      const messages = errors.map(
        err => `${err.property}: ${Object.values(err.constraints).join(", ")}`
      );
      throw new ValidationException(messages);
    }
    return value;
  }
}