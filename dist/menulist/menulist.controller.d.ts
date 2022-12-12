import { MenuService } from "../menulist/menulist.service";
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
