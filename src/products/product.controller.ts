import { Body, Controller, Post } from '@nestjs/common';
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
}
