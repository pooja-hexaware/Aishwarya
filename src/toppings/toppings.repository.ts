import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Toppings, ToppingsModel } from "./toppings.model";

@Injectable()
export class ToppingsRepo {
    constructor(
        @InjectModel(Toppings.name)
        private readonly toppingsModel: Model<ToppingsModel>,
    ) { }

    async create(data): Promise<Toppings> {
        const res = await new this.toppingsModel(data).save();
        return res;
    }

    async findAll(): Promise<Toppings[]> {
        return this.toppingsModel.find({}).exec();
    }

    async findById(id: string): Promise<Toppings> {
        return this.toppingsModel.findById(id).exec();
    }

    async update(menuId, data): Promise<Toppings> {
        const filter = { _id: menuId };
        return this.toppingsModel.findOneAndUpdate(filter, data);
    }

    async delete(menuId): Promise<Toppings> {
        return this.toppingsModel.findByIdAndDelete(menuId);
    }
}

