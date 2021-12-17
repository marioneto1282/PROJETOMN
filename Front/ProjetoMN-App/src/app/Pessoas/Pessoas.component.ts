import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit,  TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Data, Pessoas } from '../Model/Pessoas';
import { PessoasService } from '../Service/pessoasService';







@Component({
  selector: 'app-Pessoas',
  templateUrl: './Pessoas.component.html',
  styleUrls: ['./Pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  modalRef?: BsModalRef;
  public pessoas: Pessoas[] = [];
  public pessoasFiltradas: Pessoas[] = [];
  public data: Data[] = [];
  private filtroListado = '';
  mostrarApi: boolean = true;



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
                private router: Router){}





    ngOnInit(): void { }



    public getPessoas(): void{
      this.pessoasService.obterPessoas().subscribe(
        response =>{this.pessoas = response.data;
          this.pessoasFiltradas = this.pessoas;
          this.mostrarApi = !this.mostrarApi;
        },
        error => console.log(error));
      }
    }














