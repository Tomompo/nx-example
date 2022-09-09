describe('admin', () => {
  beforeEach(() => cy.visit('/iframe.html?id=layoutcomponent--primary'));
  it('should render the component', () => {
    cy.get('rdc-final-layout').should('exist');
  });
});
