import { IsNumber, IsString, MIN } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsNumber()
  price: number;
}
