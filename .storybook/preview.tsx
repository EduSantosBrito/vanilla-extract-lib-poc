import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
} from '@storybook/addon-docs/blocks';
import { DecoratorFn, Parameters } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import React from 'react';

const OriginalNextImage = NextImage.default;

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => {
    if (typeof props.src === 'string') {
      return <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />;
    } else {
      // don't need blurDataURL here since it is already defined on the StaticImport type
      return <OriginalNextImage {...props} unoptimized />;
    }
  },
});

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
    exclude: ['testId', 'className', 'children'],
    expanded: true,
  },
  layout: 'fullscreen',
  docs: {
    inlineStories: true,
    page: () => (
      <>
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories title="" includePrimary={false} />
      </>
    ),
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators: DecoratorFn[] = [Story => <Story />];
