import { Model } from "mongoose";
import { Menu, MenuModel } from "./menulist.model";
export declare class MenuRepo {
    private readonly menuModel;
    constructor(menuModel: Model<MenuModel>);
    create(data: any): Promise<Menu>;
    findAll(): Promise<Menu[]>;
    findById(id: string): Promise<Menu>;
    update(menuId: any, data: any): Promise<Menu>;
    delete(menuId: any): Promise<Menu>;
}
