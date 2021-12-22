export class Produto {
  nome: string = '';
  descricao: string = '';
  estoque: number = 0;
  id: number = -1;
  imagem: string = '';
  preco: number = 0.0;
  promocao: boolean = false;
  categoria: string = '';
}

export const __produtos: Produto[] = [
  {
    descricao: 'Smart TV LED 32pol. com aplicativos para acesso a...',
    estoque: 100,
    id: 1,
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3862RkSDGn9IY4ZxwUyoGsFeErBRT_1TaI1hFBHBgzsd7gOE4jITQnrw8mGuxThbGIg-vKI&usqp=CAc',
    nome: 'Smart TV LED 32pol.',
    preco: 1399.78,
    promocao: false,
    categoria: 'SmartTV',
  },

  {
    descricao: '64GB, tela 6,53pol.',
    estoque: 1200,
    id: 2,
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0wGMVB2i8dAYm-x_mQ8jJq4Bm4pivGDRjhHFAMfE8CG1xj18Y03ELaflRhEv1MHzrkDmDJc&usqp=CAc',
    nome: 'Smartphone Android',
    preco: 783.59,
    promocao: true,
    categoria: 'Smartphone',
  },

  {
    descricao: 'Modelo 5 OG Masculino azul',
    estoque: 120,
    id: 3,
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxxw6t7VTXrULTHYBZzSWbeq4baxFs5YFLtkgsQYFHGZxwLVxqTC-vk3PNQDyYrvzvI68z-86&usqp=CAc',
    nome: 'Tênis Asics Gel Kayano 5 OG',
    preco: 459.99,
    promocao: false,
    categoria: 'Tênis',
  },

  {
    descricao:
      'Impressora Multifuncional Epson EcoTank L3150 - Tanque de Tinta Wi-Fi Colorida USB',
    estoque: 1200,
    id: 4,
    imagem:
      'https://a-static.mlcdn.com.br/195x145/impressora-multifuncional-epson-ecotank-l3150-tanque-de-tinta-wi-fi-colorida-usb/magazineluiza/222018500/c6b5c01aa232921290d6df8b687479ca.jpg',
    nome: 'Impressora Epson L3150',
    preco: 999.9,
    promocao: true,
    categoria: 'Informática',
  },
];
