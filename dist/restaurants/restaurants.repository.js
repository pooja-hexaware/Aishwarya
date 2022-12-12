"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const restaurants_model_1 = require("./restaurants.model");
let ResRepo = class ResRepo {
    constructor(restaurantModel) {
        this.restaurantModel = restaurantModel;
    }
    async create(data) {
        const res = await new this.restaurantModel(data).save();
        return res;
    }
    async findAll() {
        return this.restaurantModel.find({}).exec();
    }
    async findById(id) {
        return this.restaurantModel.findById(id).populate("menu");
    }
    async update(restaurantId, data) {
        const filter = { _id: restaurantId };
        return this.restaurantModel.findOneAndUpdate(filter, data);
    }
    async delete(restaurantId) {
        return this.restaurantModel.findByIdAndDelete(restaurantId);
    }
};
ResRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(restaurants_model_1.Restaurant.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ResRepo);
exports.ResRepo = ResRepo;
//# sourceMappingURL=restaurants.repository.js.map