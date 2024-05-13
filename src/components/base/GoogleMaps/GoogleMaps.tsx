'use client';

import { memo, useCallback, useRef, useState } from 'react';
import {
  GoogleMap,
  InfoWindow,
  Libraries,
  Marker,
  // Marker,
  useJsApiLoader,
} from '@react-google-maps/api';

import googleMapsStaticData from '@/data/common.json';

import { GoogleMapsProps } from './types';
import { GoogleMapAdvancedMaker, GoogleMapInfoCard } from '@/components/ui';

const LIBRARIES: Libraries = ['marker'];

const GoogleMaps: React.FC<GoogleMapsProps> = ({ width, height }) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string;

  const { center, position, zoom } = googleMapsStaticData.googleMaps;

  const mapRef = useRef<google.maps.Map | undefined>(undefined);

  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries: LIBRARIES,
  });

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  const [infoPosition, setInfoPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  const toggleInfo = (markerPosition: google.maps.LatLngLiteral | null) => {
    setInfoPosition(markerPosition);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={position} onClick={() => toggleInfo(position)} />
      {/* <GoogleMapAdvancedMaker
        // position={position}
        latitude={position.lat}
        longitude={position.lng}
        // onClick={() => toggleInfo(position)}
      /> */}

      {/* {infoPosition !== null && ( */}
      {null && (
        <GoogleMapAdvancedMaker
          latitude={position.lat}
          longitude={position.lng}
          map={mapRef.current}
        />
      )}

      {infoPosition !== null && (
        <InfoWindow
          position={infoPosition}
          onCloseClick={() => toggleInfo(null)}
        >
          <GoogleMapInfoCard />
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <p>Loading . . .</p>
  );
};

const memoGoogleMaps = memo(GoogleMaps);

export { memoGoogleMaps as GoogleMaps };

// export const GoogleMaps = () => {
// const { isLoaded } = useJsApiLoader({
//   id: 'google-map-script',
//   googleMapsApiKey: 'YOUR_API_KEY',
// });

// const [map, setMap] = useState(null);

// const onLoad = useCallback(function callback(map) {
//   // This is just an example of getting and using the map instance!!! don't just blindly copy!
//   const bounds = new window.google.maps.LatLngBounds(center);
//   map.fitBounds(bounds);

//   setMap(map);
// }, []);

// const onUnmount = useCallback(function callback(map) {
//   setMap(null);
// }, []);

// return isLoaded ? (
//   <GoogleMap
//     mapContainerStyle={containerStyle}
//     center={center}
//     zoom={10}
//     onLoad={onLoad}
//     onUnmount={onUnmount}
//   >
//     {/* Child components, such as markers, info windows, etc. */}
//     <></>
//   </GoogleMap>
// ) : (
//   <></>
// );
// };

// import React, { useState } from 'react';

// import {
//   GoogleMap,
//   InfoWindow,
//   LoadScript,
//   Marker,
// } from '@react-google-maps/api';

// import googleMapsStaticDada from '@/data/common.json';

// import { GoogleMapsProps } from './types';
// import { GoogleMapInfoCard } from '@/components/ui';

// export const GoogleMaps: React.FC<GoogleMapsProps> = ({ width, height }) => {
//   const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string;

//   const { center, position, zoom } = googleMapsStaticDada.googleMaps;

//   const containerStyle = {
//     width: `${width}px`,
//     height: `${height}px`,
//   };

//   const [infoPosition, setInfoPosition] =
//     useState<google.maps.LatLngLiteral | null>(null);

//   const toggleInfo = (markerPosition: google.maps.LatLngLiteral | null) => {
//     setInfoPosition(markerPosition);
//   };

//   return (
//     <LoadScript googleMapsApiKey={API_KEY}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={zoom}
//         options={{
//           mapTypeControl: false,
//         }}
//       >
//         <Marker position={position} onClick={() => toggleInfo(position)} />
//         {infoPosition !== null && (
//           <InfoWindow
//             position={infoPosition}
//             onCloseClick={() => toggleInfo(null)}
//           >
//             <GoogleMapInfoCard />
//           </InfoWindow>
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };
