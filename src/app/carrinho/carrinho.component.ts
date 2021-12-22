import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../model/carrinho.service';
import { LojaService } from '../../model/loja.service';
import { Produto } from '../../model/produto';




@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  private valorTotal: number;

  constructor(private ls: LojaService, private cs: CarrinhoService) { 
  }
  produto: Produto[];

  valor() {
   return this.valorTotal;
  }

  ngOnInit() {
    this.produto = this.cs.obter();
    this.valorTotal = this.cs.valor();

  }

}
