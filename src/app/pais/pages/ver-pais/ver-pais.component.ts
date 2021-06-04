import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap} from 'rxjs/operators'
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
public pais!: Pais;
  constructor(
    private activatedRoute: ActivatedRoute,
     private paisService: PaisService ) { }

  ngOnInit(): void {

    this.getPaisId();
    /*this.activatedRoute.params.subscribe(({id})=>{
      this.paisService.getPais(id).subscribe(pais=>{
        console.log('Pais: ', pais);

      }, err=>{
        console.log(err);
      })
    })*/
  }

  getPaisId(){
    this.activatedRoute.params
        .pipe( switchMap(({id})=>this.paisService.getPais(id)))
        .subscribe(pais=>{
          this.pais= pais;
          console.log(this.pais)
        })}
  

}
