import fetch from 'isomorphic-fetch';
const apiKey = process.env.WEBMASTER_API_KEY || '';

interface FaviconGrabberIcon {
  sizes?: string;
  src: string;
}

export const getWebsiteFavicon = async (website: string): Promise<string> => {
  try {
    const domain = website.replace(/(^\w+:|^)\/\//, '').replace(/\//g, '');
    const faviconGrabber = await fetch(
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

    const webmasterApi = await fetch(
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
