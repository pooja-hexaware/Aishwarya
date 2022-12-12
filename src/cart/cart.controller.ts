import { Controller, Post, Body, Request, UseGuards, Delete, NotFoundException, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { ItemDTO } from './item-dto.dto';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) { }

    @Post('/')
    async addItemToCart(@Request() req, @Body() itemDTO: ItemDTO) {
        const storeId = req.Restaurant.store_id;
        const cart = await this.cartService.addItemToCart(storeId, itemDTO);
        return cart;
    }

    
    @Delete('/')
    async removeItemFromCart(@Request() req, @Body() { item }) {
        const storeId = req.Restaurant.store_id;
        const cart = await this.cartService.removeItemFromCart(storeId, item);
        if (!cart) throw new NotFoundException('Item does not exist');
        return cart;
    }

    
    @Delete('/:id')
    async deleteCart(@Param('id') storeId: string) {
        const cart = await this.cartService.deleteCart(storeId);
        if (!cart) throw new NotFoundException('Cart does not exist');
        return cart;
    }
}