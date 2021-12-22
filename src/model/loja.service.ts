import { Injectable } from '@angular/core';
import { Produto, __produtos } from './produto';

@Injectable({ providedIn: 'root' })
export class LojaService {
  constructor() {}

  /** Obtém todos os produtos  */
  obterProdutos() {
    return __produtos;
  }

  /** Devolve apenas produtos em promoção */
  obterProdutosPromocao() {
    /**let promo: Produto[] = [];
    for (let i = 0; i < __produtos.length; i++) {
      if (__produtos[i].promocao === true) {
        promo.push(__produtos[i]);
      }
    });

    //let promo: Produto[] = [];
    __produtos.forEach((prod) => {
      if (prod.promocao === true) {
        promo.push(prod);
      }
    });*/

    return __produtos.filter((prod) => prod.promocao === true);
  }
}
