import { Model } from "mongoose";
import { Toppings, ToppingsModel } from "./toppings.model";
export declare class ToppingsRepo {
    private readonly toppingsModel;
    constructor(toppingsModel: Model<ToppingsModel>);
    create(data: any): Promise<Toppings>;
    findAll(): Promise<Toppings[]>;
    findById(id: string): Promise<Toppings>;
    update(menuId: any, data: any): Promise<Toppings>;
    delete(menuId: any): Promise<Toppings>;
}
