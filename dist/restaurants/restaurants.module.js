"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestauantModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const restaurants_controller_1 = require("./restaurants.controller");
const restaurants_model_1 = require("./restaurants.model");
const restaurants_repository_1 = require("./restaurants.repository");
const restaurants_service_1 = require("./restaurants.service");
let RestauantModule = class RestauantModule {
};
RestauantModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: restaurants_model_1.Restaurant.name,
                    schema: restaurants_model_1.RestaurantSchema
                }
            ])
        ],
        controllers: [restaurants_controller_1.RestaurantController],
        providers: [restaurants_service_1.RestaurantService, restaurants_repository_1.ResRepo],
        exports: [
            restaurants_service_1.RestaurantService,
            restaurants_repository_1.ResRepo
        ]
    })
], RestauantModule);
exports.RestauantModule = RestauantModule;
//# sourceMappingURL=restaurants.module.js.map