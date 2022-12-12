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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const menulist_service_1 = require("../menulist/menulist.service");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    async fetchAll(response) {
        const menus = await this.menuService.readAll();
        return response.status(common_1.HttpStatus.OK).json({
            menus
        });
    }
    async findById(response, id) {
        const menus = await this.menuService.readById(id);
        return response.status(common_1.HttpStatus.OK).json({
            menus
        });
    }
    async delete(response, id) {
        const deletedMenu = await this.menuService.delete(id);
        return response.status(common_1.HttpStatus.OK).json({
            deletedMenu
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "delete", null);
MenuController = __decorate([
    (0, common_1.Controller)('menu'),
    __metadata("design:paramtypes", [menulist_service_1.MenuService])
], MenuController);
exports.MenuController = MenuController;
//# sourceMappingURL=menulist.controller.js.map