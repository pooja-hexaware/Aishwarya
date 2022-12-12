import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Toppings } from "../toppings/toppings.model";
import { ToppingsService } from "../toppings/toppings.service";
// import { ToppingsDto } from "./toppings-dto.dto";

@Controller('toppings')
export class ToppingsController {
    constructor(private readonly toppingsService: ToppingsService) { }

    // @Post()
    // async createToppigs(@Res() response, @Body() toppingsdto: ToppingsDto) {
    //     const newToppings = await this. toppingsService.create(toppingsdto);
    //     return response.status(HttpStatus.CREATED).json({
    //         newToppings
    //     })
    // }

    @Get()
    async fetchAll(@Res() response) {
        const toppings = await this.toppingsService.readAll();
        return response.status(HttpStatus.OK).json({
            toppings
        })
    }


    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const toppings = await this.toppingsService.readById(id);
        return response.status(HttpStatus.OK).json({
            toppings
        })
    }

    // @Put('/:id')
    // async update(@Res() response, @Param('id') id, @Body() toppingsdto: ToppingsDto) {
    //     const updatedToppings = await this.toppingsService.update(id, toppingsdto);
    //     return response.status(HttpStatus.OK).json({
    //         updatedToppings
    //     })
    // }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedToppings = await this.toppingsService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedToppings
        })
    }
}

