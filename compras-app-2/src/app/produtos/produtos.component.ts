import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from './produto.service';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
  providers: [MessageService]
})
export class ProdutosComponent implements OnInit {

  @ViewChild("dt") table!: Table;

  produtos: Produto[] = [];
  expanded: boolean = true;

  constructor(private service: ProdutoService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {

    this.service.getProds().subscribe((prods) => {
      this.produtos = prods;
    });
  }

  onProdutoAtualizado(produtoAtualizado: Produto): void {
    
    this.carregarProdutos();
    this.expanded = false;
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Atualizado com sucesso!'});
  }

  toggleExpanded(): void {
    this.expanded = true;
  }

  deletar(item: Produto): void {
    
    this.service.deletaProduto(item).subscribe(() => {
      this.carregarProdutos();
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Removido com sucesso!'});
    });
  }
}
