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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const menulist_repository_1 = require("./menulist.repository");
let MenuService = class MenuService {
    constructor(menuRepo) {
        this.menuRepo = menuRepo;
    }
    async create(menu) {
        return await this.menuRepo.create(menu);
    }
    async readAll() {
        return await this.menuRepo.findAll();
    }
    async readById(id) {
        return await this.menuRepo.findById(id);
    }
    async update(id, menu) {
        return await this.menuRepo.update(id, menu);
    }
    async delete(id) {
        return await this.menuRepo.delete(id);
    }
};
MenuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [menulist_repository_1.MenuRepo])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menulist.service.js.map