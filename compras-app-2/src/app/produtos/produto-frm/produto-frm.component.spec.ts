import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFrmComponent } from './produto-frm.component';

describe('ProdutoFrmComponent', () => {
  let component: ProdutoFrmComponent;
  let fixture: ComponentFixture<ProdutoFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoFrmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
