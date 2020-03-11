import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo-salario',
  templateUrl: './calculo-salario.component.html',
  styleUrls: ['./calculo-salario.component.css']
})
export class CalculoSalarioComponent implements OnInit {

salario:string;
adicionarGasto: string;
gastos:number[] = [];
restante :number;
corFundo: string;

  constructor() { }

  ngOnInit(): void {
  }
adicionar(){
  this.gastos.push(+this.adicionarGasto);
  this.adicionarGasto = '';

  this.atualizarValorRestante();
}
atualizarValorRestante(){
  let totalGasto = 0;
  this.gastos.forEach(valor => totalGasto += valor);

  this.restante = +this.salario - totalGasto;
}
}
