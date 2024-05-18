import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Produto } from '../models/produto';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit {

  constructor(private myService: MyServiceService) {
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  title = 'compras-app-2';

  produtos: Produto[] = [];

  carregarProdutos(): void {

    this.myService.getProds().subscribe((prods) => {
      console.log("retorno do rest: " + prods);
      this.produtos = prods;
    });

  }
}
