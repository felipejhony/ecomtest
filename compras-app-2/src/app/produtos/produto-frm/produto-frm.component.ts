import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-frm',
  templateUrl: './produto-frm.component.html',
  styleUrl: './produto-frm.component.scss'
})
export class ProdutoFrmComponent implements OnInit {

  @Input() produto: Produto = new Produto;

  produtoForm: FormGroup = new FormGroup({
    id: new FormControl(1, Validators.required),
    descricao: new FormControl('', Validators.required),
    preco: new FormControl(null, [Validators.required, Validators.min(0.01)]),
    imagem: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    console.log(this.produto);
    
    this.produtoForm.patchValue(this.produto);
  }

  onSubmit() {
  }
}
