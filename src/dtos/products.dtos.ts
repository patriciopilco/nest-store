import { IsString, IsNotEmpty,IsUrl } from 'class-validator';

export class CreateProductDto {
    
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    @IsUrl()
    readonly image: string;
}

export class UpdateProductDto {
    readonly name?: string;
    readonly description?: string;
    readonly price?: number;
    readonly stock?: number;
    readonly image?: string;
}