import * as React from 'react';
import './index.less';

interface IWeatherProps {
  type: string;
  title: string;
}

class Weather extends React.Component<IWeatherProps> {

  constructor(props: IWeatherProps) {
    super(props);
  }
  public render() {
    const { title, type } = this.props;
    return (
      <div className={`weather ${type}`}>
        <span className="title">
          {title}
        </span>
        <div className="condition">
          <i className="fa-duotone fa-cloud-showers-heavy" />
          <div className="d-flex flex-column">
            <span className="degree">19<span className="circle">o</span></span>
            {type === 'large' && <label>Clouds</label>}
          </div>
        </div>
      </div>
    );
  }
}
export default Weather;
