import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../Model/Pessoas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {



  baseURL= 'https://localhost:5001/api/Pessoas'

  constructor(private http: HttpClient) { }


  public obterPessoas(): Observable<Data>{
    return this.http.get<Data>(this.baseURL);
  }

  public obterPessoasByName(name: string): Observable<Data>{
    return this.http.get<Data>(`${this.baseURL}/${name}/name`);
  }

}
