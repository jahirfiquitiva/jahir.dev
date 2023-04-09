interface ImageBlurData {
  width: number;
  height: number;
  base64: string;
}

interface RandomImage {
  key: number;
  alt?: string;
}

export type RandomPageImage = RandomImage & ImageBlurData;

export type ImageBlurDataObject = Record<number, ImageBlurData>;
