import mongoose, { Document } from 'mongoose';
export type ToppingsModel = Toppings & Document;
export declare class Toppings {
    name: string;
    price: number;
    top_image: string;
}
export declare const ToppingsSchema: mongoose.Schema<Toppings, mongoose.Model<Toppings, any, any, any, any>, {}, {}, {}, {}, "type", Toppings>;
