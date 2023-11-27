import React, { Component } from 'react'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: true,
        activeMarker: 'Our Team Dev',
      })
    }
  }

  render() {
    const containerStyle = {
      position: 'fixed',
      width: '100%',
      height: this.props.mapheight,
    }

    return (
      <Map
        containerStyle={containerStyle}
        google={this.props.google}
        initialCenter={{
          lat: 13.1391,
          lng: 123.7438,
        }}
        zoom={13}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={'Our Team Dev'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>Our Team Dev</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB8y0FWEsQ2fJrZpK1dY4nCHClHkV_Mezw',
})(MapContainer)
