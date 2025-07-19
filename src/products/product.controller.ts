import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  async addProduct(
    @Body('id') id: string,
    @Body('title') title: string,
    @Body('price') price: number,
  ): Promise<any> {
    const product = {
      id,
      title,
      price,
    };
    return this.productService.addProduct(product);
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
