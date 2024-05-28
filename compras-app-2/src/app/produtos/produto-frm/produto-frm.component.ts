import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produto-frm',
  templateUrl: './produto-frm.component.html',
  styleUrl: './produto-frm.component.scss'
})
export class ProdutoFrmComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      image: [''],
      description: [''],
      category: [''],
      price: [null]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.productForm.value);
  }
}
