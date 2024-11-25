describe('Crear una tarea1', () => {
  it('Crear tarea1', () => {
    cy.visit('https://todomvc.com/examples/react/dist/');
    cy.get('[data-testid="text-input"]').type('Comprar el pan{enter}');
    cy.get('.todo-list li').should('contain', 'Comprar el pan');
  })
})
it('Marca una tarea como completada2', () => {
  cy.visit('https://todomvc.com/examples/react/dist/');
  cy.get('[data-testid="text-input"]').type('Comprar el pan{enter}');
  cy.get('.todo-list li .toggle').click();
  cy.get('.todo-list li').should('have.class', 'completed');
})
it('Desmarca una tarea completada3', () => {
  cy.visit('https://todomvc.com/examples/react/dist/');
  cy.get('[data-testid="text-input"]').type('Comprar el pan{enter}');
  cy.get('.todo-list li .toggle').click(); 
  cy.get('.todo-list li .toggle').click(); 
  cy.get('.todo-list li').should('not.have.class', 'completed');
});
it('Borra una tarea5', () => {
  cy.visit('https://todomvc.com/examples/react/dist/');
  cy.get('[data-testid="text-input"]').type('Comprar el pan{enter}');
  cy.get('.todo-list li .destroy').invoke('show').click(); 
  cy.get('.todo-list li').should('not.exist'); 
})
it('4Edita tarea 4', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('.new-todo')
    .type('comprar el pan{enter}')
  cy.get('.todo-list li')
    .contains('comprar el pan')
    .should('exist')
  cy.get('.todo-list li')
  .contains('comprar el pan')
  .dblclick()
  .should('be.visible')
  .clear()
  .type('comprar pan integral{enter}')
    .contains('comprar el pan')
    .dblclick()
  cy.wait(5000)
  cy.get('.todo-list li.editing')
  .within(() => {
    cy.get('input.edit') 
      .should('be.visible')
      .clear()
      .type('comprar pan integral{enter}')
  cy.get('.todo-list li')
    .contains('comprar pan integral')
    .should('exist')
 })
})
it('Edita una tarea 4.2', () => {
  cy.visit('https://todomvc.com/examples/react/dist/');
  cy.get('[data-testid="text-input"]').type('Comprar el pan{enter}');  
  cy.get('.todo-list li').should('contain', 'Comprar el pan'); 
  cy.get('.todo-list li label').dblclick({ force: true }); 
  cy.get('.todo-list li.editing .edit').should('be.visible'); 
  cy.get('.todo-list li.editing .edit')
      .clear()
      .type('Comprar leche{enter}');
  cy.get('.todo-list li').should('contain', 'Comprar leche');
})

  it('Filtra tareas Tarea6', () => {
    cy.visit('https://todomvc.com/examples/react/dist/');
    cy.get('[data-testid="text-input"]').type('Tarea 1{enter}');
    cy.get('[data-testid="text-input"]').type('Tarea 2{enter}');
    cy.get('.todo-list li:nth-child(1) .toggle').click();
    cy.contains('Completed').click();
    cy.get('.todo-list li').should('have.length', 1).and('contain', 'Tarea 1');
    cy.contains('Active').click();
    cy.get('.todo-list li').should('have.length', 1).and('contain', 'Tarea 2');
    cy.contains('All').click();
    cy.get('.todo-list li').should('have.length', 2);
  });

