import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { AuthGuard } from 'src/common/guards/AuthGuard';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  async addProduct(@Body() createProductDto: CreateProductDTO): Promise<any> {
    return this.productService.addProduct(createProductDto);
  }
  @Get()
  async getProducts(): Promise<any> {
    return this.productService.getProducts();
  }
  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<any> {
    return this.productService.deleteProduct(id);
  }
}
