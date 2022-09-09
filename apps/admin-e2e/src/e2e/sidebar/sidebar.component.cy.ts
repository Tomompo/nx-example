describe('admin', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidebarcomponent--primary'));
  it('should render the component', () => {
    cy.get('rdc-final-sidebar').should('exist');
  });
});
