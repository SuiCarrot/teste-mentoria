import { ApiProperty } from '@nestjs/swagger';

export class SimulProductDto {

    @ApiProperty({
        description: 'Nome do produto',
        example: 'Notebook',
    })
    nome: string

    @ApiProperty({
        description: 'Valor de entrada do produto em centavos',
        example: '154',
    })
    codigo: number;

    @ApiProperty({
        description: 'Valor de entrada do produto em centavos',
        example: '800000',
    })
    preco: number;

    @ApiProperty({
        description: 'Valor de entrada do produto em centavos',
        example: '50000',
    })
    entrada: number;

    @ApiProperty({
        description: 'Numero de parcelas',
        example: '8',
    })
    parcelas: number; 
}
