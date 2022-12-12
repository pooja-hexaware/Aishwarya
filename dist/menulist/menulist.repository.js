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
exports.MenuRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const menulist_model_1 = require("./menulist.model");
let MenuRepo = class MenuRepo {
    constructor(menuModel) {
        this.menuModel = menuModel;
    }
    async create(data) {
        const res = await new this.menuModel(data).save();
        return res;
    }
    async findAll() {
        return this.menuModel.find({}).exec();
    }
    async findById(id) {
        return this.menuModel.findById(id).populate('toppings');
    }
    async update(menuId, data) {
        const filter = { _id: menuId };
        return this.menuModel.findOneAndUpdate(filter, data);
    }
    async delete(menuId) {
        return this.menuModel.findByIdAndDelete(menuId);
    }
};
MenuRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(menulist_model_1.Menu.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MenuRepo);
exports.MenuRepo = MenuRepo;
//# sourceMappingURL=menulist.repository.js.map