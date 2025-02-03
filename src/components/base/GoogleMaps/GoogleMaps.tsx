// 'use client';

// import { memo, useCallback, useRef, useState } from 'react';
// import {
//   GoogleMap,
//   InfoWindow,
//   Libraries,
//   useJsApiLoader,
// } from '@react-google-maps/api';

// import { GoogleMapInfoCard, GoogleMapStatus } from '@/components/ui';

// import googleMapsStaticData from '@/data/common.json';

// const LIBRARIES: Libraries = ['marker', 'places'];

// const GoogleMaps: React.FC = () => {
//   const API_KEY = process.env.GOOGLE_MAP_API_KEY as string;
//   const MAP_ID = process.env.MAP_ID as string;

//   const { title, center, position, zoom, errorLoadMap, loadingText } =
//     googleMapsStaticData.googleMaps;

//   const containerStyle = {
//     width: `100%`,
//     height: `100%`,
//   };

//   const [infoPosition, setInfoPosition] =
//     useState<google.maps.LatLngLiteral | null>(null);
//   const mapRef = useRef<google.maps.Map | undefined>(undefined);
//   const markerRef = useRef<
//     google.maps.marker.AdvancedMarkerElement | undefined
//   >(undefined);

//   const { isLoaded, loadError } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: API_KEY,
//     mapIds: [MAP_ID],
//     libraries: LIBRARIES,
//   });

//   const onLoad = useCallback(
//     (map: google.maps.Map) => {
//       mapRef.current = map;

//       markerRef.current = new google.maps.marker.AdvancedMarkerElement({
//         position,
//         map,
//         title,
//       });

//       markerRef.current.addListener('click', () => {
//         setInfoPosition(position);
//       });
//     },
//     [position, title],
//   );

//   const onUnmount = useCallback(() => {
//     if (markerRef.current) {
//       markerRef.current = undefined;
//     }
//     mapRef.current = undefined;
//   }, []);

//   const toggleInfo = (markerPosition: google.maps.LatLngLiteral | null) => {
//     setInfoPosition(markerPosition);
//   };

//   const handleClose = (): void => toggleInfo(null);

//   if (loadError) {
//     return (
//       <GoogleMapStatus
//         containerStyle={containerStyle}
//         config={{ ...errorLoadMap, type: 'error' }}
//       />
//     );
//   }

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={zoom}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//       options={{
//         mapTypeControl: false,
//         mapId: MAP_ID,
//       }}
//     >
//       {infoPosition !== null && (
//         <InfoWindow position={infoPosition} onCloseClick={handleClose}>
//           <GoogleMapInfoCard onClick={handleClose} />
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   ) : (
//     <GoogleMapStatus
//       containerStyle={containerStyle}
//       config={{ ...errorLoadMap, msg: loadingText, type: 'loading' }}
//     />
//   );
// };

// const memoGoogleMaps = memo(GoogleMaps);

// export { memoGoogleMaps as GoogleMaps };

'use client';

export const GoogleMaps: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.0031800253955!2d30.438057176560044!3d50.49689857160113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdf741c6c3b7%3A0xf3971e41267edd51!2snm-massagekiev!5e0!3m2!1sru!2sua!4v1738587287176!5m2!1sru!2sua"
      style={{ border: 0 }}
      className="size-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
