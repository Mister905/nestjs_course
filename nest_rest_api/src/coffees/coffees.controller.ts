import { Body, Controller, Get, HttpCode, Param, Patch, Post, Query, Delete } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService) {}

    // http://localhost:3000/coffees
    @Get()
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        // return `This Action Returns All Coffees. Limit: ${limit}, Offset: ${offset}`;
        return this.coffeesService.findAll();
    }

    // http://localhost:3000/coffees/flavours
    @Get("/flavours")
    findAllFlavours() {
        return "This Action Returns All Coffee Flavours";
    }

    @Get(":id")
    // findOne(@Param() params) {
    // return `This Action Returns #${params.id} Coffee`;
    findOne(@Param("id") id: string) {
        return this.coffeesService.findOne(id);
    }

    @Post()
    // create(@Body() body) {
    //     return this.coffeesService.create(body);
    // }
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(":id")
    update(@Param("id") id: string, updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
        remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }
}