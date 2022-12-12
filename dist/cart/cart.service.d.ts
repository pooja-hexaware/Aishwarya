import { Model } from 'mongoose';
import { Cart, CartModel } from './cart.model';
import { ItemDTO } from './item-dto.dto';
export declare class CartService {
    private readonly cartModel;
    constructor(cartModel: Model<CartModel>);
    createCart(storeId: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number): Promise<Cart>;
    getCart(storeId: string): Promise<CartModel>;
    deleteCart(storeId: string): Promise<Cart>;
    private recalculateCart;
    addItemToCart(storeId: string, itemDTO: ItemDTO): Promise<Cart>;
    removeItemFromCart(storeId: string, item: string): Promise<any>;
}
