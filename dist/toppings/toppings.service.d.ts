import { ToppingsRepo } from "./toppings.repository";
import { Toppings } from "./toppings.model";
export declare class ToppingsService {
    private readonly toppingsRepo;
    constructor(toppingsRepo: ToppingsRepo);
    create(toppings: Toppings): Promise<Toppings>;
    readAll(): Promise<Toppings[]>;
    readById(id: any): Promise<Toppings>;
    update(id: any, toppings: Toppings): Promise<Toppings>;
    delete(id: any): Promise<any>;
}
