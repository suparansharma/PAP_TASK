import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '700px'
};

const location = {
    
  lat: 23.833348,
  lng: 90.419049
};


function Direction() {


const [directionResponse, setDirectionResponse] =useState(null);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAlLvZr-xXGkQuzjj2tSmOzCKQMahFLh4U"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={16}
      >


<DirectionsService
                  // required
                  options={{
                    destination: "Gulsan 1 circle Dhaka Bangladesh",
                    origin: "Bannai 11 City Bank Dhaka Bangladesh",
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={
                      res =>{
                          if(res !== null){
                              setDirectionResponse(res);
                          }
                      }
                  }
                 
                />




{
    directionResponse &&<DirectionsRenderer
    // required
    options={{ 
      directions: directionResponse
    }}
    
  />
}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)