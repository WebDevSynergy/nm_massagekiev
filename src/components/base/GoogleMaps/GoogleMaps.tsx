import React, { useState } from 'react';

import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

import googleMapsStaticDada from '@/data/common.json';

import { GoogleMapsProps } from './types';
import { GoogleMapInfoCard } from '@/components/ui';

export const GoogleMaps: React.FC<GoogleMapsProps> = ({ width, height }) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string;

  const { center, position, zoom } = googleMapsStaticDada.googleMaps;

  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const [infoPosition, setInfoPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  const toggleInfo = (markerPosition: google.maps.LatLngLiteral | null) => {
    setInfoPosition(markerPosition);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={{
          mapTypeControl: false,
        }}
      >
        <Marker position={position} onClick={() => toggleInfo(position)} />
        {infoPosition !== null && (
          <InfoWindow
            position={infoPosition}
            onCloseClick={() => toggleInfo(null)}
          >
            <GoogleMapInfoCard />
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
