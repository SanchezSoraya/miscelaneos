import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {
  alerta:string="alert alert-danger"
  cargando: boolean = false;

  propiedades={
     danger:true
  } 

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.cargando=true;

    setTimeout(() => this.cargando= false, 3000) 
  }

}
