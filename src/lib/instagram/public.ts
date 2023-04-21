import type { RemoteInstagramPost } from './types.d';

interface OfficialResponse {
  graphql: {
    user: {
      edge_owner_to_timeline_media: {
        edges: Array<{
          node: {
            id: string;
            shortcode: string;
            dimensions: {
              height: number;
              width: number;
            };
            display_url: string;
            thumbnail_src?: string;
            accessibility_caption?: string;
            edge_media_to_caption: {
              edges: Array<{
                node: {
                  text: string;
                };
              }>;
            };
            edge_sidecar_to_children?: {
              edges: Array<{
                node: {
                  display_url: string;
                  accessibility_caption?: string;
                };
              }>;
            };
            location?: {
              name: string;
            };
          };
        }>;
      };
    };
  };
}

export const getPublicFeed = async (): Promise<Array<RemoteInstagramPost>> => {
  try {
    const offResponse = await fetch(
      'https://www.instagram.com/jahirfiquitiva/?__a=1&__d=1',
    );
    const responseContent = await offResponse.text();
    const { graphql } = JSON.parse(responseContent) as OfficialResponse;
    const posts = graphql.user.edge_owner_to_timeline_media.edges.slice(0, 6);
    return posts.map(({ node }) => {
      const postCaption = node.edge_media_to_caption.edges?.[0]?.node?.text;
      const firstChild = node.edge_sidecar_to_children?.edges?.[0];
      const a11yCaption =
        node.accessibility_caption || firstChild?.node.accessibility_caption;
      const photoUrl =
        node.display_url || firstChild?.node.display_url || node.thumbnail_src;
      const location = node.location?.name;
      const caption = a11yCaption || postCaption;
      return {
        id: node.id,
        photoUrl,
        postUrl: `https://www.instagram.com/p/${node.shortcode}`,
        caption: location ? `${caption} at ${location}` : caption,
      };
    });
  } catch (e) {
    return [];
  }
};
