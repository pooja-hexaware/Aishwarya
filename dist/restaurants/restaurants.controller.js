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
exports.RestaurantController = void 0;
const common_1 = require("@nestjs/common");
const restaurants_service_1 = require("../restaurants/restaurants.service");
let RestaurantController = class RestaurantController {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async fetchAll(response) {
        const restaurants = await this.restaurantService.readAll();
        return response.status(common_1.HttpStatus.OK).json({
            restaurants
        });
    }
    async findById(response, id) {
        const restaurant = await this.restaurantService.readById(id);
        return response.status(common_1.HttpStatus.OK).json({
            restaurant
        });
    }
    async delete(response, id) {
        const deletedRestaurant = await this.restaurantService.delete(id);
        return response.status(common_1.HttpStatus.OK).json({
            deletedRestaurant
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "findById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "delete", null);
RestaurantController = __decorate([
    (0, common_1.Controller)('restaurant'),
    __metadata("design:paramtypes", [restaurants_service_1.RestaurantService])
], RestaurantController);
exports.RestaurantController = RestaurantController;
//# sourceMappingURL=restaurants.controller.js.map