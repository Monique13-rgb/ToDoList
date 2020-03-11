import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosComponent } from './exemplos/exemplos.component';

import { FormsModule } from '@angular/forms';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { CalculoSalarioComponent } from './calculo-salario/calculo-salario.component';


@NgModule({
  declarations: [
    AppComponent,
    ExemplosComponent,
    TrabalhoComponent,
    CalculoSalarioComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
