import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent implements OnInit {


  tarefa : String = "";
  tarefas = [];
  ;
constructor() { }

  ngOnInit(): void {
  }
  adicionar() {
    if(!this.tarefas || this.tarefa.length === 0) {
    return;
    }
this.tarefas.push({descricao: this.tarefa, concluida: false});

  }
  remover(batata2) {
    this.tarefas.splice(batata2,1);
    
  }
}
