import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

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
    create(@Param('id') id:number, @Body('payload') payload:any){
        return {
            messages: `${id}`,
            payload: `${payload}`
        }
    }

    @Put(':id')
    update(@Param('id') id:number, @Body('payload') payload:any){
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
