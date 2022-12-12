import { MenuRepo } from "./menulist.repository";
import { Menu } from "./menulist.model";
export declare class MenuService {
    private readonly menuRepo;
    constructor(menuRepo: MenuRepo);
    create(menu: Menu): Promise<Menu>;
    readAll(): Promise<Menu[]>;
    readById(id: any): Promise<Menu>;
    update(id: any, menu: Menu): Promise<Menu>;
    delete(id: any): Promise<any>;
}
