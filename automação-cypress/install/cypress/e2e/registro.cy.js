import { faker } from '@faker-js/faker';
import registro from "../support/commands"

describe('Funcionalidade : registro', () => {
    beforeEach(() => {
        cy.visit("register.html")
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


});