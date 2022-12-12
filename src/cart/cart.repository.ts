import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cart, CartModel } from "./cart.model";

@Injectable()
export class CartRepo {
    constructor(
        @InjectModel(Cart.name)
        private readonly cartModel: Model<CartModel>,
    ) { }

    async create(data): Promise<Cart> {
        const res = await new this.cartModel(data).save();
        return res;
    }

    async findAll(): Promise<Cart[]> {
        return this.cartModel.find({}).exec();
    }

    async findById(id: string): Promise<Cart> {
        return this.cartModel.findById(id).populate('items');
    }

    async update(cartId, data): Promise<Cart> {
        const filter = { _id: cartId };
        return this.cartModel.findOneAndUpdate(filter, data);
    }

    async delete(cartId): Promise<Cart> {
        return this.cartModel.findByIdAndDelete(cartId);
    }
}

