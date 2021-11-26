import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.intefaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  constructor() { }
  heroes:Heroe[]=[
    {
      nombre  :'Superman',
      vuela   :true,
      color   :Color.rojo
    },
    {
      nombre  :'Batman',
      vuela   :false,
      color   :Color.negro
    },
    {
      nombre  :'Robin',
      vuela   :false,
      color   :Color.verde
    },
    {
      nombre  :'DareDevil',
      vuela   :false,
      color   :Color.rojo
    },
    {
      nombre  :'Linterna Verde',
      vuela   :true,
      color   :Color.verde
    },
  ];
  
  may:boolean=true;
  mayus(){
    
    if(this.may){
      this.may=false;      
    }else{
      this.may=true;
    }
  }

  ordenarPor:String='';
  cambiarOrden(valor:String){
    this.ordenarPor=valor;
  }

}
