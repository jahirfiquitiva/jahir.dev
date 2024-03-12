import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getImageMetadata } from 'velite';
const __dirname = dirname(fileURLToPath(import.meta.url));

interface BlurResult {
  width: number;
  height: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

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
      const filePath = resolve(__dirname, `../public/${imageSrc}`);
      imgBuffer = await readFile(filePath);
    } else {
      const imageRes = await fetch(imageSrc);
      const arrayBuffer = await imageRes.arrayBuffer();
      imgBuffer = Buffer.from(arrayBuffer);
    }

    const meta = await getImageMetadata(imgBuffer);
    return {
      width:
        defaultWidth > 0
          ? Math.min(defaultWidth, meta?.width || defaultWidth)
          : meta?.width || defaultWidth,
      height:
        defaultHeight > 0
          ? Math.min(defaultHeight, meta?.height || defaultHeight)
          : meta?.height || defaultHeight,
      blurDataURL: meta?.blurDataURL,
      placeholder: meta?.blurDataURL ? 'blur' : 'empty',
    };
  } catch (e) {
    return null;
  }
};
