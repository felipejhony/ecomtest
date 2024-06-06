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

  atualizaProduto(produto: any) {
    
    return this.http.post<any>(environment.apiUrl + "/produto", produto);

  }
}
