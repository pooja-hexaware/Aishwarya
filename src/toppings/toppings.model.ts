import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Decimal128, Document } from 'mongoose';
export type ToppingsModel = Toppings & Document
@Schema()
export class Toppings {

    @Prop({ required: true })
    name: string;

    @Prop()
    price: number; //decimal 

    @Prop()
    top_image: string;


}

//SigninModel is Signin class and Document
export const ToppingsSchema = SchemaFactory.createForClass(Toppings) //exporting schema by creating schema using schemafactory and createforclass(class=Signin)