import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-Pessoas',
  templateUrl: './Pessoas.component.html',
  styleUrls: ['./Pessoas.component.css']
})
export class PessoasComponent implements OnInit {


  public pessoas : any;



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetPessoas();
  }

  public GetPessoas(): void{
    this.http.get('https://localhost:5001/api/Pessoas').subscribe(
      response => {this.pessoas = response;
      this.pessoas = this.pessoas.data},
      error => console.log(error)
      );
    }
  }










