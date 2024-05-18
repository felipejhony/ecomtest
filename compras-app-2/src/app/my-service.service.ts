import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Produto } from './models/produto';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getProds() {

    return this.http.get<Produto[]>(environment.apiUrl + "/myresource");
    
  }
}
