export type GoogleMapStatusProps = {
  config: {
    type: 'error' | 'loading';
    msg: string;
    mapImageAlt: string;
    linkLabel: string;
    locationLink: string;
  };
  containerStyle: {
    width: string;
    height: string;
  };
};
