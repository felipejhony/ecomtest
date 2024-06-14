import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-frm',
  templateUrl: './produto-frm.component.html',
  styleUrl: './produto-frm.component.scss'
})
export class ProdutoFrmComponent implements OnInit {

  constructor(private service: ProdutoService) {
  }

  @Input() produto: Produto = new Produto;
  @Input() novo: boolean = false;

  @Output() produtoAtualizado = new EventEmitter<Produto>();

  produtoForm: FormGroup = new FormGroup({
    id: new FormControl(1, Validators.required),
    descricao: new FormControl('', Validators.required),
    preco: new FormControl(null, [Validators.required, Validators.min(0.01)]),
    imagem: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.produtoForm.patchValue(this.produto);
  }

  onSubmit() {
    if (this.novo) {
      this.service.novoProduto(this.produtoForm.getRawValue()).subscribe(() => {
        this.produtoAtualizado.emit(this.produto);
      });
    } else {
      this.service.atualizaProduto(this.produtoForm.getRawValue()).subscribe(() => {
        this.produtoAtualizado.emit(this.produto);
      });
    }
  }

}
