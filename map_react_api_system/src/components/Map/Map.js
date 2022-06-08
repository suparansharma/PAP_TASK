import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '700px'
};

const location = {
    
  lat: 23.833348,
  lng: 90.419049
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAlLvZr-xXGkQuzjj2tSmOzCKQMahFLh4U"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={16}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
      onLoad={onLoad}
      position={location}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)