'use client';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import { VideoPlayerProps } from './types';

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className="h-[328px] w-full overflow-hidden rounded-[24px] md:size-[688px] xl:size-[588px] 2xl:size-[686px]">
      <ReactPlayer loop muted playing url={url} width="100%" height="100%" />
    </div>
  );
};
