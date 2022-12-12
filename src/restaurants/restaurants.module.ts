import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantController } from './restaurants.controller';
import { Restaurant, RestaurantSchema } from './restaurants.model';
import { ResRepo } from './restaurants.repository';
import { RestaurantService } from './restaurants.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Restaurant.name,
                schema: RestaurantSchema //schema defining how the model should look like, so it is being imported
            }
        ])
    ],
    controllers: [RestaurantController],
    providers: [RestaurantService, ResRepo],
    exports: [
        RestaurantService,
        ResRepo
    ]
})
export class RestauantModule { }
