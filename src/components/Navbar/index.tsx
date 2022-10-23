import * as React from 'react';
import './index.less';

class Navbar extends React.Component {
  public render() {
    return (
      // <nav className='navbar'>
        <ul className="navbar">
          <li><a className="active" href="">OTTAWA</a></li>
          <li><a href="">MOSCOW</a></li>
          <li><a href="">TOKYO</a></li>
        </ul>
      // </nav>
    );
  }
}
export default Navbar;
