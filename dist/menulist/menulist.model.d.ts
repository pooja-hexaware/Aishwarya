import mongoose, { Document } from 'mongoose';
export type MenuModel = Menu & Document;
export declare class Menu {
    item: string;
    store_id: number[];
    base_price: number;
    toppings: string[];
    item_description: string;
    item_image: string;
    topping: mongoose.Types.ObjectId[];
}
export declare const MenuSchema: mongoose.Schema<Menu, mongoose.Model<Menu, any, any, any, any>, {}, {}, {}, {}, "type", Menu>;
