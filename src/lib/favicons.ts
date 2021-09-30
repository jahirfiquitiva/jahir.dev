import fetch from 'isomorphic-fetch';
const apiKey = process.env.WEBMASTER_API_KEY || '';

interface FaviconGrabberIcon {
  sizes?: string;
  src: string;
}

const timeoutFetch = async (
  input: RequestInfo,
  init?: RequestInit | undefined,
): Promise<Response> => {
  const response = await Promise.race([
    fetch(input, init),
    // eslint-disable-next-line promise/param-names
    new Promise((_resolve, reject) => {
      setTimeout(() => reject(new Error('request timeout')), 10000);
    }),
  ]);
  return response as Response;
};

export const getWebsiteFavicon = async (website: string): Promise<string> => {
  try {
    const domain = website.replace(/(^\w+:|^)\/\//, '').replace(/\//g, '');
    const faviconGrabber = await timeoutFetch(
      `https://favicongrabber.com/api/grab/${domain}?pretty=true`,
    );

    if (faviconGrabber.status >= 200 && faviconGrabber.status < 300) {
      const faviconData = await faviconGrabber.json();
      const icons = faviconData?.icons || [];
      const ttPixelsIcons =
        icons.filter((it: FaviconGrabberIcon) => {
          return (
            !(it?.src || '')?.startsWith('data') ||
            (it?.sizes || '')?.includes('32') ||
            (it?.src || '')?.includes('32')
          );
        }) || [];
      const icon = (ttPixelsIcons.length > 0 ? ttPixelsIcons : icons)?.shift();
      return icon?.src || '';
    }

    const webmasterApi = await timeoutFetch(
      'https://api.webmasterapi.com/v1/favicon',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey,
          url: domain,
        }),
      },
    );

    if (webmasterApi.status >= 200 && webmasterApi.status < 300) {
      const webmasterApiJson = await webmasterApi.json();
      return webmasterApiJson?.results?.default ?? '';
    }
    return '';
  } catch (e) {
    return '';
  }
};
