import React from 'react';
import { LinkProps } from 'next/link';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  styleType: 'primary' | 'secondary' | 'unstyled';
};

export type ButtonAsButton = BaseProps &
  (Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    tag?: 'button';
  });

export type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    tag: 'link';
  };

type ButtonAsExternal = BaseProps &
  Omit<ButtonAsLink, 'tag' | 'href'> & {
    tag: 'a';
  };

export type ButtonLinkProps = ButtonAsButton | ButtonAsLink | ButtonAsExternal;
