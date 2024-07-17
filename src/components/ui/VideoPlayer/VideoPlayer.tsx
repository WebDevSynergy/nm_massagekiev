'use client';

import { useEffect, useRef, useState } from 'react';

import { VideoPlayerProps } from './types';

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  useEffect(() => {
    if (isIntersecting) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isIntersecting]);

  return (
    <div
      className="h-auto w-full overflow-hidden rounded-[24px] md:size-[688px]
                 md:rounded-[32px] xl:size-[588px] 2xl:size-[686px] 2xl:rounded-[40px] sm480:max-h-[448px] sm480:max-w-full"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      >
        <source src={url.mp4} type="video/mp4" />
        <source src={url.mov} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
