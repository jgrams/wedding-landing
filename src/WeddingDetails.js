import React, { Component } from 'react';
import ChicagoToDo from './pages/ChicagoToDo';
import Registry from './pages/Registry';
import DayOfDetails from './pages/DayOfDetails';
import ChicagoDetails from './pages/ChicagoDetails';

class WeddingDetails extends Component {
  selectPage(activePage) {
    if (activePage === 'chicagotodo') {
      return <ChicagoToDo/>
    } else if (activePage === 'registry') {
      return <Registry/>
    } else if (activePage === 'dayofdetails') {
      return <DayOfDetails/>
    } else if (activePage === 'chicagodetails') {
      return <ChicagoDetails/>
    } else {
      return null;
    }
  }

  render() {
    var activePage = this.props.activePage;
    var page = activePage ? this.selectPage(activePage) : null;
    return (
      <div className="Details">
        {page}
      </div>
    );
  }
}

export default WeddingDetails;
