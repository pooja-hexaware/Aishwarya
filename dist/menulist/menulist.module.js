"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const menulist_controller_1 = require("./menulist.controller");
const menulist_model_1 = require("./menulist.model");
const menulist_repository_1 = require("./menulist.repository");
const menulist_service_1 = require("./menulist.service");
let MenuModule = class MenuModule {
};
MenuModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: menulist_model_1.Menu.name,
                    schema: menulist_model_1.MenuSchema
                }
            ])
        ],
        controllers: [menulist_controller_1.MenuController],
        providers: [menulist_service_1.MenuService, menulist_repository_1.MenuRepo],
        exports: [
            menulist_service_1.MenuService,
            menulist_repository_1.MenuRepo
        ]
    })
], MenuModule);
exports.MenuModule = MenuModule;
//# sourceMappingURL=menulist.module.js.map