//Bibliotecas
#Include "TOTVS.ch"

/*/{Protheus.doc} zSA4POUI
Acionamento da tela em PO UI do nosso projeto de Transportadoras
@type user function
@author Atilio
@since 19/06/2025
@version version
/*/

User Function zSA4POUI()
    Local aArea := FWGetArea()

    //Aciona a aplicação feita com Angular e PO UI
    FWCallApp("prj-consulta-transportadoras")

    FWRestArea(aArea)
Return
