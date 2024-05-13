export type AdvancedMarkerProps = Pick<
  google.maps.marker.AdvancedMarkerElement,
  'map'
> &
  Pick<GeolocationCoordinates, 'latitude' | 'longitude'>;
