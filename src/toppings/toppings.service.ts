import { Injectable } from "@nestjs/common";
import { ToppingsRepo } from "./toppings.repository";
import { Toppings, ToppingsModel } from "./toppings.model";
import { Model } from "mongoose";

@Injectable()
export class ToppingsService {

    constructor(

        private readonly toppingsRepo: ToppingsRepo,
        // private readonly restaurantModel: Model<RestaurantModel>
    ) { }

    async create(toppings: Toppings): Promise<Toppings> {

        return await this.toppingsRepo.create(toppings);

    }

    async readAll(): Promise<Toppings[]> {

        return await this.toppingsRepo.findAll();

    }

    async readById(id): Promise<Toppings> {

        return await this.toppingsRepo.findById(id);

    }

    async update(id, toppings: Toppings): Promise<Toppings> {

        return await this.toppingsRepo.update(id, toppings)

    }

    // async update(patientId, data): Promise<Patient> {
    //     return this.patientRepo.update(patientId, data);
    // }

    async delete(id): Promise<any> {

        return await this.toppingsRepo.delete(id);

    }

} 