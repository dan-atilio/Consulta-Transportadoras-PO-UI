import { Component } from '@angular/core';

import { 
  PoInfoModule, 
  PoFieldModule,
  PoNotificationService
} from '@po-ui/ng-components';

import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view',
  imports: [
    PoInfoModule,
    PoFieldModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(
    private http : HttpClient,
    private poNotification : PoNotificationService
  ) {};

  public a4Cod : string = "";
  public a4Nome : string = "";
  public a4Email : string = "";
  public a4HPage : string = "";
  public a4Contato : string = "";

  validSA4() : void {
    //Define a duração das mensagens (em milissegundos)
    this.poNotification.setDefaultDuration(4000);

    //Variáveis usadas a partir da versão 19:
    var urlBase: string = "";
    var appConfig: string = "";
    var jsonConfig;
    var appErpToken: string = "";
    var jsonErpToken;
    var httpOptions = {};

    //Se tiver rodando via navegador (foi comentado pois para o Protheus, pelo menos na LIB que testamos, também estava precisando)
    //if (sessionStorage.getItem("insideProtheus") == "0") {

      //Busca a url base dentro do appConfig.json
      appConfig = sessionStorage.getItem('ERPAPPCONFIG') ?? '';
      jsonConfig = JSON.parse(appConfig);
      urlBase = jsonConfig.api_baseUrl;

      //Busca o Token do Protheus
      appErpToken = sessionStorage.getItem('ERPTOKEN') ?? '';
      jsonErpToken = JSON.parse(appErpToken);

      //Define manualmente o httpOptions
      httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':   'application/json',
        'Authorization':  'Bearer ' + jsonErpToken.access_token
      })};
    //}

    this.a4Nome = "";
    this.a4Email = "";
    this.a4HPage = "";
    this.a4Contato = "";

    if (this.a4Cod.trim().length === 0) {
      console.log("Não foi informado transportadora");
    }
    else {
      this.http.get<any>(urlBase + '/zWSSA4/get_id?id=' + this.a4Cod, httpOptions).subscribe({
        next: (v) => {
          this.poNotification.success('Transportadora encontrada com sucesso!');

          this.a4Nome = v.nome;
          this.a4Email = v.email;
          this.a4HPage = v.hpage;
          this.a4Contato = v.contato;
        },
        error: (e) => {
          this.poNotification.error('Transportadora não encontrada!');
          console.error("Falha buscar os dados: " + e)
        },
        complete: () => {
          console.log('Busca dos dados completa');
        }
      });
    }
  }

}
