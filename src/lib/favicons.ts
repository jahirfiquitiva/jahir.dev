const apiKey = 'test-apiKey';

interface FaviconGrabberIcon {
  sizes?: string;
  src?: string;
  href?: string;
}

export const getWebsiteFavicon = async (website: string): Promise<string> => {
  const domain = website.replace(/(^\w+:|^)\/\//, '').replace(/\//g, '');
  try {
    const faviconGrabber = await fetch(
      `http://favicongrabber.com/api/grab/${domain}?pretty=true`,
    );

    if (faviconGrabber.status >= 200 && faviconGrabber.status < 300) {
      const faviconData = await faviconGrabber.json();
      if (!faviconData?.error) {
        const icons = faviconData?.icons || [];
        const ttPixelsIcons =
          icons.filter((it: FaviconGrabberIcon) => {
            return (
              !(it?.src || '')?.includes('data:image') &&
              ((it?.sizes || '')?.includes('32') ||
                (it?.src || '')?.includes('32'))
            );
          }) || [];
        const icon = (
          ttPixelsIcons.length > 0 ? ttPixelsIcons : icons
        )?.shift();
        if (icon) return icon?.src || '';
      }
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
      const defaultIcon = webmasterApiJson?.results?.default;
      const icons = webmasterApiJson?.results?.list || [];
      const ttPixelsIcons =
        icons.filter((it: FaviconGrabberIcon) => {
          return (
            !(it?.href || '')?.includes('data:image') &&
            ((it?.sizes || '')?.includes('32') ||
              (it?.href || '')?.includes('32'))
          );
        }) || [];
      const icon = (ttPixelsIcons.length > 0 ? ttPixelsIcons : icons)?.shift();
      return icon?.src || defaultIcon;
    }
    return `https://www.google.com/s2/favicons?domain=${domain}`;
  } catch (e) {
    return `https://www.google.com/s2/favicons?domain=${domain}`;
  }
};
