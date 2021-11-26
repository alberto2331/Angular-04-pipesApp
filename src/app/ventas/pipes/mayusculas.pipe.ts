import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'mayusculas',
})
export class MayusculasPipe implements PipeTransform{
    transform(value:string, enMayuscula: boolean):string{
        
        return (enMayuscula) 
        ? value.toUpperCase() 
        : value.toLowerCase();
    }
}