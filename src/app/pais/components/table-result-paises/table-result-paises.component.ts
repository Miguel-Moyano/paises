import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-table-result-paises',
  templateUrl: './table-result-paises.component.html',

})
export class TableResultPaisesComponent implements OnInit {
@Input() paises: Pais[]=[];
 
  constructor() { }

  ngOnInit(): void {
  }

}
