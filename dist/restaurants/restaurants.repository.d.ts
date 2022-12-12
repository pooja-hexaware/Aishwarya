import { Model } from "mongoose";
import { Restaurant, RestaurantModel } from "./restaurants.model";
export declare class ResRepo {
    private readonly restaurantModel;
    constructor(restaurantModel: Model<RestaurantModel>);
    create(data: any): Promise<Restaurant>;
    findAll(): Promise<Restaurant[]>;
    findById(id: string): Promise<Restaurant>;
    update(restaurantId: any, data: any): Promise<Restaurant>;
    delete(restaurantId: any): Promise<Restaurant>;
}
