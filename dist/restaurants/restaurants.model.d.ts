import mongoose, { Document } from 'mongoose';
export type RestaurantModel = Restaurant & Document;
export declare class Restaurant {
    store_name: string;
    store_id: number;
    store_address: number;
    store_city: number;
    store_phone: number;
    store_state: number;
    store_zip: number;
    kitchen_phone: number;
    store_image: string;
    menu: mongoose.Types.ObjectId[];
}
export declare const RestaurantSchema: mongoose.Schema<Restaurant, mongoose.Model<Restaurant, any, any, any, any>, {}, {}, {}, {}, "type", Restaurant>;
