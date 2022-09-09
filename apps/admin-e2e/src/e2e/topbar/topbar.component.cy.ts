describe('admin', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('rdc-final-topbar').should('exist');
  });
});
