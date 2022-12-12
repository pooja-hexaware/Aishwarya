import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToppingsController } from './toppings.controller';
import { Toppings, ToppingsSchema } from './toppings.model';
import { ToppingsRepo } from './toppings.repository';
import { ToppingsService } from './toppings.service';

@Module({

    imports: [
        MongooseModule.forFeature([
            {
                name: Toppings.name,
                schema: ToppingsSchema //schema defining how the model should look like, so it is being imported
            }
        ])
    ],
    controllers: [ToppingsController],
    providers: [ToppingsService, ToppingsRepo],
    exports: [

        ToppingsService,
        ToppingsRepo
    ]
})

export class ToppingsModule { }