export type GoogleMapLoadErrorProps = {
  errorLoadMap: {
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
