import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document ,Types} from 'mongoose';
import { type } from "os";
import { Menu } from "src/menulist/menulist.model";


export type RestaurantModel = Restaurant & Document

@Schema()
export class Restaurant {

    
    @Prop({ required: true })
    store_name: string;

    @Prop({required: true})
    store_id: number;

    @Prop({required:true})
    store_address: number;

    @Prop({required:true})
    store_city: number;

    @Prop({required:true})
    store_phone: number;
    
    @Prop({required:true})
    store_state: number;
    
    @Prop({required:true})
    store_zip: number;

    @Prop({required:true})
    kitchen_phone: number;
    @Prop()
    store_image: string;

    @Prop({type:[{type: Types.ObjectId,ref:Menu.name}]})
    menu:mongoose.Types.ObjectId[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant) //exporting schema by creating schema using schemafactory and createforclass(class=Signin)