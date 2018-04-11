import React, { Component } from 'react';

class Registry extends Component {
  render() {
    return (
      <div>
        <p>We're not accepting gifts, we're grateful for your presence.</p>
        <p>If you would like to give a gift in honor of our wedding, we would be delighted if you would make a donation to causes we support.</p>
        <div className="Donation-links">
            <div className="Donation-link">
                <a href="https://secure2.convio.net/gcfd/site/Donation2?8743.donation=form1&df_id=8743&mfc_pref=T">Greater Chicago Food Depository</a>
            </div>
            <div className="Donation-link">
                <a href="https://nnaf.formstack.com/forms/donate">National Network of Abortion Funds</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Registry;
