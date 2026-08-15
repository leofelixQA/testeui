class CadastroPage {

//seletores
campoNome() {return cy.get('#name')}
campoEmail() {return cy.get('#email')}
campoTelefone() {return cy.get('#phone')}
campoSenha() {return cy.get('#password')}
campoConfirmarSenha() {return cy.get('#confirm-password')}
termosCheck() {return cy.get('#terms-agreement')}
botaoCriarConta() {return cy.get('#register-btn')}

//métodos
visitarPaginaCadastro() {
    cy.visit ("register.html")
}
 

preencherCadastro(nome,email,telefone,senha,ConfirmarSenha) {

this.campoNome().clear().type(nome)
this.campoEmail().clear().type(email)
this.campoTelefone().clear().type(telefone)
this.campoSenha().clear().type(senha,{log: false})
this.campoConfirmarSenha().clear().type(ConfirmarSenha,{log: false})
this.termosCheck().check()
this.botaoCriarConta().click()
}


}

export default new CadastroPage()