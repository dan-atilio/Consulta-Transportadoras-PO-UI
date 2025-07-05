# Consulta-Transportadoras-PO-UI
Projeto para consulta da tabela SA4 (Transportadoras) do Protheus em PO UI

A montagem desse projeto, é demonstrada nesse artigo: 
* [clique aqui](https://terminaldeinformacao.com/2025/07/05/criacao-de-tela-usando-angular-po-ui-e-protheus-lib-core-ti-especial-0006/)

## O que foi utilizado no Projeto?
Abaixo a lista de recursos que foi utilizada no desenvolvimento desse projeto:

* API em REST no Back-End (com WSRestFul em AdvPL)
* Angular
* PO UI
* PO Theme - TOTVS Default Theme
* Protheus-lib-core
* Utilização de SessionStorage
* FWCallApp

## Comandos executados
Abaixo a lista de comandos executados:

```
npm i -g @angular/cli@19
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
ng new Prj_ConsultaTransportadoras --skip-install
[editar package.json e definir dependências]
npm install
ng add @po-ui/ng-components
npm i @totvs/po-theme
[editar angular.json e definir estilos]
npm i subsink
npm i @totvs/protheus-lib-core@latest --force
[criar appConfig.json e editar angular.json na parte de assets, e adicionar provider]
ng generate component components/about
ng generate component components/view
[edição dos fontes]
ng serve
[testar no navegador]
ng test
[validar o resultado dos testes]
ng build
```

## Exemplo no YouTube
Abaixo um vídeo de exemplo do projeto:

[![YouTube](https://img.youtube.com/vi/Jl81Jq9eICg/0.jpg)](https://www.youtube.com/watch?v=Jl81Jq9eICg)
