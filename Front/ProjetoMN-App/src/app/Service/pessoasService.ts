import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoas } from '../Model/Pessoas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  baseURL= 'https://localhost:5001/api/Pessoas'

  constructor(private http: HttpClient) { }


  public getPessoas(): Observable<Pessoas[]>{
    return this.http.get<Pessoas[]>(this.baseURL);
  }

  public getPessoasByName(name: string): Observable<Pessoas[]>{
    return this.http.get<Pessoas[]>(`${this.baseURL}/${name}/name`);
  }

}
