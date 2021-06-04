import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  public p: Pais[]=[];
  public termino: string='';
  public errorBusqueda: boolean;
 
  constructor(
    private paisService: PaisService
  ) {
    this.errorBusqueda= false;
     
   }

  ngOnInit(): void {
  }

  buscar(termino: string){
     this.paisService.buscarPorCapital(termino).subscribe(paises=>{
       console.log(paises);
        this.p= paises;
       this.errorBusqueda= false;
       
     },err=>{
        console.log('error: ', err);
        this.errorBusqueda= true;
        this.p= [];
         
     }
     )
  }

}
