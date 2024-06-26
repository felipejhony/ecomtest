import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosComponent } from './produtos/produtos.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { ProdutoFrmComponent } from './produtos/produto-frm/produto-frm.component';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ExpandRowsDirective } from './directives/expand-rows.directive';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoFrmComponent,
    ExpandRowsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CardModule,
    ButtonModule,
    ImageModule,
    BrowserAnimationsModule,
    TagModule,
    AccordionModule,
    TooltipModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    ToolbarModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
