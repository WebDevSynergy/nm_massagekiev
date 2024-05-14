'use client';

import { memo, useCallback, useRef, useState } from 'react';
import {
  GoogleMap,
  InfoWindow,
  Libraries,
  useJsApiLoader,
} from '@react-google-maps/api';

import { GoogleMapInfoCard, GoogleMapLoadError } from '@/components/ui';
import googleMapsStaticData from '@/data/common.json';
import { GoogleMapsProps } from './types';

const LIBRARIES: Libraries = ['marker'];

const GoogleMaps: React.FC<GoogleMapsProps> = ({ width, height }) => {
  const API_KEY = process.env.GOOGLE_MAP_API_KEY as string;
  const MAP_ID = process.env.MAP_ID as string;

  const { center, position, zoom, errorLoadMap } =
    googleMapsStaticData.googleMaps;

  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const [infoPosition, setInfoPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const mapRef = useRef<google.maps.Map | undefined>(undefined);
  const markerRef = useRef<
    google.maps.marker.AdvancedMarkerElement | undefined
  >(undefined);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    mapIds: [MAP_ID],
    libraries: LIBRARIES,
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;

      // Create the AdvancedMarkerElement
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        position,
        map,
        title: 'Hello World!',
      });

      markerRef.current.addListener('click', () => {
        setInfoPosition(position);
      });
    },
    [position],
  );

  const onUnmount = useCallback(() => {
    if (markerRef.current) {
      markerRef.current = undefined;
    }
    mapRef.current = undefined;
  }, []);

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
      options={{
        mapTypeControl: false,
        mapId: MAP_ID,
      }}
    >
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
    <GoogleMapLoadError
      containerStyle={containerStyle}
      errorLoadMap={errorLoadMap}
    />
  );
};

const memoGoogleMaps = memo(GoogleMaps);

export { memoGoogleMaps as GoogleMaps };

// 'use client';

// import { memo, useCallback, useRef, useState } from 'react';
// import {
//   GoogleMap,
//   InfoWindow,
//   Libraries,
//   Marker,
//   useJsApiLoader,
// } from '@react-google-maps/api';

// import { GoogleMapInfoCard, GoogleMapLoadError } from '@/components/ui';

// import googleMapsStaticData from '@/data/common.json';

// import { GoogleMapsProps } from './types';

// const LIBRARIES: Libraries = ['marker'];

// const GoogleMaps: React.FC<GoogleMapsProps> = ({ width, height }) => {
//   const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string;

//   const { center, position, zoom, errorLoadMap } =
//     googleMapsStaticData.googleMaps;

//   const containerStyle = {
//     width: `${width}px`,
//     height: `${height}px`,
//   };

//   const [infoPosition, setInfoPosition] =
//     useState<google.maps.LatLngLiteral | null>(null);

//   const mapRef = useRef<google.maps.Map | undefined>(undefined);

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: API_KEY,
//     libraries: LIBRARIES,
//   });

//   const onLoad = useCallback(function callback(map: google.maps.Map) {
//     mapRef.current = map;
//   }, []);

//   const onUnmount = useCallback(function callback() {
//     mapRef.current = undefined;
//   }, []);

//   const toggleInfo = (markerPosition: google.maps.LatLngLiteral | null) => {
//     setInfoPosition(markerPosition);
//   };

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={zoom}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//       options={{
//         mapTypeControl: false,
//       }}
//     >
//       <Marker position={position} onClick={() => toggleInfo(position)} />

//       {infoPosition !== null && (
//         <InfoWindow
//           position={infoPosition}
//           onCloseClick={() => toggleInfo(null)}
//         >
//           <GoogleMapInfoCard />
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   ) : (
//     <GoogleMapLoadError
//       containerStyle={containerStyle}
//       errorLoadMap={errorLoadMap}
//     />
//   );
// };

// const memoGoogleMaps = memo(GoogleMaps);

// export { memoGoogleMaps as GoogleMaps };
