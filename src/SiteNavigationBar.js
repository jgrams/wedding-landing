import React, { Component } from 'react';

class SiteNavigationBar extends Component {
  render() {
    const navLinks = this.props.navOptions.map((navigationLink) =>
      <li className="Navigation-item"><a className="Navigation-link" onClick={()=>this.props.onClick(navigationLink.page)}>{navigationLink.header}</a></li>
    );
    return (
      <div className="Navigation-bar">
        <ul className="Navigation-list">{navLinks}</ul>
      </div>
    );
  }
}

export default SiteNavigationBar;
