import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from './produto.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit {

  constructor(private service: ProdutoService) {
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  produtos: Produto[] = [];

  carregarProdutos(): void {

    this.service.getProds().subscribe((prods) => {
      this.produtos = prods;
    });

  }
}
