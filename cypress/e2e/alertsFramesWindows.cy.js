import alertsFramesWindows from "../support/pages/alertsFramesWindows/alertsFramesWindows";

describe('DemoQA Testing - Alerts, Frames and Windows', () => {

  before(()=>{
    cy.clearAllCookies();
  })
  
  it('Validating Browser Windows', () => {
    alertsFramesWindows.windows();
  });

  it('Validating Alerts', () => {
    alertsFramesWindows.alerts();
  });

  it.only('Validating Frames', () => {
    alertsFramesWindows.frames();
  });

})