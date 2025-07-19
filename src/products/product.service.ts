import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  async addProduct(product): Promise<any> {
    try {
      const newproduct = await this.productModel.create(product);
      console.log('Product created', newproduct);
      return newproduct;
    } catch (error) {
      console.log(error);
    }
  }
}
