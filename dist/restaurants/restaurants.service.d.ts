import { ResRepo } from "./restaurants.repository";
import { Restaurant } from "./restaurants.model";
export declare class RestaurantService {
    private readonly resRepo;
    constructor(resRepo: ResRepo);
    create(restaurant: Restaurant): Promise<Restaurant>;
    readAll(): Promise<Restaurant[]>;
    readById(id: any): Promise<Restaurant>;
    update(id: any, restaurant: Restaurant): Promise<Restaurant>;
    delete(id: any): Promise<any>;
}
