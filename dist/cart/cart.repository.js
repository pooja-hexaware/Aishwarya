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
exports.CartRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cart_model_1 = require("./cart.model");
let CartRepo = class CartRepo {
    constructor(cartModel) {
        this.cartModel = cartModel;
    }
    async create(data) {
        const res = await new this.cartModel(data).save();
        return res;
    }
    async findAll() {
        return this.cartModel.find({}).exec();
    }
    async findById(id) {
        return this.cartModel.findById(id).populate('items');
    }
    async update(cartId, data) {
        const filter = { _id: cartId };
        return this.cartModel.findOneAndUpdate(filter, data);
    }
    async delete(cartId) {
        return this.cartModel.findByIdAndDelete(cartId);
    }
};
CartRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_model_1.Cart.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CartRepo);
exports.CartRepo = CartRepo;
//# sourceMappingURL=cart.repository.js.map