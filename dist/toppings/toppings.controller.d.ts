import { ToppingsService } from "../toppings/toppings.service";
export declare class ToppingsController {
    private readonly toppingsService;
    constructor(toppingsService: ToppingsService);
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
