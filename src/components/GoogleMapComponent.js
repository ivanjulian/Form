import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_API_KEY } from './googleMap';
import './GoogleMapComponent.scss'

const styleMap = {
  width: '50%',
  height: '50%'
}

function GoogleMapComponent(props) {
  return (
    <div className="containerForMap">
      <Map google={props.google} zoom={14} style={styleMap} >

        <Marker /*onClick={onMarkerClick}
         name={'Current location'}*/ />
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: 50.4501, lng: 30.5234 }} />

        <InfoWindow /*onClose={onInfoWindowClose}*/>
          <div>
            {/* <h1>{state.selectedPlace.name}</h1> */}
          </div>
        </InfoWindow>
      </Map>
    </div>

  )
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(GoogleMapComponent)

