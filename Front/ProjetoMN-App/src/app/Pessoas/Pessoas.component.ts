
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoas } from '../Model/Pessoas';
import { PessoasService } from '../Service/pessoasService';







@Component({
  selector: 'app-Pessoas',
  templateUrl: './Pessoas.component.html',
  styleUrls: ['./Pessoas.component.css']
})
export class PessoasComponent implements OnInit {


  public pessoas: Pessoas[] = [];
  public pessoasFiltradas: Pessoas[] = [];
  private filtroListado = '';



  public get filtroLista(): string{
    return this.filtroListado;
  }

  public set filtroLista(value: string){
    this.filtroListado = value;
    this.pessoasFiltradas = this.filtroLista ? this.filtrarPessoas(this.filtroLista) : this.pessoas;
  }

  public filtrarPessoas(filtrarPor: string): Pessoas[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.pessoas.filter(
      (pessoa: any) => pessoa.name.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      pessoa.email.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }


  constructor(private pessoasService: PessoasService,
    private router: Router)
    {

    }



    ngOnInit(): void {
      this.getPessoas()
    }



    public getPessoas(): void{
      this.pessoasService.getPessoas().subscribe(
        {
        next: (pessoas: Pessoas[])  => {
          this.pessoas = pessoas;
          this.pessoasFiltradas = this.pessoas;
        },
        error: (error: any) => console.log(error),
      })

        console.log(this.pessoas);
    }


  }









