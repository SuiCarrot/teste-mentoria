import { Injectable} from '@nestjs/common';
import Moeda from 'src/utils/moeda';

@Injectable()
export class ProductService {

  async simul(simulPagamento){
   /*  const simulPagamento { 
            nome: 'Notebook',
            codigo: 154,
            preco: 800000,
            entrada: 50000,
            parcelas: 8 
} */
  let 
    restante = simulPagamento.preco - simulPagamento.entrada,
    valorFinal = '',
    valorParcela = '',
    data
    

  if(simulPagamento.parcelas > 6){ 
    console.log("entrou")
      for (let  i=0; i < simulPagamento.parcelas; i++) {
        restante = restante*0.015 + restante
      }
    valorParcela = Moeda.centsToReal(Math.round(restante/simulPagamento.parcelas))
    valorFinal = Moeda.centsToReal(restante)
    data = {
      numeroParcela: simulPagamento.parcelas, 
      valorFinal, 
      valorParcela,
      taxaJurosAoMes: '0.15%'
    }

    return data
  }

  data = {
      numeroParcela: simulPagamento.parcelas, 
      valorFinal: Moeda.centsToReal(restante), 
      valorParcela: Moeda.centsToReal(Math.round((restante/simulPagamento.parcelas))),
      taxaJurosAoMes: '0%'
  }

  return data
}
}
