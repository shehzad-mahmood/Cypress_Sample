import CommonHelperElements from "../../../support/Helpers/CommonHelper.Elements"
import QuickCreateQuoteConstants from "./QuickCreateQuote.Constants"

const ehelper = new CommonHelperElements()

class QuickCreateQuote {
  getSalesNavigator(text) {
    return ehelper.containsTextInElement('.QuoteDashboardHeader', text);
  }

  getSalesNavigatorButton(text) {
    return ehelper.containsElement(text);
  }

  getCreateNew() {
    return ehelper.getElement('[data-uipath="'+QuickCreateQuoteConstants.QUOTECREATE_CREATENEWBTN+'"]', {
      timeout: 60000,     
  });
  }

  getStandardQuoteOnWizard() {
    return ehelper.getElement('[data-uipath="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_SELECTSTANDARDQUOTEBTN+'"]', {
      timeout: 60000,     
  });
  }
  getAdvanceDeal(){
    return ehelper.getElement('[data-uipath="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_SELECTADVANCEDQUOTEBTN+'"]', {
      timeout: 60000,     
  });
  }
  getCustomerNameTextBox() {
    return ehelper.getElement('[data-uipath="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_CUSTOMERNAME+'"]', {
      timeout: 60000,     
  });
  }
  getCustomerNameFromList() {
    return ehelper.getElement('[id="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_CUSTOMERLISTBOX+'"]', {
      timeout: 60000,     
  });
  }
  getOpportunityNameTextBox() {
    return ehelper.getElement('[id="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_OPPORTUNITYNAME+'"]', {
      timeout: 60000,     
  });
  }

  getOpportunityNameFromList() {
    return ehelper.getElement('[id="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_OPPORTUNITYLISTBOX+'"]', {
      timeout: 60000,     
  });
  }
  getContactTextBox() {
    return ehelper.getElement('[data-uipath="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_CONTACTNAME+'"]', {
      timeout: 60000,     
  });
  }
  getQuoteNameTextBox() {
    return ehelper.getElement('[data-uipath="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_QUOTENAME+'"]', {
      timeout: 60000,     
  });
  }
  getQuoteDescriptionTextArea() {
    return ehelper.getElement('[data-uipath="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_QUOTEDESCRIPTIONTEXTAREA+'"] .s-textarea-input', {
      timeout: 60000,     
  }).eq(1);
  }
  getQuoteWizardNextButton() {
    return ehelper.getElement('[data-uipath="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_NEXTBUTTON+'"]', {
      timeout: 60000,     
  });
  }
  getStandardSolutionTypeOnWizard() {
    return ehelper.getElement('[id="'+QuickCreateQuoteConstants.QUICKCREATEPOPUP_SOLUTIONTYPE+'"]', {
      timeout: 60000,     
  });
  }
}
export default QuickCreateQuote
