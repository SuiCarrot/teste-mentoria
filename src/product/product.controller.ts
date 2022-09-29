import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { SimulProductDto } from './dto/simul-product.dto'

import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/simul')
  @ApiOperation({
    summary: 'Simular o parcelamento.'
  })
  simul(
    @Body() simulPagamento: SimulProductDto)
    {
    return this.productService.simul(simulPagamento)
  }
}
