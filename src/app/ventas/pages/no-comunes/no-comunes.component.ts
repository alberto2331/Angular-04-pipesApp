import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  //i18nSelect
  nombre:string="Marta";
  genero:string="femenino";
  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //objeto
  persona={
    nombre: "Alberto",
    apellido:"Saiz",
    edad: "28"
  }

  //i18nPlural
  clientes:string[]=['Carlos','Alberto','Jose','Roxana'];
  clientesMapa={
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };
  cambiarPersona(){
    this.nombre="Carlos";
    this.genero="masculino";
  }
  eliminarPersona(){
    this.clientes.pop();
  }
  //Json pipe: creamos un arreglo:
  heroes=[
    {
      nombre:'Superman',
      vuela: true
  },
  {
    nombre:'Batman',
    vuela: false
  }  
  ]
  //Async Pipe: importamos "interval" de rxjs:
  miObservable = interval(1000) // 0,1,2,3,....,1000
  valorPromesa = new Promise((resolve, rejects)=>{
    
    setTimeout(()=>{
      resolve('Tenemos data de la promesa');
    },3500);
  });
}
