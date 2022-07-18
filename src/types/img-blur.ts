interface ImageBlurData {
  key: number;
  width: number;
  height: number;
  base64: string;
  page?: string;
}

export type ImageBlurDataObject = Record<number, ImageBlurData>;
