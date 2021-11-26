import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.intefaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[] , orderPor: String='sin valor'): Heroe[] {
    switch(orderPor){
      case 'nombre':
        return heroes.sort((a,b)=>(a.nombre>b.nombre)? 1 : -1) //1:-1 le da orden descendente
      case 'vuela':
        return heroes.sort((a,b)=>(a.vuela>b.vuela)? -1 : 1) //1:-1 los falsos son 0 y los verdaderos 1
      case 'color':
        return heroes.sort((a,b)=>(a.color>b.color)? 1 : -1) //
      default:
        return heroes
    }
  }
}
