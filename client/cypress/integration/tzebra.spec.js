describe('Demo TZebra', () => {
  it('should add items in TODO List', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-cy=new-todo-input-text]').clear();
    cy.get('[data-cy=new-todo-input-text]').type('Crédit d’impôt recherche, la niche fiscale préférée des patrons{enter}');
    cy.get('[data-cy=todo-item]').should('exist').should('contain', 'niche fiscale')
    cy.get('[data-cy=new-todo-input-text]').clear();
    cy.get('[data-cy=new-todo-input-text]').type('CIR, boosté en 2008 sous Sarkozy/Fillon{enter}');
    cy.get('[data-cy=todo-item]').should('exist').should('contain', 'Fillon');
    cy.get('[data-cy=todo-item]').should('exist').should('not.contain', 'Rends l\'argent');
    cy.get('[data-cy=new-todo-input-text]').clear();
    cy.get('[data-cy=new-todo-input-text]').type('https://www.franceculture.fr/sciences/credit-impot-recherche-quand-la-fraude-devient-une-industrie{enter}');
    cy.get('[data-cy=todo-item]:first-of-type')
      .find('[data-cy=todo-item-complete-check]')
      .check()
      .should('have.checked')

    cy.get('[data-cy=new-todo-input-text]').clear();
    cy.get('[data-cy=new-todo-input-text]').type('https://www.lemonde.fr/les-decodeurs/article/2016/09/06/qui-profite-du-credit-d-impot-recherche_4993109_4355770.html{enter}');
    cy.get('[data-cy=new-todo-input-text]').clear();
    cy.get('[data-cy=new-todo-input-text]').type('4-5% d\'entreprises contrôlées. L\'entreprise remplit elle-même le dossier de contrôle{enter}');
    cy.get(':nth-child(1) > [data-testid=todo-item] > [data-testid=view] > [data-cy=todo-body-text]')
      .should('be.visible');
  });

});
