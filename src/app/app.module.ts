import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    InicioComponent,
    CarrinhoComponent,
    QuemSomosComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
