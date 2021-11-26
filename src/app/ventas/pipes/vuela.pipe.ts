import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'vuela',
})
export class VuelaPipe implements PipeTransform{
    transform(puedeVolar:boolean): string{        
        if(puedeVolar){
            return "vuela";
        } else{
            return "no vuela";
        }        
    }    
}