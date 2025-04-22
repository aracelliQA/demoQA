import '../../commands'

class alertsFramesWindows {

    windows(){
        
        cy.visit('/browser-windows');
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
          });
        cy.get('#tabButton').click();
        cy.get('@windowOpen').should('be.calledWithMatch', '/sample');
        cy.log('New Tab validated.')
        cy.visit('/browser-windows');
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
          });
        cy.get('#windowButton').click();
        cy.get('@windowOpen').should('be.calledWithMatch', '/sample');
        cy.log('New Window validated.')
        cy.visit('/browser-windows');
        cy.window().then((win) => {
            const docWriteStub = cy.stub();
            const fakeWindow = {
              document: {
                write: docWriteStub
              }
            };
            cy.stub(win, 'open').returns(fakeWindow).as('windowOpen');
          });
          cy.get('#messageWindowButton').click();
          cy.get('@windowOpen').should('be.called');
          cy.get('@windowOpen').then((stub) => {
            const fakeWindow = stub.returnValues[0];
            expect(fakeWindow.document.write).to.have.been.calledWith('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
          })
          cy.log('New Window message validated.')
}


    alerts(){
        cy.visit('/alerts');
        cy.get('#alertButton').click();
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('You clicked a button');
        });
        cy.log('Alert validated.')
        cy.get('#timerAlertButton').click();
        cy.wait(5000);
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('This alert appeared after 5 seconds');
        });
        cy.log('Alert after 5 seconds validated.')
        cy.get('#confirmButton').click();
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Do you confirm action?');
        });
        cy.log('Confirmation alert validated.')
        cy.get('#promtButton').click();
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Please enter your name');
        });
        cy.log('Promt alert validated.')  

    
    }

    frames(){
        cy.visit('/frames');
        cy.get('#frame1').should('be.visible');
        cy.get('#frame2').should('be.visible');
    }
 




}

export default new alertsFramesWindows();