'use server';

import { readFile } from 'fs/promises';
import path from 'path';

import sharp from 'sharp';

export interface BlurResult {
  width: number;
  height: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const PLACEHOLDER_SIZE = 10;
export const getBlurData = async (
  imageSrc?: string,
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

    const sharpInstance = await sharp(imgBuffer, {});
    const meta = await sharpInstance.metadata();
    const blur = await sharpInstance
      .resize(PLACEHOLDER_SIZE, PLACEHOLDER_SIZE, { fit: 'inside' })
      .toBuffer({ resolveWithObject: true });
    return {
      width:
        defaultWidth > 0
          ? Math.min(defaultWidth, meta.width || defaultWidth)
          : meta.width || defaultWidth,
      height:
        defaultHeight > 0
          ? Math.min(defaultHeight, meta.height || defaultHeight)
          : meta.height || defaultHeight,
      blurDataURL: `data:image/${blur.info.format};base64,${blur.data.toString('base64')}`,
      placeholder: 'blur',
    };
  } catch (e) {
    return null;
  }
};
