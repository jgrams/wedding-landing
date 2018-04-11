import React, { Component } from 'react';
import RotatingImageBar from './RotatingImageBar';
import SiteNavigationBar from './SiteNavigationBar';
import WeddingDetails from './WeddingDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {active: null,
                  navOptions: [{page: "chicagotodo", header: "To Do"},
                               {page: "registry", header: "Registry"},
                               {page: "dayofdetails", header: "Day Of"},
                               {page: "chicagodetails", header: "Accommodation"}]}
    this.activateLink = this.activateLink.bind(this);
  }

  activateLink(activatedLink) {
    this.setState({
      active: activatedLink
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RotatingImageBar />
          <h1 className="App-title">Welcome to our Wedding</h1>
        </header>
        <div className="App-intro">
          <SiteNavigationBar navOptions={this.state.navOptions} activeLink={this.state.active} onClick={this.activateLink}/>
        </div>
        <WeddingDetails activePage={this.state.active}/>
      </div>
    );
  }
}

export default App;
