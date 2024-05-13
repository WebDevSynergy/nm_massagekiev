'use client';

import { useEffect, useState } from 'react';

import { AdvancedMarkerProps } from './types';

export const GoogleMapAdvancedMaker = ({
  map,
  latitude,
  longitude,
}: AdvancedMarkerProps) => {
  const [marker, setMarker] =
    useState<google.maps.marker.AdvancedMarkerElement>();

  useEffect(() => {
    if (marker === undefined && map !== undefined) {
      setMarker(
        new google.maps.marker.AdvancedMarkerElement({
          map,
          position: {
            lat: latitude,
            lng: longitude,
          },
        }),
      );
    }
  }, [latitude, longitude, map, marker]);

  return null;
};
