//CICLO COMPLETO DE VIDA DE UN COMPONENTE 
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <p>
        Hola mundo desde app..component
    </p>
    <hr>
    <p [appResaltado]="'purple'">
        Hola estrellitas
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})

//CICLO COMPLETO DE VIDA DE UN COMPONENTE 
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy  {

  constructor() {
    console.log("constructor");
   }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges (){
    console.log("ngOnChanges");
  }
  ngDoCheck (){
    console.log("ngDoCheck");
  }
  ngAfterContentInit (){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked (){
    console.log("ngAfterContentChecked");
   }
  ngAfterViewChecked () {
    console.log("ngAfterViewChecked");
    }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    }
  ngOnDestroy (){
    console.log("ngOnDestroy");
     }

}
