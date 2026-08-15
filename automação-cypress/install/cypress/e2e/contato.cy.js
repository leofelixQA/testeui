import { faker } from '@faker-js/faker';


describe('funcionalidade : contato', () => {
beforeEach(() => {
  cy.visit('index.html')
});

  it.only('Deve preencher o formulario de contato com sucesso', () => {
  let nome = faker.person.fullName()
  let email = faker.internet.email()
  cy.get('[name="name"]').type(nome)
  cy.get('[name="email"]').type(email)
  cy.get('[name="subject"]').select("Parcerias")
  cy.get('[name="message"]').type("Mensagem")
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should("exist")
  })
})