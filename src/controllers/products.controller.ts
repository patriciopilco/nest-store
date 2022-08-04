import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos'
import { ParseIntPipe } from './../common/parse-int.pipe'

@Controller('products')
export class ProductsController {

    @Get()
    getAll(){
        return {
            mesagges:'Todos los registros',
        }
    }

    @Post(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Param('id',ParseIntPipe) id:number, @Body('payload') payload:CreateProductDto){
        return {
            messages: `${id}`,
            payload: `${payload}`
        }
    }

    @Put(':id')
    update(@Param('id') id:number, @Body('payload') payload:UpdateProductDto){
        return {
            messages: `${id}`,
            payload:  `${payload}`
        }
    }    

    @Delete(':id')    
    delete(@Param('id') id:Number) {        
        return {
            messages:'Se eliminó'
        }
    }

    

}
