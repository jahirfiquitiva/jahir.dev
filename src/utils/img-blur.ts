'use server';
// Code based on https://github.com/nikolovlazar/nikolovlazar.com/blob/main/src/utils/plugins/image-metadata.ts
import { readFile } from 'node:fs/promises';
import path from 'path';

import { getPlaiceholder } from 'plaiceholder';

interface BlurResult {
  width: number;
  height: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export const getBlurData = async (
  imageSrc?: string,
  placeholderSize: number = 10,
  defaultWidth: number = 0,
  defaultHeight: number = 0,
): Promise<BlurResult | null> => {
  if (!imageSrc) return null;
  const isExternal = imageSrc.startsWith('http');

  try {
    let imgBuffer: Buffer | undefined = undefined;
    if (!isExternal) {
      const filePath = path.join(process.cwd(), 'public', imageSrc);
      imgBuffer = await readFile(filePath);
    } else {
      const imageRes = await fetch(imageSrc);
      const arrayBuffer = await imageRes.arrayBuffer();
      imgBuffer = Buffer.from(arrayBuffer);
    }

    const blur = await getPlaiceholder(imgBuffer, { size: placeholderSize });
    return {
      width:
        defaultWidth > 0
          ? Math.min(defaultWidth, blur.metadata.width)
          : blur.metadata.width || defaultWidth,
      height:
        defaultHeight > 0
          ? Math.min(defaultHeight, blur.metadata.height)
          : blur.metadata.height || defaultHeight,
      blurDataURL: blur.base64,
      placeholder: 'blur',
    };
  } catch (e) {
    return null;
  }
};
