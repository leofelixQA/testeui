/// <reference types="cypress"/>

import catalogo from "../fixtures/livros.json"

describe('funcionalidade : catalogo', () => {
    beforeEach(() => {
        cy.visit("catalog.html")
    });

    it('deve procurar um livro do catalogo', () => {
        cy.get('#search-input').type("1984")
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should("contain",[1])
    });

    it('deve fazer a busca de um livro do catalogo usando massa de dados', () => {
        cy.get('#search-input').type(catalogo[0].livro)
        cy.get('.card-title').should("contain",catalogo[0].livro)
    });

    it.only('deve fazer a busca de todos os livros usando Fixture', () => {
        cy.fixture("livros").then((qualquercoisa)=>{
            qualquercoisa.forEach(coisaalguma=>{
                cy.get('#search-input').clear().type(coisaalguma.livro)
            })

        })
    });


   
});