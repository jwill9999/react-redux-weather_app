import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



class GoogleMap extends Component {

    // on componentDidMount life cycle we create a new map and insert into this.refs
    // componentDidMount() {
    //     new google.maps.Map(this.refs.map, {
    //         zoom: 12,
    //         center: {
    //             lat: this.props.lat,
    //             lng: this.props.lon
    //         }
    //     });
    // }

  

    // Only render empty div with a ref attribute
    render() {
        return (
            <GoogleMapReact            
            center={{lat: this.props.lat, lng: this.props.lon}}
            zoom={this.props.zoom} />
            
                
             
        );
    }
}

export default GoogleMap;

