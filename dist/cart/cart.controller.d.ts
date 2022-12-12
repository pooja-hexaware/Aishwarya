import { CartService } from './cart.service';
import { ItemDTO } from './item-dto.dto';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    addItemToCart(req: any, itemDTO: ItemDTO): Promise<import("./cart.model").Cart>;
    removeItemFromCart(req: any, { item }: {
        item: any;
    }): Promise<any>;
    deleteCart(storeId: string): Promise<import("./cart.model").Cart>;
}
