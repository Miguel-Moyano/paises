import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 6px;
    }  
    `
  ]
})
export class PorRegionComponent implements OnInit {
 public regiones: string[]= [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
 public regionActiva:string=''; 
 public paises: Pais[]=[];
 constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
  }


  selecRegion(region:string){
    if(region ==this.regionActiva)return;


    this.regionActiva= region;
    this._paisService.getRegion(region).subscribe(paises=>{
     this.paises= paises;
 
    })
  }

  getClassCss(region:string):string{
    return (region === this.regionActiva) ?'btn btn-primary': 'btn btn-outline-primary'
  }

}
