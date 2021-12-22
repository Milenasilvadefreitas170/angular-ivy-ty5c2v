import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private adicionados: Produto[];
  private valorTotal: number;

  constructor() {
    this.adicionados = [];
    this.valorTotal = 0;

  }

  /** coloca o produto na lista de  adicionados caso ele não esteja (pesquise pelo id) */
  adicionar(prod: Produto) {
    this.adicionados.push(prod);
    this.valorTotal += prod.preco;


  }
  obter() {
    return this.adicionados;
    
  }
  valor () : number {
   return  this.valorTotal ;
  }
 }
