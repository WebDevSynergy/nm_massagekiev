import Link from 'next/link';

import { GoogleMapLoadErrorProps } from './types';

export const GoogleMapLoadError: React.FC<GoogleMapLoadErrorProps> = ({
  errorLoadMap: { msg, locationLink, locationLinkText },
  containerStyle,
}) => {
  return (
    <div style={containerStyle} className=" bg-slate-500">
      <p>{msg}</p>

      <Link href={locationLink}>{locationLinkText}</Link>
    </div>
  );
};
