import { SectionHeading } from '~/components/atoms/complex';
import { Heading, CenteredSection } from '~/components/atoms/simple';
import useRequest from '~/hooks/useRequest';
import { Component, ComponentProps } from '~/types';

interface ReleaseData {
  success?: boolean;
  url?: string;
  download?: string;
}

export interface ReleaseProps extends ComponentProps {
  repo?: string;
}

export const Release: Component<ReleaseProps> = (props) => {
  const { repo } = props;
  const { data, loading } = useRequest<ReleaseData>(
    `/api/release-download?repo=${repo}`,
  );

  if (data && data.download) {
    window.location.href = data.download;
  }

  if (!repo || (!data && !loading)) return null;

  if (loading) {
    return (
      <CenteredSection>
        <SectionHeading size={'3'} emoji={'🤓'}>
          Loading…
        </SectionHeading>
      </CenteredSection>
    );
  }

  return (
    <CenteredSection>
      <Heading>{data?.success ? '🎉' : '😮'}</Heading>
      <Heading size={'3'}>
        {data?.success ? 'Download started!' : 'Oh no!'}
      </Heading>
      <br />
      <p>
        {data?.success
          ? 'Feel free to close this tab 😉'
          : 'Direct download is not available right now 😕'}
      </p>
      {data?.success ? (
        <></>
      ) : (
        <p>
          I will redirect you to&nbsp;
          <a
            title={'GitHub releases link'}
            aria-label={'GitHub releases link'}
            href={data?.download || '#'}
          >
            GitHub Releases
          </a>{' '}
          …
        </p>
      )}
    </CenteredSection>
  );
};
