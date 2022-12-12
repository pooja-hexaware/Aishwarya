import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './cart.model';
import { CartRepo } from './cart.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }])
  ],
  controllers: [CartController],
  providers: [
    CartService,
    CartRepo
]
})
export class CartModule {}