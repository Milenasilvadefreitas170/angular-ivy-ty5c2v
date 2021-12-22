import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../model/carrinho.service';
import { LojaService } from '../../model/loja.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  produtos: Produto[];
  iconURL: string;

  constructor(private ls: LojaService, private cs: CarrinhoService) {
    this.produtos = [];
       this.iconURL = 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3862RkSDGn9IY4ZxwUyoGsFeErBRT_1TaI1hFBHBgzsd7gOE4jITQnrw8mGuxThbGIg-vKI&usqp=CAc',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0wGMVB2i8dAYm-x_mQ8jJq4Bm4pivGDRjhHFAMfE8CG1xj18Y03ELaflRhEv1MHzrkDmDJc&usqp=CAc',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxxw6t7VTXrULTHYBZzSWbeq4baxFs5YFLtkgsQYFHGZxwLVxqTC-vk3PNQDyYrvzvI68z-86&usqp=CAc',
      'https://a-static.mlcdn.com.br/195x145/impressora-multifuncional-epson-ecotank-l3150-tanque-de-tinta-wi-fi-colorida-usb/magazineluiza/222018500/c6b5c01aa232921290d6df8b687479ca.jpg';
      
  }

  ngOnInit() {
    this.produtos = this.ls.obterProdutos();
  }

  adicionar(pr: Produto) {
    this.cs.adicionar(pr);
  }
}
