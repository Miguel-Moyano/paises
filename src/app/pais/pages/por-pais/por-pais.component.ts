import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent implements OnInit {
  public p: Pais[]=[];
  public paisesSugeridos: Pais[]=[];
public termino: string='';
public errorBusqueda: boolean;
public mostrarSugerencias:boolean= false;
 
  constructor(
    private paisService: PaisService
  ) {
    this.errorBusqueda= false;
     
   }

  ngOnInit(): void {
  }

  buscar(termino: string){
     this.paisService.buscarPais(termino).subscribe(paises=>{
       console.log(paises);
        this.p= paises;
       this.errorBusqueda= false;
       this.mostrarSugerencias=false;
       
     },err=>{
        console.log('error: ', err);
        this.errorBusqueda= true;
        this.p= [];
         
     }
     )
  }

  sugerencias(termino:string){
    this.errorBusqueda= false;
    this.mostrarSugerencias=true;
    this.termino= termino;
    this.paisService.buscarPais(termino).subscribe(paises=>this.paisesSugeridos= paises.splice(0,5), 
    (err)=>{this.paisesSugeridos=[];}
    
    );

  }

  buscarSugerido(termino: string){
    this.buscar(termino);
   

  }

}
