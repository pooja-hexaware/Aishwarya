"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const menulist_controller_1 = require("./menulist/menulist.controller");
const menulist_service_1 = require("./menulist/menulist.service");
const restaurants_controller_1 = require("./restaurants/restaurants.controller");
const restaurants_service_1 = require("./restaurants/restaurants.service");
const mongoose_1 = require("@nestjs/mongoose");
const restaurants_module_1 = require("./restaurants/restaurants.module");
const menulist_module_1 = require("./menulist/menulist.module");
const toppings_module_1 = require("./toppings/toppings.module");
const toppings_controller_1 = require("./toppings/toppings.controller");
const toppings_service_1 = require("./toppings/toppings.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://AishwaryaReddy:AishwaryaReddy@cluster0.p8ipcsm.mongodb.net/wiwii?retryWrites=true&w=majority'),
            restaurants_module_1.RestauantModule,
            menulist_module_1.MenuModule,
            toppings_module_1.ToppingsModule
        ],
        controllers: [app_controller_1.AppController, restaurants_controller_1.RestaurantController, menulist_controller_1.MenuController, toppings_controller_1.ToppingsController],
        providers: [app_service_1.AppService, restaurants_service_1.RestaurantService, menulist_service_1.MenuService, toppings_service_1.ToppingsService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map