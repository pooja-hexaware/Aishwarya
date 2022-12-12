import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Decimal128, Document,Types } from 'mongoose';
import { Toppings } from "src/toppings/toppings.model";
export type MenuModel = Menu & Document
@Schema()
export class Menu {

    @Prop({ required: true })
    item: string;
    
    @Prop()
    store_id: number[];

    @Prop()
    base_price: number; //decimal 

    @Prop()
    toppings: string[];

    @Prop()
    item_description: string;

    @Prop()
    item_image: string;

    @Prop({type:[{type:Types.ObjectId,ref:Toppings.name}]})
    topping:mongoose.Types.ObjectId[];

}



//SigninModel is Signin class and Document



export const MenuSchema = SchemaFactory.createForClass(Menu) //exporting schema by creating schema using schemafactory and createforclass(class=Signin)