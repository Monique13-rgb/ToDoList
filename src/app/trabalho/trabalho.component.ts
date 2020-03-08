import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent implements OnInit {


  tarefa : String = "";
  tarefas : Array<String> = [
    "Tarefa 1",
    "Tarefa 2",
    "Tarefa 3",
    "Tarefa 4",
    "Tarefa 5"
  ];
constructor() { }

  ngOnInit(): void {
  }
  adicionar() {
    this.tarefas.push(this.tarefa);
    this.tarefa = "";
  }
  remover(batata2) {
    this.tarefas.splice(batata2,1);
    
  }
}
