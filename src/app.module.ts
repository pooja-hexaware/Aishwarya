import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuController } from './menulist/menulist.controller';
import { MenuService } from './menulist/menulist.service';
import { RestaurantController } from './restaurants/restaurants.controller';
import { RestaurantService } from './restaurants/restaurants.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestauantModule } from './restaurants/restaurants.module';
import { MenuModule } from './menulist/menulist.module';
import {ToppingsModule} from './toppings/toppings.module'
import { ToppingsController } from './toppings/toppings.controller';
import { ToppingsService } from './toppings/toppings.service';
// import { CartModule } from './cart/cart.module';
// import { CartController } from './cart/cart.controller';
// import { CartService } from './cart/cart.service';
// import { CartSchema } from './cart/cart.model';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://AishwaryaReddy:AishwaryaReddy@cluster0.p8ipcsm.mongodb.net/wiwii?retryWrites=true&w=majority'  
      ),
      RestauantModule,
      MenuModule,
      ToppingsModule
  ],


  controllers: [AppController,RestaurantController,MenuController,ToppingsController],
  providers: [AppService,RestaurantService,MenuService,ToppingsService]
})
export class AppModule {}
