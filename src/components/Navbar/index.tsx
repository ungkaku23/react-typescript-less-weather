import * as React from 'react';
import './index.less';

class Navbar extends React.Component {
  public render() {
    return (
      <ul className="navbar">
        <li><a className="active font-lg" href="#">OTTAWA</a></li>
        <li><a className="font-lg" href="#">MOSCOW</a></li>
        <li><a className="font-lg" href="#">TOKYO</a></li>
      </ul>
    );
  }
}
export default Navbar;
