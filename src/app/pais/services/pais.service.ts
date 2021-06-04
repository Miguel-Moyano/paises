import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {
private apiUrl: string= 'https://restcountries.eu/rest/v2';

/*creo un getter, propiedad de la clase */
get httpParams(){
  return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
}

  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Pais[]>{
  const url = `${this.apiUrl}/name/${termino}`;
  return this.http.get<Pais[]>(url, {params: this.httpParams});
              /*.pipe(
                catchError(err=>of([
                  {
                    message: 'no se encontro lo buscado',
                    status: false
                  }
                ])));*/
              
}

buscarPorCapital(termino:string): Observable<Pais[]>{
  const url = `${this.apiUrl}/capital/${termino}`;
  return this.http.get<Pais[]>(url, {params: this.httpParams});
              /*.pipe(
                catchError(err=>of([
                  {
                    message: 'no se encontro lo buscado',
                    status: false
                  }
                ])));*/
              
}

getPais(id:string): Observable<Pais>{
  const url = `${this.apiUrl}/alpha/${id}`;
  return this.http.get<Pais>(url);
              /*.pipe(
                catchError(err=>of([
                  {
                    message: 'no se encontro lo buscado',
                    status: false
                  }
                ])));*/
              
}
getRegion(region:string): Observable<Pais[]>{
  const url = `${this.apiUrl}/region/${region}`;
  return this.http.get<Pais[]>(url, {params: this.httpParams});
              /*.pipe(
                catchError(err=>of([
                  {
                    message: 'no se encontro lo buscado',
                    status: false
                  }
                ])));*/
              
}

 
/*https://restcountries.eu/rest/v2/region/europe*/


}
