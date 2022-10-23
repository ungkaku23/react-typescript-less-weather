import * as React from 'react';
import Weather from '../Weather';
import './index.less';

class Home extends React.Component {
  public render() {
    return (
      <div className="home container text-center">
        <Weather type="large" title="Today"/>
        <div className="forecast row">
          <div className="col-md-3">
            <Weather type="small" title="Wed"/>
          </div>
          <div className="col-md-3">
            <Weather type="small" title="Thu"/>
          </div>
          <div className="col-md-3">
            <Weather type="small" title="Fri"/>
          </div>
          <div className="col-md-3">
            <Weather type="small" title="Sat"/>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
