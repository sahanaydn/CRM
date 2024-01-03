import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './schema/product.schema';
import { GenericCrudRepositoryImpl } from 'src/common/GenericCrudRepository';

@Injectable()
export class ProductsService extends GenericCrudRepositoryImpl<ProductDocument> {
  constructor(
    @InjectModel('Product')
    private productModel: Model<ProductDocument>,
  ) {
    super(productModel);
  }
}
