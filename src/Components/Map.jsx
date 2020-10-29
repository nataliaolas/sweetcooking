import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          //   bootstrapURLKeys={/*{ key:  }*/}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={74.55555}
            lng={40.42222}
            text="Cafee"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;