/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';
import registro from "../support/commands"
import cadastroPage from "../support/pages/cadastro-page"

describe('Funcionalidade : registro', () => {
    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });

    it('Deve preencher o formulario de registro', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type(telefone)
        cy.get('#password').type("senha123")
        cy.get('#confirm-password').type("senha123")
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.get('#user-name').should("contain",nome)
        cy.url().should("contain","dashboard")
    });
    it('deve preencher o formulario de registro com comando customizado', () => {

        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()

        cy.preencherRegistro(nome,email,telefone,"senha123","senha123")
    });
    it.only('deve preencher registro usando page objects', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
    
        cadastroPage.preencherCadastro(nome,email,telefone,"senha123","senha123")
         cy.url().should("contain","dashboard")
         cy.get('#user-name').should("contain",nome)
    });


});