import { Model } from "mongoose";
import { Cart, CartModel } from "./cart.model";
export declare class CartRepo {
    private readonly cartModel;
    constructor(cartModel: Model<CartModel>);
    create(data: any): Promise<Cart>;
    findAll(): Promise<Cart[]>;
    findById(id: string): Promise<Cart>;
    update(cartId: any, data: any): Promise<Cart>;
    delete(cartId: any): Promise<Cart>;
}
