import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProds() {

    return this.http.get<Produto[]>(environment.apiUrl + "/produto");

  }

  atualizaProduto(produto: Produto) {

    return this.http.patch<Produto>(environment.apiUrl + "/produto", produto);

  }

  deletaProduto(produto: Produto) {

    return this.http.delete<Produto>(environment.apiUrl + "/produto", { body: produto });

  }

  novoProduto(produto: Produto) {

    return this.http.post<Produto>(environment.apiUrl + "/produto", produto);

  }

}
