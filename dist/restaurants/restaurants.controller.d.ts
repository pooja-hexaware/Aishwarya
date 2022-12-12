import { RestaurantService } from "../restaurants/restaurants.service";
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
