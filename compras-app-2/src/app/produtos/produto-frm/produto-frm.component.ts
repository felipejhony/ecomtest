import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../produto.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-produto-frm',
  templateUrl: './produto-frm.component.html',
  styleUrl: './produto-frm.component.scss',
  providers: [MessageService]
})
export class ProdutoFrmComponent implements OnInit {

  constructor(private service: ProdutoService, private messageService: MessageService) {
  }

  @Input() produto: Produto = new Produto;

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
    this.service.atualizaProduto(this.produtoForm.getRawValue()).subscribe(() => {
      console.log("Cheguei");
      
      this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Atualizado com sucesso!'});

      this.produtoAtualizado.emit(this.produto);
    });
  }

}
