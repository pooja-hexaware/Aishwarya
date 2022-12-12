import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuController } from './menulist.controller';
import { Menu, MenuSchema } from './menulist.model';
import { MenuRepo } from './menulist.repository';
import { MenuService } from './menulist.service';

@Module({

    imports: [
        MongooseModule.forFeature([
            {
                name: Menu.name,
                schema: MenuSchema //schema defining how the model should look like, so it is being imported
            }
        ])
    ],
    controllers: [MenuController],
    providers: [MenuService, MenuRepo],
    exports: [

        MenuService,
        MenuRepo
    ]
})

export class MenuModule { }