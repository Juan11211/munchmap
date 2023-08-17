"use client" 

import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'
import React, { useContext } from 'react'
import { UserLocationContext } from '@/context/UserLocation'
import Markers from './Markers'



function GoogleMapView({ businessList }) {


  const {userLocation,setUserLocation}=useContext(UserLocationContext)
    const containerStyle= { 
        width: "100%",
        height: '70vh'
    }

        console.log(userLocation)
  return (
    <div>
      <LoadScript 
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={['ad39cfcddc6c5e00']}
        >
            {/* Map component will be rendered here */}
            <GoogleMap 
                mapContainerStyle={ containerStyle } 
                center={ userLocation }
                options={{ mapId: 'ad39cfcddc6c5e00'}}
                zoom={12}>
                

                <MarkerF
                    position={userLocation}
                    icon={{
                        url: '/userLocation.png',
                        scaledSize:{
                          width:50,
                          height:50
                        },
                        alt: 'usericon'
                    }}
                />

               {businessList.map((item,index)=>index<=7&&(
                <Markers business={item} key={index}/>
              ))}
            </GoogleMap>
        
      </LoadScript>
    </div>
  )
}

export default GoogleMapView
