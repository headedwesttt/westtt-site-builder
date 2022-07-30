// import { OAuthExtension } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';

const KEY = process.env.MAGIC_PUBLISHABLE_API_KEY;

const createMagic = (key: string): Magic => {
  //   return new Magic(key, {
  //     extensions: [new OAuthExtension()],
  //   });
  return new Magic(key);
};

export const magic = createMagic(KEY);
