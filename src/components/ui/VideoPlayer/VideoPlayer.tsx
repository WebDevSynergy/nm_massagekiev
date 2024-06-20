'use client';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import { VideoPlayerProps } from './types';

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div
      className="relative size-[448px] overflow-hidden rounded-[24px] md:size-[688px] md:rounded-[32px] 
      xl:size-[588px] 2xl:size-[686px] 2xl:rounded-[40px] sm480:max-h-[448px] sm480:max-w-full"
    >
      <ReactPlayer
        loop
        muted
        playing
        url={url}
        controls={false}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              controls: 0,
              modestbranding: 1,
              fs: 0,
              iv_load_policy: 3,
              disablekb: 1,
              rel: 0,
              autoplay: 1,
              mute: 1,
            },
          },
        }}
        width="100%"
        height="100%"
        className="pointer-events-none absolute left-0 top-0 -z-10 "
      />
    </div>
  );
};
