import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartModel } from './cart.model';
import { ItemDTO } from './item-dto.dto';

@Injectable()
export class CartService {
    constructor(@InjectModel('Cart') private readonly cartModel: Model<CartModel>) { }

    async createCart(storeId: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number): Promise<Cart> {
        const newCart = await this.cartModel.create({
            storeId,
            items: [{ ...itemDTO, subTotalPrice }],
            totalPrice
        });
        return newCart;
    }

    async getCart(storeId: string): Promise<CartModel> {
        const cart = await this.cartModel.findOne({ storeId });
        return cart;
    }

    async deleteCart(storeId: string): Promise<Cart> {
        const deletedCart = await this.cartModel.findOneAndRemove({ storeId });
        return deletedCart;
    }

    private recalculateCart(cart: CartModel) {
        cart.totalPrice = 0;
        cart.items.forEach(item1 => {
            cart.totalPrice += (item1.quantity * item1.price);
        })
    }

    async addItemToCart(storeId: string, itemDTO: ItemDTO): Promise<Cart> {
        const { item, quantity, price } = itemDTO;
        const subTotalPrice = quantity * price;

        const cart = await this.getCart(storeId);

        if (cart) {
            const itemIndex = cart.items.findIndex((item1) => item1.item == item);

            if (itemIndex > -1) {
                let item1 = cart.items[itemIndex];
                item1.quantity = Number(item1.quantity) + Number(quantity);
                item1.subTotalPrice = item1.quantity * item1.price;

                cart.items[itemIndex] = item1;
                this.recalculateCart(cart);
                return cart.save();
            } else {
                cart.items.push({ ...itemDTO, subTotalPrice });
                this.recalculateCart(cart);
                return cart.save();
            }
        } else {
            const newCart = await this.createCart(storeId, itemDTO, subTotalPrice, price);
            return newCart;
        }
    }

    async removeItemFromCart(storeId: string, item: string): Promise<any> {
        const cart = await this.getCart(storeId);

        const itemIndex = cart.items.findIndex((item1) => item1.item == item);

        if (itemIndex > -1) {
            cart.items.splice(itemIndex, 1);
            return cart.save();
        }
    }
}