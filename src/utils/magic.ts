import { OAuthExtension } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';

export const createMagic = () => {
  return new Magic('process.env.MAGIC_API_KEY!', {
    extensions: [new OAuthExtension()],
  });
};
