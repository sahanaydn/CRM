import { ProductsService } from './products.service';
import { ProductsModule } from './products.module';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDocument } from './schema/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return ` this id  ${id}`;
  }

  @Post()
  create(@Body() allProps: ProductDocument) {
    return this.productService.create(allProps);
  }

  @Put(':id')
  update(@Param('id') id, @Body() allProps: ProductDocument) {}
}
